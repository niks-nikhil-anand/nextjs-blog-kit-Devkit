import React from "react";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "Tags", href: "/tags" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "RSS Feed", href: "/feed.xml" },
      { name: "GitHub Repo", href: "https://github.com/devkit-market/devkit-blog-starter" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "mailto:hello@devkitmarket.com" },
      { name: "DevKit Market", href: "https://www.devkitmarket.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/20 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                DevKit<span className="text-primary italic">Blog</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs mb-8 dark:text-zinc-400">
              A premium Next.js blog starter kit for developers who want to ship fast. 
              Built with MDX, Tailwind CSS, and shadcn/ui.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full size-10 border-zinc-200 dark:border-zinc-800" asChild>
                <a href="https://twitter.com/devkitmarket" target="_blank" rel="noreferrer">
                  <TwitterIcon className="size-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full size-10 border-zinc-200 dark:border-zinc-800" asChild>
                <a href="https://github.com/devkit-market" target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full size-10 border-zinc-200 dark:border-zinc-800" asChild>
                <a href="mailto:hello@devkitmarket.com">
                  <Mail className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="flex flex-col gap-6">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em]">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-primary dark:text-zinc-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} DevKit Blog Starter. Built with Next.js & MDX.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-primary transition-colors dark:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-primary transition-colors dark:text-zinc-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
