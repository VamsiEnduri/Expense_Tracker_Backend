import express from "express";
import { addIncome, delteIncome, getIncomes } from "../controllers/income.js";
import {
  addExpense,
  deleteExpense,
  getExpenses,
} from "../controllers/expense.js";

export const router = express.Router();

router.post("/add-income", addIncome);
router.post("/add-expense", addExpense);
router.get("/get-incomes", getIncomes);
router.get("/get-expenses", getExpenses);
router.delete("/delete-income/:id", delteIncome);
router.delete("/delete-expense/:id", deleteExpense);
