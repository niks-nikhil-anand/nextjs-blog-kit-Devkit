import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Elena — Stories",
  description: "Writer with bad maps and good shoes. Currently in Lisbon, next stop Marrakech.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen font-sans text-ink">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  ABOUT HERO                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="py-20 lg:py-24 container mx-auto max-w-[1320px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="flex flex-col">
          <p className="font-serif italic text-2xl text-accent mb-3">
            — Pleased to meet you
          </p>
          <h1 className="font-serif text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-tight font-medium mb-7 text-ink">
            I&apos;m Elena <em className="italic text-accent">Marsh</em>, and this is my notebook.
          </h1>
          <p className="text-lg lg:text-[18px] text-ink-2 max-w-[50ch] leading-relaxed mb-8">
            A writer, a slow traveller, and a permanent tourist with a small canvas bag and bad sense of direction. 
            For the last four years I&apos;ve been keeping this journal from wherever I happen to be — 
            Setúbal, Lisbon, Kinosaki, Marrakech, the back lanes of Hoi An.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/blog"
              className="bg-ink text-background px-8 py-3.5 rounded-full text-sm font-bold tracking-wider hover:bg-accent transition-colors"
            >
              Read the stories →
            </Link>
            <Link
              href="/contact"
              className="border border-ink/20 text-ink px-8 py-3.5 rounded-full text-sm font-bold tracking-wider hover:bg-ink hover:text-background transition-all"
            >
              Say hello
            </Link>
          </div>
          <div className="flex items-center gap-5 pt-2">
            <svg 
              className="h-14 w-auto text-ink" 
              viewBox="0 0 220 60" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.6" 
              strokeLinecap="round"
            >
              <path d="M8 38 C 18 14, 30 12, 32 30 C 33 42, 22 46, 30 36 C 40 24, 56 22, 50 40 C 48 48, 60 44, 64 32 C 68 22, 78 30, 78 40 C 78 50, 88 38, 90 28 C 92 20, 102 22, 100 38 C 98 50, 110 44, 116 30 C 122 16, 130 22, 132 36 M 142 22 C 150 18, 158 26, 160 36 C 162 46, 170 38, 174 28 M 184 18 L 184 50 M 178 32 L 192 32" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-ink leading-tight">Elena Marsh</span>
              <span className="text-[13px] text-muted tracking-tight">Editor & permanent tourist</span>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto lg:mx-0">
          <div className="absolute top-3.5 left-3.5 z-20 bg-background border border-rule-strong px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold text-ink shadow-sm">
            PORTRAIT · LISBON, 2025
          </div>
          <div className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] overflow-hidden bg-gradient-to-br from-sand via-accent to-accent-deep shadow-2xl">
            <div className="absolute top-[34%] left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#f5e3c4] via-[#e3c498] to-transparent z-10 shadow-lg opacity-90" />
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[170px] h-[160px] bg-[#3b2818] rounded-[50%_50%_30%_30%_/_60%_60%_30%_30%]" />
            <div className="absolute bottom-0 inset-x-0 h-[38%] bg-gradient-to-b from-transparent via-[#5a3a25] to-[#3b2818] z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-full bg-[#a86d3f] rounded-[50%_50%_0_0_/_80%_80%_0_0] z-[5]" />
          </div>
          <div className="absolute -top-[4%] -right-[4%] bg-background border border-dashed border-rule-strong p-3.5 rounded-full flex items-center gap-2 text-[11px] font-bold text-ink shadow-xl whitespace-nowrap z-30">
            <span className="font-serif italic text-accent text-lg leading-none">e</span> 142 stories
          </div>
          <div className="absolute bottom-[18%] -left-[8%] bg-background border border-dashed border-rule-strong p-3.5 rounded-full flex items-center gap-2 text-[11px] font-bold text-ink shadow-xl whitespace-nowrap z-30">
            <span className="font-serif italic text-accent text-lg leading-none">e</span> 38 countries
          </div>
          <div className="absolute -bottom-[2%] right-[6%] bg-ink p-3.5 rounded-full flex items-center gap-2 text-[11px] font-bold text-background shadow-xl whitespace-nowrap z-30">
            <span className="font-serif text-sand text-lg leading-none">★</span> Editor&apos;s pick
          </div>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  MANIFESTO                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 border-t border-rule text-center bg-bg-2">
        <div className="container mx-auto max-w-[1320px] px-6">
          <div className="font-serif italic text-[140px] leading-[0.5] text-accent mb-6">
            &ldquo;
          </div>
          <h2 className="font-serif text-[clamp(40px,5.5vw,68px)] leading-[1.15] tracking-tight font-medium mb-5 max-w-[24ch] mx-auto text-ink">
            I have always travelled <em className="italic text-accent">slowly</em>, and on purpose, in case I missed something on the way.
          </h2>
          <span className="text-[11px] tracking-[0.24em] uppercase text-muted font-bold">
            — The foreword, Issue №01
          </span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  STORY                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 border-t border-rule container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-bold block mb-4">
              — My story
            </span>
            <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] leading-[1.1] tracking-tight font-medium mb-4 text-ink">
              How a notebook became <em className="italic text-accent">a journal</em>.
            </h2>
            <p className="text-sm text-ink-2 max-w-[30ch] leading-relaxed">
              The short version, written from a quiet table at the back of a café in Lisbon.
            </p>
          </div>
          <div className="prose prose-lg max-w-none prose-ink prose-p:text-[17px] prose-p:leading-[1.75] prose-p:text-ink-2 prose-p:mb-5">
            <p className="before:content-['I'] before:font-serif before:float-left before:text-[84px] before:leading-[0.85] before:pt-1.5 before:pr-3.5 before:text-accent before:font-medium">
              grew up in a small town near the Welsh border that nobody travelled to and almost nobody travelled from. 
              My grandmother kept postcards in a biscuit tin on the windowsill; I read them like a novel, 
              in no particular order, and decided very early that I wanted a tin like that of my own.
            </p>
            <p>
              By the time I was twenty-six, I had spent most of my savings on a single one-way flight to Lisbon. 
              I told myself I&apos;d stay three weeks. I stayed eleven months. 
              I started keeping notes on the back of receipts and napkins, and then in a small <strong>battered moleskine</strong> someone gave me, 
              and then on a small website with a name I am still slightly embarrassed by.
            </p>
            <p>
              That website is <em className="italic text-accent">this one</em>. 
              Four years later it is one hundred and forty-two essays long, 
              has been read by people in eighty-six countries, 
              and remains, mercifully, the same battered moleskine on the inside — just typed.
            </p>
            <p>
              Stories is, in the end, exactly what it sounds like. <strong>Long, slow pieces about places I have been.</strong> 
              Hotel rooms I did not want to leave. Mornings before the city woke up. 
              Meals that took a whole afternoon. Trains I missed on purpose. 
              The recipes I tried, mostly badly, to bring home with me.
            </p>
            <p>
              I am not interested in lists, top tens, or the cheapest weekend in Berlin. 
              I am interested in the small, slow, peculiar things — the way the light moves across a tiled wall at four in the afternoon, 
              the sound a market makes before anyone has set up properly, 
              the precise weight of the air in a courtyard in Marrakech in March.
            </p>
            <p>
              If that sounds like the kind of thing you want to read on a Sunday, with a long coffee and no other plans, 
              then we are going to get on rather well. <em className="italic text-accent">Welcome.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  JOURNEY TIMELINE                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg-2 py-24 border-t border-rule overflow-hidden">
        <div className="container mx-auto max-w-[1320px] px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-bold block mb-4">
              — The journey so far
            </span>
            <h2 className="font-serif text-[clamp(40px,5.5vw,68px)] leading-[1.1] tracking-tight font-medium text-ink">
              A short, <em className="italic text-accent">imprecise</em> timeline.
            </h2>
          </div>

          <div className="max-w-[760px] mx-auto relative px-4 sm:px-0">
            <div className="absolute left-[60px] sm:left-[120px] top-2 bottom-2 w-px bg-rule-strong" />
            
            {[
              { year: "2018", place: "Welsh Borders", title: "One-way ticket to Lisbon", desc: "Sold most of what I owned, packed the rest into one canvas bag, and told everyone I'd be back by Christmas. I was not back by Christmas." },
              { year: "2019", place: "Lisbon, Portugal", title: "Stories.html, written badly.", desc: "Started the journal on a slow Sunday afternoon, in an apartment with a tiled hallway and a stove that worked only on Tuesdays. First essay: a 2,000-word piece about pastéis de nata." },
              { year: "2021", place: "Kinosaki, Japan", title: "Six tatami rooms, no Wi-Fi.", desc: "Spent three weeks at a 200-year-old ryokan, didn't write a word for the first twelve days, then wrote 14,000 words over the following four. The piece that put us on the map." },
              { year: "2023", place: "Marrakech & the Atlas", title: "The Sunday letter begins.", desc: "14 readers signed up the first week. By month three it was 2,400. Today, somehow, it is 14,328 — sent every Sunday morning from wherever I happen to be." },
              { year: "2025", place: "Folegandros, Greece", title: "Issue №01 of the print zine.", desc: "A small, hand-numbered run of 1,200 copies. Sold out in nine days. Made me promise to do another one. (Issue №02 ships this autumn.)" },
              { year: "2026", place: "Lisbon → Marrakech", title: "Currently writing in Alfama.", desc: "One hundred and forty-two essays in. Thirty-eight countries. One battered notebook. Next stop: Marrakech, on the slow train." },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-[60px_24px_1fr] sm:grid-cols-[120px_32px_1fr] gap-4 sm:gap-6 py-6 items-start group">
                <div className="font-serif italic text-2xl sm:text-[32px] text-accent text-right leading-none pt-1">
                  {item.year}
                </div>
                <div className="w-3.5 h-3.5 rounded-full bg-bg-2 border-2 border-accent mx-auto mt-2 relative z-10 transition-transform group-hover:scale-125" />
                <div className="flex flex-col">
                  <span className="text-[11px] tracking-[0.18em] uppercase text-muted font-bold mb-1.5">
                    {item.place}
                  </span>
                  <h4 className="font-serif text-[22px] sm:text-[24px] font-medium text-ink leading-tight mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-ink-2 leading-relaxed max-w-[52ch]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  VALUES                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 border-t border-rule container mx-auto max-w-[1320px] px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-bold block mb-4">
            — What I believe
          </span>
          <h2 className="font-serif text-[clamp(40px,5.5vw,68px)] leading-[1.1] tracking-tight font-medium text-ink">
            Three small <em className="italic text-accent">convictions</em>.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { num: "i.", title: "Slow, on purpose.", desc: "The best stories happen at walking speed. I'd rather spend three weeks somewhere than three days, miss the train than rush the lunch, and skip the highlight reel for the back lane every single time." },
            { num: "ii.", title: "Small & honest.", desc: "No sponsored hotel stays. No press trips with a hashtag attached. If a place is in here it is because I went and stayed and paid like everyone else. The rare exceptions are flagged clearly." },
            { num: "iii.", title: "Place over performance.", desc: "I am not the story. The street, the room, the morning, the woman who taught me to fold tortillas — they are. I'm just the one with the notebook, trying very hard to keep up." },
          ].map((val, idx) => (
            <div key={idx} className="p-10 border border-rule rounded-[24px] bg-background flex flex-col gap-3.5 transition-all hover:border-accent hover:-translate-y-1">
              <span className="font-serif italic text-[38px] text-accent leading-none">{val.num}</span>
              <h3 className="font-serif text-[28px] font-medium text-ink leading-tight">{val.title}</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  FACTS STRIP                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-ink text-background py-20 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-radial from-accent to-transparent top-[-200px] right-[-100px] opacity-25 z-0 pointer-events-none" />
        <div className="container mx-auto max-w-[1320px] px-6 relative z-10 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-sand font-bold mb-4 block">
            — By the numbers
          </span>
          <h2 className="font-serif text-[clamp(38px,5vw,60px)] leading-[1.1] tracking-tight font-medium mb-12 text-background">
            Four years, one battered notebook, and <em className="italic text-sand not-italic">quite a lot</em> of train tickets.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1080px] mx-auto">
            {[
              { v: "142", k: "Stories written" },
              { v: "38", k: "Countries visited" },
              { v: "14,328", k: "Sunday readers" },
              { v: "1,209", k: "Photographs filed" },
            ].map((fact, idx) => (
              <div key={idx} className="p-8 border border-white/10 rounded-[18px] bg-white/[0.03]">
                <span className="font-serif italic text-5xl text-sand leading-none block mb-2">{fact.v}</span>
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#cfc8b8] font-bold">{fact.k}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  BOOKSHELF                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 border-t border-rule bg-bg-2">
        <div className="container mx-auto max-w-[1320px] px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-bold block mb-4">
              — On the road bookshelf
            </span>
            <h2 className="font-serif text-[clamp(40px,5.5vw,68px)] leading-[1.1] tracking-tight font-medium text-ink">
              Five books I keep <em className="italic text-accent">going back to</em>.
            </h2>
            <p className="text-sm text-muted max-w-[48ch] mx-auto mt-4">
              The slim shelf in my bag. Always one of these, usually two, occasionally all five at once.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { author: "Bruce Chatwin", title: "In Patagonia", num: "i.", color: "from-[#b8754a] to-[#6a3f24]" },
              { author: "Annie Dillard", title: "Pilgrim at Tinker Creek", num: "ii.", color: "from-[#4a6580] to-[#2a3548]" },
              { author: "Patrick Leigh Fermor", title: "A Time of Gifts", num: "iii.", color: "from-[#7a8b6f] to-[#3e4a36]" },
              { author: "Rebecca Solnit", title: "A Field Guide to Getting Lost", num: "iv.", color: "from-[#d8c89e] to-[#a89868]", text: "text-ink" },
              { author: "Pico Iyer", title: "The Art of Stillness", num: "v.", color: "from-[#6b5a8a] to-[#3a2e58]" },
            ].map((book, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "aspect-[2/3] rounded-[6px] p-4.5 flex flex-col justify-between shadow-xl cursor-pointer transition-transform hover:-translate-y-1.5 hover:-rotate-1 relative overflow-hidden group",
                  "bg-gradient-to-br",
                  book.color,
                  book.text || "text-background"
                )}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/25" />
                <div className="relative z-10">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-bold opacity-85 block mb-2">{book.author}</span>
                  <h4 className="font-serif text-[22px] font-medium leading-tight">{book.title}</h4>
                </div>
                <span className="font-serif italic text-sm opacity-70 relative z-10">{book.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  CTA BLOCK                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 border-t border-rule container mx-auto max-w-[1320px] px-6 text-center">
        <h2 className="font-serif text-[clamp(48px,7vw,96px)] leading-[1] tracking-tight font-medium mb-6 text-ink">
          Want a postcard, <em className="italic text-accent">every Sunday</em>?
        </h2>
        <p className="text-lg text-ink-2 max-w-[50ch] mx-auto mb-10 leading-relaxed">
          Join 14,328 kind people who let one slow story land in their inbox each week. No tracking, no plans, plain text.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            href="/contact"
            className="bg-ink text-background px-8 py-4 rounded-full text-sm font-bold tracking-wider hover:bg-accent transition-colors"
          >
            Subscribe to the Sunday letter →
          </Link>
          <Link
            href="/blog"
            className="border border-ink/20 text-ink px-8 py-4 rounded-full text-sm font-bold tracking-wider hover:bg-ink hover:text-background transition-all"
          >
            Read the archive
          </Link>
        </div>
      </section>
    </div>
  );
}
