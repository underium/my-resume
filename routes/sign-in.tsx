// routes/sign-in.tsx

import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";

import { Layout } from "../components/Layout.tsx";
import AuthForm from "../islands/AuthForm.tsx";

export type Data = {
  isAllowed: boolean;
  error: string | null;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const u = new URL(req.url);
    const error = u.searchParams.get("r");
    const cookies = getCookies(req.headers);
    return ctx.render({
      isAllowed: cookies.auth == "superzitrone",
      error: error ? "You shall not pass" : null,
    });
  },
};

export default function Page({ data: { isAllowed, error } }: PageProps<Data>) {
  return (
    <Layout isAllowed={isAllowed}>
      <div class="flex justify-center items-center w-full h-full">
        <div class="flex flex-col items-stretch w-[500px] md:w-2/3">
          <AuthForm mode="In" error={error} />
        </div>
      </div>
    </Layout>
  );
}
