import React from "react";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 border-2 border-accentRed rounded-full focus:outline-none focus:border-accentBlue bg-background placeholder:text-center"
      />
    </div>
  );
};

export default Searchbar;
