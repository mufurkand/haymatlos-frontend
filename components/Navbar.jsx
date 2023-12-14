"use client";

import { useState } from "react";
import Searchbar from "./Searchbar";
// for mobile pop-up menu
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import UserSection from "./UserSection";

const Navbar = () => {
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
        <div className="relative flex justify-end sm:basis-1/4">
          <UserSection />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
