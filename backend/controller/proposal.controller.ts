import Proposal from "../model/proposal.model.ts";
import { isAuth } from "../controller/isAuthenticated.ts";

export const addProposal = async (req: any, res: any) => {
  try {
    const { title, description, estimatedCost, ward, location, imageLink } = req.body;

    console.log("add Proposal -> ", req.body)

    if (!req.userId) return res.status(401).json({ message: "Unauthorized" });

    const newProposal = new Proposal({
      heading: title,
      description,
      budget: estimatedCost,
      wardNumber: ward,
      location,
      imageLink,
      userId: req.userId,
    });

    await newProposal.save();
    res.status(201).json({ message: "Proposal added successfully", proposal: newProposal });
  } catch (error) {
    console.log("Error in adding proposal -> ", error)
    res.status(500).json({ message: "Server error" });
  }
};

export const getProposals = async (_req: any, res: any) => {
  try {
    const proposals = await Proposal.find().sort({ createdAt: -1 });
    res.status(200).json({proposals: proposals, success: true});
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

/**
 * Add comment on proposal
 */
export const addCommentOnProposal = async (req: any, res: any) => {
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

export const getCommentsOnProposal = async (req: any, res: any) => {
  try {
    const { proposalId } = req.params;
    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: "Proposal not found" });

    res.status(200).json(proposal.comments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getLikesOnProposal = async (req: any, res: any) => {
  try {
    const { proposalId } = req.params;
    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: "Proposal not found" });

    res.status(200).json({ likes: proposal.likes });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const addLikeOnProposal = async (req: any, res: any) => {
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
