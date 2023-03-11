import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import axios from "axios";

const Home = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const { data } = await axios.get(
          "https://video-stream-712o.vercel.app/videos"
        );
        setVideoList(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getVideoList();
  }, []);

  console.log(videoList);

  return (
    <div className="p-4 sm:ml-64 mt-14 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
        {videoList.length > 0 &&
          videoList.map((video, i) => (
            <div key={i}>
              <VideoCard video={video} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
