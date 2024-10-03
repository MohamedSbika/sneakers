import AdminModel from "../models/admin.model.js";


//===== Create admin =====//
export const createadmin = async (req, res, next) => {
  try {
    const admin = await AdminModel.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    next(error);
  }
};



//======handle admin Delete========//
export const deleteadmin = async (req, res, next) => {
  const isadminExist = await AdminModel.findById(req.params.id);
  if (!isadminExist) return next(throwError(404, "admin not found"));
  try {
    await AdminModel.findByIdAndDelete(req.params.id);

    res.status(200).json("admin delete successfully");
  } catch (error) {
    next(error);
  }
};



//===== Handle admin Update ======//
export const updateadmin = async (req, res, next) => {
  const isadminExist = await AdminModel.findById(req.params.id);
  if (!isadminExist) return next(throwError(404, "admin not found"));
  try {
    const updateadmin = await AdminModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateadmin);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single admin ====//
export const singleadmin = async (req, res, next) => {
  try {
    const admin = await AdminModel.findById(req.params.id);
    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};




//==== Get All admin ====//
export const getAlladmin = async (req, res, next) => {
  try {
    const admin = await AdminModel.find();
    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};





