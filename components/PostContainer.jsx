"use client";

import { useState } from "react";

const Post = () => {
  return <div className="h-48 w-full flex-none rounded-md bg-foreground"></div>;
};

const Category = ({ category, activeCategory, setActiveCategory }) => {
  const isActive = activeCategory === category.id;

  return (
    // TODO: implement a proper active state in the parent container
    <button
      className={
        "flex items-center border-2 border-solid p-2 text-center text-text transition-all" +
        " " +
        (isActive
          ? "border-foreground bg-accentRed"
          : "border-accentRed bg-foreground") +
        " " +
        (isActive ? "rounded-full" : "rounded-lg")
      }
      // state queue so we can safely toggle the active state
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

  return (
    <div className="flex h-full w-full flex-col items-center p-5">
      {/* Categories */}
      <div className="mb-5 flex h-14 w-full items-center gap-5 overflow-auto bg-background sm:rounded-tl-md">
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
      <div className="flex w-full flex-col gap-5 overflow-auto bg-background">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostContainer;
