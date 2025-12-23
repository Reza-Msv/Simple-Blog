import { BlogPost } from "@/types/blogs";
import { BASE_URL, GENERAL_COOKIE } from "@/config/config";

export async function fetchSingleBlogPosts({
  blogId,
}: {
  blogId?: string;
}): Promise<BlogPost> {
  const url = blogId ? `${BASE_URL}/${blogId}` : `${BASE_URL}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GENERAL_COOKIE}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog posts: ${res.statusText}`);
  }

  const data: BlogPost = await res.json();
  return data;
}
