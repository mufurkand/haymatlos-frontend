import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="w-auto h-14 bg-foreground text-text flex justify-around items-center">
      <h1 className="text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-amber-500 to-accentRed">
        haymatlos
      </h1>
      <p>Kültür/Sanat</p>
      <p>Bilim</p>
      <p>Felsefe</p>
      <p>Siyaset</p>
      <Searchbar />
    </div>
  );
};

export default Navbar;
