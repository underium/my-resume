import { asset, Head } from "$fresh/runtime.ts";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { Layout } from "../components/Layout.tsx";
import { TestCV } from "../components/TestCV.tsx";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth == "superzitrone" });
  },
};

export default function About({ data: { isAllowed } }: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href={asset("cv.css")} />
        <title>Javier Cáceres</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700,400italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Layout isAllowed={isAllowed}>
        <TestCV />
      </Layout>
    </>
  );
}
