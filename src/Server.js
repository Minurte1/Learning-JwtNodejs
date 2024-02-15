import express from "express"
import configViewEndine from "./config/viewEnigne"
import initWebRouter from "./router/web"

const app = express();

//config view engine
configViewEndine(app);
initWebRouter(app);
const PORT = 8080;
app.listen(PORT, () => {
    console.log(">> JWT back stating = " + PORT);
})