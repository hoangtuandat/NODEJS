import express from "express";
import homeController from "../controlers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.gethomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);


    return app.use("/", router);
}



module.exports = initWebRoutes;