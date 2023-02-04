// routes/secret.tsx

// ...

import { ServerState } from "./_middleware.ts";
import { Layout } from "../components/Layout.tsx";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Secret(props: PageProps<ServerState>) {
  const isAllowed = !!props.data.user;

  return (
    <Layout isAllowed={isAllowed}>
      <div class="flex flex-col items-center">
        <h2>Congrats, You've reached the secret page!</h2>
        <p>Here's a little treat:</p>
        <p class="text-[72px] text-align-center">🍋</p>
      </div>
    </Layout>
  );
}
