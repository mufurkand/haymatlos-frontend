"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";
import Category from "@/components/utils/Category";
import { useState, useEffect } from "react";
import Link from "next/link";
import Comment from "@/components/utils/Comment";
import { useUserContext } from "@/contexts/UserContext";
import ErrorCodePage from "@/components/utils/ErrorCodePage";
import ErrorPage from "@/components/utils/ErrorPage";
import Post from "@/components/utils/Post";

const Profile = () => {
  const categories = [
    { name: "Gönderiler", id: "posts" },
    { name: "Yorumlar", id: "comments" },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const { user } = useUserContext();

  const loadUserData = async () => {
    if (user === null) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/users/id?userId=" + user.uuid;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { nickname } = data.data;
        setUserData({ nickname });
      })
      .catch(() => {
        setError(new Error("Sunucu ile bağlantı kurulamadı."));
      });
  };

  const loadPosts = async () => {
    if (user === null) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/posts/userid?userId=" + user.uuid;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data["$values"]);
      })
      .catch(() => {
        setError(new Error("Sunucu ile bağlantı kurulamadı."));
      });
  };

  const loadComments = async () => {
    if (user === null) return;

    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL +
      "/comments/userId?userId=" +
      user.uuid;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setComments(data["$values"]);
      })
      .catch(() => {
        setError(new Error("Sunucu ile bağlantı kurulamadı."));
      });
  };

  useEffect(() => {
    // TODO: promise all?
    loadUserData();
    loadPosts();
    loadComments();
  }, []);

  if (user === null)
    return <ErrorCodePage code={401} message="Lütfen giriş yapın." />;

  if (error !== null) return <ErrorPage message={error.message} />;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 rounded-lg bg-background p-5 dark:bg-darkBackground sm:flex-row">
        <div className="flex">
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-accentRed p-10 text-white">
            <FontAwesomeIcon className="flex-1" icon={faUser} />
          </div>
          <Link
            href="/profile/edit"
            className="flex h-9 w-9 flex-col items-center justify-center self-end rounded-full bg-accentRed p-2 text-white"
          >
            <FontAwesomeIcon className="flex-1" icon={faPen} />
          </Link>
        </div>
        <div className="flex flex-col justify-center text-text dark:text-darkText ">
          <h1 className="text-3xl font-bold">
            {userData === null ? "-" : userData.nickname}
          </h1>
          <h1>Doğum Tarihi</h1>
          <h2>Cinsiyet</h2>
        </div>
        <div className="flex flex-col justify-center text-text dark:text-darkText "></div>
      </div>
      <div className="flex h-14 w-full items-center gap-5 px-5">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
      <div>
        {activeCategory === "posts"
          ? posts.map((post) => <Post key={post.pkeyUuidPost} post={post} />)
          : comments.map((comment) => (
              <Comment key={comment.pkeyUuidComment} comment={comment} />
            ))}
      </div>
    </div>
  );
};

export default Profile;
