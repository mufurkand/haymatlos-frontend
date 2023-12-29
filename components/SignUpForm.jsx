"use client";

import { useState } from "react";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Button from "@/components/utils/Button";

const SignUpForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nickname = event.target.nickname.value;
    const password = event.target.password.value;
    await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        `/users?nickname=${nickname}&password=${password}`,
      {
        method: "POST",
      },
    );
    router.push("/");
  };

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground md:rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-5 text-text dark:text-darkText sm:w-1/4"
      >
        <label>Kullanıcı Adı</label>
        <Input placeholder="Kullanıcı Adı" type="text" name="nickname" />
        <label>E-posta</label>
        <Input placeholder="E-posta" type="email" name="email" />
        {/* password input w/ reveal button */}
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
          <Button content="Kaydol" isSubmitButton={true} />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
