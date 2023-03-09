import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import axios from "axios";

const Home = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/videos");
        setVideoList(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getVideoList();
  }, []);

  console.log(videoList);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {videoList.length > 0 &&
        videoList.map((video, i) => (
          <div className="bg-gray-200" key={i}>
            <VideoCard video={video} />
          </div>
        ))}
    </div>
  );
};

export default Home;
