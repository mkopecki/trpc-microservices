import express from "express";
import { expressRouter } from "./routes/express";
import { trpcRouter } from "./routes/trpc";
const app = express();

app.use("/express", expressRouter);
app.use("/trpc", trpcRouter);

app.listen(4001);
