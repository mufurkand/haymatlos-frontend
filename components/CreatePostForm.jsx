"use client";

import Input from "@/components/utils/Input";
import TextArea from "@/components/utils/TextArea";
import { useState } from "react";
import { Category } from "@/components/PostContainer";
import { useUserContext } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { validateImageUrl } from "@/utils/validation";
import UnauthorizedPage from "./utils/UnauthorizedPage";

// TODO: input validation

const CreatePostForm = () => {
  const categories = [
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const { user } = useUserContext();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();

  const validateForm = (title, content, imageUrl) => {
    let tempErrors = {};

    if (title.length > 100)
      tempErrors.title = "Başlık 100 karakterden fazla olamaz.";
    if (content.length > 2000)
      tempErrors.content = "İçerik 2000 karakterden fazla olamaz.";
    if (!validateImageUrl(imageUrl))
      tempErrors.imageUrl = "Lütfen geçerli bir link giriniz.";

    setValidationErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const imageUrl = event.target.imageUrl.value;
    const category = activeCategory;

    if (!validateForm(title, content, imageUrl)) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/posts?userId=" + user.uuid;

    console.log(url);

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        imageUrl,
        category,
      }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => setError(new Error("Sunucu ile bağlantı kuramadık.")));

    router.push("/");
  };

  if (user === null) return <UnauthorizedPage />;
  if (error !== null) return <ErrorPage message={error.message} />;

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl flex-col gap-5 p-5 text-text dark:text-darkText sm:w-1/2"
      >
        <label>Başlık</label>
        <Input
          placeholder="Açıklayıcı bir başlık"
          type="text"
          name="title"
          error={validationErrors.hasOwnProperty("title")}
          message={validationErrors.title}
        />
        <label>İçerik</label>
        <TextArea
          placeholder="Gönderi içeriği"
          type="textarea"
          name="content"
          error={validationErrors.hasOwnProperty("content")}
          message={validationErrors.content}
        />
        <label>Resim</label>
        <Input
          placeholder="Paylaşmak istediğiniz resmin linki"
          type="text"
          name="imageUrl"
          error={validationErrors.hasOwnProperty("imageUrl")}
          message={validationErrors.imageUrl}
        />
        <label>Gönderi Kategorisi</label>
        <div className="flex h-14 w-full items-center gap-5 overflow-auto bg-background dark:bg-darkBackground">
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
        {/* this div stops the button from taking up the entire horizontal space */}
        <div className="flex justify-center">
          <button
            className="rounded-md bg-foreground p-2 hover:bg-accentRed dark:bg-darkForeground"
            type="submit"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
