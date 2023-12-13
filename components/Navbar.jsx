"use client";

import { useState } from "react";
import Searchbar from "./Searchbar";
// for mobile pop-up menu
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="fixed left-0 top-0 flex w-full flex-col">
      <div className="flex h-14 w-auto items-center justify-between bg-foreground px-14 text-text">
        <h1 className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
          haymatlos
        </h1>

        {/* Desktop Navigation */}
        {/* TODO: This gap might be a problem in the future */}
        <div className="hidden items-center justify-around gap-20 sm:flex">
          {/* <p>Kültür/Sanat</p>
          <p>Bilim</p>
          <p>Felsefe</p>
          <p>Siyaset</p> */}
          <Searchbar />
        </div>

        {/* Mobile Navigation */}
        {/* FIXME: Can't really hide dropdown in Sidebar component. Clicking
        a link won't affect toggleDropdown variable and trigger a re-render.
        Maybe create a seperate list? */}
        <div className="flex sm:hidden">
          <button
            className="text-xl text-accentRed"
            // state queue so we can safely toggle the state
            onClick={() => setToggleDropdown((td) => !td)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {toggleDropdown && <Sidebar />}
    </div>
  );
};

export default Navbar;
