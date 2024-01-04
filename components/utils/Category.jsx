const Category = ({ category, activeCategory, setActiveCategory }) => {
  const isActive = activeCategory === category.id;

  return (
    <button
      type="button"
      className={
        "flex items-center rounded-lg border-2 border-solid p-2 text-center transition-all" +
        " " +
        // TODO: may break on dark mode
        (isActive
          ? "border-foreground bg-accentRed text-white dark:border-darkForeground"
          : "border-accentRed bg-foreground text-text dark:bg-darkForeground dark:text-darkText")
      }
      onClick={() => setActiveCategory(category.id)}
    >
      {category.name}
    </button>
  );
};

export default Category;
