import express from "express";

import homeController from "../homeController/homeController";
const router = express.Router();


const initWebRouter = (app) => {
    router.get("/", homeController.handleHellwork)
    router.get("/user", homeController.handleUserPage)
    return app.use("/", router);
}
export default initWebRouter;