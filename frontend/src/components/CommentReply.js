import React from "react";

const CommentReply = ({ reply }) => {
  return (
    <div>
      <div className=" pb-4 mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/50"
              alt=""
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-200">
              {reply.user}
            </div>
            <div className="text-sm text-gray-400">
              Posted on March 12, 2023
            </div>
            <div className="mt-2 text-sm text-gray-100">{reply.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentReply;
