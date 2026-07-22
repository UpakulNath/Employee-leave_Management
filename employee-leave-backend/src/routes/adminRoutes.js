import express, { Router } from 'express'
import { getAllLeaves, approveLeave, rejectLeave } from '../controllers/adminController.js'

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

router.patch(
    "/leaves/:leaveId/reject",
    authMiddleware,
    adminMiddleware,
    rejectLeave
);


export default router;  