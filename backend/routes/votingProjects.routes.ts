import express from "express"
import { addVotingProject, getVotingProjects } from "../controller/votingProjects.controller"
import { AdminAuth } from "../middlewares/admin.auth"

const router = express.Router()

router.post("/add", AdminAuth, addVotingProject)
router.post("/get", getVotingProjects);

export default router
