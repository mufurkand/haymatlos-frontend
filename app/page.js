import PostContainer from "@/components/PostContainer";

const getPosts = async () => {
  const res = await fetch("https://192.168.175.227:7090/posts");

  if (!res.ok) throw new Error("Failed to get posts.");

  return res.json();
};

const Home = async () => {
  const posts = await getPosts();
  return (
    <div className="bg-background">
      <PostContainer posts={posts} />
    </div>
  );
};

export default Home;
