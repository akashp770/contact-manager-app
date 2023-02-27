const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
// @desc Register user
// @route Get /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!user || !email || !password) {
    res.status(400);
    throw new Error("All fieldsa are mandatory!");
  }
  const userAvailab = await User.findOne({ email });

  if (userAvailab) {
    res.status(400);
    throw new Error("User already registered");
  }
  res.status(200).json({ message: "Register the user" });
});

// @desc Login user
// @route Get /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login the user" });
});

// @desc Current user
// @route Get /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user" });
});

module.exports = { registerUser, loginUser, currentUser };
