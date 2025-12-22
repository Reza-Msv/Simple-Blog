"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BlogForm } from "@/components/common/BlogForm";
import { createBlogAction } from "@/app/actions/blog.create"; 

const CreateBlogPageContainer = () => {
  const router = useRouter();

  // const handleCreate = async (values: any) => {
  //   const toastId = toast.loading("Creating blog post...");

  //   const result = await createBlogAction(values);

  //   if (result.success) {
  //     toast.success("Blog post created successfully!", { id: toastId });
  //     router.push("/blog");
  //     router.refresh(); 
  //   } else {
  //     toast.error(result.message || "Something went wrong", { id: toastId });
  //   }
  // };

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
              New Blog
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mx-auto border border-[#E0E0E0] dark:border-zinc-800 rounded-md p-8">
        <header className="mb-8">
          <h1 className="text-[24px] font-medium text-[#F77E27] mb-2">
            Create New Blog
          </h1>
          <p className="text-[#666666] font-medium text-[16px] ">
            Fill in the details to create a new blog post.
          </p>
        </header>

        <BlogForm  onCancel={() => router.back()} />
      </div>
    </section>
  );
};

export default CreateBlogPageContainer;
