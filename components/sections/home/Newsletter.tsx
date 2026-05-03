"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-24 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto rounded-[3rem] bg-zinc-50 p-12 text-center dark:bg-zinc-900/50">
        <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl mb-4">
          Stay in the loop
        </h2>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
          Get new posts delivered to your inbox. No spam, unsubscribe anytime.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="h-12 rounded-full px-6 border-zinc-200 dark:border-zinc-800 bg-background"
            required
          />
          <Button size="lg" className="h-12 rounded-full px-8 font-bold">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
