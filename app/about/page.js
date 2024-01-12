const Page = () => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-5 p-5">
      <h1 className="self-start bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent">
        Haymatlos ne demek?
      </h1>
      <p className="text-text dark:text-darkText">
        Haymatlos, Türkçe'de "vatansız" anlamına gelen bir kelimedir.
        Uluslararası hukukta da kullanılan bu kelime, herhangi bir devletin
        vatandaşı olmayan kişileri tanımlamak için kullanılır. Haymatloslar,
        yasal olarak vatanları olmayan ve bu nedenle temel hak ve özgürlüklerden
        mahrum olan kişilerdir.
      </p>
    </div>
  );
};

export default Page;
