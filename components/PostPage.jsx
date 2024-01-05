"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import TextArea from "@/components/utils/TextAreaInput";
import Button from "@/components/utils/Button";
import { useEffect, useState } from "react";
import ErrorPage from "@/components/utils/ErrorPage";
import { useUserContext } from "@/contexts/UserContext";
import Input from "@/components/utils/Input";
import Category from "@/components/utils/Category";
import { useRouter } from "next/navigation";
import { Post as PostSkeleton } from "@/components/skeletons/PostContainerSkeleton";

const PostPage = ({ postId }) => {
  const categories = [
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInEditMode, setIsInEditMode] = useState(false);

  const { user } = useUserContext();

  const loadPost = async () => {
    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/posts/postid?postid=" + postId;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // TODO: deconstruct posts properly
        const date = new Date(data.data.regDate);
        // FIXME: it works but there are two setState calls
        setPost({ ...data.data, date });
        setActiveCategory(data.data.category);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(new Error("Sunucu ile bağlantı kuramadık."));
      });
  };

  useEffect(() => {
    loadPost();
  }, []);

  const handleComment = async (event) => {
    event.preventDefault();

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/comments";

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: {
          pkeyUuidPost: post.pkeyUuidPost,
        },
        comment: {
          description: event.target.comment.value,
          fkeyUuidUser: user.uuid,
        },
      }),
    }).catch(() => setError(new Error("Sunucu ile bağlantı kuramadık.")));
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const imageUrl = event.target.imageUrl.value;
    const category = activeCategory;

    // if (!validateForm(title, content, imageUrl)) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL +
      "/posts?postId=" +
      post.pkeyUuidPost;

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        imageUrl,
        category,
      }),
    }).catch(() => setError(new Error("Sunucu ile bağlantı kuramadık.")));

    setPost({
      ...post,
      title,
      content,
      imageUrl,
      category,
    });
    setIsInEditMode(false);
  };

  if (isLoading) return <PostSkeleton />;
  if (error !== null) return <ErrorPage message={error.message} />;
  if (isInEditMode)
    return (
      <form
        className="flex flex-col justify-center gap-5 rounded-lg bg-background p-5 dark:bg-darkBackground"
        onSubmit={handleEdit}
      >
        <Input
          placeholder="Açıklayıcı bir başlık"
          defaultValue={post.title}
          type="text"
          name="title"
        />
        <Input
          placeholder="Paylaşmak istediğiniz resmin linki"
          defaultValue={post.imageUrl}
          type="text"
          name="imageUrl"
        />
        <TextArea
          placeholder="Gönderi içeriği"
          defaultValue={post.content}
          name="content"
        />
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
        <div className="flex justify-center gap-5">
          <Button isSubmitButton={true}>Kaydet</Button>
          <Button onClick={() => setIsInEditMode(false)}>Vazgeç</Button>
        </div>
      </form>
    );

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-background p-5 dark:bg-darkBackground">
      <div className="flex w-full flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5 dark:bg-darkForeground">
        <div className="flex justify-between text-xl text-black dark:text-white">
          {post.title}
        </div>
        {post.imageUrl !== "" ? (
          <img
            className="rounded-lg"
            src={post.imageUrl}
            onError={(e) => (e.target.style.display = "none")}
          />
        ) : (
          ""
        )}
        <div className="text-text dark:text-darkText">{post.content}</div>
        <div className="flex justify-between text-gray-500">
          <p>
            {"Oran: " +
              (post.dislike === 0
                ? "-"
                : (post.like / (post.dislike + post.like)) * 100 + "%")}
          </p>
          <a
            className={
              "underline" +
              (user === null
                ? " invisible"
                : post.fkeyUuidUser === user.uuid
                  ? ""
                  : " invisible")
            }
            href="#"
            onClick={() => setIsInEditMode(true)}
          >
            Düzenle
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between gap-2">
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>{post.like}</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FontAwesomeIcon icon={faThumbsDown} />
              <p>{post.dislike}</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FontAwesomeIcon icon={faMessage} />
              <p>FIX</p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-500">
            <p>{post.date ? post.date.toLocaleDateString("tr-TR") : ""}</p>
            {/* TODO: need a backend endpoint to fetch username from id */}
            <p>{/* {post.fkeyUuidUser} */}FIX</p>
          </div>
        </div>
      </div>
      {user === null ? (
        <p className="text-text dark:text-darkText">
          Yorum yapmak için giriş yapın.
        </p>
      ) : (
        <form onSubmit={handleComment} className="flex flex-col">
          <label className="mb-2 text-text dark:text-darkText">Yorumlar</label>
          <TextArea
            placeholder="Yorumunuzu buraya yazın."
            name="comment"
          ></TextArea>
          <Button isSubmitButton={true} className="self-end">
            Yorum Yap
          </Button>
        </form>
      )}
    </div>
  );
};

export default PostPage;
