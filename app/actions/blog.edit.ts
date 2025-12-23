"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL, GENERAL_COOKIE } from "@/config/config";

export async function updateBlogAction(formData: any, blogId: string) {
  try {
    const response = await fetch(`${BASE_URL}/${blogId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${GENERAL_COOKIE}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to update the blog");
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${blogId}`);

    let data = null;
    if (response.status !== 204) {
      data = await response.json();
    }

    return { success: true, data };
  } catch (error) {
    console.error("Update Error:", error);
    return {
      success: false,
      error: (error as Error).message || "Something went wrong",
    };
  }
}
