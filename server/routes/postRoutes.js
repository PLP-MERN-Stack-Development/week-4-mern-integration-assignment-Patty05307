const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController"); // ✅ correct path

const router = express.Router();

// CREATE
router.post("/", createPost);

// READ
router.get("/", getPosts);
router.get("/:id", getPostById);

// UPDATE
router.put("/:id", updatePost);

// DELETE
router.delete("/:id", deletePost);

module.exports = router;




















