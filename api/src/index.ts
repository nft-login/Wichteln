import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv'
dotenv.config()


import Router from "./routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

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
//RegisterRoutes(app);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
