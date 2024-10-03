import UserModel from "../models/user.model.js";


//===== Create sneakrs =====//
export const createuser = async (req, res, next) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};



//======handle sneakrs Delete========//
export const deleteuser = async (req, res, next) => {
  const isuserExist = await UserModel.findById(req.params.id);
  if (!isuserExist) return next(throwError(404, "shoes not found"));
  try {
    await UserModel.findByIdAndDelete(req.params.id);

    res.status(200).json("shoes delete successfully");
  } catch (error) {
    next(error);
  }
};



//===== Handle sneakrs Update ======//
export const updateuser = async (req, res, next) => {
  const isuserExist = await UserModel.findById(req.params.id);
  if (!isuserExist) return next(throwError(404, "shoes not found"));
  try {
    const updateuser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateuser);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single sneakrs ====//
export const singleuser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};




//==== Get All sneakrs ====//
export const getAlluser = async (req, res, next) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};





