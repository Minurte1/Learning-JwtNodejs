import express from "express"
import configViewEndine from "./config/viewEnigne"
import initWebRouter from "./router/web"
import connection from "./config/connectDB"
import initApiRouter from "./router/api"
import configcors from "./config/cors"
require('dotenv').config();

import bodyParser from 'body-parser';
const app = express();
const PORT = process.env || 8080;

configcors(app)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
connection();
// parse application/json
app.use(bodyParser.json())
//config view engine
configViewEndine(app);
initWebRouter(app);
initApiRouter(app);



app.listen(PORT, () => {
    console.log(">> JWT back stating = " + PORT);
})