import * as THREE from "three";

export type SubsolarPoint = {
  latitude: number;
  longitude: number;
};

const degToRad = Math.PI / 180;
const radToDeg = 180 / Math.PI;

function dayOfYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  return Math.floor((date.getTime() - start) / 86_400_000);
}

function normalizeLongitude(longitude: number): number {
  return ((((longitude + 180) % 360) + 360) % 360) - 180;
}

export function calculateSubsolarPoint(date = new Date()): SubsolarPoint {
  const day = dayOfYear(date);
  const minutes =
    date.getUTCHours() * 60 +
    date.getUTCMinutes() +
    date.getUTCSeconds() / 60 +
    date.getUTCMilliseconds() / 60_000;

  const gamma = (2 * Math.PI / 365) * (day - 1 + (minutes / 60 - 12) / 24);
  const declination =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);

  const equationOfTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));

  const longitude = normalizeLongitude(180 - (minutes + equationOfTime) / 4);

  return {
    latitude: declination * radToDeg,
    longitude,
  };
}

export function subsolarPointToVector(point: SubsolarPoint): THREE.Vector3 {
  const latitude = point.latitude * degToRad;
  const longitude = point.longitude * degToRad;

  return new THREE.Vector3(
    Math.cos(latitude) * Math.sin(longitude),
    Math.sin(latitude),
    Math.cos(latitude) * Math.cos(longitude),
  ).normalize();
}

export function formatSolarCoordinate(value: number, axis: "lat" | "lng"): string {
  const suffix = axis === "lat"
    ? value >= 0 ? "N" : "S"
    : value >= 0 ? "E" : "W";

  return `${Math.abs(value).toFixed(1)}°${suffix}`;
}
