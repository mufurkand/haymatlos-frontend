import { useState } from "react";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="flex w-full justify-center bg-background">
      <form className="flex flex-col gap-5 p-5 text-text sm:w-1/4">
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
            className="rounded-md bg-foreground p-2 hover:bg-accentRed"
            type="submit"
          >
            Kaydol
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
