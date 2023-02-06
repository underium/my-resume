import { Head } from "$fresh/runtime.ts";
import DownloadPdf from "../islands/Download.tsx";
import { Layout } from "../components/Layout.tsx";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { ServerState } from "../routes/_middleware.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function About(props: PageProps<ServerState>) {
  return (
    <>
      <Head>
        <title>My Resume</title>
      </Head>
      <Layout state={props.data}>
        <DownloadPdf />
      </Layout>
    </>
  );
}
