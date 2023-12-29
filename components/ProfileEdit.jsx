import { useState } from "react";

import Input from "@/components/utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";


const ProfileEdit = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    {/*
    const nickname = event.target.nickname.value;
    const password = event.target.password.value;
    const response = await fetch(
      `https://192.168.175.227:7090/users/login?nickname=${nickname}&password=${password}`,
    );
    const data = await response.text();
    console.log(data);
    */}
  };

  return (
    <div className="flex w-full justify-center bg-background">
      <form
        className="flex flex-col gap-5 p-5 text-text sm:w-1/4"
        onSubmit={handleSubmit}
      >
        <label> Profil Fotoğrafı</label>
        {/* avatar yoksa placeholder iskelet? */}
        <div className="flex">
        <img className="w-1/2 rounded-full bg-accentRed object-center object-cover" src="https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-256.png" alt="avatar"></img>
        <button //resmin üzerine koymak?
            className="w-1/6 h-1/3 flex-col rounded-full bg-accentRed"
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
        <label>Kullanıcı Adı</label>
        <Input placeholder="" type="text" name="nickname" />
        {/* placeholder yerine şu anki veri */}

        <label>Cinsiyet</label>
        <select defaultValue="DEFAULT" className="cursor-pointer w-full rounded-md bg-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accentRed">
          <option value="DEFAULT" >Cinsiyetinizi seçin</option>
           <option value="woman">Kadın</option>
           <option value="man">Erkek</option>
           <option value="other">Diğer</option>
        </select>

        <div className="flex justify-center gap-3"> 
          <button
            className="rounded-md bg-foreground p-2 hover:bg-accentRed"
            type="submit"
            onClick={() =>{
              
            }}
          >
            Güncelle
          </button>

          <button
            className="rounded-md bg-foreground p-2 hover:bg-accentRed"
            type=""
            onClick={() =>{
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