import { describe, expect, it } from "vitest";
import { DEFAULT_VISIBLE_COUNTRY_COUNT, countries } from "./countries";

describe("country debt snapshot", () => {
  it("contains the broad IMF-backed country set used by the app", () => {
    expect(countries.length).toBeGreaterThanOrEqual(180);
    expect(DEFAULT_VISIBLE_COUNTRY_COUNT).toBe(80);
    expect(new Set(countries.map((country) => country.rank)).size).toBe(countries.length);
    expect(countries[0].name).toBe("美国");
  });

  it("has valid coordinates and positive debt metrics", () => {
    for (const country of countries) {
      expect(country.latitude).toBeGreaterThanOrEqual(-90);
      expect(country.latitude).toBeLessThanOrEqual(90);
      expect(country.longitude).toBeGreaterThanOrEqual(-180);
      expect(country.longitude).toBeLessThanOrEqual(180);
      expect(country.gdpTrillionsUsd).toBeGreaterThan(0);
      expect(country.debtTrillionsUsd).toBeGreaterThan(0);
      expect(country.debtToGdpPercent).toBeGreaterThan(0);
      expect(Number.isNaN(new Date(country.snapshotDate).getTime())).toBe(false);
    }
  });

  it("keeps composition shares normalized for every country", () => {
    for (const country of countries) {
      const total = country.composition.reduce((sum, item) => sum + item.share, 0);
      expect(total).toBe(100);
    }
  });

  it("marks the United States with the USA Debt Clock live source parameters", () => {
    const unitedStates = countries.find((country) => country.iso2 === "US");

    expect(unitedStates?.liveSource).toMatchObject({
      provider: "USA Debt Clock",
      url: "https://www.usadebtclock.com/",
      baseDebtUsd: 39_311_022_730_162.44,
      perSecondUsd: 51_767.44,
      snapshotDate: "2026-06-25T00:00:00Z",
    });
  });
});
