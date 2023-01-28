// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";

import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

interface State {
  data: string;
}

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
      path: "static/my-resume.pdf",
      format: "A4",
    });
    console.log("Termina de procesarlo");
    return "my-resume.pdf";
  } catch (error) {
    console.log(error);
  } finally {
    //await browser.close();
  }
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const value: string = await exportPdf() as string;
  console.log("value", value);
  ctx.state.data = value;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
