import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { BlogCard } from "./components/index";
import Link from "next/link";
import { fetchBlogPosts } from "@/utils/fetchBlog";

const BlogPageContainer = async () => {
  const blogData = await fetchBlogPosts({});

  return (
    <section className="mt-10 px-4 sm:px-8 lg:px-20 font-poppins">
      <div className="flex items-center justify-between w-full pt-11.5 pb-9.5">
        <h1 className="text-[24px] md:text-[32px] font-extrabold text-black dark:text-white">
          Blog Dashboard
        </h1>

        <Button className="bg-[#FF6B00] hover:bg-[#E66000] text-white px-5 py-2 rounded-lg  transition-all active:scale-95 shadow-md lg:mr-2">
          <Link href="/blog/create" className="flex items-center gap-2">
            <CirclePlus size={20} />
            <span className="text-[16px] font-semibold">New Blog</span>
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center lg:justify-items-start w-full">
        {blogData.map((blog: any) => (
          <BlogCard
            key={blog.id || blog.slug}
            id={blog.id}
            title={blog.title}
            category={blog.category}
            content={blog.content}
            date={blog.updatedAt}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPageContainer;
