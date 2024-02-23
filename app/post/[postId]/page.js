import PostPage from "@/components/PostPage";

const Page = ({ params }) => {
  return (
    <div>
      <PostPage postId={params.postId} />
    </div>
  );
};

export default Page;
