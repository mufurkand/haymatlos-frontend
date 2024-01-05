import PostPage from "@/components/PostPage";
import ErrorCodePage from "@/components/utils/ErrorCodePage";

const Page = ({ params }) => {
  return (
    <div className="bg-background p-5 dark:bg-darkBackground">
      <PostPage postId={params.postId} />
    </div>
  );
};

export default Page;
