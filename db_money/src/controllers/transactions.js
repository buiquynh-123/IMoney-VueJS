import Transaction from "../models/transaction";
import { transactionsSchema } from "../schema/transaction";
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    if (!transactions) {
      return res.status(400).json({
        message: "Khong tim thay transaction",
      });
    }
    return res.json(transactions);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
export const getTransactionById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(400).json({
        message: "Khong tim thay transaction",
      });
    }
    return res.json(transaction);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
export const addTransactions = async (req, res) => {
  try {
    console.log(req.body);
    const images = req.file.map((file) => file.path);
    const uploadedImages = [];
    for (const image of images) {
      try {
        const result = await cloudinary.uploader.upload(image);
        uploadedImages.push({
          url: result.secure_url,
          publicId: result.public_id,
        });
      } catch (error) {
        console.log(error);
      }
    }
    const body = {
      ...req.body,
      images: uploadedImages,
    };
    const { error } = transactionsSchema.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const transactions = await Transaction.create(body);
    if (!transactions) {
      return res.status(400).json({
        message: "Them san phan that bai",
      });
    }
    return res.json({
      message: "them transaction thanh cong",
      transactions,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
export const updateTransactions = async (req, res) => {
  try {
    const body = req.body;
    const { error } = transactionsSchema.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const transactions = await Transaction.findByIdAndUpdate(
      req.param.id,
      body,
      { new: true }
    );
    if (!transactions) {
      return res.status(400).json({
        message: "sua that bai",
      });
    }
    return res.json({
      message: "Sua thanh cong",
      transactions,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
