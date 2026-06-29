import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { DebtCountry } from "../data/countries";
import {
  estimatePersistedCountryDebtUsd,
  getDebtPerSecondUsd,
} from "../lib/debt";
import {
  estimateSecondTickerUsd,
  formatCurrencyTrillions,
  formatDebtCompactZh,
  formatPercent,
} from "../lib/format";

const STORAGE_PREFIX = "global-debt-globe:live-debt:";

export function GlobeDebtCard({
  country,
  onClose,
  onOpenDetail,
}: {
  country: DebtCountry;
  onClose: () => void;
  onOpenDetail: () => void;
}) {
  const perSecond = useMemo(() => getDebtPerSecondUsd(country), [country]);
  const [liveDebtUsd, setLiveDebtUsd] = useState(() => country.debtTrillionsUsd * 1_000_000_000_000);
  const [secondTickerUsd, setSecondTickerUsd] = useState(() => estimateSecondTickerUsd(perSecond));

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
      setSecondTickerUsd(estimateSecondTickerUsd(perSecond));

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
  }, [country, perSecond]);

  const liveDebtTrillions = liveDebtUsd / 1_000_000_000_000;

  return (
    <aside className="globe-debt-card" aria-live="polite">
      <button className="globe-debt-card__close" onClick={onClose} type="button" title="关闭">
        <X size={16} />
      </button>

      <div className="globe-debt-card__heading">
        <span className="globe-debt-card__flag">{country.flag}</span>
        <div>
          <p>#{country.rank} · {country.englishName}</p>
          <h2>{country.name}</h2>
        </div>
      </div>

      <div className="globe-debt-card__ticker">
        <span>估算当前政府负债</span>
        <em>
          <i />
          +{Math.round(secondTickerUsd).toLocaleString("en-US")} 美元
        </em>
        <strong>{formatDebtCompactZh(liveDebtTrillions)}</strong>
      </div>

      <div className="globe-debt-card__metrics">
        <div>
          <span>GDP</span>
          <strong>{formatCurrencyTrillions(country.gdpTrillionsUsd)}</strong>
        </div>
        <div>
          <span>债务/GDP</span>
          <strong>{formatPercent(country.debtToGdpPercent)}</strong>
        </div>
      </div>

      <button className="globe-debt-card__detail" onClick={onOpenDetail} type="button">
        债务构成
        <ArrowUpRight size={16} />
      </button>
    </aside>
  );
}
