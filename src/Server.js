import express from "express"
import configViewEndine from "./config/viewEnigne"
import initWebRouter from "./router/web"
import connection from "./config/connectDB"
require('dotenv').config();

import bodyParser from 'body-parser';
const app = express();
const PORT = process.env || 8080;
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL); // Update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
connection();
// parse application/json
app.use(bodyParser.json())
//config view engine
configViewEndine(app);
initWebRouter(app);




app.listen(PORT, () => {
    console.log(">> JWT back stating = " + PORT);
})