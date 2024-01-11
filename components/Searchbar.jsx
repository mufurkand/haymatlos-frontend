"use client";

import { useRouter } from "next/navigation";

const Searchbar = ({ className }) => {
  const router = useRouter();

  const handleEnter = (event) => {
    if (event.key === "Enter")
      router.push("/search?query=" + event.target.value.replace(" ", "+"));
  };
  return (
    <div
      className={
        "flex items-center justify-center" +
        (className ? " " + className : " w-full")
      }
    >
      <input
        onKeyDown={(event) => handleEnter(event)}
        type="text"
        placeholder="Ara..."
        className="flex-auto rounded-full border-2 border-accentRed bg-background px-3 py-1 text-text focus:border-accentBlue focus:outline-none dark:bg-darkBackground dark:text-darkText"
      />
    </div>
  );
};

export default Searchbar;
