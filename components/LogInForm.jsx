"use client";

import { useState } from "react";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import Button from "@/components/utils/Button";

const LogInForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.nickname.value;
    const password = event.target.password.value;
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        `/users/login?nickname=${username}&password=${password}`,
    );

    const data = await response.json();

    // auth failure
    if (data.status !== 200) {
      // TODO: handle auth failure
      return;
    }

    const { nickname, role, token, uuid } = data;
    const user = {
      nickname,
      role,
      token,
      uuid,
    };

    setUser(user);
    router.push("/");
  };

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground md:rounded-lg">
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
            className="absolute right-3 top-3 flex h-4 w-4 flex-col items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              setPasswordShown((ps) => !ps);
            }}
          >
            <FontAwesomeIcon
              className="flex-1"
              icon={passwordShown ? faEyeSlash : faEye}
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className="flex justify-center">
          <Button content="Giriş Yap" isSubmitButton={true} />
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
