"use client";

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

const CreateBlogPageContainer = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-10 font-poppins min-h-screen bg-white dark:bg-black">
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/blog"
              className="text-zinc-600 hover:text-black font-medium text-[14px] underline underline-offset-4 dark:text-white dark:hover:text-zinc-200"
            >
              Blog Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="flex items-center space-x-[-8px]">
            <ChevronRight size={14} className="text-zinc-400 dark:text-white" />
            <ChevronRight size={14} className="text-zinc-400 dark:text-white" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#B14E06] dark:text-[#FAAD75] font-medium text-[14px]">
             Create Blog
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

        <BlogForm />
      </div>
    </section>
  );
};

export default CreateBlogPageContainer;
