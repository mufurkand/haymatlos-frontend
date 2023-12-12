import PostContainer from "@/components/PostContainer";

export default function Home() {
  return (
    // sm:* values are for screens larger than 640px
    // if the screen is smaller than 640px, they will not be executed
    <div className="w-screen bg-background sm:rounded-tl-md">
      <PostContainer />
    </div>
  );
}
