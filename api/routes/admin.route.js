import express from "express";
import {
 createadmin,
 deleteadmin,
  updateadmin,
  singleadmin,
  getAlladmin,
} from "../controllers/admin.controller.js";

const router = express.Router();


router.post("/",  createadmin); // Seuls les administrateurs peuvent créer des produits
router.put("/:id",    updateadmin,); // Seuls les administrateurs peuvent mettre à jour des produits
router.get("/:id",  singleadmin); // Tout utilisateur connecté peut voir un produit
router.delete("/:id",  deleteadmin); // Seuls les administrateurs peuvent supprimer des produits
router.get("/",  getAlladmin); // Tout utilisateur connecté peut voir tous les produits


export default router;