"use client";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileEdit = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground">
      <form
        className="flex flex-col gap-5 p-5 text-text dark:text-darkText sm:w-2/5"
        onSubmit={handleSubmit}
      >
        <label> Profil Fotoğrafı</label>
        {/* avatar yoksa placeholder iskelet? */}
        <div className="flex items-center justify-center self-start">
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-accentRed p-10 text-white">
            <FontAwesomeIcon className="flex-1" icon={faUser} />
          </div>
          <button //resmin üzerine koymak?
            type="button"
            className="flex h-4 w-4 items-center justify-center self-end rounded-full bg-accentRed p-5 text-white"
            onClick={() => {
              //change avatar
            }}
          >
            <FontAwesomeIcon icon={faCamera} />
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

        <div className="flex justify-center gap-5">
          <button
            className="rounded-md bg-foreground p-2 hover:bg-accentRed hover:text-white dark:bg-darkForeground"
            onClick={() => {}}
          >
            Güncelle
          </button>

          <button
            className="rounded-md bg-foreground p-2 hover:bg-accentRed hover:text-white dark:bg-darkForeground"
            type="button"
            onClick={() => {
              //profil sayfasına dön
            }}
          >
            Vazgeç
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
