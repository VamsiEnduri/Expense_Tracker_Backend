import mongoose from "mongoose";

const expenseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max_Length: 20,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      max_Length: 20,
    },
    type: {
      type: String,
      default: "expense",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timeStamps: true }
);

export const ExpenseModel = mongoose.model("expense", expenseSchema);
