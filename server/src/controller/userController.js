import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import jsonwebtoken from "jsonwebtoken";
const { sign } = jsonwebtoken;
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (name === undefined || email === undefined || password === undefined) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", { email, password });
  if (email === undefined || password === undefined) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const user = await User.find({ email });
    if (user.length === 0) {
      return res.status(400).json({ error: "User not found" });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid password" });
      }
      res
        .status(200)
        .json({
          message: "Login successful",
          token: sign(
            { id: user[0]._id, email: user[0].email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          ),
        });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Failed to log in user" });
  }
};
