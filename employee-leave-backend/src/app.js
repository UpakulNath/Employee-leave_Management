import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"


import authMiddleware from "./middleware/authMiddleware.js";
import adminMiddleware from "./middleware/adminMiddleware.js";


const app = express();

app.use(cors());

app.use(express.json());




app.get("/", (req, res) => {
    res.send("Employee Leave Management API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/admin", adminRoutes);



export default app;