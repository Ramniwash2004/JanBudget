import express from "express";
import { adminLogin } from "../controller/admin.controller.ts";
const router = express.Router();

router.post("/login", adminLogin)

export default router;
