// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";
import puppeteer from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
import "https://deno.land/std@0.175.0/dotenv/load.ts";

interface State {
  data: string;
}

const BROWSERLESS_TOKEN = Deno.env.get("BROWSERLESS_TOKEN");
if (BROWSERLESS_TOKEN === undefined) {
  throw new TypeError("Missing BROWSERLESS_TOKEN environment variable.");
}

const exportPdf = async (access_token: string, short: boolean | null) => {
  /*const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${BROWSERLESS_TOKEN}`,
  });*/

  const browser = await puppeteer.launch({
    executablePath: "/Applications/Chromium.app/Contents/MacOS/Chromium",
  });
  try {
    const page = await browser.newPage();
    await page.setCookie({
      name: "auth",
      value: access_token,
      domain: "localhost",
    });
    await page.goto(
      `http://localhost:8000/resume?print=true&short=${short}`,
      {
        timeout: 30000,
        waitUntil: "networkidle2",
      },
    );
    await page.emulateMediaType("screen");
    const stream = await page.pdf({
      format: "a4",
      margin: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
      },
      printBackground: false,
      displayHeaderFooter: true,
      headerTemplate:
        `<div style="width: 100%; font-size: 9px; text-align: center;
			padding: 5px 5px 0; color: #bbb; position: relative;">
			<div style="position: relative; text-align: right; right: 5px; top: 5px; font-family: Arial, sans-serif;">&nbsp;</div>
	</div>`,
      footerTemplate: `
			<div style="width: 100%; font-size: 9px; text-align: center;
					padding: 5px 5px 0; color: #bbb; position: relative;">
					<div style="position: relative; text-align: right; right: 5px; top: 5px; font-family: Arial, sans-serif;"><span class="pageNumber"></span> of <span class="totalPages"></span></div>
			</div>`,
    });

    const base64 = btoa(new Uint8Array(stream).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, ""));
    return base64;
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
  const u = new URL(req.url);
  const short: string | null = u.searchParams.get("short");
  const cookies = getCookies(req.headers);
  const access_token = cookies.auth;
  const value: string = await exportPdf(access_token, short) as string;
  ctx.state.data = value;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
