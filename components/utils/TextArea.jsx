const TextArea = ({ placeholder, name }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="h-56 w-full rounded-md bg-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accentRed dark:bg-darkForeground"
      name={name}
    ></textarea>
  );
};

export default TextArea;
