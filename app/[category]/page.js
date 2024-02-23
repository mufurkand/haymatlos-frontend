import PostContainer from "@/components/PostContainer";

const Home = ({ params }) => {
  return (
    <div>
      <PostContainer activeCategory={params.category} />
    </div>
  );
};

export default Home;
