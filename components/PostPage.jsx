"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Textarea from "@/components/utils/Textarea";
import Button from "@/components/utils/Button";
import { useEffect, useState } from "react";
import ErrorPage from "@/components/utils/ErrorPage";

const PostPage = ({ postId }) => {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  const loadPost = async () => {
    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/posts/postid?postid=" + postId;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // TODO: deconstruct posts properly
        const date = new Date(data.data.regDate);
        setPost({ ...data.data, date });
      })
      .catch(() => {
        setError(new Error("Sunucu ile bağlantı kuramadık."));
      });
  };

  useEffect(() => {
    loadPost();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  if (error !== null) return <ErrorPage message={error.message} />;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5 dark:bg-darkForeground">
        <div className="flex justify-between text-xl text-black dark:text-white">
          {post.title}
        </div>
        {post.imageUrl !== "" ? (
          <img
            className="rounded-lg"
            src={post.imageUrl}
            onError={(e) => (e.target.style.display = "none")}
          />
        ) : (
          ""
        )}
        <div className="text-text dark:text-darkText">{post.content}</div>
        <div className="flex justify-between">
          <div className="flex justify-between gap-2">
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>{post.like}</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FontAwesomeIcon icon={faThumbsDown} />
              <p>{post.dislike}</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FontAwesomeIcon icon={faMessage} />
              <p>FIX</p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-500">
            <p>{post.date ? post.date.toLocaleDateString("tr-TR") : ""}</p>
            {/* TODO: need a backend endpoint to fetch username from id */}
            <p>{/* {post.fkeyUuidUser} */}FIX</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2 text-text dark:text-darkText">Comments</label>
        <Textarea
          placeholder="Yorumunuzu buraya yazın."
          name="comment"
        ></Textarea>
        <Button isSubmitButton={true} className="self-end">
          Yorum Yap
        </Button>
      </form>
    </div>
  );
};

export default PostPage;
