import { Request, Response } from "express";
import { Complaint } from "../model/complaint.model"

// Add new complaint
export const addComplaint = async (req: Request, res: Response) => {
  try {
    const { heading, title, description, location, wardNumber } = req.body;
    const complaint = new Complaint({
      heading,
      title,
      description,
      location,
      wardNumber,
      submittedOn: new Date(),
    });
    await complaint.save();
    res.status(201).json({ message: "Complaint added successfully", complaint });
  } catch (error) {
    res.status(500).json({ error: "Failed to add complaint" });
  }
};

// Get all complaints
export const getComplaints = async (_req: Request, res: Response) => {
  try {
    const complaints = await Complaint.find().sort({ submittedOn: -1 });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch complaints" });
  }
};

// Add comment to a complaint
export const addCommentToComplaint = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text, author } = req.body;

    const complaint = await Complaint.findById(id);
    if (!complaint) return res.status(404).json({ error: "Complaint not found" });

    complaint.comments.push({ text, author, createdAt: new Date() });
    await complaint.save();

    res.json({ message: "Comment added successfully", complaint });
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

// Get comments of a complaint
export const getCommentsOfComplaint = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const complaint = await Complaint.findById(id);
    if (!complaint) return res.status(404).json({ error: "Complaint not found" });

    res.json(complaint.comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get comments" });
  }
};

// Add like to a complaint
export const addLikeToComplaint = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const complaint = await Complaint.findById(id);
    if (!complaint) return res.status(404).json({ error: "Complaint not found" });

    complaint.likes += 1;
    await complaint.save();

    res.json({ message: "Like added", likes: complaint.likes });
  } catch (error) {
    res.status(500).json({ error: "Failed to add like" });
  }
};

// Get like count of a complaint
export const getLikesOfComplaint = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const complaint = await Complaint.findById(id);
    if (!complaint) return res.status(404).json({ error: "Complaint not found" });

    res.json({ likes: complaint.likes });
  } catch (error) {
    res.status(500).json({ error: "Failed to get likes" });
  }
};
