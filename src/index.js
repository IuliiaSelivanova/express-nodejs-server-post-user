import "dotenv/config";
import cors from "cors";
import express, { json, urlencoded } from "express";
import config from "./config.js";
import {
  openDBConnection,
  closeDBConnection,
} from "./services/sqlite.js";
import router from "./router.js";

const app = express();

// Регистрация middleware
app.use(
  cors({
    origin: config.allowedOrigin,
  }),
);
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(router);

openDBConnection(config.dbPath)
  .then(() => {
    app.listen(config.port, () => {
      console.log("🚀 Server ready to handle requests");
    });
  })
  .catch((err) => {
    console.error("Ошибка подключения к базе данных:", err);
  });

process.on("SIGINT", () => {
  closeDBConnection();
});
