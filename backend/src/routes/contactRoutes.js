import express from "express";
import { contactController } from "../controllers/contactController.js";

const contactRoutes = express.Router();

contactRoutes.post("/send-email", contactController);

export default contactRoutes;