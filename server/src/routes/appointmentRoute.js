import express from "express";
import { appointment } from "../controller/appointmentController.js";
const router = express.Router();


router.post("/appointment", appointment);

export default router;