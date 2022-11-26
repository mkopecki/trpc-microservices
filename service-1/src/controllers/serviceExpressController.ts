import express from "express";
import { service2Client } from "../client/client";

export const serviceController = {
  test: async (req: express.Request, res: express.Response) => {
    const trpcResponse = await service2Client.ping.query("input message");

    res.status(200).send(`trpc response: ${trpcResponse}`);
  },
};
