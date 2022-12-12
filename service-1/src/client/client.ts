import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../service-2/src/routes/trpc";

export const service2Client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://service-2:4001/trpc",
    }),
  ],
});
