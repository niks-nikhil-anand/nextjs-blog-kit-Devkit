"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      className="absolute right-2 top-2 z-10 size-8 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 dark:text-zinc-500 dark:hover:bg-zinc-800"
      onClick={copy}
    >
      {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span className="sr-only">Copy code</span>
    </Button>
  );
}

export function Pre({ children, ...props }: React.ComponentProps<"pre">) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [text, setText] = useState("");

  React.useEffect(() => {
    if (preRef.current) {
      setText(preRef.current.innerText);
    }
  }, [children]);

  return (
    <div className="group relative">
      <CopyButton text={text} />
      <pre ref={preRef} {...props} className="overflow-x-auto rounded-lg bg-zinc-950 p-4 font-mono text-sm leading-relaxed text-zinc-200 dark:bg-zinc-900/50">
        {children}
      </pre>
    </div>
  );
}
