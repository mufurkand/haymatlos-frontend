import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
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
      <div className="sm:hidden flex">
        <button className="text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-amber-500 to-lime-500">
          [O]
        </button>
      </div>
    </div>
  );
};

export default Navbar;
