import express from "express";
import { UsersControllers } from "@controllers/UsersController";
const app = express();

app.get("/", (req, res) => {
  return res.json({ msg: "Hello World" });
});
app.listen(5000);
