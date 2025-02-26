import { UsersModel } from "../models/user.js";

export const saveUser = async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const user = req.body;
  //проверяем, что юзер новый, в БД нет юзера с таким же номером телефона
  const existingUser = await UsersModel.get(
    user.phoneNumber,
  );
  if (existingUser)
    return res
      .status(409)
      .send(`User with ${existingUser.phoneNumber} exists`);

  //сохраняем юзера в БД и отправляем ответ с сохраненными данными
  await UsersModel.save(user);
  return res
    .status(201)
    .send(await UsersModel.get(user.phoneNumber));
};
