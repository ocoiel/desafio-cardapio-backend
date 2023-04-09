import { Schema, Document, model } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  password: string;
}

const UserSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<UserDocument>("User", UserSchema);
