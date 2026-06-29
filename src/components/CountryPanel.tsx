import { ArrowUpRight, BadgeDollarSign } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { DebtCountry } from "../data/countries";
import {
  estimateLiveDebtUsd,
  formatCurrencyTrillions,
  formatDebtTrillions,
  formatDebtPerSecond,
  formatLiabilityUsd,
  formatPercent,
  yearlyDeltaToPerSecond,
} from "../lib/format";

export function CountryPanel({
  country,
  onOpenDetail,
}: {
  country: DebtCountry;
  onOpenDetail: () => void;
}) {
  const perSecond = useMemo(
    () => yearlyDeltaToPerSecond(country.yearlyDebtDeltaTrillionsUsd),
    [country.yearlyDebtDeltaTrillionsUsd],
  );
  const [liveDebtUsd, setLiveDebtUsd] = useState(() =>
    estimateLiveDebtUsd({
      baseDebtTrillionsUsd: country.debtTrillionsUsd,
      yearlyDeltaTrillionsUsd: country.yearlyDebtDeltaTrillionsUsd,
      snapshotDate: country.snapshotDate,
    }),
  );

  useEffect(() => {
    const updateLiveDebt = () => {
      setLiveDebtUsd(
        estimateLiveDebtUsd({
          baseDebtTrillionsUsd: country.debtTrillionsUsd,
          yearlyDeltaTrillionsUsd: country.yearlyDebtDeltaTrillionsUsd,
          snapshotDate: country.snapshotDate,
        }),
      );
    };

    updateLiveDebt();
    const timer = window.setInterval(() => {
      updateLiveDebt();
    }, 80);

    return () => window.clearInterval(timer);
  }, [country.debtTrillionsUsd, country.iso2, country.snapshotDate, country.yearlyDebtDeltaTrillionsUsd]);

  const liveDebt = liveDebtUsd / 1_000_000_000_000;

  return (
    <aside className="country-panel" aria-live="polite">
      <div className="country-panel__heading">
        <div className="flag-orb">{country.flag}</div>
        <div>
          <p>#{country.rank} · {country.englishName}</p>
          <h2>{country.name}</h2>
        </div>
      </div>

      <div className="live-debt">
        <span>估算当前政府负债</span>
        <strong className="rolling-debt" aria-label={formatCurrencyTrillions(liveDebt)}>
          {formatLiabilityUsd(liveDebtUsd)}
        </strong>
        <em>
          <i />
          负债正以 {formatDebtPerSecond(perSecond)} 滚动估算 · {formatDebtTrillions(liveDebt)}
        </em>
      </div>

      <div className="metric-grid">
        <div>
          <span>GDP</span>
          <strong>{formatCurrencyTrillions(country.gdpTrillionsUsd)}</strong>
        </div>
        <div>
          <span>债务/GDP</span>
          <strong>{formatPercent(country.debtToGdpPercent)}</strong>
        </div>
        <div>
          <span>每秒负债增加</span>
          <strong>-{formatDebtPerSecond(perSecond)}</strong>
        </div>
        <div>
          <span>人均债务</span>
          <strong>{country.debtPerCapitaUsd.toLocaleString("en-US")} 美元</strong>
        </div>
      </div>

      <button className="primary-action" onClick={onOpenDetail} type="button">
        <BadgeDollarSign size={18} />
        展开债务构成
        <ArrowUpRight size={17} />
      </button>

      <p className="source-line">
        {country.sourceYear} · 基准时间 {new Date(country.snapshotDate).toISOString().slice(0, 10)} · {country.sourceNote}
      </p>
    </aside>
  );
}
