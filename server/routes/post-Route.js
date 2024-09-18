import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  readPost,
  updatePost,
} from "../controllers/post-Controller.js";

const router = express.Router();

router.post("/create-post", createPost);
router.post("/update-post", updatePost);
router.delete("/delete-post:id", deletePost);
router.get("/read-post:id", readPost);
router.get("/all-posts", getPosts);

export default router;
