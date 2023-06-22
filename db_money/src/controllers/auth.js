import User from "../models/auth";
import { signinSchema } from "../schema/auth";
import { signupSchema } from "../schema/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    console.log(error);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        messages: errors.message,
      });
    }
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(user);

    const accessToken = jwt.sign({ _id: user._id }, "030902", {
      expiresIn: "1d",
    });
    return res.status(201).json({
      message: "Đăng ký tk thành công",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// B1: Validate object từ client gửi lên(name, email, password, confirmPassword)
// B2: Kiểm tra email đã tồn tại chưa(Nếu mà có rồi thì trả về lỗi: Email đã tồn tại)
// B3: Mã hóa mật khẩu
// B4: Tạo user mới
// B5: Tạo token
// B6: Trả về token và user
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = signinSchema.validate(req.body, { abortEarly: false });
    console.log(error);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        messages: errors.message,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Bạn chưa đăng ký tài khoản",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Mật khẩu không đúng",
      });
    }

    const accessToken = jwt.sign({ _id: user._id }, "030902", {
      expiresIn: "1d",
    });

    //
    const { password: any, ...others } = user._doc;
    // để bảo mật thì lấy hết các thông tin trừ password
    console.log(user);

    return res.status(201).json({
      message: "Đăng nhập thành công",
      ...others,
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
