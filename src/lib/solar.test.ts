import { describe, expect, it } from "vitest";
import {
  calculateSubsolarPoint,
  formatSolarCoordinate,
  subsolarPointToVector,
} from "./solar";

describe("solar position helpers", () => {
  it("puts the subsolar point near the equator on the March equinox", () => {
    const point = calculateSubsolarPoint(new Date("2026-03-20T10:46:00Z"));

    expect(Math.abs(point.latitude)).toBeLessThan(1);
  });

  it("puts the subsolar point in the northern hemisphere on the June solstice", () => {
    const point = calculateSubsolarPoint(new Date("2026-06-21T02:24:00Z"));

    expect(point.latitude).toBeGreaterThan(22);
    expect(point.latitude).toBeLessThan(24);
  });

  it("creates a normalized light direction vector", () => {
    const vector = subsolarPointToVector({ latitude: 0, longitude: 0 });

    expect(vector.length()).toBeCloseTo(1, 5);
  });

  it("formats coordinates with cardinal labels", () => {
    expect(formatSolarCoordinate(23.4, "lat")).toBe("23.4°N");
    expect(formatSolarCoordinate(-45.8, "lng")).toBe("45.8°W");
  });
});
