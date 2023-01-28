// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";

import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import "https://deno.land/std@0.175.0/dotenv/load.ts";

interface State {
  data: string;
}

const BROWSERLESS_TOKEN = Deno.env.get("BROWSERLESS_TOKEN");
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
      "https://underium-my-resume.deno.dev/resume",
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
