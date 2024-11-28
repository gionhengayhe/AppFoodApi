import { BadRequestError } from "../helper/handleError.js";
import prisma from "../common/prisma/prisma.init.js";

const orderService = {
  create: async function (req) {
    let { user_id, food_id, code, amount, arr_sub_id } = req.body;
    if (!user_id || !food_id) {
      throw new BadRequestError("Dữ liệu không được để trống");
    }
    const newOrder = await prisma.order.create({
      data: {
        user_id: +user_id,
        food_id: +food_id,
        amount: +(amount ?? 1),
        code: code ?? null,
        arr_sub_id: +arr_sub_id ?? null,
      },
    });
    return newOrder;
  },
};

export default orderService;
