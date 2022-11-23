import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

// create trpc router
const trpc = initTRPC.create();
const router = trpc.router({});

// export types and express router
type AppRouter = typeof router;
const trpcRouter = trpcExpress.createExpressMiddleware({
  router,
});

export { AppRouter, trpcRouter };
