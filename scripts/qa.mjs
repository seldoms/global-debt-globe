import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 920 },
  deviceScaleFactor: 1,
});

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForSelector("canvas");
await page.waitForTimeout(1500);

const topbarCount = await page.locator(".topbar").count();
const countryPanelCount = await page.locator(".country-panel").count();
const initialDebtCardCount = await page.locator(".globe-debt-card").count();
const canvasBox = await page.locator("canvas").boundingBox();
const nonBlank = await page.locator("canvas").evaluate((canvas) => {
  const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
  return Boolean(gl) && canvas.width > 100 && canvas.height > 100;
});

await page.screenshot({
  path: "/Users/seldoms/Documents/全球国债/qa-desktop.png",
  fullPage: true,
});

await page.locator(".globe-label button").click({ force: true });
await page.waitForSelector(".globe-debt-card");
const debtCardText = await page.locator(".globe-debt-card").innerText();
await page.screenshot({
  path: "/Users/seldoms/Documents/全球国债/qa-globe-card.png",
  fullPage: true,
});

await page.locator(".globe-debt-card__detail").click();
await page.waitForTimeout(400);
const detailHeading = await page.locator(".detail-header h2").innerText();
await page.screenshot({
  path: "/Users/seldoms/Documents/全球国债/qa-detail.png",
  fullPage: true,
});

await page.getByTitle("排行表").click();
await page.waitForTimeout(300);
const rowCount = await page.locator(".debt-table tbody tr").count();

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForSelector("canvas");
await page.waitForTimeout(800);
await page.screenshot({
  path: "/Users/seldoms/Documents/全球国债/qa-mobile.png",
  fullPage: true,
});

await browser.close();

console.log(JSON.stringify({
  topbarCount,
  countryPanelCount,
  initialDebtCardCount,
  canvasBox,
  nonBlank,
  debtCardHasTicker: debtCardText.includes("万亿") && debtCardText.includes("美元/秒"),
  detailHeading,
  rowCount,
}, null, 2));
