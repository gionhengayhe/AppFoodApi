import express from "express";
import { errorHandler } from "./src/helper/handleError.js";
import rootRouter from "./src/routers/root.router.js";

const app = express();
app.use(express.json());
const PORT = 3070;

app.use(rootRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server đang chạy trên Port ${PORT}`);
});
