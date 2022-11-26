import express from "express";
import { service2Client } from "../client/client";

export const serviceController = {
  test: async (req: express.Request, res: express.Response) => {
    // send request to service-2 tRPC endpoint
    const trpcResponse = await service2Client.ping.query("input message");

    // return response
    res.status(200).send(`trpc response: ${trpcResponse}`);
  },
};
