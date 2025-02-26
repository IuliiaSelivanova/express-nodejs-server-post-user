import { Router } from "express";
import { saveUser } from "./controllers/saveUser.js";

const router = new Router();

router.post("/api/users", saveUser);

export default router;
