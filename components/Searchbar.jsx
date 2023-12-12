const Searchbar = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Ara..."
        className="rounded-full border-2 border-accentRed bg-background px-3 py-1 placeholder:text-center focus:border-accentBlue focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
