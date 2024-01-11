"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Search = () => {
  const searchParams = useSearchParams();

  return (
    <div className="text-center text-4xl text-text dark:text-darkText">
      {searchParams.get("query")}
    </div>
  );
};

export default Search;
