import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "@/components/Icons";

const footerColumns = [
  {
    title: "Travel",
    links: [
      { name: "Europe", href: "/blog?category=europe" },
      { name: "Asia", href: "/blog?category=asia" },
      { name: "Americas", href: "/blog?category=americas" },
      { name: "Oceania", href: "/blog?category=oceania" },
    ],
  },
  {
    title: "Destination",
    links: [
      { name: "City Guides", href: "/blog?category=city" },
      { name: "Nature", href: "/blog?category=nature" },
      { name: "Culture", href: "/blog?category=culture" },
      { name: "Hidden Gems", href: "/blog?category=hidden" },
    ],
  },
  {
    title: "Hotels",
    links: [
      { name: "Luxury Riads", href: "/blog?category=luxury" },
      { name: "Boutique Stays", href: "/blog?category=boutique" },
      { name: "Eco Retreats", href: "/blog?category=eco" },
      { name: "Mountain Lodges", href: "/blog?category=mountain" },
    ],
  },
  {
    title: "Journal",
    links: [
      { name: "About Elena", href: "/about" },
      { name: "Photography", href: "/photography" },
      { name: "Press Kit", href: "/press" },
      { name: "Contact Me", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-rule pt-20 pb-10">
      <div className="container mx-auto max-w-[1320px] px-6 lg:px-9">
        {/* Giant Wordmark */}
        <div className="text-center mb-16 lg:mb-24 overflow-hidden">
          <h2 className="font-serif text-[120px] md:text-[200px] lg:text-[320px] leading-[0.85] tracking-tighter font-medium italic text-ink select-none">
            Stories <em className="not-italic text-accent">&amp;</em>
          </h2>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-1">
             <Link href="/" className="flex flex-col items-start group mb-6">
              <span className="font-serif text-[28px] italic leading-tight tracking-tight group-hover:text-accent transition-colors">
                Stories
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-muted -mt-0.5">
                By Elena Marsh
              </span>
            </Link>
            <p className="text-sm text-ink-2 leading-relaxed mb-8 max-w-[24ch]">
              A slow travel journal for the quiet places and the long way home. 
              Based in Lisbon, exploring everywhere.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: InstagramIcon, href: "#" },
                { Icon: TwitterIcon, href: "#" },
                { Icon: FacebookIcon, href: "#" },
                { Icon: Mail, href: "mailto:hello@elanamarsh.com" },
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-9 h-9 rounded-full border border-rule-strong flex items-center justify-center text-ink-2 hover:bg-ink hover:text-background hover:border-ink transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-6">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                {column.title}
              </h5>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink-2 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-muted font-medium">
          <p>© {new Date().getFullYear()} Stories by Elena Marsh. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-ink transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
