const Button = ({ children, isSubmitButton, onClick, className = "" }) => {
  return (
    <button
      className={
        "hover:transition-color rounded-md bg-foreground p-2 text-text duration-300 hover:bg-accentRed hover:text-white dark:bg-darkForeground dark:text-darkText" +
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
