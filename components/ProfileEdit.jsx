"use client";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/utils/Button";
import { useUserContext } from "@/contexts/UserContext";
import ErrorCodePage from "@/components/utils/ErrorCodePage";
import { useEffect } from "react";

const ProfileEdit = () => {
  const { user } = useUserContext();

  useEffect(() => {
    if (user === null) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/users?userId=" + user.uuid;

    const getUserInfo = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) =>
          setError(new Error("Sunucu ile bağlantı kuramadık.")),
        );
    };

    getUserInfo();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");
  };

  if (user === null)
    return <ErrorCodePage code={401} message="Lütfen giriş yapın." />;

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground md:rounded-lg">
      <form
        className="flex flex-col gap-5 p-5 text-text dark:text-darkText sm:w-2/5"
        onSubmit={handleSubmit}
      >
        <label> Profil Fotoğrafı</label>
        {/* avatar yoksa placeholder iskelet? */}
        <div className="flex items-center justify-center">
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-accentRed p-10 text-white">
            <FontAwesomeIcon className="flex-1" icon={faUser} />
          </div>
          <button //resmin üzerine koymak?
            type="button"
            className="flex h-12 w-12 flex-col items-center justify-center self-end rounded-full bg-accentRed p-3 text-white"
            onClick={() => {
              //change avatar
            }}
          >
            <FontAwesomeIcon className="flex-1" icon={faCamera} />
          </button>
        </div>

        <label>Kullanıcı Adı</label>
        <Input placeholder="" type="text" name="nickname" />
        <label>Ad Soyad</label>
        <Input placeholder="" type="text" name="namesurname" />
        {/* placeholder yerine şu anki veri */}

        <label>Cinsiyet</label>
        <select
          defaultValue="DEFAULT"
          className="w-full cursor-pointer rounded-md bg-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accentRed dark:bg-darkForeground"
        >
          <option value="DEFAULT">Cinsiyetinizi seçin</option>
          <option value="woman">Kadın</option>
          <option value="man">Erkek</option>
          <option value="other">Diğer</option>
        </select>

        <label>Doğum Tarihi</label>
        <input
          className="rounded-md bg-foreground p-2 text-text focus:outline-none focus:ring-2 focus:ring-accentRed dark:bg-darkForeground dark:text-darkText dark:[color-scheme:dark]"
          type="date"
          name="birthdate"
        />

        <div className="flex justify-center gap-5">
          <Button isSubmitButton={true}>Güncelle</Button>
          {/* TODO: lacks an onClick */}
          <Button isSubmitButton={false}>Vazgeç</Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
