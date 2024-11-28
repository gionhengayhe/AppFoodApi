import { handleSuccessReponse } from "../helper/handleReponse.js";
import rateService from "../services/rate.service.js";

const rateController = {
  add: async function (req, res, next) {
    try {
      const result = await rateService.add(req);
      const response = handleSuccessReponse(
        `Đánh giá nhà hàng thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  listByRestaurant: async function (req, res, next) {
    try {
      const result = await rateService.listByRestaurant(req);
      const response = handleSuccessReponse(
        `Lấy danh sách User đã đánh giá nhà hàng #${req.params.id} thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  listByUser: async function (req, res, next) {
    try {
      const result = await rateService.listByUser(req);
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

export default rateController;
