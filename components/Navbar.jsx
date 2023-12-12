"use client";

import { useState } from "react";
import Searchbar from "./Searchbar";
// for mobile pop-up menu
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex h-14 w-auto items-center justify-around bg-foreground text-text">
        <h1 className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
          haymatlos
        </h1>

        {/* Desktop Navigation */}
        {/* TODO: This gap might be a problem in the future */}
        <div className="hidden items-center justify-around gap-20 sm:flex">
          <p>Kültür/Sanat</p>
          <p>Bilim</p>
          <p>Felsefe</p>
          <p>Siyaset</p>
          <Searchbar />
        </div>

        {/* Mobile Navigation */}
        {/* FIXME: Can't really hide dropdown in Sidebar component. Clicking
        a link won't affect toggleDropdown variable and trigger a re-render.
        Maybe create a seperate list? */}
        <div className="flex sm:hidden">
          <button
            className="bg-gradient-to-r from-amber-500 to-lime-500 bg-clip-text text-2xl font-extrabold text-transparent"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            [O]
          </button>
        </div>
      </div>
      {toggleDropdown && <Sidebar />}
    </div>
  );
};

export default Navbar;
