import express from "express";
import {
  addComplaint,
  getComplaints,
  addCommentToComplaint,
  getCommentsOfComplaint,
  addLikeToComplaint,
  getLikesOfComplaint,
} from "../controller/complaint.controller.ts";

const router = express.Router();

router.post("/add", addComplaint);
router.get("/", getComplaints);
router.post("/:id/comment", addCommentToComplaint);
router.get("/:id/comments", getCommentsOfComplaint);
router.post("/:id/like", addLikeToComplaint);
router.get("/:id/likes", getLikesOfComplaint);

export default router;
