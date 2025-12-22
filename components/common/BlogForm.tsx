"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Control } from "react-hook-form";
import * as z from "zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { handleCreate } from "@/utils/createBlog";
import { handleUpdate } from "@/utils/updateBlog";
import { BlogPost } from "@/types/blogs";
const formSchema = z.object({
  title: z.string().min(2, "Title is required."),
  slug: z.string().min(2, "Slug is required."),
  content: z.string().min(10, "Content is too short."),
  category: z.string().min(1, "Select at least one category."),
  tags: z.string().min(1, "Select at least one tag."),
  status: z.boolean().default(false),
});

export type BlogFormValues = z.infer<typeof formSchema>;

interface BlogFormProps {
  initialData?: BlogPost;
  blogId?: string;
  // onSubmit: (values: BlogFormValues) => void;
  onCancel?: () => void;
  isEditing?: boolean;
}

export const BlogForm: React.FC<BlogFormProps> = ({
  initialData,
  blogId,
  // onSubmit,
  onCancel,
  isEditing = false,
}) => {
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      content: "",
      category: "",
      tags: "",
      status: false,
    },
  });

  const control = form.control as Control<BlogFormValues>;

  // منطق انتخاب چندگانه برای دسته بندی (بدون تکرار)
  const addCategory = (value: string) => {
    const current = form.getValues("category");
    const arr = current ? current.split(" | ") : [];
    if (!arr.includes(value)) {
      form.setValue("category", [...arr, value].join(" | "), {
        shouldValidate: true,
      });
    }
  };

  const removeCategory = (value: string) => {
    console.log(value, "value");

    const current = form.getValues("category");
    const updated = current
      .split(" | ")
      .filter((v) => v !== value)
      .join(" | ");
    form.setValue("category", updated, { shouldValidate: true });
  };

  const formAction = (values) => {
    if (!isEditing) {
      handleCreate(values);
    } else {
      handleUpdate(blogId, values);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => formAction(values))}
        className="space-y-6"
      >
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-[14px] text-black dark:text-gray-200">
                Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Blog Title"
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-[14px] text-black dark:text-gray-200">
                Slug
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="blog-post-slug"
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormDescription className="text-[12px] text-[#666666]">
                This will be used for the URL:
                yourdomain.com/blog/blog-post-slug
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-[14px] text-black dark:text-gray-200">
                Content
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your blog content"
                  {...field}
                  className="min-h-[140px] resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-[14px] text-black dark:text-gray-200">
                Category
              </FormLabel>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {field.value &&
                  field.value.split(" | ").map((c) => (
                    <Badge
                      onClick={() => removeCategory(c)}
                      key={c}
                      variant="secondary"
                      className="bg-orange-50 text-[#E67E22] border-[#E67E22]/20 py-1"
                    >
                      {c}
                      <X size={12} className="ml-1 cursor-pointer" />
                    </Badge>
                  ))}
              </div>
              <Select onValueChange={(val) => addCategory(val)}>
                <FormControl>
                  <SelectTrigger className="h-12 w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-full">
                  {["Next.js", "React.js", "Tailwind CSS", "UI Design"].map(
                    (c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags: فقط انتخاب تکی (بدون دکمه حذف اضافی) */}
        <FormField
          control={control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-[14px] text-black dark:text-gray-200">
                Tags
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12 w-full">
                    <SelectValue placeholder="Select Tag" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Frontend", "Backend", "SEO", "Tutorial"].map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-end gap-4 pt-4">
          <FormField
            control={control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col items-end gap-4 space-y-0">
                <div className="flex items-center justify-end">
                  <FormLabel className="text-base font-bold">Status</FormLabel>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-[#F77E27] scale-140 ml-4"
                  />
                </div>
                <FormDescription className="text-[12px] text-[#666666] leading-none">
                  Your post will be saved as a draft
                </FormDescription>
                <FormControl></FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="px-7 py-4 border-gray-300 rounded-md text-[16px]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#F77E27] hover:bg-[#D35400] text-white px-7 py-3 font-bold rounded-md text-[16px]"
            >
              {isEditing ? "Edit Blog" : "Create Blog"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
