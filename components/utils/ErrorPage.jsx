// the component's name is ErrorPage because Error is a reserved word in JS

const ErrorPage = ({ message }) => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-5 p-5">
      <span className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
        Ah. Bir şeyler ters gitti.
      </span>
      <span className="text-text dark:text-darkText">
        {message + " Lütfen daha sonra tekrar dene."}
      </span>
    </div>
  );
};

export default ErrorPage;
