import BlogEditContainer from "@/components/pages/blog/edit";
import { Metadata } from "next";
import { BlogPost } from "@/types/blogs";
import { BASE_URL, GENERAL_COOKIE } from "@/config/config";

interface SingleBlogPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

async function getBlogData(blogId: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GENERAL_COOKIE}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: SingleBlogPageProps): Promise<Metadata> {
  const { blogId } = await params;
  const blog = await getBlogData(blogId);

  return {
    title: blog ? `Edit: ${blog.title}` : "Edit Blog",
    description: `Editing mode for: ${blog?.title || "Blog Post"}`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  const { blogId } = await params;

  return (
    <main>
      <BlogEditContainer blogId={blogId} />
    </main>
  );
};

export default SingleBlogPage;
