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

  // close the dropdown menu when clicked outside or on scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    };

    const handleScroll = () => {
      setToggleDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    // clean the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={
        "relative bg-accentRed p-2 text-white" +
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
          <hr className="h-px w-full border-white" />
          <Link href="/about" onClick={() => setToggleDropdown((td) => !td)}>
            Hakkımızda
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserSection;
