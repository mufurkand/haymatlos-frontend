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
      <div className="flex h-14 w-auto items-center justify-between gap-5 bg-foreground px-5 text-text sm:px-14">
        <h1 className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent sm:basis-1/4">
          haymatlos
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:flex-auto">
          <Searchbar className="sm:flex-auto sm:basis-2/4" />
        </div>
        <div className="hidden justify-end sm:flex sm:basis-1/4">
          PLACEHOLDER
        </div>
        {/* </div> */}

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
      <div
        className={
          (toggleDropdown ? "flex" : "hidden") +
          " " +
          "flex-col rounded-b-md bg-foreground p-5"
        }
      >
        <Sidebar />
        <Searchbar />
      </div>
    </div>
  );
};

export default Navbar;
