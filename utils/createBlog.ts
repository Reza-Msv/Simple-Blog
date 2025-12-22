"use client";

import { createBlogAction } from "@/app/actions/blog.create";
import { toast } from "sonner";

export const handleCreate = async (values: any) => {
  const toastId = toast.loading("Creating blog post...");

  const result = await createBlogAction(values);

  if (result.success) {
    toast.success("Blog post created successfully!", { id: toastId });

    if (typeof window !== "undefined") {
      window.location.href = "/blog";
    }
  } else {
    toast.error(result.message || "Something went wrong", { id: toastId });
  }
};
