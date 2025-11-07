import express from "express"
import { addVotingProject, getVotingProjects } from "../controller/votingProjects.controller.ts"
import { AdminAuth } from "../middlewares/admin.auth.ts"

const router = express.Router()

router.post("/add", AdminAuth, addVotingProject)
router.post("/get", getVotingProjects);

export default router
