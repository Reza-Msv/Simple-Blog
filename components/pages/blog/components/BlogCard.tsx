"use client";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { MoreVertical, Edit, Trash2, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { deleteBlogAction } from "@/app/actions/blog.delete";
import { formatDate } from "@/helper/helper";
import Link from "next/link";

interface BlogCardProps {
  id: string | number;
  title: string;
  category: string;
  content: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  category,
  content,
  date,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const categories = category.split("|").map((item) => item.trim());

  const handleDelete = () => {
    startTransition(async () => {
      const deletePromise = deleteBlogAction(id);

      toast.promise(deletePromise, {
        loading: "Deleting blog post...",
        success: (data) => {
          if (data.success) return `"${title}" deleted successfully.`;
          throw new Error(data.error);
        },
        error: (err) => err.message || "Could not delete the blog.",
      });
    });
  };

  return (
    <Link
      href={`/blog/${id}`}
      className={`w-full max-w-103 h-54 bg-white dark:bg-black border border-[#E0E0E0] dark:border-[#3D3D3D] rounded-lg p-6 flex flex-col justify-between font-poppins transition-all duration-300 ${
        isPending ? "opacity-30 scale-95 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-[18px] font-bold text-black dark:text-white line-clamp-1">
          {title}
        </h3>

        <DropdownMenu>
          <DropdownMenuTrigger className="p-1 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-full outline-none transition-colors">
            {isPending ? (
              <Loader2 size={20} className="animate-spin text-orange-500 " />
            ) : (
              <MoreVertical
                size={20}
                className="text-black dark:text-gray-700 cursor-pointer"
              />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="dark:bg-zinc-950 dark:border-[#262626] font-poppins"
          >
            <DropdownMenuItem
              onClick={() => router.push(`/blog/edit/${id}`)}
              className="flex gap-2 cursor-pointer"
            >
              <Edit size={14} /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleDelete}
              className="flex gap-2 cursor-pointer text-red-500 focus:text-red-500 font-medium"
            >
              <Trash2 size={14} /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex gap-2 mt-2 overflow-hidden">
        {categories.slice(0, 3).map((cat, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-[11px] font-medium rounded-full border ${
              index === 0
                ? "text-[#F77E27] border-[#F77E27] bg-[#FF6B00]/5 dark:text-white dark:border-[#3D3D3D]"
                : "text-gray-500 border-gray-300  dark:text-white dark:border-[#3D3D3D]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-[13px] text-gray-600 dark:text-[#F5F5F5] line-clamp-2 mt-3 font-light">
        {content}
      </p>

      <hr className="my-3 border-[#D5D5D5] dark:border-[#262626]" />

      <div className="flex justify-between items-center text-[12px]">
        <div className="flex items-center gap-3 text-[#666666] dark:text-[#B8B8B8]">
          <div className="flex items-center gap-1">
            <span className="line-clamp-1">John Doe</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#666666] h-1 w-1 rounded-full dark:bg-[#B8B8B8]"></span>
            {formatDate(date)}
          </div>
        </div>

        <div
          className="px-3 py-1 rounded-lg font-[400px] flex items-center gap-1.5 
              bg-[#F2F9EE] text-[#417F25] dark:bg-[#417F25] dark:text-white"
        >
          Published
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
