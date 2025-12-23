This README is designed to showcase the professional architecture of your project, highlighting the use of Next.js 16, React 19, and the Server Actions pattern.

🚀 Modern Blog Application
A high-performance, type-safe blogging platform built with the latest Next.js 16 and React 19. This project demonstrates a complete CRUD cycle using Server Actions, Shadcn UI, and a secure API integration.

🛠️ Tech Stack
Framework: Next.js 16 (App Router)

Library: React 19

Styling: Tailwind CSS

UI Components: Shadcn UI (Radix UI)

Form Management: React Hook Form

Validation: Zod

Icons: Lucide React

Notifications: Sonner

Backend: Crudify API Integration

✨ Key Features
1. Server-Side Excellence
Server Actions: All data mutations (Create, Update, Delete) are handled via secure Server Actions, eliminating the need for client-side API routes.

Dynamic Metadata: Optimized SEO with dynamic title and description generation for every blog post.

Advanced Caching: Strategic use of revalidate and no-store for optimal performance and data freshness.

2. Robust Architecture
Type-Safety: End-to-end type safety using TypeScript and Zod schemas.

Clean Structure: Separation of concerns between UI components, Page containers, and Server logic.

Auth Ready: Integrated Bearer Token authorization for all API calls.

3. Premium UI/UX
Dark Mode: Full support for system and manual theme switching via next-themes.

Interactive Modals: Custom-styled Shadcn Dialogs for data deletion with reason validation.

Responsive Design: Fully fluid layout optimized for mobile, tablet, and desktop.

Bash

git clone https://github.com/Reza-Msv/Simple-Blog.git
Install dependencies:

Bash

npm install
Configure Environment Variables: Create a .env.local file and add your Crudify API credentials:


NEXT_PUBLIC_BASE_URL=your_api_url
NEXT_PUBLIC_GENERAL_COOKIE=your_bearer_token
Run the development server:

Bash

npm run dev
🛡️ SEO & Robots
The project includes a pre-configured robots.ts to manage crawler access:

Public Pages: Fully indexed for maximum reach.

Admin/Edit Pages: Set to noindex to protect the management interface.