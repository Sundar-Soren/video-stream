import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { TwitterShareButton } from "react-share";

const VideoPlayer = () => {
  let { video_id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data } = await axios.get(
          `https://video-stream-712o.vercel.app/video/${video_id}`
        );
        setVideo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideo();
  }, []);
  const likeVideo = async () => {
    try {
      const { data } = await axios.patch(
        `https://video-stream-712o.vercel.app/video/${video_id}`
      );
      setVideo(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="p-4 sm:ml-64 mt-14 dark:bg-gray-800 text-white min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-center mb-8 ">
        <div className="mr-4">
          <div className="relative">
            <div className="w-full">
              <video src={video?.link} controls></video>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="text-lg font-bold mb-4">{video?.title}</div>
          <div className="text-gray-200 mb-4">Published on March 10, 2023</div>
          <div className="text-gray-200 mb-4">Views: {video?.views}</div>
          <div className="text-gray-300 mb-4">
            <span
              className="font-bold cursor-pointer"
              onClick={() => likeVideo()}
            >
              Likes:
            </span>{" "}
            {video?.likes}
          </div>
          <TwitterShareButton
            url={`https://video-stream-frontend.vercel.app/video/${video_id}`}
          >
            <div className="text-gray-200 mb-4 font-bold cursor-pointer">
              Share
            </div>
          </TwitterShareButton>
          <div className="text-gray-200 mb-4">
            Comments: {video?.comments?.length}
          </div>
          {video?.comments &&
            video.comments.map((comment, key) => (
              <Comments comment={comment} key={key} />
            ))}

          <div className="mt-4">
            {/* <form action="" method="POST"> */}
            <div>
              <label for="comment" className="sr-only">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500 bg-gray-700 p-1 rounded-md"
                placeholder="Add a comment"
              ></textarea>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button
                // type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2"
              >
                Reply
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
