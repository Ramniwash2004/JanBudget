import express from "express"
import { login, signup, getUser } from "../controller/user.controller.ts"

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/getUser", getUser)

export default router