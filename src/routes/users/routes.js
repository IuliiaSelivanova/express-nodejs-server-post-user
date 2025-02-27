import { Router } from "express";
import { saveUser } from "./controllers/saveUser.js";

const router = new Router();

/**
 * A User type
 * @typedef {object} User
 * @property {string} firstName.required - Ivan
 * @property {string} lastName.required - Ivanov
 * @property {string} phoneNumber.required - +79999999999
 */

/**
 * POST /api/users
 * @tags Users
 * @summary Создать нового пользователя
 * @description Создаёт нового пользователя в системе.
 * @param {User} request.body.required - Параметры User
 * @return {User} 201 - success response - application/json
 * @return {string} 400 - Некорректные данные
 * @return {string} 409 - Пользователь с таким номером телефона уже существует
 */

router.post("/api/users", saveUser);

export default router;
