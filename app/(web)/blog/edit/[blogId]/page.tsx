import BlogEditContainer from "@/components/pages/blog/edit";

interface SingleBlogPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  const { blogId } = await params;

  return (
    <div>
      <BlogEditContainer blogId={blogId} />
    </div>
  );
};

export default SingleBlogPage;
