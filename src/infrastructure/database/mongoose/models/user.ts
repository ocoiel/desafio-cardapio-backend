import { Schema, Document, model } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, require: true, default: false },
});

export const UserModel = model<UserDocument>("User", UserSchema);
