import mongoose, { Document, Schema } from "mongoose";

export interface IProposal extends Document {
  heading: string;
  description: string;
  budget: number;
  wardNumber: string;
  location: string;
  submittedOn: Date;
  likes: number;
  status: "voting open" | "approved" | "under review";
  imageLink?: string;
  userId: mongoose.Schema.Types.ObjectId;
  comments: { userId: string; comment: string; date: Date }[];
}

const proposalSchema = new Schema<IProposal>(
  {
    heading: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    wardNumber: { type: String, required: true },
    location: { type: String, required: true },
    submittedOn: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["voting open", "approved", "under review"],
      default: "under review",
    },
    imageLink: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comments: [
      {
        userId: { type: String, required: true },
        comment: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IProposal>("Proposal", proposalSchema);
