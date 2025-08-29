import { OAuth2Client } from 'google-auth-library';
import bcrypt from 'bcrypt';
import User from '../Models/user.js';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

// For Google registration
async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
}

// Google registration
export const registerOrLoginWithGoogle = async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ message: "Missing credential" });
    }
    const userData = await verifyGoogleToken(credential);
    if (!userData) {
      return res.status(401).json({ message: "Invalid Google token" });
    }

    // Try to find the user
    let user = await User.findOne({ email: userData.email, provider: "google" });

    if (user) {
      // If exists, treat as login
      return res.status(200).json({ message: "Login successful", user });
    }

    // Otherwise, register new user
    user = new User({
      email: userData.email,
      name: userData.name,
      picture: userData.picture,
      provider: "google"
    });
    await user.save();

    res.status(200).json({ message: "Registration successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Email/password registration
export const registerOrLoginWithEmail = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "Missing fields" });
    }

    let user = await User.findOne({ email, provider: "local" });
    if (user) {
      // User exists: treat as login
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      return res.status(200).json({ message: "Login successful", user: { email: user.email, name: user.name } });
    }

    // User does not exist: register
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      email,
      name,
      password: hashedPassword,
      provider: "local"
    });
    await user.save();

    res.status(200).json({ message: "Registration successful", user: { email, name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};




