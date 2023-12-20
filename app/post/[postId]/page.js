"use client";

import posts from "@/tests/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/components/PostContainer";

const page = ({ params }) => {
  const post = posts.find((post) => post.id === params.postId);
  return (
    <div className="bg-background p-5">
      <Post post={post} isLink={false}></Post>
    </div>
  );
};

export default page;
