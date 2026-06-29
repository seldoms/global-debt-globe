import type { DebtCountry } from "../data/countries";
import {
  estimateLiveDebtFromUsdSource,
  estimatePersistedLiveDebtUsd,
  perSecondToYearlyDeltaTrillions,
  yearlyDeltaToPerSecond,
} from "./format";

export function getDebtPerSecondUsd(country: DebtCountry): number {
  return country.liveSource?.perSecondUsd ?? yearlyDeltaToPerSecond(country.yearlyDebtDeltaTrillionsUsd);
}

export function getBaselineDebtUsd(country: DebtCountry, now = new Date()): number {
  if (country.liveSource) {
    return estimateLiveDebtFromUsdSource({
      baseDebtUsd: country.liveSource.baseDebtUsd,
      perSecondUsd: country.liveSource.perSecondUsd,
      snapshotDate: country.liveSource.snapshotDate,
      now,
    });
  }

  return estimateLiveDebtFromUsdSource({
    baseDebtUsd: country.debtTrillionsUsd * 1_000_000_000_000,
    perSecondUsd: yearlyDeltaToPerSecond(country.yearlyDebtDeltaTrillionsUsd),
    snapshotDate: country.snapshotDate,
    now,
  });
}

export function getDisplayDebtTrillions(country: DebtCountry, now = new Date()): number {
  return getBaselineDebtUsd(country, now) / 1_000_000_000_000;
}

export function estimatePersistedCountryDebtUsd({
  country,
  persistedDebtUsd,
  persistedAt,
  now = new Date(),
}: {
  country: DebtCountry;
  persistedDebtUsd?: number;
  persistedAt?: string;
  now?: Date;
}): number {
  if (country.liveSource) {
    return estimatePersistedLiveDebtUsd({
      baseDebtTrillionsUsd: country.liveSource.baseDebtUsd / 1_000_000_000_000,
      yearlyDeltaTrillionsUsd: perSecondToYearlyDeltaTrillions(country.liveSource.perSecondUsd),
      snapshotDate: country.liveSource.snapshotDate,
      persistedDebtUsd,
      persistedAt,
      now,
    });
  }

  return estimatePersistedLiveDebtUsd({
    baseDebtTrillionsUsd: country.debtTrillionsUsd,
    yearlyDeltaTrillionsUsd: country.yearlyDebtDeltaTrillionsUsd,
    snapshotDate: country.snapshotDate,
    persistedDebtUsd,
    persistedAt,
    now,
  });
}

export function getSourceLine(country: DebtCountry): string {
  const sourceDate = new Date(country.liveSource?.snapshotDate ?? country.snapshotDate)
    .toISOString()
    .slice(0, 10);

  if (country.liveSource) {
    return `${country.liveSource.provider} · 基准时间 ${sourceDate} · ${country.liveSource.sourceLabel} · ${country.sourceNote}`;
  }

  return `${country.sourceYear} · 基准时间 ${sourceDate} · ${country.sourceNote}`;
}
