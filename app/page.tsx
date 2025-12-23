"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
} from "lucide-react";

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
  <article className="group p-8 rounded-2xl bg-white/50 dark:bg-[#3F3C3C33] border border-[#D5D5D5] dark:border-[#262626] transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 duration-300">
    <div className="text-black dark:text-white mb-5 opacity-80 group-hover:opacity-100 group-hover:text-[#F77E27] transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </article>
);

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-6 py-20 overflow-hidden">
      <header className="text-center max-w-4xl mb-20 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 text-[#F77E27] text-xs font-bold uppercase tracking-wider mb-4">
          <Zap size={14} /> Powered by Next.js 16 & React 19
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-[#F77E27] to-[#D35400] bg-clip-text text-transparent">
            Simple Blog Application
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          A high-performance, modern blogging platform designed for a seamless
          reading and content management experience using the latest web
          technologies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-24">
        <FeatureCard
          icon={<Code2 size={32} />}
          title="React & Next.js"
          description="Leveraging App Router and Server Actions for optimized data fetching and enhanced server-side security."
        />
        <FeatureCard
          icon={<ShieldCheck size={32} />}
          title="Safe & Secure"
          description="Robust API layer authorization with Bearer Tokens and strict data validation using Zod schemas."
        />
        <FeatureCard
          icon={<Search size={32} />}
          title="SEO Optimized"
          description="Full support for dynamic Metadata, Robots.txt management, and structured data for search engine rankings."
        />
      </div>

      <section className="flex flex-col items-center gap-8 relative">
        <div className="absolute -z-10 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />

        <p className="text-gray-400 dark:text-gray-500 text-sm tracking-[0.3em] uppercase font-medium">
          Ready to explore?
        </p>

        <Link href="/blog">
          <button className="group relative flex items-center gap-3 px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-orange-500/20">
            Click to see Blogs
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform duration-300"
              size={22}
            />
          </button>
        </Link>
      </section>

      <footer className="mt-32 pt-10 border-t border-[#D5D5D5] dark:border-[#262626] w-full max-w-6xl flex flex-wrap justify-center gap-10 text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.25em] font-medium">
        <div className="flex items-center gap-2">
          <Database size={14} /> CRUDify Integrated
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} /> Server Actions Ready
        </div>
        <span>TypeScript 5.0</span>
        <span>Tailwind CSS 3.4</span>
        <span>Shadcn UI</span>
        <span>Dark/Light Ready</span>
      </footer>
    </main>
  );
};

export default Home;
