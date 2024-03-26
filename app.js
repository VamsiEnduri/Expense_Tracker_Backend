import { PORT, mongodb_URL } from "./config.js";
import express from "express";
import cors from "cors";
import { db } from "./db/database.js";
import { router } from "./routes/routes.js";

const app = express();
const port = PORT || 5555;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi there very good morning everyone");
});
app.use("/", router);

app.listen(port, () => {
  db;
  console.log("server is ruuning here", port);
});
