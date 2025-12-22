import Link from "next/link";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white dark:bg-black px-6 text-center font-poppins">
      <h1 className="text-9xl font-bold text-black dark:text-white opacity-20">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mt-[-40px] mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <button className="flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg">
          <Home size={18} />
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
