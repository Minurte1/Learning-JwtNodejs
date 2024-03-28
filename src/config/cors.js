

require('dotenv').config();
const configcors = (app) =>{

    app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL); // Update to match the domain you will make the request from
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT,PATCH,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    
}
export default configcors