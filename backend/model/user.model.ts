import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  wardNumber: string;
  fullAddress: string;
  phoneNumber: string;
  email: string;
  voterId: string;
  password: string;
  userType: "citizen";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    wardNumber: { type: String, required: true },
    fullAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    voterId: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User
