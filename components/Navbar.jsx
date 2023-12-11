"use client";

import { useState } from "react";
import Searchbar from "./Searchbar";
// for mobile pop-up menu
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="w-auto h-14 bg-foreground text-text flex justify-around items-center">
        <h1 className="text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-accentRed to-amber-500">
          haymatlos
        </h1>

        {/* Desktop Navigation */}
        {/* TODO: This gap might be a problem in the future */}
        <div className="sm:flex justify-around items-center hidden gap-20">
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
        <div className="sm:hidden flex">
          <button
            className="text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-amber-500 to-lime-500"
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
