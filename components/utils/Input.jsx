const Input = ({
  placeholder,
  type,
  name,
  error = false,
  message = "Bu gizli bir hata mesajıdır. LOLOLOLOL.",
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="w-full rounded-md bg-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accentRed dark:bg-darkForeground"
        type={type}
        name={name}
      />
      <p
        className={
          "text-sm font-light text-red-500" + " " + (error ? "" : "invisible")
        }
      >
        {"*" + message}
      </p>
    </div>
  );
};

export default Input;
