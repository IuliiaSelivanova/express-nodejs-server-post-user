import { Router } from "express";
import routes from "./routes/users/routes.js";

const router = new Router();

router.use("/", routes);

export default router;
