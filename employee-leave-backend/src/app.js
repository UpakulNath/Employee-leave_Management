import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";


import authMiddleware from "./middleware/authMiddleware.js";
import adminMiddleware from "./middleware/adminMiddleware.js";


const app = express();

app.use(cors());

app.use(express.json());


app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Employee Leave Management API Running");
});

app.use("/api/leave", leaveRoutes);



export default app;