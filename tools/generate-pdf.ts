import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import "https://deno.land/std@0.175.0/dotenv/load.ts";

const BROWSERLESS_TOKEN = Deno.env.get("BROWSERLESS_TOKEN");
if (BROWSERLESS_TOKEN === undefined) {
  throw new TypeError("Missing BROWSERLESS_TOKEN environment variable.");
}

export const exportPdf = async () => {
  console.log("VAMOS!");
  console.log("BROWSERLESS_TOKEN", BROWSERLESS_TOKEN);
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint:
        `wss://chrome.browserless.io?token=${BROWSERLESS_TOKEN}`,
    });
    const page = await browser.newPage();
    await page.goto("https://www.twitter.com/caceresdev", {
      waitUntil: "networkidle2",
    });
    await page.pdf({ path: "/static/hn.pdf", format: "A4" });

    await browser.close();
  } catch (error) {
    console.log(error);
  }
};
