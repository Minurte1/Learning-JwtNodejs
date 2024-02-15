import express from "express";

import homeController from "../homeController/homeController";
const router = express.Router();


const initWebRouter = (app) => {
    router.get("/", homeController.handleHellwork)
    router.get("/user", homeController.handleUserPage)
    router.post("/users/create-user", homeController.handleCreateNewUser)
    return app.use("/", router);
}
export default initWebRouter;