import express from "express"
import configViewEndine from "./config/viewEnigne"
import initWebRouter from "./router/web"
import connection from "./config/connectDB"
require('dotenv').config();

import bodyParser from 'body-parser';
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
connection();
// parse application/json
app.use(bodyParser.json())
//config view engine
configViewEndine(app);
initWebRouter(app);
const PORT = process.env || 8080;
app.listen(PORT, () => {
    console.log(">> JWT back stating = " + PORT);
})