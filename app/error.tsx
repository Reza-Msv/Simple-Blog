"use client";
import { useEffect } from "react";
import { RefreshCcw, AlertTriangle } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white dark:bg-black px-6 text-center font-poppins">
      <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-full mb-6">
        <AlertTriangle size={48} className="text-red-600 dark:text-red-500" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
        An unexpected error occurred. Please try again or contact support if the
        problem persists.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 px-8 py-3 bg-[#D5D5D53D] dark:bg-[#3F3C3C63] text-black dark:text-white border border-gray-200 dark:border-[#262626] rounded-lg font-semibold transition-all hover:bg-gray-200 dark:hover:bg-zinc-800"
      >
        <RefreshCcw size={18} />
        Try Again
      </button>
    </div>
  );
};

export default Error;
