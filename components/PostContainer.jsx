"use client";

import { useState, useEffect } from "react";
import PostContainerSkeleton from "@/components/skeletons/PostContainerSkeleton";
import Post from "@/components/utils/Post";
import PostLoader from "@/components/skeletons/PostLoader";

// TODO: rename this component to Home and extract tbe post logic to a new
// component named PostContainer

const PostContainer = ({ activeCategory, setError }) => {
  const [postData, setPostData] = useState({
    posts: [],
    page: { number: 1, nextPage: false },
  });
  const [isLoading, setIsLoading] = useState(true);

  const loadPosts = async () => {
    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL +
      "/posts" +
      (activeCategory === "home"
        ? "?"
        : "/category?category=" + activeCategory + "&") +
      "pageNumber=" +
      postData.page.number +
      "&" +
      "pageSize=10";

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // TODO: deconstruct posts properly
        console.log(data);

        setPostData({
          ...postData,
          page: {
            number: data.pageNumber,
            nextPage: data.nextPage === null ? false : true,
          },
          posts: [...postData.posts, ...data.data["$values"]],
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setError(new Error("Sunucu ile bağlantı kuramadık."));
      });
  };

  // on mount
  useEffect(() => {
    console.log("USEEFFECT TRIGGERED");
    loadPosts();
  }, [postData.page.number]);

  if (isLoading) return <PostContainerSkeleton />;

  return (
    <div className="flex w-full flex-col gap-5 overflow-auto bg-background dark:bg-darkBackground">
      {postData.posts.map((post) => (
        <Post key={post.pkeyUuidPost} post={post} />
      ))}
      <PostLoader
        page={postData.page}
        incrementPage={() =>
          setPostData({
            ...postData,
            page: { ...postData.page, number: postData.page.number + 1 },
          })
        }
      />
    </div>
  );
};

export default PostContainer;
