import prisma from "../common/prisma/prisma.init.js";
import { BadRequestError } from "../helper/handleError.js";

const rateService = {
  add: async function (req) {
    let { user_id, res_id, amount } = req.body;
    if (!user_id || !res_id || !amount) {
      throw new BadRequestError("Dữ liệu truyền vào không được trống");
    }

    user_id = +user_id;
    res_id = +res_id;
    amount = +amount;
    let rateExists = await prisma.rate_res.findFirst({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    if (rateExists) {
      throw new Error("Đã đánh giá nhà hàng này");
    } else {
      rateExists = await prisma.rate_res.create({
        data: {
          res_id: res_id,
          user_id: user_id,
          amount: amount,
        },
      });
      return rateExists;
    }
  },

  listByRestaurant: async function (req) {
    let res_id = req.params.id;
    res_id = +res_id;
    const results = await prisma.rate_res.findMany({
      where: {
        res_id: res_id,
      },
    });

    return {
      items: results || [],
    };
  },

  listByUser: async function (req) {
    let user_id = req.params.id;
    user_id = +user_id;
    const results = await prisma.rate_res.findMany({
      where: {
        user_id: user_id,
      },
    });

    return {
      items: results || [],
    };
  },
};

export default rateService;
