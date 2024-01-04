"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Post = ({ page, incrementPage }) => {
  const loaderRef = useRef();

  useEffect(() => {
    if (page.nextPage === false) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      console.log("lmao");
      console.log(page);
      incrementPage();
    });

    observer.observe(loaderRef.current);

    // cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  if (page.nextPage === false)
    return (
      <div className="flex items-center justify-center gap-1">
        <span className="text-xl text-text dark:text-darkText">
          Başka gönderi kalmadı, git biraz çimene dokun
        </span>
        <div className="flex h-7 w-7 flex-col items-center justify-center p-1">
          <FontAwesomeIcon className="text-green-500" icon={faSeedling} />
        </div>
      </div>
    );

  return (
    <div
      className="flex h-48 w-full flex-col gap-2 rounded-lg bg-foreground p-5 transition-all dark:bg-darkForeground"
      ref={loaderRef}
    >
      <div className="mb-2 h-7 w-full animate-pulse rounded-lg bg-background dark:bg-darkBackground"></div>
      <div className="h-full w-full animate-pulse rounded-lg bg-background dark:bg-darkBackground"></div>
    </div>
  );
};

export default Post;
