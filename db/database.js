import mongoose from "mongoose";
import { mongodb_URL } from "../config.js";
export const db = mongoose.connect(mongodb_URL);

db.then((res) => {
  console.log("database conected successfuly");
}).catch(() => {
  console.log("database not connected");
});
