import mongoose, { Schema, Document } from "mongoose";

export interface IComplaint extends Document {
  heading: string;
  title: "waste" | "electricity" | "water" | "other";
  description: string;
  location: string;
  wardNumber: number;
  submittedOn: Date;
  likes: number;
  comments: {
    text: string;
    author: string;
    createdAt: Date;
  }[];
}

const ComplaintSchema = new Schema<IComplaint>({
  heading: { type: String, required: true },
  title: { type: String, enum: ["waste", "electricity", "water", "other"], required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  wardNumber: { type: Number, required: true },
  submittedOn: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [
    {
      text: { type: String, required: true },
      author: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

export const Complaint = mongoose.model<IComplaint>("Complaint", ComplaintSchema);
