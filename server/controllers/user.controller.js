const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.create(req.body);

      const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res.cookie("usertoken", userToken, { httpOnly: true }).json({
        msg: "success!",
        user: user,
      });
    } catch (err) {
      console.error("Error in registration:", err);
      res.status(500).json({ msg: "error", error: err.message });
    }
  },


  logout: (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
  },

  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(400).json({ msg: "Email not found" });
      }
  
      const correctPassword = await bcrypt.compare(req.body.password, user.password);
  
      if (!correctPassword) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
  
      const userToken = jwt.sign({
        id: user._id
      }, process.env.JWT_SECRET);
  
     
      res.cookie("usertoken", userToken, { httpOnly: true }).json({
        msg: "success!",
        user: user,
      });
    } catch (err) {
      console.error("Error in login:", err);
      res.status(500).json({ msg: "error", error: err.message });
    }
  },

  isAdmin: async (req, res) => {
    try {
      const user = await User.findById(req.jwtpayload.id);
      if (!user) {
        return res.status(400).json({ msg: "User not found" });
      }
      res.json({ isAdmin: user.isAdmin });
    } catch (err) {
      console.error("Error checking admin status:", err);
      res.status(500).json({ msg: "error", error: err.message });
    }
  },
};
