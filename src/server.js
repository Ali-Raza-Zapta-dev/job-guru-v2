import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT:${process.env.SERVER_PORT}`);
});
