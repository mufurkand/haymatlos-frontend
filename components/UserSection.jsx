"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const UserSection = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // close the dropdown menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // clean the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={
        "relative bg-accentRed p-2 text-text" +
        " " +
        (toggleDropdown ? "rounded-t-md" : "rounded-md")
      }
    >
      <button
        className="flex items-center justify-center gap-3"
        onClick={() => setToggleDropdown((td) => !td)}
      >
        <FontAwesomeIcon icon={faUser} />
        <div>Misafir</div>
        <FontAwesomeIcon icon={toggleDropdown ? faAngleUp : faAngleDown} />
      </button>
      {toggleDropdown && (
        <div className="absolute left-0 top-10 flex w-full flex-col items-center gap-3 rounded-b-md bg-accentRed p-2">
          <Link href="/sign-up" onClick={() => setToggleDropdown((td) => !td)}>
            Kayıt Ol
          </Link>
          <Link href="/log-in" onClick={() => setToggleDropdown((td) => !td)}>
            Giriş Yap
          </Link>
          {/* TODO: add a searchbar for mobile */}
        </div>
      )}
    </div>
  );
};

export default UserSection;
