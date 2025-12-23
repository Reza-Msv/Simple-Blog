import CreateBlogPageContainer from "@/components/pages/blog/createblog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Post",
  description: "Draft and publish a new blog post to the platform.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const CreateBlogPage = () => {
  return (
    <main>
      <CreateBlogPageContainer />
    </main>
  );
};

export default CreateBlogPage;
