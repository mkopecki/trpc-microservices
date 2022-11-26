import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import { trpcController } from "../controllers/serviceTrpcController";

// create trpc router
const trpc = initTRPC.create();
const router = trpc.router({
  ping: trpc.procedure.input(z.string()).query(({ input }) => {
    return trpcController.ping(input);
  }),
});

// export types and express router
type AppRouter = typeof router;
const trpcRouter = trpcExpress.createExpressMiddleware({
  router,
});

export { AppRouter, trpcRouter };
