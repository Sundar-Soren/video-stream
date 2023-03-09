const express = require("express");
const { createVideo, getAllVideos, getSingleVideo } = require("./controllers");

const router = express.Router();

router.post("/create", createVideo);
router.get("/videos", getAllVideos);
router.get("/video/:id", getSingleVideo);

module.exports = router;
