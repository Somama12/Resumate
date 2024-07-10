import express from "express";
import { bot } from "../controllers/botController.js";

const router=express.Router();

router.use("/",bot)
bot()

export default router;