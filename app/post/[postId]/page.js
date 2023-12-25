import posts from "@/tests/posts";
import { Post } from "@/components/PostContainer";

const Page = ({ params }) => {
  const post = posts.find((post) => post.id === params.postId);
  return (
    <div className="bg-background p-5">
      <Post post={post} isLink={false}></Post>
    </div>
  );
};

export default Page;
