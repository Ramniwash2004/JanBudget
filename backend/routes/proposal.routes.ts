import express from "express";
import {
  addProposal,
  getProposals,
  addCommentOnProposal,
  getCommentsOnProposal,
  getLikesOnProposal,
  addLikeOnProposal,
} from "../controller/proposal.controller.ts";
import { isAuth } from "../controller/isAuthenticated.ts";

const router = express.Router();

router.post("/add", isAuth, addProposal);
router.get("/all", getProposals);
router.post("/comment", isAuth, addCommentOnProposal);
router.get("/comments/:proposalId", getCommentsOnProposal);
router.get("/likes/:proposalId", getLikesOnProposal);
router.post("/like", addLikeOnProposal);

export default router;
