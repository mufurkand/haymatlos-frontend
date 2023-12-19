"use client";

import posts from "@/tests/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const page = ({ params }) => {
  const post = posts.find((post) => post.id === params.postId);
  return (
    <div className="bg-background p-5">
      {post ? (
        <div className="flex flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5">
          <div className="flex justify-between text-white">{post.title}</div>
          <div className="text-text">{post.content}</div>
          <div className="flex justify-between">
            <div className="flex justify-between gap-2">
              <div className="flex items-center justify-between gap-1 text-gray-500">
                <FontAwesomeIcon icon={faThumbsUp} />
                <p>{post.likes}</p>
              </div>
              <div className="flex items-center justify-between gap-1 text-gray-500">
                <FontAwesomeIcon icon={faThumbsDown} />
                <p>{post.dislikes}</p>
              </div>
              <div className="flex items-center justify-between gap-1 text-gray-500">
                <FontAwesomeIcon icon={faMessage} />
                <p>{post.likes}</p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-500">
              <p>{post.date}</p>
              <p>{post.user}</p>
            </div>
          </div>
        </div>
      ) : (
        "Post not found"
      )}
    </div>
  );
};

export default page;
