import express from "express";
import homeController from "../controlers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.gethomePage);



    return app.use("/", router);
}

module.exports = initWebRoutes;