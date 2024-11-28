import { handleErrorReponse } from "./handleReponse.js";

export const errorHandler = (err, req, res, next) => {
  // const resError = {
  //     message: err.message,
  //     code: err.code,
  //     stack: err.stack,
  // };
  console.log(err);

  const resError = handleErrorReponse(err.message, err.code, err.stack);

  res.status(resError.code).json(resError);
};

export class BadRequestError extends Error {
  constructor(message = "BadRequestError") {
    super(message);
    this.code = 400;
  }
}
