import Home from "@/components/Home";

const Page = ({ params }) => {
  return (
    <div>
      <Home activeCategory={params.category} />
    </div>
  );
};

export default Page;
