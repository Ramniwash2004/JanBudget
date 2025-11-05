import { any, Response } from "express";
import Proposal from "../models/proposal.model.ts";
import { AuthenticatedRequest } from "../middleware/isAuth.ts";

/**
 * Add new proposal
 */
export const addProposal = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { heading, description, budget, wardNumber, location, imageLink } = req.body;

    if (!req.userId) return res.status(401).json({ message: "Unauthorized" });

    const newProposal = new Proposal({
      heading,
      description,
      budget,
      wardNumber,
      location,
      imageLink,
      userId: req.userId,
    });

    await newProposal.save();
    res.status(201).json({ message: "Proposal added successfully", proposal: newProposal });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get all proposals
 */
export const getProposals = async (_req: any, res: Response) => {
  try {
    const proposals = await Proposal.find().sort({ createdAt: -1 });
    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Add comment on proposal
 */
export const addCommentOnProposal = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { proposalId, comment } = req.body;
    if (!req.userId) return res.status(401).json({ message: "Unauthorized" });

    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: "Proposal not found" });

    proposal.comments.push({ userId: req.userId, comment, date: new Date() });
    await proposal.save();

    res.status(200).json({ message: "Comment added successfully", comments: proposal.comments });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get comments on a proposal
 */
export const getCommentsOnProposal = async (req: any, res: Response) => {
  try {
    const { proposalId } = req.params;
    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: "Proposal not found" });

    res.status(200).json(proposal.comments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get likes count
 */
export const getLikesOnProposal = async (req: any, res: Response) => {
  try {
    const { proposalId } = req.params;
    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: "Proposal not found" });

    res.status(200).json({ likes: proposal.likes });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Add like
 */
export const addLikeOnProposal = async (req: any, res: Response) => {
  try {
    const { proposalId } = req.body;
    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: "Proposal not found" });

    proposal.likes += 1;
    await proposal.save();

    res.status(200).json({ message: "Liked successfully", likes: proposal.likes });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
