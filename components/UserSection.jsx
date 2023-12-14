"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const UserSection = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div
      className={
        "relative bg-accentRed p-2 text-text" +
        " " +
        (toggleDropdown ? "rounded-t-md" : "rounded-md")
      }
    >
      <div
        className="flex items-center justify-center gap-3"
        onClick={() => setToggleDropdown((td) => !td)}
      >
        <FontAwesomeIcon icon={faUser} />
        <div>Guest</div>
        <FontAwesomeIcon icon={toggleDropdown ? faAngleUp : faAngleDown} />
      </div>
      {toggleDropdown && (
        <div className="absolute left-0 top-10 flex w-full flex-col items-center gap-3 rounded-b-md bg-accentRed p-2">
          <p>Sign In</p>
          <p>
            Log In
            {/* TODO: add a searchbar for mobile */}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSection;
