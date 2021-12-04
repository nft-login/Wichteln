import express, { Application } from "express";
import cors from "cors";
import { auth } from "express-openid-connect";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv';
dotenv.config()

import Router from "./routes";

const PORT = process.env.PORT || 8000;
const PUBLIC_PATH = process.env.PUBLIC_PATH || "public/";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(PUBLIC_PATH));
app.use(express.static('public'));

app.use(auth({
  idpLogout: true,
  clientSecret: 'secret',
  authorizationParams: {
    response_type: 'code id_token',
    scope: 'openid profile',
  },
}));

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
