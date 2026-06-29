import { describe, expect, it } from "vitest";
import { countries } from "./countries";

describe("country debt snapshot", () => {
  it("contains exactly the top 30 nominal GDP economies used by the app", () => {
    expect(countries).toHaveLength(30);
    expect(new Set(countries.map((country) => country.rank)).size).toBe(30);
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
});
