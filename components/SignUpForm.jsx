"use client";

import { useState } from "react";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Button from "@/components/utils/Button";
import ErrorPage from "@/components/utils/ErrorPage";

const SignUpForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();

  const validateForm = (username, password) => {
    let tempErrors = {};

    if (username.length > 10)
      tempErrors.nickname = "Kullanıcı adı 10 karakterden fazla olamaz.";
    if (password.length > 20)
      tempErrors.password = "Şifre 20 karakterden fazla olamaz.";

    setValidationErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.nickname.value;
    const password = event.target.password.value;

    if (!validateForm(username, password)) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL +
      `/users?nickname=${username}&password=${password}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // auth failure
        // if (data.status !== 200) {
        //   // TODO: handle auth failure
        //   console.log("login failed");
        //   return;
        // }

        router.push("/");
      })
      .catch((error) => setError(new Error("Sunucu ile bağlantı kuramadık.")));
  };

  if (error !== null) return <ErrorPage message={error.message} />;

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground md:rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-5 text-text dark:text-darkText sm:w-1/4"
      >
        <label>Kullanıcı Adı</label>
        <Input
          placeholder="Kullanıcı Adı"
          type="text"
          name="nickname"
          error={validationErrors.hasOwnProperty("nickname")}
          message={validationErrors.nickname}
        />
        <label>E-posta</label>
        <Input placeholder="E-posta" type="email" name="email" />
        {/* password input w/ reveal button */}
        <label>Şifre</label>
        <div className="relative">
          <Input
            placeholder="Şifre"
            type={passwordShown ? "text" : "password"}
            name="password"
            error={validationErrors.hasOwnProperty("password")}
            message={validationErrors.password}
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
