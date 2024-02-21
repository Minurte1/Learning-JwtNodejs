import express from "express";

import homeController from "../homeController/homeController";

const router = express.Router();


const initWebRouter = (app) => {
    router.get("/", homeController.handleHellwork)
    router.get("/user", homeController.handleUserPage)
    router.post("/user/create-user", homeController.handleCreateNewUser)
    router.post("/delete-user/:id", homeController.handleDeleteUser)
    router.get("/update-user/:id", homeController.handleUpdateUser)
    router.post("/user/update-user/accept/:id", homeController.UpdateUser)

    return app.use("/", router);
}
export default initWebRouter;