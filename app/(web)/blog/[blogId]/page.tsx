import SingleBlogPageContainer from "@/components/pages/blog/singleBlog";
import { Metadata } from "next";
import { BlogPost } from "@/types/blogs";
import { BASE_URL, GENERAL_COOKIE } from "@/config/config";

interface BlogDetailPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

async function getBlog(blogId: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GENERAL_COOKIE}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { blogId } = await params;
  const blog = await getBlog(blogId);

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160),
      type: "article",
      publishedTime: blog.createdAt,
      authors: ["John Doe"],
      tags: blog.tags ? blog.tags.split("|") : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.substring(0, 160),
    },
  };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { blogId } = await params;

  return (
    <main>
      <SingleBlogPageContainer blogId={blogId} />
    </main>
  );
};

export default BlogDetailPage;
