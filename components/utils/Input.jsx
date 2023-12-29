const Input = ({ placeholder, type, name }) => {
  return (
    <input
      placeholder={placeholder}
      className="dark:bg-darkForeground w-full rounded-md bg-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accentRed"
      type={type}
      name={name}
    />
  );
};

export default Input;
