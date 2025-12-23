import BlogPageContainer from "@/components/pages/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description:
    "Explore our latest articles, tutorials, and insights on modern web development and design.",
  keywords: [
    "blog",
    "articles",
    "tutorials",
    "web development",
    "nextjs",
    "react",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | Simple Blog App",
    description: "Explore our latest articles and insights.",
    // images: ["/og-image.jpg"],
  },
};

const BlogPage = () => {
  return (
    <main>
      <BlogPageContainer />
    </main>
  );
};

export default BlogPage;
