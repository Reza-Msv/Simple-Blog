import { updateBlogAction } from "@/app/actions/blog.edit";
import { toast } from "sonner";

export const handleUpdate = async (values: any, blogId: string) => {
  const toastId = toast.loading("Updating blog post...");
          
  const result = await updateBlogAction(values, blogId);
      
  if (result.success) {
    toast.success("Blog post updated successfully!", { id: toastId });

    if (typeof window !== "undefined") {
      window.location.href = "/blog";
    }
  } else {
    toast.error(result.error || "Something went wrong", { id: toastId });
  }
};
