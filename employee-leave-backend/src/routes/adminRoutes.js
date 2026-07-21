import express, { Router } from 'express'
import { getAllLeaves, approveLeave } from '../controllers/adminController.js'

import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'



const router = express.Router()

router.get(
    "/leaves",
    authMiddleware,
    adminMiddleware,
    getAllLeaves
);

router.patch(
    "/leaves/:leaveId/approve",
    authMiddleware,
    adminMiddleware,
    approveLeave
);


export default router;  