"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  return (
    <div className="flex flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5">
      <div className="flex justify-between text-white">{post.title}</div>
      <div className="text-text">{post.content}</div>
      <div className="flex justify-between">
        <div className="flex justify-between gap-2">
          <div className="flex items-center justify-between gap-1 text-gray-500">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>{post.likes}</p>
          </div>
          <div className="flex items-center justify-between gap-1 text-gray-500">
            <FontAwesomeIcon icon={faThumbsDown} />
            <p>{post.dislikes}</p>
          </div>
          <div className="flex items-center justify-between gap-1 text-gray-500">
            <FontAwesomeIcon icon={faMessage} />
            <p>{post.likes}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <p>{post.date}</p>
          <p>{post.user}</p>
        </div>
      </div>
    </div>
  );
};

const Category = ({ category, activeCategory, setActiveCategory }) => {
  const isActive = activeCategory === category.id;

  return (
    <button
      className={
        "flex items-center border-2 border-solid p-2 text-center text-text transition-all" +
        " " +
        (isActive
          ? "border-foreground bg-accentRed"
          : "border-accentRed bg-foreground") +
        " " +
        (isActive ? "rounded-full" : "rounded-lg")
      }
      onClick={() => setActiveCategory(category.id)}
    >
      {category.name}
    </button>
  );
};

const PostContainer = () => {
  const categories = [
    { name: "Anasayfa", id: "home" },
    { name: "Kültür/Sanat", id: "culture" },
    { name: "Bilim", id: "science" },
    { name: "Felsefe", id: "philosophy" },
    { name: "Siyaset", id: "politics" },
  ];

  const posts = [
    {
      id: "eWmlx72w",
      title:
        "specific pair nor leaf donkey made principle garden skin primitive doubt engine flies who if result poet fence alphabet pleasant plain graph car handsome frighten fact swam social rest design hundred cook slip daughter powder trade bag cell stepped mixture world copper toward musical classroom paid safety heat",
      content:
        "mission program two thirty using wife parts prevent character doctor plus anywhere jack same shade stuck birthday division chose reader make blanket grain without improve younger enter page occasionally gently any strip mud power became motion longer complete composed mirror good bean cat evening driver best tide swimming stiff cost duck camera library balance when manner walk operation white fall determine pig name warm affect stay eye deer paper flew congress herself",
      date: "45",
      likes: "52",
      dislikes: "97",
      comments: "55",
      user: "Annie",
    },
    {
      id: "npBrGWeS9G",
      title:
        "volume compare bottom spread ever done become gentle troops thousand brick about form pile future flower mark drew west pocket simple together corner cave",
      content:
        "mirror stairs view physical replace strength fifth eventually worry desk steel again similar of whether corner biggest gray tongue swung managed poor stronger fallen",
      date: "83",
      likes: "80",
      dislikes: "76",
      comments: "11",
      user: "Cole",
    },
    {
      id: "VMpxTukEFf4pvonHGvdf",
      title:
        "middle invented round ship dance whole eight alike wild another bit hurried music left also nuts of bag terrible arrive send organization almost farmer",
      content:
        "saved feet desert principal planned thus army gulf threw naturally hat obtain importance folks chamber poetry explore decide broad effect story herself late forty",
      date: "20",
      likes: "67",
      dislikes: "78",
      comments: "23",
      user: "Nancy",
    },
    {
      id: "B0tQc2NZtXYt",
      title:
        "boy fence curve involved root wet usual beside dinner blank itself development parent mud day wind pretty failed outline fine properly dropped aside sense",
      content:
        "consider themselves reason egg strike correct watch laid produce wherever most bus arrangement when essential exact division quarter statement solution clothing total valuable examine",
      date: "50",
      likes: "64",
      dislikes: "77",
      comments: "48",
      user: "Timothy",
    },
    {
      id: "pQNt8jC",
      title:
        "metal underline longer ago congress lay area chief kind coat nation promised dawn paid attempt straw all plan buffalo progress gun tip river tent",
      content:
        "right massage top street earn escape therefore chain rock keep her none badly possibly adventure newspaper harbor again establish late have coast no using",
      date: "51",
      likes: "96",
      dislikes: "26",
      comments: "70",
      user: "Harriett",
    },
    {
      id: "xHse03kqbgF03e",
      title:
        "horse safe lovely stock organized walk mouse chosen away same quietly furniture rubbed check crew were rubber six darkness tightly organization correctly middle society",
      content:
        "then useful modern believed carry shall graph headed noted best seat cup military tail somewhere mark worth sail art effect consonant seed finally parallel",
      date: "12",
      likes: "2",
      dislikes: "19",
      comments: "60",
      user: "Kenneth",
    },
    {
      id: "vjk1aq3TbyNkze",
      title:
        "adjective lesson promised tide climate plates done mice sea low event morning naturally passage iron lucky guide ill compound education mistake stone drive children",
      content:
        "bank distant back potatoes changing signal jet clear noun foreign official field room until ago congress birds quickly brain cave pull run activity sang",
      date: "63",
      likes: "6",
      dislikes: "49",
      comments: "65",
      user: "Tillie",
    },
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="flex flex-col items-center p-5">
      {/* Categories */}
      <div className="mb-5 flex h-14 w-full items-center justify-center gap-5 overflow-auto bg-background">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
      {/* Posts */}
      <div className="flex flex-col gap-5 overflow-auto bg-background">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
