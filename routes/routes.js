import express from "express";
import { sendMessage } from "../controller/userController.js";

const router = express.Router();

router.post("/message", sendMessage);

export default router;