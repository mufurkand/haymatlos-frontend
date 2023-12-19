"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

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
          {/* TODO: collapse the bar when another part of the site is clicked */}
          {/* TODO: add a searchbar for mobile */}
        </div>
      )}
    </div>
  );
};

export default UserSection;
