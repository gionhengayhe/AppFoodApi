import express from "express";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();

// Tạo route CRUD
likeRouter.post("/like", likeController.like);
likeRouter.post("/unlike", likeController.unlike);
likeRouter.get("/list-by-restaurant/:id", likeController.likeListByRestaurant);
likeRouter.get("/list-by-user/:id", likeController.likeListByUser);

export default likeRouter;
