import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

const exportPdf = async () => {
  try {
    return "my-resume.pdf";
  } catch (error) {
    console.log(error);
  } finally {
    //await browser.close();
  }
};

export const handler: Handlers<any, { data: string }> = {
  async GET(_req, ctx) {
    const file = await exportPdf();
    console.log("file", file);
    return new Response(file);
  },
};
