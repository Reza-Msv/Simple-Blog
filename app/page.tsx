import React from "react";
import Link from "next/link";
import {
  Code2,
  LayoutGrid,
  Search,
  ArrowRight,
  Zap,
  Settings,
  ShieldCheck,
} from "lucide-react";

// Props Interface for Type Safety
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="group p-8 rounded-2xl bg-white/50 dark:bg-[#3F3C3C33] border border-[#D5D5D5] dark:border-[#262626] transition-all hover:scale-[1.02] duration-300">
    <div className="text-black dark:text-white mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-6 py-20">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mb-20 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
            Simple Blog Application
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
          A high-performance blog platform built with modern technologies for a
          seamless reading experience.
        </p>
      </section>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-20">
        <FeatureCard
          icon={<Code2 size={32} />}
          title="React & Next.js"
          description="Built with the latest Next.js App Router and TypeScript for maximum stability and speed."
        />
        <FeatureCard
          icon={<LayoutGrid size={32} />}
          title="Lucide Icons"
          description="Beautiful, lightweight vector icons used throughout the interface for better UX."
        />
        <FeatureCard
          icon={<Search size={32} />}
          title="SEO Optimized"
          description="Full support for Meta Tags, Robots.txt, and Sitemap to ensure high search engine ranking."
        />
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">
          Ready to explore?
        </p>

        <Link href="/blog">
          <button className="group relative flex items-center gap-3 px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold text-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-200 shadow-xl">
            Click to see Blogs
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
        </Link>
      </div>

      {/* Footer Details */}
      <footer className="mt-32 pt-10 border-t border-[#D5D5D5] dark:border-[#262626] w-full max-w-6xl flex flex-wrap justify-center gap-8 text-xs text-gray-400 uppercase tracking-[0.2em]">
        <span>TypeScript 5.0</span>
        <span>Tailwind CSS</span>
        <span>Responsive Design</span>
        <span>Dark/Light Ready</span>
      </footer>
    </main>
  );
};

export default Home;
