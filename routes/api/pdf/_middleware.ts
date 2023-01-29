// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";

import puppeteer from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
import "https://deno.land/std@0.175.0/dotenv/load.ts";

interface State {
  data: string;
}

const BROWSERLESS_TOKEN = Deno.env.get("BROWSERLESS_TOKEN");
if (BROWSERLESS_TOKEN === undefined) {
  throw new TypeError("Missing BROWSERLESS_TOKEN environment variable.");
}

const exportPdf = async () => {
  /*const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${BROWSERLESS_TOKEN}`,
  });*/

  const browser = await puppeteer.launch({
    executablePath: "/Applications/Chromium.app/Contents/MacOS/Chromium",
  });
  try {
    const page = await browser.newPage();
    await page.goto(
      "https://underium-my-resume.deno.dev/resume",
      {
        waitUntil: "networkidle2",
      },
    );
    const stream = await page.pdf({
      format: "a4",
    });

    const base64 = btoa(String.fromCharCode(...new Uint8Array(stream)));
    return base64;
  } catch (error) {
    console.log(error);
  } finally {
    //await browser.close();
  }
};

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  console.log("GO!");
  const value: string = await exportPdf() as string;
  ctx.state.data = value;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
