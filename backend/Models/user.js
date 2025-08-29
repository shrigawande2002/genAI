import mongoose from "mongoose";
import { Schema } from "mongoose";

const user = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String }, // Not required for email/password
  password: { type: String }, // Only for email/password users
  provider: { type: String, default: "local" } // "google" or "local"
});

const User = mongoose.model("User", user);

export default User;