const Input = ({
  placeholder,
  type,
  name,
  error = false,
  message,
  defaultValue = "",
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="w-full rounded-md bg-foreground p-2 text-text focus:outline-none focus:ring-2 focus:ring-accentRed dark:bg-darkForeground dark:text-darkText"
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
      <p
        className={
          "text-sm font-light text-red-500" + (message ? "" : " hidden")
        }
      >
        {"*" + message}
      </p>
    </div>
  );
};

export default Input;
