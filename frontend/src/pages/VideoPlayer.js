import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  let { video_id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/video/${video_id}`
        );
        setVideo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideo();
  }, []);

  console.log(video);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mr-4">
          <div className="relative">
            <div className="">
              <video src={video?.link} controls></video>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="text-lg font-bold mb-4">{video?.title}</div>
          <div className="text-gray-500 mb-4">Published on March 10, 2023</div>
          <div className="text-gray-500 mb-4">Views: {video?.views}</div>
          <div className="text-gray-500 mb-4">Likes: {video?.likes}</div>
          <div className="text-gray-500 mb-4">
            Comments: {video?.comments?.length}
          </div>
          <div className="text-gray-500 mb-4">Share</div>
          <div className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/50"
                  alt=""
                />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Username
                </div>
                <div className="text-sm text-gray-500">
                  Posted on March 12, 2023
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/50"
                  alt=""
                />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Username
                </div>
                <div className="text-sm text-gray-500">
                  Posted on March 13, 2023
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
          <div className="mt-4">
            <form action="#" method="POST">
              <div>
                <label for="comment" className="sr-only">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="3"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Add a comment"
                ></textarea>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
