# DevKit Blog Starter

A production-ready, MDX-powered blog built with Next.js 14, Tailwind CSS, and shadcn/ui. Fully featured with SEO, dark mode, RSS, search, multi-author support, and more — deploy to Vercel in one click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devkit-market/devkit-blog-starter)

[Live Demo](https://devkit-blog-starter.vercel.app) · [Report Bug](https://github.com/devkit-market/devkit-blog-starter/issues) · [Request Feature](https://github.com/devkit-market/devkit-blog-starter/issues)

---

## Why DevKit Blog Starter?

Most blog templates give you the basics and leave the rest to you. DevKit Blog Starter ships with everything a production blog actually needs — SEO, search, dark mode, multi-author support, newsletter integration, comments, analytics, and a developer experience that doesn't slow you down. Clone it, write your first post, and deploy. Done.

---

## Features

### Core Blog

- **MDX support** — Write in Markdown with custom React components (callouts, code blocks, embeds, and anything you build)
- **Tag & category system** — Organize posts with tags and filter by category
- **Reading time estimation** — Auto-calculated for every post
- **Table of contents** — Auto-generated from headings, sticky sidebar on desktop
- **Related posts** — Suggest relevant posts at the end of each article
- **Pagination** — Paginated post listing with configurable posts-per-page
- **Full-text search** — Client-side search across all posts, instant results

### SEO & Performance

- **Full meta tags** — Open Graph, Twitter Cards, and standard meta for every page
- **Dynamic metadata** — Unique, auto-generated metadata per page using Next.js `generateMetadata`
- **Auto-generated sitemap.xml** — Updated on every build
- **RSS feed** — Valid XML feed at `/feed.xml`
- **Structured data** — JSON-LD schema for blog posts (Article, BreadcrumbList)
- **Canonical URLs** — Prevent duplicate content issues
- **Optimized images** — `next/image` with blur placeholders and lazy loading
- **Lighthouse 95+** — Performance, accessibility, best practices, and SEO out of the box

### Design & UX

- **Dark mode / light mode** — Toggle with system preference detection and persistence
- **Fully responsive** — Mobile-first design with dedicated tablet breakpoints
- **Syntax highlighting** — Shiki-powered with line numbers, line highlighting, and copy button
- **Typography optimized** — Carefully tuned for long-form reading with proper line height, measure, and spacing
- **Smooth page transitions** — Subtle animations between routes
- **Tailwind CSS + shadcn/ui** — Consistent, accessible component library

### Author & Content

- **Author profiles** — Avatar, bio, social links, and dedicated author pages
- **Multi-author support** — Multiple authors per post, each with their own profile
- **Draft mode** — Posts with `draft: true` in frontmatter are hidden in production
- **Frontmatter metadata** — Title, date, tags, description, cover image, author, and custom fields

### Integrations & Extras

- **Newsletter signup** — Pre-wired form ready for Resend, ConvertKit, or Mailchimp
- **Analytics ready** — Drop-in support for Google Analytics, Plausible, or Umami
- **Comment system** — Pre-configured for Giscus (GitHub Discussions) or Disqus
- **Social share buttons** — Twitter/X, LinkedIn, Facebook, copy link
- **One-click deploy** — Vercel deploy button with zero config
- **Code copy button** — One-click copy on every code block

### Developer Experience

- **TypeScript** — Fully typed, end to end
- **ESLint + Prettier** — Pre-configured with sensible defaults
- **Clean folder structure** — `content/posts/` directory for all your writing
- **Environment template** — `.env.example` with every variable documented
- **Content hot-reload** — See changes instantly in development
- **Well-documented** — This README + inline code comments

---

## Tech Stack

| Layer         | Technology                        |
| ------------- | --------------------------------- |
| Framework     | Next.js 14 (App Router)           |
| Language      | TypeScript                        |
| Styling       | Tailwind CSS + shadcn/ui          |
| Content       | MDX (via next-mdx-remote)         |
| Syntax        | Shiki / Rehype Pretty Code        |
| Search        | Fuse.js (client-side)             |
| Analytics     | Google Analytics / Plausible      |
| Comments      | Giscus                            |
| Newsletter    | Resend / ConvertKit               |
| Deployment    | Vercel                            |

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/devkit-market/devkit-blog-starter.git
cd devkit-blog-starter
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your blog is running.

---

## Project Structure

```
devkit-blog-starter/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual post page
│   │   └── page.tsx              # Blog listing with pagination
│   ├── tags/
│   │   └── [tag]/
│   │       └── page.tsx          # Posts filtered by tag
│   ├── authors/
│   │   └── [author]/
│   │       └── page.tsx          # Author profile page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Homepage
├── components/
│   ├── blog/
│   │   ├── PostCard.tsx          # Blog post card component
│   │   ├── FeaturedPost.tsx      # Featured post hero
│   │   ├── TableOfContents.tsx   # Auto-generated TOC
│   │   ├── RelatedPosts.tsx      # Related posts section
│   │   ├── ShareButtons.tsx      # Social share buttons
│   │   ├── Comments.tsx          # Giscus comment wrapper
│   │   ├── SearchDialog.tsx      # Full-text search modal
│   │   └── Newsletter.tsx        # Newsletter signup form
│   ├── mdx/
│   │   ├── Callout.tsx           # Info/warning/tip callouts
│   │   ├── CodeBlock.tsx         # Syntax highlighted code
│   │   └── index.tsx             # MDX component registry
│   ├── layout/
│   │   ├── Header.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Site footer
│   │   └── ThemeToggle.tsx       # Dark/light mode toggle
│   └── ui/                       # shadcn/ui components
├── content/
│   ├── posts/
│   │   ├── my-first-post.mdx     # Example blog post
│   │   └── getting-started.mdx   # Setup guide post
│   └── authors/
│       └── default.json          # Author profiles
├── lib/
│   ├── mdx.ts                    # MDX parsing & utilities
│   ├── posts.ts                  # Post fetching & sorting
│   ├── search.ts                 # Search index builder
│   └── seo.ts                    # SEO helpers & JSON-LD
├── public/
│   ├── images/                   # Post cover images
│   └── feed.xml                  # Generated RSS feed
├── styles/
│   └── globals.css               # Global styles & Tailwind
├── .env.example                  # Environment variable template
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## Writing Posts

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and post cards."
date: "2026-05-03"
tags: ["next.js", "react", "tutorial"]
author: "your-name"
coverImage: "/images/your-cover.jpg"
draft: false
---

Your content starts here. Write in standard Markdown with full MDX support.

## You can use custom components

<Callout type="info">
  This is an info callout — great for tips and notes.
</Callout>

<Callout type="warning">
  This is a warning callout — use it for important caveats.
</Callout>
```

### Frontmatter Fields

| Field         | Type       | Required | Description                                      |
| ------------- | ---------- | -------- | ------------------------------------------------ |
| `title`       | `string`   | Yes      | Post title                                       |
| `description` | `string`   | Yes      | Short description for SEO and cards               |
| `date`        | `string`   | Yes      | Publication date (YYYY-MM-DD)                     |
| `tags`        | `string[]` | Yes      | Array of tags                                     |
| `author`      | `string`   | Yes      | Author slug (matches `content/authors/`)          |
| `coverImage`  | `string`   | No       | Path to cover image in `/public/images/`          |
| `draft`       | `boolean`  | No       | Set `true` to hide in production (default: false) |

---

## Custom MDX Components

These components are available in every MDX file without importing:

### Callout

```mdx
<Callout type="info">Helpful information here.</Callout>
<Callout type="warning">Something to watch out for.</Callout>
<Callout type="tip">A useful tip for the reader.</Callout>
<Callout type="error">Something went wrong.</Callout>
```

### Code Block

Fenced code blocks automatically get syntax highlighting, line numbers, and a copy button:

````mdx
```typescript title="example.ts" {3-5}
function greet(name: string): string {
  // Lines 3-5 will be highlighted
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  return greeting;
}
```
````

---

## Configuration

### Environment Variables

```bash
# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Your Blog Name"

# Analytics (pick one)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx

# Newsletter (pick one)
RESEND_API_KEY=re_xxxxxxxxx
CONVERTKIT_API_KEY=xxxxxxxxx
CONVERTKIT_FORM_ID=xxxxxxx

# Comments
NEXT_PUBLIC_GISCUS_REPO=your-username/your-repo
NEXT_PUBLIC_GISCUS_REPO_ID=R_xxxxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxxxxxxxxx
```

### Site Configuration

Edit `lib/site-config.ts` to customize your blog:

```typescript
export const siteConfig = {
  name: "Your Blog Name",
  description: "Your blog description",
  url: "https://yourdomain.com",
  author: "Your Name",
  postsPerPage: 9,
  socialLinks: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourhandle",
  },
};
```

---

## Adding Authors

Create a JSON file in `content/authors/`:

```json
{
  "name": "Jane Developer",
  "slug": "jane",
  "avatar": "/images/authors/jane.jpg",
  "bio": "Full-stack developer and open source enthusiast.",
  "social": {
    "twitter": "https://twitter.com/jane",
    "github": "https://github.com/jane",
    "website": "https://jane.dev"
  }
}
```

Reference the author in your post frontmatter with `author: "jane"`.

---

## Deployment

### Vercel (Recommended)

Click the deploy button at the top of this README, or:

```bash
npm i -g vercel
vercel
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output is in `.next/` — deploy to any platform that supports Next.js (Railway, Render, AWS Amplify, Netlify).

---

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot-reload |
| `npm run build`   | Build for production                     |
| `npm run start`   | Start production server                  |
| `npm run lint`    | Run ESLint                               |
| `npm run format`  | Run Prettier                             |
| `npm run sitemap` | Regenerate sitemap.xml                   |
| `npm run rss`     | Regenerate RSS feed                      |

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Contributing

Contributions are welcome. Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

MIT — use it for personal projects, client work, or anything else. No attribution required (but appreciated).

---

## Support

If this starter kit saved you time, consider:

- Starring the repo on GitHub
- Sharing it on Twitter/X
- Checking out [DevKit Market](https://www.devkitmarket.com) for premium starter kits

---

Built with ❤️ by [DevKit Market](https://www.devkitmarket.com)