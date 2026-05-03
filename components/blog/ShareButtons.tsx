"use client";

import React from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TwitterIcon, LinkedinIcon, FacebookIcon } from "@/components/Icons";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Twitter",
      icon: TwitterIcon,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="mr-2 text-sm font-medium text-zinc-500">Share this post:</p>
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon-sm"
          asChild
          className="size-9 rounded-full"
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <link.icon className="size-4" />
            <span className="sr-only">Share on {link.name}</span>
          </a>
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon-sm"
        className="size-9 rounded-full"
        onClick={copyLink}
      >
        {copied ? <Check className="size-4 text-emerald-500" /> : <LinkIcon className="size-4" />}
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  );
}
