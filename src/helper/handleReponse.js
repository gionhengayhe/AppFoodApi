export const handleSuccessReponse = (
  message = "Lấy dữ liệu thành công",
  code = 200,
  metaData = null
) => {
  return {
    message, //object literal
    code,
    metaData,
  };
};

export const handleErrorReponse = (
  message = "Lỗi trong quá trình run server",
  code = 500,
  stack = null
) => {
  return {
    message,
    code,
    stack,
  };
};
