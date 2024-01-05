import PostPage from "@/components/PostPage";
import ErrorCodePage from "@/components/utils/ErrorCodePage";

const Page = ({ params }) => {
  return (
    <div>
      <PostPage postId={params.postId} />
    </div>
  );
};

export default Page;
