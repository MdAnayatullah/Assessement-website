// import express from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';
// import { auth } from '../middleware/auth.js';

// const router = express.Router();

// // Register
// router.post('/register', async (req, res) => {
//   try {
//     const { email, password, name } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     const user = new User({ email, password, name });
//     await user.save();

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     res.status(201).json({ token, user: { id: user._id, email: user.email, name: user.name } });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get user profile
// router.get('/profile', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select('-password');
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Update user profile
// router.patch('/profile', auth, async (req, res) => {
//   try {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['name', 'bio'];
//     const isValidOperation = updates.every(update => allowedUpdates.includes(update));

//     if (!isValidOperation) {
//       return res.status(400).json({ error: 'Invalid updates' });
//     }

//     const user = await User.findById(req.userId);
//     updates.forEach(update => user[update] = req.body[update]);
//     await user.save();

//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// export default router;

// import express from "express";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import { auth } from "../middleware/auth.js";

// const router = express.Router();

// // Register
// router.post("/register", async (req, res) => {
//   try {
//     const { email, password, name } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already registered" });
//     }

//     const user = new User({ email, password, name });
//     await user.save();

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     res.status(201).json({
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//         name: user.name,
//         bio: user.bio,
//         profilePicture: user.profilePicture,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//         name: user.name,
//         bio: user.bio,
//         profilePicture: user.profilePicture,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get user profile
// router.get("/profile", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Update user profile
// router.patch("/profile", auth, async (req, res) => {
//   try {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ["name", "bio", "profilePicture"];
//     const isValidOperation = updates.every((update) =>
//       allowedUpdates.includes(update)
//     );

//     if (!isValidOperation) {
//       return res.status(400).json({ error: "Invalid updates" });
//     }

//     const user = await User.findById(req.userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     updates.forEach((update) => (user[update] = req.body[update]));
//     await user.save();

//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// export default router;

import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { auth } from "../middleware/auth.js";
import multer from "multer";

const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB size limit
  fileFilter(req, file, cb) {
    const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedFormats.includes(file.mimetype)) {
      return cb(new Error("Only JPG, JPEG, and PNG formats are allowed"));
    }
    cb(null, true);
  },
});

// Register
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const user = new User({ email, password, name });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        bio: user.bio,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        bio: user.bio,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update user profile with image upload
router.patch(
  "/profile",
  auth,
  upload.single("profilePicture"), // Use multer to handle file uploads
  async (req, res) => {
    try {
      const updates = Object.keys(req.body);
      const allowedUpdates = ["name", "bio", "profilePicture"];
      const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
      );

      if (!isValidOperation) {
        return res.status(400).json({ error: "Invalid updates" });
      }

      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      updates.forEach((update) => (user[update] = req.body[update]));

      // Add profilePicture if file is uploaded
      if (req.file) {
        user.profilePicture = req.file.buffer.toString("base64"); // Store as base64 or save to a file system/cloud storage
      }

      await user.save();
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

export default router;
