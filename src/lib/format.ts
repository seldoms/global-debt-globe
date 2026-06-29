const SECONDS_PER_YEAR = 365 * 24 * 60 * 60;

export function yearlyDeltaToPerSecond(deltaTrillionsUsd: number): number {
  return Math.round((deltaTrillionsUsd * 1_000_000_000_000) / SECONDS_PER_YEAR);
}

export function estimateLiveDebtUsd({
  baseDebtTrillionsUsd,
  yearlyDeltaTrillionsUsd,
  snapshotDate,
  now = new Date(),
}: {
  baseDebtTrillionsUsd: number;
  yearlyDeltaTrillionsUsd: number;
  snapshotDate: string;
  now?: Date;
}): number {
  const elapsedSeconds = Math.max(
    0,
    (now.getTime() - new Date(snapshotDate).getTime()) / 1000,
  );

  return Math.round(
    baseDebtTrillionsUsd * 1_000_000_000_000 +
    elapsedSeconds * yearlyDeltaToPerSecond(yearlyDeltaTrillionsUsd),
  );
}

export function estimatePersistedLiveDebtUsd({
  baseDebtTrillionsUsd,
  yearlyDeltaTrillionsUsd,
  snapshotDate,
  persistedDebtUsd,
  persistedAt,
  now = new Date(),
}: {
  baseDebtTrillionsUsd: number;
  yearlyDeltaTrillionsUsd: number;
  snapshotDate: string;
  persistedDebtUsd?: number;
  persistedAt?: string;
  now?: Date;
}): number {
  const baseline = estimateLiveDebtUsd({
    baseDebtTrillionsUsd,
    yearlyDeltaTrillionsUsd,
    snapshotDate,
    now,
  });

  if (!persistedDebtUsd || !persistedAt) {
    return baseline;
  }

  const persistedElapsedSeconds = Math.max(
    0,
    (now.getTime() - new Date(persistedAt).getTime()) / 1000,
  );
  const continued = Math.round(
    persistedDebtUsd + persistedElapsedSeconds * yearlyDeltaToPerSecond(yearlyDeltaTrillionsUsd),
  );

  return Math.max(baseline, continued);
}

export function formatCurrencyTrillions(value: number): string {
  return `${value.toFixed(2)} 万亿美元`;
}

export function formatDebtTrillions(value: number): string {
  return `-${formatCurrencyTrillions(Math.abs(value))}`;
}

export function formatDebtCompactZh(value: number): string {
  const abs = Math.abs(value);

  if (abs >= 1) {
    return `-${abs.toFixed(2)} 万亿`;
  }

  if (abs >= 0.1) {
    return `-${(abs * 10).toFixed(2)} 千亿`;
  }

  if (abs >= 0.01) {
    return `-${(abs * 100).toFixed(2)} 百亿`;
  }

  return `-${(abs * 10000).toFixed(2)} 亿`;
}

export function formatFullUsd(value: number): string {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

export function formatLiabilityUsd(value: number): string {
  return `-${formatFullUsd(Math.abs(value))}`;
}

export function formatDebtPerSecond(value: number): string {
  return `${Math.round(value).toLocaleString("en-US")} 美元/秒`;
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}
