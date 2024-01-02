"use client";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/utils/Button";
import { useUserContext } from "@/contexts/UserContext";
import ErrorCodePage from "@/components/utils/ErrorCodePage";

const ProfileEdit = () => {
  const { user } = useUserContext();

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

        <div className="flex justify-center gap-5">
          <Button content="Güncelle" isSubmitButton={true} />
          {/* TODO: lacks an onClick */}
          <Button content="Vazgeç" isSubmitButton={false} />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
