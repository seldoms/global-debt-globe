import { generatedCountries } from "./generated/countries.generated";

export type DebtCompositionItem = {
  label: string;
  share: number;
  amountTrillionsUsd: number;
  note: string;
};

export type LiveDebtSource = {
  provider: string;
  url: string;
  sourceLabel: string;
  baseDebtUsd: number;
  perSecondUsd: number;
  snapshotDate: string;
};

export type DebtCountry = {
  rank: number;
  name: string;
  englishName: string;
  iso2: string;
  flag: string;
  latitude: number;
  longitude: number;
  gdpTrillionsUsd: number;
  debtTrillionsUsd: number;
  debtToGdpPercent: number;
  yearlyDebtDeltaTrillionsUsd: number;
  populationMillions: number;
  debtPerCapitaUsd: number;
  fiscalBalancePercentGdp: number;
  snapshotDate: string;
  sourceYear: string;
  sourceNote: string;
  liveSource?: LiveDebtSource;
  composition: DebtCompositionItem[];
};

export const DEFAULT_VISIBLE_COUNTRY_COUNT = 80;

export const countries: DebtCountry[] = generatedCountries;

export const dataSources = [
  "IMF WEO DataMapper 2025: nominal GDP, general-government gross debt/GDP, fiscal balance, and population where available.",
  "world-countries metadata: ISO codes, flags, and map coordinates for globe placement; Kosovo is manually patched because IMF uses UVK.",
  "USA Debt Clock: United States National Debt page-script baseline and per-second increment, labeled on the page as sourced from US Treasury.",
  "UNCTAD World of Debt is used as a scope reference for broad country coverage; debt composition is normalized for visual comparison because official classifications differ by country.",
];
