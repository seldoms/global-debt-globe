import fs from 'node:fs/promises';

const IMF = 'https://www.imf.org/external/datamapper/api/v1';
const WORLD_COUNTRIES = 'https://cdn.jsdelivr.net/npm/world-countries@5.0.0/countries.json';
const YEAR = '2025';
const SECONDS_PER_YEAR = 365 * 24 * 60 * 60;

function round(value, digits = 2) {
  return Number(value.toFixed(digits));
}

function composition(debt, primary, regional, social, other) {
  return [
    { label: '中央/联邦政府债', share: primary, amountTrillionsUsd: round((debt * primary) / 100), note: '按可比展示口径估算，非所有国家均披露完全一致分类。' },
    { label: '地方/州/公共机构债', share: regional, amountTrillionsUsd: round((debt * regional) / 100), note: '联邦制国家占比通常更高，单一制国家多并入一般政府。' },
    { label: '社保/公共基金相关', share: social, amountTrillionsUsd: round((debt * social) / 100), note: '用于视觉拆分，跨国不可直接等同会计科目。' },
    { label: '其他显性政府负债', share: other, amountTrillionsUsd: round((debt * other) / 100), note: '包括口径差异、公共实体与统计调整项。' },
  ];
}

function slugIsoName(label) {
  return label
    .replace(/, People's Republic of$/, '')
    .replace(/, Republic of$/, '')
    .replace(/, Islamic Republic of$/, '')
    .replace(/, The$/, '')
    .replace(/, Dem\. Rep\. of the$/, '')
    .replace(/, Republic of the$/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const chineseNames = {
  USA: '美国', CHN: '中国', DEU: '德国', JPN: '日本', IND: '印度', GBR: '英国', FRA: '法国', ITA: '意大利', CAN: '加拿大', BRA: '巴西', RUS: '俄罗斯', KOR: '韩国', AUS: '澳大利亚', MEX: '墨西哥', ESP: '西班牙', IDN: '印度尼西亚', NLD: '荷兰', TUR: '土耳其', SAU: '沙特阿拉伯', CHE: '瑞士', POL: '波兰', TWN: '中国台湾', BEL: '比利时', SWE: '瑞典', ARG: '阿根廷', IRL: '爱尔兰', ARE: '阿联酋', SGP: '新加坡', THA: '泰国', ISR: '以色列',
};

const coordinateOverrides = {
  USA: [38.9, -77], CHN: [39.9, 116.4], JPN: [35.7, 139.7], IND: [28.6, 77.2], GBR: [51.5, -0.1], FRA: [48.9, 2.4], DEU: [52.5, 13.4], ITA: [41.9, 12.5], CAN: [45.4, -75.7], BRA: [-15.8, -47.9], RUS: [55.8, 37.6], KOR: [37.6, 127], AUS: [-35.3, 149.1], MEX: [19.4, -99.1], ESP: [40.4, -3.7], IDN: [-6.2, 106.8], NLD: [52.4, 4.9], TUR: [39.9, 32.9], SAU: [24.7, 46.7], CHE: [46.9, 7.4], TWN: [25, 121.6], SGP: [1.3, 103.8],
};

const metadataOverrides = {
  UVK: {
    cca2: 'XK',
    name: { common: 'Kosovo' },
    translations: { zho: { common: '科索沃' } },
    flag: '🇽🇰',
    latlng: [42.6, 20.9],
    population: 1_586_000,
  },
};

function compositionProfile(iso3, debtToGdp) {
  if (['USA', 'CAN', 'AUS', 'CHE', 'DEU', 'BEL'].includes(iso3)) return [58, 24, 8, 10];
  if (['CHN', 'BRA', 'IND', 'ESP', 'MEX'].includes(iso3)) return [55, 27, 5, 13];
  if (debtToGdp >= 120) return [76, 8, 8, 8];
  if (debtToGdp <= 35) return [74, 8, 3, 15];
  return [68, 14, 7, 11];
}

function liveSourceForUs() {
  return {
    provider: 'USA Debt Clock',
    url: 'https://www.usadebtclock.com/',
    sourceLabel: 'United States National Debt, page title labels source as US Treasury',
    baseDebtUsd: 39_311_022_730_162.44,
    perSecondUsd: 51_767.44,
    snapshotDate: '2026-06-25T00:00:00Z',
  };
}

const [countriesRes, gdpRes, debtRes, balanceRes, popRes, metaRes] = await Promise.all([
  fetch(`${IMF}/countries`),
  fetch(`${IMF}/NGDPD`),
  fetch(`${IMF}/GGXWDG_NGDP`),
  fetch(`${IMF}/GGXCNL_NGDP`),
  fetch(`${IMF}/LP`),
  fetch(WORLD_COUNTRIES),
]);

if (![countriesRes, gdpRes, debtRes, balanceRes, popRes, metaRes].every((res) => res.ok)) {
  throw new Error('Failed to fetch one or more source datasets');
}

const [countries, gdp, debt, balance, population, worldCountries] = await Promise.all([
  countriesRes.json(), gdpRes.json(), debtRes.json(), balanceRes.json(), popRes.json(), metaRes.json(),
]);

const worldMap = new Map(worldCountries.map((country) => [country.cca3, country]));
const gdpValues = gdp.values.NGDPD;
const debtValues = debt.values.GGXWDG_NGDP;
const balanceValues = balance.values.GGXCNL_NGDP;
const populationValues = population.values.LP;

const rows = Object.entries(countries.countries)
  .map(([iso3, info]) => {
    const gdpBillions = gdpValues?.[iso3]?.[YEAR];
    const debtToGdp = debtValues?.[iso3]?.[YEAR];
    const fiscalBalance = balanceValues?.[iso3]?.[YEAR];
    const meta = worldMap.get(iso3) ?? metadataOverrides[iso3];
    const populationMillions = populationValues?.[iso3]?.[YEAR] ?? (meta?.population ? meta.population / 1_000_000 : undefined);
    const coords = coordinateOverrides[iso3] ?? meta?.latlng;

    if (!gdpBillions || !debtToGdp || !meta?.cca2 || !coords?.length) return null;

    const gdpTrillionsUsd = gdpBillions / 1000;
    const calculatedDebt = (gdpBillions * debtToGdp) / 100 / 1000;
    const liveSource = iso3 === 'USA' ? liveSourceForUs() : undefined;
    const debtTrillionsUsd = liveSource ? liveSource.baseDebtUsd / 1_000_000_000_000 : calculatedDebt;
    const yearlyDeltaTrillionsUsd = liveSource
      ? (liveSource.perSecondUsd * SECONDS_PER_YEAR) / 1_000_000_000_000
      : Math.max(0.001, debtTrillionsUsd * Math.max(0.006, Math.abs(fiscalBalance ?? 2) / 220));
    const [primary, regional, social, other] = compositionProfile(iso3, debtToGdp);

    return {
      rank: 0,
      name: chineseNames[iso3] ?? meta.translations?.zho?.common ?? meta.name.common,
      englishName: slugIsoName(info.label),
      iso2: meta.cca2,
      flag: meta.flag ?? '',
      latitude: round(coords[0], 4),
      longitude: round(coords[1], 4),
      gdpTrillionsUsd: round(gdpTrillionsUsd, 6),
      debtTrillionsUsd: round(debtTrillionsUsd, 6),
      debtToGdpPercent: round(liveSource ? (debtTrillionsUsd / gdpTrillionsUsd) * 100 : debtToGdp, 1),
      yearlyDebtDeltaTrillionsUsd: round(yearlyDeltaTrillionsUsd, 4),
      populationMillions: round(populationMillions ?? 0, 3),
      debtPerCapitaUsd: populationMillions ? Math.round((debtTrillionsUsd * 1_000_000) / populationMillions) : 0,
      fiscalBalancePercentGdp: round(fiscalBalance ?? 0, 1),
      snapshotDate: liveSource ? liveSource.snapshotDate : `${YEAR}-12-31T23:59:59Z`,
      sourceYear: liveSource ? 'USA Debt Clock page script + 2025 IMF WEO GDP context' : '2025 IMF WEO DataMapper snapshot',
      sourceNote: liveSource
        ? 'US debt uses the USA Debt Clock page-script baseline labeled as US Treasury source; GDP remains the nominal current-dollar IMF context used for cross-country comparison.'
        : 'GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.',
      ...(liveSource ? { liveSource } : {}),
      composition: composition(round(debtTrillionsUsd, 3), primary, regional, social, other),
    };
  })
  .filter(Boolean)
  .filter((country) => country.debtTrillionsUsd > 0 && country.gdpTrillionsUsd > 0)
  .sort((a, b) => b.gdpTrillionsUsd - a.gdpTrillionsUsd)
  .map((country, index) => ({ ...country, rank: index + 1 }));

const output = `import type { DebtCountry } from '../countries';\n\nexport const generatedCountries: DebtCountry[] = ${JSON.stringify(rows, null, 2)};\n`;
await fs.writeFile('src/data/generated/countries.generated.ts', output);
console.log(`Generated ${rows.length} countries`);
