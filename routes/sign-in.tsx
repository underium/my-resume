// routes/sign-in.tsx

import { Handlers, PageProps } from "$fresh/server.ts";

import { ServerState } from "../routes/_middleware.ts";
import { Layout } from "../components/Layout.tsx";
import AuthForm from "../islands/AuthForm.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const u = new URL(req.url);
    const error = u.searchParams.get("r");
    return ctx.render({
      error: error ? "You shall not pass" : null,
    });
  },
};

export default function Page(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="flex justify-center items-center w-full h-full">
        <div class="flex flex-col items-stretch w-[500px] md:w-2/3">
          <AuthForm mode="In" error={""} />
        </div>
      </div>
    </Layout>
  );
}
