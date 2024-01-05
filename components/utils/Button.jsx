const Button = ({ children, isSubmitButton, onClick, className = "" }) => {
  return (
    <button
      className={
        "rounded-md bg-foreground p-2 text-text transition-all hover:bg-accentRed hover:text-white dark:bg-darkForeground dark:text-darkText" +
        (className === "" ? "" : " " + className)
      }
      type={isSubmitButton ? "submit" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
