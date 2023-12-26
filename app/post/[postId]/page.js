import posts from "@/tests/posts";
import { Post } from "@/components/PostContainer";
import NotFoundPage from "@/components/utils/NotFoundPage";

const Page = ({ params }) => {
  const post = posts.find((post) => post.id === params.postId);

  if (!post) return <NotFoundPage />;

  return (
    <div className="bg-background p-5">
      <Post post={post} isLink={false}></Post>
    </div>
  );
};

export default Page;
