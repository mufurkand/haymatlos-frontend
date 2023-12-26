import Searchbar from "./Searchbar";
import UserSection from "./UserSection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 flex w-full flex-col">
      <div className="flex h-14 w-auto items-center justify-between gap-5 bg-foreground px-5 text-text dark:bg-darkForeground dark:text-darkText sm:px-14">
        <Link
          href="/"
          className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent sm:basis-1/4"
        >
          haymatlos
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:flex-auto">
          <Searchbar className="sm:flex-auto sm:basis-2/4" />
        </div>
        <div className="relative flex items-center justify-end gap-3 sm:basis-1/4">
          <Link href="/post" className="flex items-center">
            <FontAwesomeIcon
              className="rounded-lg bg-accentRed p-2 text-white"
              icon={faPlus}
            />
          </Link>
          <UserSection />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
