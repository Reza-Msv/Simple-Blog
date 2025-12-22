const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white dark:bg-black font-poppins">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-[#D5D5D5] dark:border-[#262626] rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-black dark:border-t-white rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
        Loading content...
      </p>
    </div>
  );
};

export default Loading;
