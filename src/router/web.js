import express from "express";

import homeController from "../homeController/homeController";

const router = express.Router();


const initWebRouter = (app) => {
    router.get("/", homeController.handleHellwork)
    router.get("/user", homeController.handleUserPage)
    router.post("/user/create-user", homeController.handleCreateNewUser)
    router.post("/user/:id", homeController.handleDeleteUser)
    return app.use("/", router);
}
export default initWebRouter;