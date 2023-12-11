import React from "react";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-accentRed rounded-full focus:outline-none focus:border-none focus:ring-2 focus:ring-accentBlue bg-background placeholder:text-center"
      />
    </div>
  );
};

export default Searchbar;
