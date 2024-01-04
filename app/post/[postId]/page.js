// TODO: create a post page component
import Post from "@/components/utils/Post";
import ErrorCodePage from "@/components/utils/ErrorCodePage";

const Page = ({ params }) => {
  const post = undefined;

  if (!post) return <ErrorCodePage code="404" message="Gönderi bulunamadı." />;

  return (
    <div className="bg-background p-5">
      <Post post={post} isLink={false}></Post>
    </div>
  );
};

export default Page;
