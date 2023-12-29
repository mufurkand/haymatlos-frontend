const Button = ({ content, isSubmitButton, onClick }) => {
  return (
    <button
      className="rounded-md bg-foreground p-2 transition-all hover:bg-accentRed hover:text-white dark:bg-darkForeground"
      type={isSubmitButton ? "submit" : "button"}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
