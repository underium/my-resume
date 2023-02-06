// routes/api/sign-in.ts

import { Handlers } from "$fresh/server.ts";
import { setCookie } from "https://deno.land/std@0.171.0/http/cookie.ts";

import { supabase } from "../../../lib/supabase.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();

    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const { data, error } = await supabase.auth
      .signInWithPassword({
        email,
        password,
      });

    const headers = new Headers();

    if (error != null || data.user == null || data.session == null) {
      const responseObject = {
        error: "Not authorized",
        crumb: "unauthorized",
      };
      // response to BASE 64
      const body = btoa(JSON.stringify(responseObject));
      headers.set("location", `/sign-in?r=${body}`);
      return new Response(null, {
        status: 303,
        statusText: "Invalid credentials",
        headers,
      });
    }

    headers.set("location", "/");

    setCookie(headers, {
      name: "auth",
      value: data.session.access_token,
      maxAge: data.session.expires_in,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
      secure: true,
    });

    return new Response(null, { status: 303, headers });
  },
};
