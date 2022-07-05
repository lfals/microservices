import express from "express";
const app = express();
import dotenv from "dotenv";
import apiTest from "./api";
dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  apiTest(req, res);
});
// start the Express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
