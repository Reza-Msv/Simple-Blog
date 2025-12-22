"use server";

import { revalidatePath } from "next/cache";

import { BASE_URL, GENERAL_COOKIE } from "@/config/config";

export async function deleteBlogAction(blogId: string | number) {
  try {
    const response = await fetch(`${BASE_URL}/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${GENERAL_COOKIE}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete the blog");
    }

    revalidatePath("/blog");

    return { success: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, error: "Something went wrong" };
  }
}
