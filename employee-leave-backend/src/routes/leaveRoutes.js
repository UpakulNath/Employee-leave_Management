import express from "express";
import { applyLeave, getMyLeaves } from "../controllers/leaveController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/apply", authMiddleware, applyLeave);
router.get("/my-leaves", authMiddleware, getMyLeaves);

export default router;