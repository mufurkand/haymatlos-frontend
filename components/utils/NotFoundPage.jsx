// TODO: combine both not found page and unauthorized page into a generic one

const NotFoundPage = () => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center gap-5">
      <span className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
        404
      </span>
      <div className="h-5 border-l-2 border-text dark:border-darkText"></div>
      <span className="text-text dark:text-darkText">Sayfa bulunamadı.</span>
    </div>
  );
};

export default NotFoundPage;
