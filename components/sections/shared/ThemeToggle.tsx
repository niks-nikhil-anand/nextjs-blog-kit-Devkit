"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[72px] h-[34px] rounded-full bg-gray-200 dark:bg-gray-800 shrink-0 animate-pulse" />
  }

  const isDark = resolvedTheme === "dark"

  const handleToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    // slight delay before theme switch so the ripple plays first
    setTimeout(() => setTheme(isDark ? "light" : "dark"), 120)
    setTimeout(() => setIsAnimating(false), 700)
  }

  return (
    <>
      <style>{`
        /* Thumb slide — slow, springy */
        .toggle-thumb {
          transition:
            transform 0.6s cubic-bezier(0.34, 1.5, 0.64, 1),
            background 0.5s ease,
            box-shadow 0.5s ease;
        }
        .toggle-track {
          transition: background 0.6s ease, border-color 0.5s ease;
        }
        .toggle-stars  { transition: opacity 0.45s ease 0.1s; }
        .toggle-clouds { transition: opacity 0.45s ease 0.15s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50%       { opacity: 0.2; transform: scale(0.5); }
        }
        .animate-twinkle { animation: twinkle 2.2s ease-in-out infinite; }

        @keyframes shoot {
          0%   { transform: translateX(0)    scaleX(0.2); opacity: 0; }
          15%  { opacity: 1; }
          70%  { transform: translateX(-30px) scaleX(1);   opacity: 0.9; }
          100% { transform: translateX(-38px) scaleX(0.2); opacity: 0; }
        }
        .animate-shoot {
          animation: shoot 1.8s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateX(0px); }
          50%       { transform: translateX(2px); }
        }
        .animate-float      { animation: float 3s   ease-in-out infinite; }
        .animate-float-slow { animation: float 4.5s ease-in-out infinite; animation-delay: 1s; }

        @keyframes sun-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.65; transform: scale(1.4); }
        }
        .animate-sun-pulse { animation: sun-pulse 1.8s ease-in-out infinite; }

        @keyframes ripple {
          0%   { transform: scale(0.4); opacity: 0.6; }
          100% { transform: scale(3);   opacity: 0; }
        }
        .animate-ripple { animation: ripple 0.65s ease-out forwards; }

        @keyframes flash {
          0%   { opacity: 0; }
          25%  { opacity: 0.2; }
          100% { opacity: 0; }
        }
        .animate-flash { animation: flash 0.5s ease-out forwards; }

        @keyframes crater-pop {
          0%   { transform: scale(0); opacity: 0; }
          65%  { transform: scale(1.25); }
          100% { transform: scale(1); opacity: 1; }
        }
        .crater { animation: crater-pop 0.45s ease-out both; }
        .crater-1 { animation-delay: 0.05s; }
        .crater-2 { animation-delay: 0.13s; }
        .crater-3 { animation-delay: 0.21s; }
      `}</style>

      <button
        onClick={handleToggle}
        className="relative w-[72px] h-[34px] rounded-full cursor-pointer border-none p-0 bg-transparent outline-none group isolate hover:scale-105 active:scale-[0.93] transition-transform duration-200"
        aria-label="Toggle dark/light mode"
        aria-pressed={!isDark}
      >
        {/* ── TRACK ── */}
        <div
          className="toggle-track absolute inset-0 rounded-full overflow-hidden border-[1.5px] shadow-inner"
          style={{
            background: isDark
              ? "linear-gradient(135deg,#1a1a3e 0%,#0d1b4b 50%,#0a0a1f 100%)"
              : "linear-gradient(135deg,#74c0fc 0%,#4dabf7 40%,#a9d8f5 100%)",
            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
          }}
        >
          {/* White flash on click */}
          {isAnimating && (
            <div className="animate-flash absolute inset-0 bg-white rounded-full pointer-events-none z-10" />
          )}

          {/* ── STARS ── */}
          <div className="toggle-stars absolute inset-0" style={{ opacity: isDark ? 1 : 0 }}>
            {[
              { w:2, h:2, top:6,  left:10, d:"0s" },
              { w:2, h:2, top:14, left:18, d:"0.5s" },
              { w:2, h:2, top:8,  left:26, d:"1s" },
              { w:3, h:3, top:18, left:8,  d:"1.5s" },
              { w:2, h:2, top:22, left:22, d:"0.8s" },
            ].map((s, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{ width:s.w, height:s.h, top:s.top, left:s.left, animationDelay:s.d }}
              />
            ))}
            {/* Shooting star */}
            <div
              className="animate-shoot absolute rounded-full"
              style={{
                top: 9, right: 8, width: 14, height: 1.5,
                background: "linear-gradient(to left, white, transparent)",
              }}
            />
          </div>

          {/* ── CLOUDS ── */}
          <div className="toggle-clouds absolute inset-0" style={{ opacity: isDark ? 0 : 1 }}>
            {/* Cloud 1 — smaller */}
            <div className="animate-float absolute" style={{ top:8, left:5 }}>
              <div className="absolute bg-white/90 rounded-full" style={{ width:14, height:5 }} />
              <div className="absolute bg-white/90 rounded-full" style={{ width:8, height:8, top:-4, left:2 }} />
              <div className="absolute bg-white/90 rounded-full" style={{ width:6, height:6, top:-3, left:7 }} />
            </div>
            {/* Cloud 2 — smaller */}
            <div className="animate-float-slow absolute" style={{ top:20, left:9 }}>
              <div className="absolute bg-white/60 rounded-full" style={{ width:9, height:4 }} />
              <div className="absolute bg-white/60 rounded-full" style={{ width:5, height:5, top:-2, left:1 }} />
            </div>
          </div>
        </div>

        {/* ── THUMB ── */}
        <div
          className="toggle-thumb absolute top-[4px] left-[4px] w-[26px] h-[26px] rounded-full z-[2] flex items-center justify-center"
          style={{
            transform: isDark ? "translateX(0px)" : "translateX(38px)",
            background: isDark
              ? "radial-gradient(circle at 35% 35%, #e8e8ff, #b0b0e0)"
              : "radial-gradient(circle at 38% 32%, #ffe57a, #ffb703)",
            boxShadow: isDark
              ? "inset -3px -2px 4px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.4)"
              : "0 0 10px rgba(255,183,3,0.6), 0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          {/* Click ripple */}
          {isAnimating && (
            <div
              className="animate-ripple absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: isDark ? "rgba(110,91,255,0.4)" : "rgba(255,183,3,0.45)",
              }}
            />
          )}

          {/* Sun warm aura (light mode) */}
          {!isDark && (
            <div className="animate-sun-pulse absolute rounded-full bg-yellow-300/40 blur-[5px] -z-10"
              style={{ inset: -4 }} />
          )}

          {/* Moon craters (dark mode) */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ opacity: isDark ? 1 : 0, transition: "opacity 0.4s ease 0.1s" }}
          >
            <div className="crater crater-1 absolute rounded-full bg-black/[0.12]"
              style={{ width:5, height:5, top:6,  right:5 }} />
            <div className="crater crater-2 absolute rounded-full bg-black/[0.12]"
              style={{ width:3, height:3, top:14, right:9 }} />
            <div className="crater crater-3 absolute rounded-full bg-black/[0.12]"
              style={{ width:4, height:4, bottom:5, right:7 }} />
          </div>
        </div>
      </button>
    </>
  )
}