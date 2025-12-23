import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchSingleBlogPosts } from "@/utils/fetchSingleBlogPosts";
import { ChevronRight, Calendar, User, Tag, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const SingleBlogPageContainer = async ({ blogId }: { blogId: string }) => {
  const previousBlog = await fetchSingleBlogPosts({ blogId });

  return (
    <section className="px-6 sm:px-10 lg:px-32 py-10 font-poppins min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Breadcrumb Section */}
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
              {previousBlog?.title || "Getting Started with Next.js"}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {previousBlog?.title || "Getting Started with Next.js"}
          </h1>
          <span className="bg-green-100 max-md:hidden text-green-700 dark:bg-[#F2F9EE] dark:text-[#417F25] text-xs px-3 py-1 rounded-full font-medium">
            Publish
          </span>
        </div>

        <div className="flex w-full justify-between items-center md:hidden">
          <p className="px-3 py-1 text-[11px] font-medium rounded-full border text-[#F77E27] border-[#F77E27] bg-[#FF6B00]/5">
            Develop
          </p>

          <Button
            className="
        bg-[#FF6B00] hover:bg-[#E66000] text-white
        px-5 py-2 rounded-lg transition-all active:scale-95 shadow-md
      "
          >
            <Link
              href={`/blog/edit/${previousBlog.id}`}
              className="flex items-center gap-2"
            >
              <Edit3 size={18} />
              Edit Blog
            </Link>
          </Button>
        </div>

        <Button
          className="
      hidden md:flex
      bg-[#FF6B00] hover:bg-[#E66000] text-white
      px-5 py-2 rounded-lg transition-all active:scale-95 shadow-md
    "
        >
          <Link
            href={`/blog/edit/${previousBlog.id}`}
            className="flex items-center gap-2"
          >
            <Edit3 size={18} />
            Edit Blog
          </Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 dark:text-[#B8B8B8] text-sm mb-6">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>John Doe</span>
        </div>
        <span className="h-1 w-1 rounded-full dark:bg-[#B8B8B8]"></span>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>Feb 28, 2025</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {previousBlog?.category?.split("|").map((tag: string) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-3 py-1 text-[11px] font-medium rounded-full border   text-gray-500 border-gray-300  dark:text-white dark:border-[#3D3D3D]"
          >
            <Tag size={12} />
            {tag.trim()}
          </span>
        ))}
      </div>

      <article className="prose prose-zinc max-w-none dark:prose-invert">
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
          {previousBlog?.content}
        </p>

        <h3 className="text-xl font-bold mb-4 dark:text-zinc-100">
          Why Choose Next.js?
        </h3>
        <p className="mb-4 dark:text-zinc-300">
          Next.js provides an excellent developer experience with features like:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-700 dark:text-zinc-300">
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>File-based routing</li>
          <li>Built-in CSS and Sass support</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 dark:text-zinc-100">
          Getting Started
        </h3>
        <p className="mb-4 dark:text-zinc-300">
          To create a new Next.js application, run the following command:
        </p>
        <div className="bg-zinc-100 dark:bg-zinc-900 border dark:border-zinc-800 p-4 rounded-md font-mono text-sm mb-6 text-zinc-800 dark:text-zinc-200">
          npx create-next-app@latest my-next-app
        </div>

        <p className="mb-6 dark:text-zinc-300">
          This will set up a new Next.js project with all the necessary
          configurations. Once the installation is complete, navigate to your
          project directory and start the development server:
          <br />
          <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded dark:text-zinc-200">
            cd my-next-app npm run dev
          </code>
        </p>

        <h3 className="text-xl font-bold mb-4 dark:text-zinc-100">
          File-Based Routing
        </h3>
        <p className="mb-8 dark:text-zinc-300">
          Next.js uses a file-based routing system. Simply create files in the
          pages directory, and they'll automatically become routes in your
          application.
        </p>

        <h3 className="text-xl font-bold mb-4 dark:text-zinc-100">
          Conclusion
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Next.js simplifies React development by providing a framework that
          handles many of the complex configurations and optimizations for you.
          Whether you're building a simple blog or a complex web application,
          Next.js has the tools you need to succeed.
        </p>
      </article>
    </section>
  );
};

export default SingleBlogPageContainer;
