"use client";

import { useState } from "react";
import Searchbar from "@/components/Searchbar";
import ErrorPage from "@/components/utils/ErrorPage";
import Category from "@/components/utils/Category";
import PostContainer from "@/components/PostContainer";

// TODO: rename this component to Home and extract tbe post logic to a new
// component named PostContainer

const Home = ({ activeCategory }) => {
  const categories = [
    { name: "Anasayfa", id: "home" },
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const [error, setError] = useState(null);

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
      <PostContainer activeCategory={activeCategory} setError={setError} />
    </div>
  );
};

export default Home;
