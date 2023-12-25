const Searchbar = ({ className }) => {
  return (
    <div
      className={
        "flex items-center justify-center" +
        (className ? " " + className : " w-full")
      }
    >
      <input
        type="text"
        placeholder="Ara..."
        className="dark:bg-darkBackground dark:text-darkText flex-auto rounded-full border-2 border-accentRed bg-background px-3 py-1 text-text focus:border-accentBlue focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
