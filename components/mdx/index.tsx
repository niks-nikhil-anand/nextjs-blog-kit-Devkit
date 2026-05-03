import { Callout } from "./Callout";
import { MyScript } from "./MyScript";
import { Pre } from "./CodeBlock";
import Link from "next/link";
import Image from "next/image";

export const mdxComponents = {
  Callout,
  MyScript,
  pre: Pre,
  a: ({ href, children, ...props }: any) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8 overflow-hidden rounded-xl border">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="h-auto w-full object-cover"
        {...props}
      />
    </div>
  ),
};
