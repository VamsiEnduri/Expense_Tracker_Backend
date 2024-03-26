import mongoose from "mongoose";

const IncomeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      max_Length: 25,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
      max_Length: 20,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export const IncomeModel = mongoose.model("incomeModel", IncomeSchema);
