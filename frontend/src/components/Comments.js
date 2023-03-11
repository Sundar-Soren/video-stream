import React, { useState } from "react";
import CommentReply from "./CommentReply";

const Comments = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <div>
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
            <div className="text-sm font-medium text-gray-200">
              {comment.user}
            </div>
            <div className="text-sm text-gray-400">
              Posted on March 12, 2023
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-100 mb-2">{comment.text}</div>
        <div className="text-sm cursor-pointer text-blue-600 font-semibold  ml-14">
          <div
            className="flex items-center gap-2 mb-3 w-max"
            onClick={() => setShowReply((state) => !state)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/50"
              alt=""
            />
            {comment.replies?.length || 0} reply
          </div>
          {showReply && (
            <div>
              {comment.replies &&
                comment.replies.map((reply) => <CommentReply reply={reply} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
