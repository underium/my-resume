// routes/_middleware.ts

import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";

type User = {
  id: number;
  name: string;
  access_token: string;
};

export type ServerState = {
  user: User | null;
  error: { code: number; msg: string } | null;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<ServerState>,
) {
  const cookies = getCookies(req.headers);
  const access_token = cookies.auth;

  const headers = new Headers();
  headers.set("location", "/");

  if (!access_token) {
    // Can't use 403 if we want to redirect to home page.
    return new Response(null, { headers, status: 303 });
  }

  if (access_token) {
    // Here, we will have an actual lookup of user data in the future.
    const user_data = { id: 42, name: "Spongebob", access_token };

    if (!user_data) {
      return new Response(null, { headers, status: 303 });
    }

    ctx.state.user = user_data;
  }

  return await ctx.next();
}
