import { describe, expect, it } from "vitest";
import {
  estimateLiveDebtFromUsdSource,
  estimateLiveDebtUsd,
  estimatePersistedLiveDebtUsd,
  estimateSecondTickerUsd,
  formatDebtCompactZh,
  formatCurrencyTrillions,
  formatDebtTrillions,
  formatFullUsd,
  formatLiabilityUsd,
  formatDebtPerSecond,
  formatPercent,
  yearlyDeltaToPerSecond,
} from "./format";

describe("debt formatting helpers", () => {
  it("formats trillion-dollar values in Chinese UI copy", () => {
    expect(formatCurrencyTrillions(36.2)).toBe("36.20 万亿美元");
    expect(formatFullUsd(36_220_000_057_712)).toBe("$36,220,000,057,712");
    expect(formatDebtTrillions(36.2)).toBe("-36.20 万亿美元");
    expect(formatLiabilityUsd(36_220_000_057_712)).toBe("-$36,220,000,057,712");
  });

  it("formats yearly debt delta as per-second growth", () => {
    expect(yearlyDeltaToPerSecond(0.31536)).toBe(10000);
    expect(formatDebtPerSecond(10000)).toBe("10,000 美元/秒");
  });

  it("estimates the rolling amount accrued within the current second", () => {
    expect(estimateSecondTickerUsd(10000, new Date("2026-01-01T00:00:00.000Z"))).toBe(0);
    expect(estimateSecondTickerUsd(10000, new Date("2026-01-01T00:00:00.250Z"))).toBe(2500);
    expect(estimateSecondTickerUsd(10000, new Date("2026-01-01T00:00:00.999Z"))).toBe(9990);
  });

  it("estimates live debt from the snapshot date instead of page load time", () => {
    expect(
      estimateLiveDebtUsd({
        baseDebtTrillionsUsd: 1,
        yearlyDeltaTrillionsUsd: 0.31536,
        snapshotDate: "2026-01-01T00:00:00Z",
        now: new Date("2026-01-01T00:00:10Z"),
      }),
    ).toBe(1_000_000_100_000);
  });

  it("estimates live debt from a dollar-denominated page-script source", () => {
    expect(
      estimateLiveDebtFromUsdSource({
        baseDebtUsd: 39_311_022_730_162.44,
        perSecondUsd: 51_767.44,
        snapshotDate: "2026-06-25T00:00:00Z",
        now: new Date("2026-06-25T00:00:10Z"),
      }),
    ).toBe(39_311_023_247_837);
  });

  it("continues counting from persisted local state when it is newer than the snapshot baseline", () => {
    expect(
      estimatePersistedLiveDebtUsd({
        baseDebtTrillionsUsd: 1,
        yearlyDeltaTrillionsUsd: 0.31536,
        snapshotDate: "2026-01-01T00:00:00Z",
        persistedDebtUsd: 1_000_000_500_000,
        persistedAt: "2026-01-01T00:00:50Z",
        now: new Date("2026-01-01T00:01:00Z"),
      }),
    ).toBe(1_000_000_600_000);
  });

  it("formats ratio percentages", () => {
    expect(formatPercent(124.3)).toBe("124.3%");
  });

  it("formats compact Chinese debt units using 万亿/千亿/百亿/亿", () => {
    expect(formatDebtCompactZh(16.65)).toBe("-16.65 万亿");
    expect(formatDebtCompactZh(0.72)).toBe("-7.20 千亿");
    expect(formatDebtCompactZh(0.085)).toBe("-8.50 百亿");
    expect(formatDebtCompactZh(0.0032)).toBe("-32.00 亿");
  });
});
