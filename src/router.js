import { Router } from "express";
import userRouter from "./routes/users/routes.js";

const router = new Router();

router.get("/api", (req, res) => {
  return res.status(200).send("Request is done");
});
router.use("/", userRouter);

export default router;
