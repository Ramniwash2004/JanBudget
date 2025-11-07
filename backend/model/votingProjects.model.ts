import mongoose, { Schema, Document } from "mongoose";

export interface IVotingProject extends Document {
  title: string;
  description: string;
  budget: number;
  location: string;
  wardNumber: number;
  imageLink: string | null;
}

const VotingProjectSchema = new Schema<IVotingProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  location: { type: String, required: true },
  wardNumber: { type: Number, required: true },
  imageLink: { type: String, required: false },
});

export const VotingProject = mongoose.model<IVotingProject>(
  "VotingProject",
  VotingProjectSchema
);
