// TODO: add character counters to both textarea and input components

const TextArea = ({
  placeholder,
  name,
  error = false,
  message = "Bu gizli bir hata mesajıdır. LOLOLOLOL.",
}) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        className="h-56 w-full rounded-md bg-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accentRed dark:bg-darkForeground"
        name={name}
      ></textarea>
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

export default TextArea;
