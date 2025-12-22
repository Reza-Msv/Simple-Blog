import SingleBlogPageContainer from "@/components/pages/blog/singleBlog";

interface BlogDetailPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { blogId } = await params;

  return (
    <div>
      <SingleBlogPageContainer blogId={blogId} />
    </div>
  );
};

export default BlogDetailPage;
