import { ExpenseModel } from "../models/expensemodel.js";

export const addExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  const expense = ExpenseModel({
    title,
    amount,
    category,
    date,
  });

  try {
    if (!title || !amount || !category || !date) {
      return res.status(404).json({ message: "all feilds are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(404)
        .json({ message: "amount should be postive number" });
    }
    const b = await expense.save();
    return res
      .status(200)
      .json({ message: "expense added succssfully", data: b });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "data not pushed to database" });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseModel.find().sort({ createAt: -1 });
    return res.status(200).json({ count: expenses.length, data: expenses });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "expense not deleted",
    });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseModel.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "expense dleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "expense not dleted " });
    });
};
