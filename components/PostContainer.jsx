"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// import posts from "@/tests/posts";
import Searchbar from "@/components/Searchbar";
import PostContainerSkeleton from "@/components/skeletons/PostContainerSkeleton";
import ErrorPage from "@/components/utils/ErrorPage";

export const Post = ({ post, isLink = true }) => {
  const date = new Date(post.regDate);

  const postBody = (
    <>
      <div className="flex justify-between text-lg font-semibold text-black dark:text-white">
        {post.title}
      </div>
      {/* TODO: img validation */}
      <img
        className="rounded-lg"
        src={post.imageUrl}
        onError={(e) => (e.target.style.display = "none")}
      />
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
          <p>{date.toLocaleDateString("en-US")}</p>
          {/* TODO: need a backend endpoint to fetch username from id */}
          <p>{/* {post.fkeyUuidUser} */}FIX</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {isLink ? (
        <Link
          href={"/post/" + post.id}
          className="flex w-full flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5 dark:bg-darkForeground"
        >
          {postBody}
        </Link>
      ) : (
        <div className="flex w-full flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5 dark:bg-darkForeground">
          {postBody}
        </div>
      )}
    </>
  );
};

export const Category = ({ category, activeCategory, setActiveCategory }) => {
  const isActive = activeCategory === category.id;

  return (
    <button
      type="button"
      className={
        "flex items-center rounded-lg border-2 border-solid p-2 text-center transition-all" +
        " " +
        // TODO: may break on dark mode
        (isActive
          ? "border-foreground bg-accentRed text-white dark:border-darkForeground"
          : "border-accentRed bg-foreground text-text dark:bg-darkForeground dark:text-darkText")
      }
      onClick={() => setActiveCategory(category.id)}
    >
      {category.name}
    </button>
  );
};

const PostContainer = () => {
  const categories = [
    { name: "Anasayfa", id: "home" },
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // on mount
  useEffect(() => {
    const getPosts = async () => {
      console.log("Active category: " + activeCategory);
      await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL +
          "/posts" +
          (activeCategory === "home"
            ? "?"
            : "/category?category=" + activeCategory + "&") +
          "pageSize=20",
      )
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.data["$values"]);
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    };

    getPosts();
    console.log(posts);
  }, [activeCategory]);

  if (isLoading) return <PostContainerSkeleton />;
  if (error) return <ErrorPage message={error.message} />;

  return (
    <div className="flex flex-col items-center p-5">
      {/* Searchbar for Mobile */}
      {/* TODO: add a search button to navbar and dynamically show searchbar */}
      <div className="mb-5 flex w-full sm:mb-0 sm:hidden">
        <Searchbar />
      </div>
      {/* Categories */}
      <div className="mb-5 flex h-14 w-full items-center gap-5 overflow-auto bg-background dark:bg-darkBackground sm:justify-center">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
      {/* Posts */}
      <div className="flex w-full flex-col gap-5 overflow-auto bg-background dark:bg-darkBackground">
        {posts.map((post) => (
          <Post key={post.pkeyUuidPost} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
