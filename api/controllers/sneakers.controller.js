import Sneakers from "../models/sneakers.model.js";


//===== Create sneakrs =====//
export const createsneakers = async (req, res, next) => {
  try {
    const sneakers = await Sneakers.create(req.body);
    res.status(201).json(sneakers);
  } catch (error) {
    next(error);
  }
};



//======handle sneakrs Delete========//
export const deletesneakers = async (req, res, next) => {
  const issneakersExist = await Sneakers.findById(req.params.id);
  if (!issneakersExist) return next(throwError(404, "shoes not found"));
  try {
    await Sneakers.findByIdAndDelete(req.params.id);

    res.status(200).json("shoes delete successfully");
  } catch (error) {
    next(error);
  }
};



//===== Handle sneakrs Update ======//
export const updatesneakers = async (req, res, next) => {
  const issneakersExist = await Sneakers.findById(req.params.id);
  if (!issneakersExist) return next(throwError(404, "shoes not found"));
  try {
    const updatesneakers = await Sneakers.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatesneakers);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single sneakrs ====//
export const singlesneakers = async (req, res, next) => {
  try {
    const sneakers = await Sneakers.findById(req.params.id);
    res.status(200).json(sneakers);
  } catch (error) {
    next(error);
  }
};




//==== Get All sneakrs ====//
export const getAllsneakers = async (req, res, next) => {
  try {
    const sneakers = await Sneakers.find();
    res.status(200).json(sneakers);
  } catch (error) {
    next(error);
  }
};





