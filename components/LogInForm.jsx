"use client";

import { useState } from "react";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "@/contexts/UserContext";

const LogInForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { user, setUser } = useUserContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.nickname.value;
    const password = event.target.password.value;
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        `/users/login?nickname=${username}&password=${password}`,
    );

    const { nickname, role, token, uuid } = await response.json();
    const user = {
      nickname,
      role,
      token,
      uuid,
    };

    setUser(user);
  };

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground">
      <form
        className="flex flex-col gap-5 p-5 text-text dark:text-darkText sm:w-1/4"
        onSubmit={handleSubmit}
      >
        <label>Kullanıcı Adı</label>
        <Input placeholder="Kullanıcı Adı" type="text" name="nickname" />
        <label>Şifre</label>
        <div className="relative">
          <Input
            placeholder="Şifre"
            type={passwordShown ? "text" : "password"}
            name="password"
          />
          <button
            type="button"
            className="absolute right-2 top-2"
            onClick={(e) => {
              e.preventDefault();
              setPasswordShown((ps) => !ps);
            }}
          >
            <FontAwesomeIcon
              icon={passwordShown ? faEyeSlash : faEye}
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="rounded-md bg-foreground p-2 hover:bg-accentRed dark:bg-darkForeground"
            type="submit"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
