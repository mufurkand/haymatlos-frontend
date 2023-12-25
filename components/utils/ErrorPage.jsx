const ErrorPage = ({ message }) => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-5">
      <span className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
        Ah. Bir şeyler ters gitti.
      </span>
      <span className="dark:text-darkText text-text">
        {message + " Lütfen daha sonra tekrar dene."}
      </span>
    </div>
  );
};

export default ErrorPage;
