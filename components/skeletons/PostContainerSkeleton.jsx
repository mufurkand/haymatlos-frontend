export const Post = () => {
  return (
    <div className="flex h-48 w-full flex-col gap-2 rounded-lg bg-foreground p-5 dark:bg-darkForeground">
      <div className="mb-2 h-7 w-full animate-pulse rounded-lg bg-background dark:bg-darkBackground"></div>
      <div className="h-full w-full animate-pulse rounded-lg bg-background dark:bg-darkBackground"></div>
    </div>
  );
};

const PostContainerSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      {Array.from({ length: 5 }, (_, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default PostContainerSkeleton;
