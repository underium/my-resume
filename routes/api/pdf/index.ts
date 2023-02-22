import { Handlers } from "https://deno.land/x/fresh@1.1.2/server.ts";

export const handler: Handlers<any, { data: string }> = {
  GET(_req: any, ctx: { state: { data: BodyInit | null | undefined } }) {
    return new Response(ctx.state.data);
  },
};
