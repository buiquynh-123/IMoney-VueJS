import { number } from "joi";
import mongoose from "mongoose";
const transactions = mongoose.Schema({
  total: {
    type: Number,
    require: true,
  },
  note: {
    type: String,
    require: true,
  },
  images: [{ url: String, publicId: String }],
  note: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  time: Date,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

const Transaction = mongoose.model("transactions", transactions);

export default Transaction;
