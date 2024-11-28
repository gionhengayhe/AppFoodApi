import { handleSuccessReponse } from "../helper/handleReponse.js";
import likeService from "../services/like.service.js";

const likeController = {
  like: async function (req, res, next) {
    try {
      const result = await likeService.like(req);
      const response = handleSuccessReponse(
        `Yêu thích nhà hàng thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  unlike: async function (req, res, next) {
    try {
      const result = await likeService.unlike(req);
      const response = handleSuccessReponse(
        `Hủy yêu thích nhà hàng thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  likeListByRestaurant: async function (req, res, next) {
    try {
      const result = await likeService.likeListByRestaurant(req);
      const response = handleSuccessReponse(
        `Lấy danh sách User đã thích nhà hàng #${req.params.id} thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  likeListByUser: async function (req, res, next) {
    try {
      const result = await likeService.likeListByUser(req);
      const response = handleSuccessReponse(
        `Lấy danh sách Res do User #${req.params.id} thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};

export default likeController;
