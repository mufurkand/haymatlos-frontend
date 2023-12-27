"use client";

import Input from "@/components/utils/Input";
import TextArea from "@/components/utils/TextArea";
import { useState } from "react";
import { Category } from "@/components/PostContainer";

// TODO: input validation

const CreatePostForm = () => {
  const categories = [
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const imageUrl = event.target.imageUrl.value;
    const date = new Date().toISOString();
    const category = activeCategory;

    console.log(title, content, imageUrl, date, category);
  };

  return (
    <div className="flex w-full justify-center bg-background dark:bg-darkBackground">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl flex-col gap-5 p-5 text-text dark:text-darkText sm:w-1/2"
      >
        <label>Başlık</label>
        <Input placeholder="Açıklayıcı bir başlık" type="text" name="title" />
        <label>İçerik</label>
        <TextArea
          placeholder="Gönderi içeriği"
          type="textarea"
          name="content"
        />
        <label>Resim</label>
        <Input
          placeholder="Paylaşmak istediğiniz resmin linki"
          type="text"
          name="imageUrl"
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
