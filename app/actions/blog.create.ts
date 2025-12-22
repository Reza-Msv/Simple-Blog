"use server";

import { BASE_URL, GENERAL_COOKIE } from "@/config/config";
import { revalidatePath } from "next/cache";
export async function createBlogAction(formData: any) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GENERAL_COOKIE}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to create blog",
      };
    }
    revalidatePath("/blog");

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, message: "Network error occurred" };
  }
}
