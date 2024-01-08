"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useUserContext } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";

const UserSection = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { user, setUser } = useUserContext();
  const router = useRouter();

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

  const logOut = () => {
    setUser(null);
    setToggleDropdown(false);
    router.push("/");
    // TODO: handle localStorage
  };

  return (
    <div
      ref={dropdownRef}
      className={
        "relative bg-accentRed p-1 text-white" +
        " " +
        (toggleDropdown ? "rounded-t-md" : "rounded-md")
      }
    >
      <button
        className="w-30 flex items-center justify-center gap-2"
        onClick={() => setToggleDropdown((td) => !td)}
      >
        <div className="flex w-6 flex-col items-center justify-center p-1">
          <FontAwesomeIcon className="flex-1" icon={faUser} />
        </div>
        <div>{user === null ? "Misafir" : user.nickname}</div>
        <div className="flex h-7 w-7 flex-col items-center justify-center p-1">
          <FontAwesomeIcon
            className="flex-1"
            icon={toggleDropdown ? faAngleUp : faAngleDown}
          />
        </div>
      </button>
      {/* TODO: add animation to dropdown. this will probably require the
      dropdown to be always present, just not visible. */}
      {toggleDropdown && (
        <div className="absolute left-0 top-9 flex w-full flex-col items-center gap-3 rounded-b-md bg-accentRed p-2 text-center">
          {user === null ? (
            <>
              <Link
                href="/sign-up"
                onClick={() => setToggleDropdown((td) => !td)}
              >
                Kayıt Ol
              </Link>
              <Link
                href="/log-in"
                onClick={() => setToggleDropdown((td) => !td)}
              >
                Giriş Yap
              </Link>
            </>
          ) : (
            <>
              {/* TODO: placeholder, will move this functionality to profile page soon. */}
              <Link
                href="/profile"
                onClick={() => setToggleDropdown((td) => !td)}
              >
                Profil
              </Link>
              <button onClick={() => logOut()}>Çıkış Yap</button>
            </>
          )}
          <hr className="h-px w-full border-white" />
          <Link href="/about" onClick={() => setToggleDropdown((td) => !td)}>
            S.S.S.
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserSection;
