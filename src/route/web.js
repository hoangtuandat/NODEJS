import express from "express";
import homeController from "../controlers/homeController"
import userController from "../controlers/userController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.gethomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin)


    return app.use("/", router);
}



module.exports = initWebRoutes;