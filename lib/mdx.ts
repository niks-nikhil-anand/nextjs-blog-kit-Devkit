import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "content/posts");
const AUTHORS_PATH = path.join(process.cwd(), "content/authors");

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")     // Replace spaces with -
    .replace(/[^\w-]+/g, "")    // Remove all non-word chars
    .replace(/--+/g, "-")       // Replace multiple - with single -
    .replace(/^-+/, "")         // Trim - from start of text
    .replace(/-+$/, "");        // Trim - from end of text
}

export interface Author {
  name: string;
  slug: string;
  avatar: string;
  bio: string;
  social: {
    twitter: string;
    github: string;
    website: string;
  };
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  coverImage: string;
  draft: boolean;
  featured: boolean;
  content: string;
  readingTime: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_PATH);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8");
      const { data, content } = matter(source);
      
      return {
        title: "",
        description: "",
        date: new Date().toISOString(),
        featured: false,
        tags: [],
        author: "devkit",
        draft: false,
        coverImage: "",
        ...data,
        slug: slugify(file.replace(".mdx", "")),
        content,
        readingTime: readingTime(content).text,
      } as Post;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const cleanSlug = slugify(slug);
    const fullPath = path.join(POSTS_PATH, `${cleanSlug}.mdx`);
    const source = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(source);
    
    return {
      title: "",
      description: "",
      date: new Date().toISOString(),
      featured: false,
      tags: [],
      author: "devkit",
      draft: false,
      coverImage: "",
      ...data,
      slug: cleanSlug,
      content,
      readingTime: readingTime(content).text,
    } as Post;
  } catch (error) {
    return null;
  }
}

export function getAuthorBySlug(slug: string): Author | null {
  try {
    const fullPath = path.join(AUTHORS_PATH, `${slug}.json`);
    const source = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(source) as Author;
  } catch (error) {
    return null;
  }
}

export function getRelatedPosts(currentPost: Post, max: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
      return { post, score: sharedTags.length };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((item) => item.post);
}

export function getAdjacentPosts(currentSlug: string): { prev: Post | null; next: Post | null } {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    next: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
  };
}
