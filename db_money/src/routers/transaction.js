import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinaryConfig";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import {
  addTransactions,
  getTransactionById,
  getTransactions,
  updateTransactions,
} from "../controllers/transactions";

const route = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "WE17301",
  },
});
const upload = multer({ storage: storage });
route.get("/transactions", getTransactions);
route.get("/transactions/:id", getTransactionById);
route.post("/transactions", addTransactions);
route.put("/transactions/:id", updateTransactions);
export default route;
