const express = require("express");
const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  likeVideo,
} = require("./controllers");

const router = express.Router();

router.post("/create", createVideo);
router.get("/videos", getAllVideos);
router.get("/video/:id", getSingleVideo);
router.patch("/video/:id", likeVideo);

module.exports = router;
