import express, { Router } from 'express'
import { getAllLeaves } from '../controllers/adminController.js'

import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'



const router = express.Router()

router.get(
    "/leaves",
    authMiddleware,
    adminMiddleware,
    getAllLeaves
);


export default router;  