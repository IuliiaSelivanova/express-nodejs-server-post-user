import { db } from "../../../services/sqlite.js";

export const UsersModel = {
  save: ({ firstName, lastName, phoneNumber }) => {
    const sql = `INSERT INTO Users (firstName, lastName, phoneNumber) VALUES (?,?,?)`;
    db.run(sql, firstName, lastName, phoneNumber);
  },
  get: (phoneNumber) => {
    const sql = `SELECT * FROM Users WHERE phoneNumber = ?`;
    return db.get(sql, phoneNumber);
  },
};
