import { handleSuccessReponse } from "../helper/handleReponse.js";
import orderService from "../services/order.service.js";

const orderController = {
  create: async function (req, res, next) {
    try {
      const result = await orderService.create(req);
      const response = handleSuccessReponse(
        `Đặt món thành công!`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};

export default orderController;
