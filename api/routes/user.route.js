import express from "express";
import {
 createuser,
 deleteuser,
  updateuser,
  singleuser,
  getAlluser,
} from "../controllers/user.controller.js";

const router = express.Router();


router.post("/",  createuser); // Seuls les administrateurs peuvent créer des produits
router.put("/:id",    updateuser,); // Seuls les administrateurs peuvent mettre à jour des produits
router.get("/:id",  singleuser); // Tout utilisateur connecté peut voir un produit
router.delete("/:id",  deleteuser); // Seuls les administrateurs peuvent supprimer des produits
router.get("/",  getAlluser); // Tout utilisateur connecté peut voir tous les produits


export default router;