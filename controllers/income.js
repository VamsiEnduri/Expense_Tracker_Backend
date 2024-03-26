import { IncomeModel } from "../models/Incomemodel.js";
export const addIncome = async (req, res) => {
  const { title, amount, category, date } = req.body;
  const income = IncomeModel({
    title,
    amount,
    category,
    date,
  });
  try {
    if (!title || !date || !category || !amount) {
      return res.status(400).json({ message: "All feilds are required" });
    }
    if (!typeof amount === "number" || amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount  mustbe a postive  number" });
    }
    const a = await income.save();
    res.status(200).json({
      message: "income added",
      data: a,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      message: "data is not posted successfully to db",
      err: err,
    });
  }
};
export const getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      count: incomes.length,
      data: incomes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

export const delteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeModel.findByIdAndDelete(id)
    .then((del_income) => {
      res.status(200).json({
        message: "income delted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "server error" });
    });
};
