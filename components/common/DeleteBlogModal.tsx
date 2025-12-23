"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  title: string;
}

export const DeleteBlogModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
}: DeleteModalProps) => {
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (!reason.trim()) {
      setError("Reason is required");
      return;
    }
    setError("");
    onConfirm(reason);
    setReason("");
  };

  const handleClose = () => {
    setReason("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-177.5 sm:h-89.75 p-8 rounded-2xl bg-white dark:bg-zinc-950 border-none shadow-xl flex flex-col justify-between gap-0">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold text-center text-black dark:text-white">
            <span className="text-[#C02626]">Delete</span> : {title} ؟
          </DialogTitle>
          <div className="text-center text-lg text-zinc-600 dark:text-zinc-400">
            Are you sure you want to delete{" "}
            <span className="text-[#C02626]">[{title}]</span> ؟
          </div>
        </DialogHeader>

        <div className="flex-1 mt-4">
          <label className="block text-lg font-bold mb-2 text-black dark:text-white">
            Reason <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Write a reason"
            className={`h-27.5 w-full bg-[#F5F5F5] dark:bg-zinc-900 border ${
              error ? "border-red-500" : "border-none"
            } resize-none p-4 rounded-xl focus-visible:ring-1 focus-visible:ring-zinc-300`}
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              if (error) setError("");
            }}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <DialogFooter className="flex sm:justify-end gap-4 mt-4">
          <Button
            type="button"
            variant="ghost"
            className="px-8 py-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 text-base"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="px-8 py-6 bg-[#C02626] hover:bg-[#A01A1A] text-white rounded-xl text-base"
            onClick={handleConfirm}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
