const Video = require("./models");
exports.createVideo = async (req, res) => {
  try {
    const createdVideo = await Video.create(req.body);
    res.json(createdVideo);
  } catch (error) {
    res.status.json(errro.message);
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const Videos = await Video.find(req.body);
    res.json(Videos);
  } catch (error) {
    res.status(501).json(errro.message);
  }
};
exports.getSingleVideo = async (req, res) => {
  try {
    const getVideo = await Video.findById(req.params.id);
    res.json(getVideo);
  } catch (error) {
    res.status(501).json(error.message);
  }
};
