"use client";

import { useState, useEffect } from "react";
import Searchbar from "@/components/Searchbar";
import PostContainerSkeleton from "@/components/skeletons/PostContainerSkeleton";
import ErrorPage from "@/components/utils/ErrorPage";
import Post from "@/components/utils/Post";
import Category from "@/components/utils/Category";
import PostLoader from "@/components/skeletons/PostLoader";

// TODO: rename this component to Home and extract tbe post logic to a new
// component named PostContainer

const PostContainer = ({ activeCategory }) => {
  const categories = [
    { name: "Anasayfa", id: "home" },
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const [postData, setPostData] = useState({
    posts: [],
    page: { number: 1, nextPage: false },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (error) return <ErrorPage message={error.message} />;

  return (
    <div className="flex flex-col items-center bg-background p-5 dark:bg-darkBackground md:rounded-lg">
      {/* Searchbar for Mobile */}
      {/* TODO: add a search button to navbar and dynamically show searchbar */}
      <div className="mb-5 flex w-full sm:mb-0 sm:hidden">
        <Searchbar />
      </div>
      {/* Categories */}
      <div className="mb-5 flex h-14 w-full items-center gap-5 overflow-auto sm:justify-center">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            activeCategory={activeCategory}
          />
        ))}
      </div>
      {/* Posts */}
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
    </div>
  );
};

export default PostContainer;
