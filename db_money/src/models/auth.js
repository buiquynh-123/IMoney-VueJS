import { date, string } from "joi";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("users", userSchema);
export default User;
