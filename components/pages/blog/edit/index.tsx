import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BlogForm } from "@/components/common/BlogForm";
import { fetchBlogPosts } from "@/utils/fetchBlog";

const BlogEditContainer = async ({ blogId }: { blogId: string }) => {
  const previousBlog = await fetchBlogPosts({ blogId });
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-10 font-poppins min-h-screen bg-white dark:bg-black">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/blog"
              className="text-black font-medium text-[14px] decoration-black underline"
            >
              Blog Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="flex items-center text-black">
            <ChevronRight size={14} />
            <ChevronRight size={14} />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#B14E06] font-medium text-[14px]">
              Edit Blog
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mx-auto border border-[#E0E0E0] dark:border-zinc-800 rounded-md p-8">
        <header className="mb-8">
          <h1 className="text-[24px] font-medium text-[#F77E27] mb-2">
            Edit Previous Blog
          </h1>
          <p className="text-[#666666] font-medium text-[16px] ">
            Fill in the details to Edit a Previous blog post.
          </p>
        </header>

        <BlogForm
          blogId={blogId}
          initialData={previousBlog[0] || previousBlog}
          isEditing={true}
        />
      </div>
    </section>
  );
};

export default BlogEditContainer;
