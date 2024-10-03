import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import { throwError } from "../utils/eurror.js";
import jwt from "jsonwebtoken";

//======handle signup route ===========//
export const signup = async (req, res, next) => {
  const { nom, Email, Password } = req.body;
  const hashedPassword = bcrypt.hashSync(Password, 10);
  const newUser = new UserModel({ nom, Email, Password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ========signin route handling here =====//
export const signin = async (req, res, next) => {
  const { email, userPassword } = req.body;
  try {
    const validUser = await UserModel.findOne({ Email: email }); // Notez la majuscule ici pour correspondre à votre modèle
    if (!validUser) return next(throwError(404, "Wrong Credentials!"));
    const isValidPassword = bcrypt.compareSync(userPassword, validUser.Password);
    if (!isValidPassword) return next(throwError(401, "Wrong Credentials!"));

    const { Password, ...rest } = validUser._doc; // Exclusion du mot de passe de la réponse
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "720h",
    });
    res
      .cookie("access_token", token, { httpOnly: true, secure: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//=====handle signout=====//
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "User signed out successfully!" });
  } catch (error) {
    next(error);
  }
};
