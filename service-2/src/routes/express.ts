import express from "express";
import { serviceController } from "../controllers/serviceExpressController";

// initialize express router
const expressRouter = express.Router();

// set routes
expressRouter.post("/test", serviceController.test);

// export express router
export { expressRouter };
