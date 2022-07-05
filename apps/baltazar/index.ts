import express from "express";
const app = express();
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ status: new Date() });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
