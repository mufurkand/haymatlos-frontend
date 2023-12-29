const Post = () => {
  return (
    <div className="h-48 w-full bg-foreground dark:bg-darkForeground"></div>
  );
};

const Category = () => {
  return (
    <div
      className={
        "flex h-full w-20 flex-shrink-0 rounded-lg border-2 border-accentRed bg-foreground dark:bg-darkForeground"
      }
    ></div>
  );
};

const PostContainerSkeleton = () => {
  return (
    <div className="flex flex-col items-center bg-background p-5 dark:bg-darkBackground md:rounded-lg">
      <div className="mb-5 flex h-7 w-full rounded-lg bg-foreground dark:bg-darkForeground sm:mb-0 sm:hidden"></div>
      <div className="mb-5 flex h-14 w-full items-center gap-5 overflow-auto p-2 sm:justify-center">
        {Array.from({ length: 5 }, (_, index) => (
          <Category key={index} />
        ))}
      </div>
      <div className="flex w-full flex-col gap-5">
        {Array.from({ length: 5 }, (_, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};

export default PostContainerSkeleton;
