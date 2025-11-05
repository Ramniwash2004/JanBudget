import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  password: string;
  adminKey: string
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    adminKey: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User
