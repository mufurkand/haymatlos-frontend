"use client";

import { useState } from "react";

const Post = () => {
  return <div className="h-48 w-full flex-none rounded-md bg-foreground"></div>;
};

const Category = ({ name }) => {
  const [active, setActive] = useState(false);

  return (
    // TODO: implement a proper active state in the parent container
    <button
      className={
        "flex items-center border-2 border-solid p-2 text-center text-text transition-all" +
        " " +
        (active
          ? // ? "border-foreground bg-accentBlue hover:border-accentBlue hover:bg-foreground"
            "border-foreground bg-gradient-to-br from-accentBlue to-blue-500 hover:border-accentBlue hover:bg-foreground"
          : "border-accentBlue bg-foreground hover:border-foreground hover:bg-accentBlue") +
        " " +
        (active ? "rounded-full" : "rounded-lg")
      }
      // state queue so we can safely toggle the active state
      onClick={() => setActive((a) => !a)}
    >
      {name}
    </button>
  );
};

const PostContainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center p-5">
      {/* Categories */}
      <div className="mb-5 flex h-14 w-full items-center gap-5 overflow-auto bg-background sm:rounded-tl-md">
        <Category name="Anasayfa" />
        <Category name="Kültür/Sanat" />
        <Category name="Bilim" />
        <Category name="Felsefe" />
        <Category name="Siyaset" />
      </div>
      {/* Posts */}
      {/*
        AHHHHHHHHHHHHHH I HATE CSS.
        Adding posts dynamically will eventually cause the page to overflow.
        So we solve this by adding a max-height and overflow-auto to the parent
        container but the max-h class does not work with dynamic values.
        So we have to calculate the height of the page and subtract the height
        of both the Navbar and Categorybar.
      */}
      <div className="flex max-h-[calc(100vh-3.5rem-3.5rem-2.5rem-1.25rem)] w-full flex-col gap-5 overflow-auto bg-background">
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
