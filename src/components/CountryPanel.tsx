import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Info,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { DebtCountry } from "../data/countries";
import {
  estimatePersistedCountryDebtUsd,
  getDebtPerSecondUsd,
  getSourceLine,
} from "../lib/debt";
import {
  formatCurrencyTrillions,
  formatDebtTrillions,
  formatDebtPerSecond,
  formatPercent,
} from "../lib/format";

const STORAGE_PREFIX = "global-debt-globe:live-debt:";

export function CountryPanel({
  country,
  onOpenDetail,
}: {
  country: DebtCountry;
  onOpenDetail: () => void;
}) {
  const perSecond = useMemo(() => getDebtPerSecondUsd(country), [country]);
  const [liveDebtUsd, setLiveDebtUsd] = useState(() => country.debtTrillionsUsd * 1_000_000_000_000);
  const [showSource, setShowSource] = useState(false);

  useEffect(() => {
    const storageKey = `${STORAGE_PREFIX}${country.iso2}`;

    const updateLiveDebt = () => {
      let persistedDebtUsd: number | undefined;
      let persistedAt: string | undefined;

      try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw) as { debtUsd?: number; at?: string };
          persistedDebtUsd = parsed.debtUsd;
          persistedAt = parsed.at;
        }
      } catch {
        // Ignore storage parse failures.
      }

      const nextDebtUsd = estimatePersistedCountryDebtUsd({
        country,
        persistedDebtUsd,
        persistedAt,
      });

      setLiveDebtUsd(nextDebtUsd);

      try {
        window.localStorage.setItem(
          storageKey,
          JSON.stringify({
            debtUsd: nextDebtUsd,
            at: new Date().toISOString(),
          }),
        );
      } catch {
        // Ignore quota/private mode failures.
      }
    };

    updateLiveDebt();
    const timer = window.setInterval(updateLiveDebt, 80);
    return () => window.clearInterval(timer);
  }, [country]);

  const liveDebt = liveDebtUsd / 1_000_000_000_000;

  return (
    <aside className={`country-panel ${showSource ? "country-panel--expanded" : ""}`} aria-live="polite">
      <button
        className="panel-toggle"
        onClick={() => setShowSource((value) => !value)}
        type="button"
        title={showSource ? "收起说明" : "展开说明"}
      >
        {showSource ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
      </button>

      <div className="country-panel__main">
        <div className="country-panel__heading">
          <div className="flag-orb">{country.flag}</div>
          <div>
            <p>#{country.rank} · {country.englishName}</p>
            <h2>{country.name}</h2>
          </div>
        </div>

        <div className="live-debt live-debt--compact">
          <span>估算当前政府负债</span>
          <div className="live-debt__headline">
            <strong className="rolling-debt" aria-label={formatCurrencyTrillions(liveDebt)}>
              {formatDebtTrillions(liveDebt)}
            </strong>
            <em className="live-debt__delta">
              <i />
              +{formatDebtPerSecond(perSecond)}
            </em>
          </div>
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
      </div>

      <div className={`country-panel__source ${showSource ? "is-open" : ""}`}>
        <div className="country-panel__source-header">
          <Info size={16} />
          <span>口径说明</span>
        </div>
        <p className="source-line">
          {getSourceLine(country)}
        </p>
      </div>
    </aside>
  );
}
