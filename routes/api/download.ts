import { HandlerContext } from "$fresh/server.ts";

import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const exportPdf = async () => {
  try {
    let file = await Deno.open("download/my-resume.pdf", {
      create: true,
      write: true,
    });
    console.log("file", file);
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
  },
};
