// client component might be a bad idea for the page file
// lower the useUserContext?
"use client";

import CreatePostForm from "@/components/CreatePostForm";
import { useUserContext } from "@/contexts/UserContext";
import UnauthorizedPage from "@/components/utils/UnauthorizedPage";

const Page = () => {
  const { user } = useUserContext();
  if (!user) return <UnauthorizedPage />;
  return <CreatePostForm />;
};

export default Page;
