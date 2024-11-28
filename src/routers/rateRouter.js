import express from "express";
import rateController from "../controllers/rate.controller.js";

const rateRouter = express.Router();

// Tạo route CRUD
rateRouter.post("/add", rateController.add);
rateRouter.get("/list-by-restaurant/:id", rateController.listByRestaurant);
rateRouter.get("/list-by-user/:id", rateController.listByUser);

export default rateRouter;
