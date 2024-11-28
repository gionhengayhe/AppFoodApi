import prisma from "../common/prisma/prisma.init.js";
import { BadRequestError } from "../helper/handleError.js";

const likeService = {
  like: async function (req) {
    let { user_id, res_id } = req.body;
    if (!user_id || !res_id) {
      throw new BadRequestError("Dữ liệu truyền vào không được trống");
    }

    user_id = +user_id;
    res_id = +res_id;
    let likeExists = await prisma.like_res.findFirst({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    if (likeExists) {
      throw new Error("Đã yêu thích nhà hàng này");
    } else {
      likeExists = await prisma.like_res.create({
        data: {
          res_id: res_id,
          user_id: user_id,
        },
      });
      return likeExists;
    }
  },

  unlike: async function (req) {
    let { user_id, res_id } = req.body;
    if (!user_id || !res_id) {
      throw new BadRequestError("Dữ liệu truyền vào không được trống");
    }

    user_id = +user_id;
    res_id = +res_id;
    let likeExists = await prisma.like_res.findFirst({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    if (!likeExists) {
      throw new Error("Bạn chưa từng thích nhà hàng này!");
    }
    await prisma.like_res.delete({
      where: {
        user_id_res_id: {
          user_id: user_id,
          res_id: res_id,
        },
      },
    });
    return likeExists;
  },

  likeListByRestaurant: async function (req) {
    let res_id = req.params.id;
    res_id = +res_id;
    const results = await prisma.like_res.findMany({
      where: {
        res_id: res_id,
      },
    });

    return {
      items: results || [],
    };
  },

  likeListByUser: async function (req) {
    let user_id = req.params.id;
    user_id = +user_id;
    const results = await prisma.like_res.findMany({
      where: {
        user_id: user_id,
      },
    });

    return {
      items: results || [],
    };
  },
};

export default likeService;
