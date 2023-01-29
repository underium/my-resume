export const handler: Handlers<any, { data: string }> = {
  GET(_req, ctx) {
    console.log("ctx", ctx);

    return new Response(ctx.state.data);
  },
};
