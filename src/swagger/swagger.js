import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const options = {
  info: {
    title: "User API",
    version: "1.0.0",
    description: "API для управления пользователями",
  },
  servers: {
    url: "http://localhost:3002",
    description: "Base server",
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  baseDir: __dirname,
  filesPattern: "../routes/users/routes.js",
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: "/",
  notRequiredAsNullable: false,
};
