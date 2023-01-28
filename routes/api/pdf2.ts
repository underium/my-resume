import { HandlerContext } from "$fresh/server.ts";

import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const BROWSERLESS_TOKEN = config()["BROWSERLESS_TOKEN"];
if (BROWSERLESS_TOKEN === undefined) {
  throw new TypeError("Missing BROWSERLESS_TOKEN environment variable.");
}

const exportPdf = async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${BROWSERLESS_TOKEN}`,
  });
  try {
    const page = await browser.newPage();
    await page.goto(
      "https://registry.jsonresume.org/thomasdavis?theme=spartan",
      {
        waitUntil: "networkidle2",
      },
    );
    await page.pdf({
      path: "my-resume.pdf",
      format: "A4",
    });

    return "my-resume.pdf";
  } catch (error) {
    console.log(error);
  } finally {
    //await browser.close();
  }
};

export const handler: Handlers = {
  async GET() {
    const value = await exportPdf();
    return new Response(value);
    return new Response(JSON.stringify(value), {
      headers: { "Content-Type": "text/html" },
    });
  },
};
