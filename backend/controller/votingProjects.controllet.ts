import { VotingProject } from "../model/votingProjects.model.ts";

export const addVotingProject = async (req: any, res: any) => {
  try {
    const { title, description, budget, location, wardNumber, imageLink } = req.body;

    if (!title || !description || !budget || !location || !wardNumber || imageLink) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newProject = new VotingProject({
      title,
      description,
      budget,
      location,
      wardNumber,
      imageLink
    });

    await newProject.save();

    res.status(201).json({
      message: "Voting project added successfully.",
      project: newProject,
    });
  } catch (error: any) {
    console.error("Error adding voting project:", error.message);
    res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const getVotingProjects = async (req: any, res: any) => {
  try {
    const { wardNumber } = req.body;

    if (!wardNumber || wardNumber < 1 || wardNumber > 70) {
      return res.status(400).json({
        message: "Please provide a valid ward number between 1 and 70.",
        success: false,
      });
    }

    const projects = await VotingProject.find({ wardNumber });

    if (projects.length === 0) {
      return res.status(404).json({
        message: "No projects found for this ward number.",
        success: false,
      });
    }

    res.status(200).json({
      message: "Projects fetched successfully.",
      success: true,
      projects,
    });
  } catch (error: any) {
    console.error("Error fetching voting projects:", error.message);
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error.message,
    });
  }
};

const deleteVotingProject
