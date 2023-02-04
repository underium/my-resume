import { Head } from "$fresh/runtime.ts";
import { Layout } from "../components/Layout.tsx";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth == "superzitrone" });
  },
};

export default function Home({ data: { isAllowed } }: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>My Resume</title>
      </Head>
      <Layout isAllowed={isAllowed}>
        <div class="text-6xl font-bold flex justify-center items-center h-full">
          {isAllowed && <p>Logged in!</p>}
          {!isAllowed && <p>Not logged in!</p>}
        </div>
      </Layout>
    </>
  );
}
