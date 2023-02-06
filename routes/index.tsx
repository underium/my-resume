import { Head } from "$fresh/runtime.ts";
import { Layout } from "../components/Layout.tsx";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { ServerState } from "../routes/_middleware.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Home(props: PageProps<ServerState>) {
  const isAllowed = !!props.data.user;
  return (
    <>
      <Head>
        <title>My Resume</title>
      </Head>
      <Layout state={props.data}>
        <div class="text-6xl font-bold flex justify-center items-center h-full">
          {isAllowed && <p>Logged in!</p>}
          {!isAllowed && <p>Not logged in!</p>}
        </div>
      </Layout>
    </>
  );
}
