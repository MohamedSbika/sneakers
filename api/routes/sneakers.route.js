import express from "express";
import {
 createsneakers,
 deletesneakers,
  updatesneakers,
  singlesneakers,
  getAllsneakers,
} from "../controllers/sneakers.controller.js";

const router = express.Router();


router.post("/",  createsneakers); // Seuls les administrateurs peuvent créer des produits
router.put("/:id",    updatesneakers,); // Seuls les administrateurs peuvent mettre à jour des produits
router.get("/:id",  singlesneakers); // Tout utilisateur connecté peut voir un produit
router.delete("/:id",  deletesneakers); // Seuls les administrateurs peuvent supprimer des produits
router.get("/",  getAllsneakers); // Tout utilisateur connecté peut voir tous les produits


export default router;