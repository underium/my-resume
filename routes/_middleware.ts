// routes/_middleware.ts

import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.171.0/http/cookie.ts";
import { Bulk } from "https://deno.land/x/redis@v0.29.0/mod.ts";
import { redis } from "../lib/redis.ts";

type User = {
  id: number;
  name: string;
  access_token: string;
};

const ProtectedRoutes = [
  "/secret",
  "/api/pdf",
  "/about",
  "/resume",
  "/sign-out",
];

export type ServerState = {
  user: User | null;
  error: { code: number; msg: string } | null;
  printable?: boolean;
  short?: boolean;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<ServerState>,
) {
  const url = new URL(req.url);
  const cookies = getCookies(req.headers);
  const access_token = cookies.auth;

  //const protected_route = url.pathname == "/secret";
  const protected_route = ProtectedRoutes.includes(url.pathname);

  const headers = new Headers();
  headers.set("location", "/");

  if (protected_route && !access_token) {
    // Can't use 403 if we want to redirect to home page.
    return new Response(null, { headers, status: 303 });
  }

  if (access_token) {
    const session: Bulk = await redis.get(access_token);

    if (protected_route && !session) {
      return new Response(null, { headers, status: 303 });
    }

    const user = JSON.parse(session!.toString())?.user;
    ctx.state.user = user;
  }

  return await ctx.next();
}
