import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── circuit trace definitions ───────────────────────────────────────
   Traces leave the central button (centre 200,200, r≈58) and radiate
   outward with 45° bends — like the reference design. Each trace ends
   in a small node pad (ex, ey). No panel: drawn on page background.
─────────────────────────────────────────────────────────────────────── */
const TRACES = [
  // top
  { id: "t1", d: "M 183 137 L 183 104 L 156 77  L 156 44",  ex: 156, ey: 44  },
  { id: "t2", d: "M 207 134 L 207 96  L 232 71  L 232 36",  ex: 232, ey: 36  },
  { id: "t3", d: "M 230 144 L 252 122 L 252 88",            ex: 252, ey: 88  },
  // right
  { id: "r1", d: "M 263 186 L 304 186 L 330 160 L 366 160", ex: 366, ey: 160 },
  { id: "r2", d: "M 266 207 L 318 207 L 344 233",           ex: 344, ey: 233 },
  { id: "r3", d: "M 252 240 L 288 276 L 288 314",           ex: 288, ey: 314 },
  // bottom
  { id: "b1", d: "M 210 265 L 210 306 L 238 334 L 238 366", ex: 238, ey: 366 },
  { id: "b2", d: "M 186 264 L 186 300 L 158 328 L 158 358", ex: 158, ey: 358 },
  // left
  { id: "l1", d: "M 136 217 L 96  217 L 70  243 L 36  243", ex: 36,  ey: 243 },
  { id: "l2", d: "M 134 193 L 88  193 L 60  165",           ex: 60,  ey: 165 },
  { id: "l3", d: "M 150 158 L 116 124 L 116 92",            ex: 116, ey: 92  },
  { id: "l4", d: "M 168 142 L 148 110 L 148 78",            ex: 148, ey: 78  },
];

/* small node dots placed at trace bend points */
const JUNCTIONS = [
  { x: 183, y: 104 },
  { x: 252, y: 122 },
  { x: 304, y: 186 },
  { x: 318, y: 207 },
  { x: 210, y: 306 },
  { x: 96,  y: 217 },
  { x: 88,  y: 193 },
  { x: 116, y: 124 },
];

/* free-floating accent dots (like the scattered dots in the reference) */
const FLOATING_DOTS = [
  { x: 290, y: 60,  r: 4 },
  { x: 350, y: 110, r: 3 },
  { x: 372, y: 290, r: 4 },
  { x: 200, y: 380, r: 3 },
  { x: 60,  y: 310, r: 3 },
  { x: 30,  y: 120, r: 4 },
  { x: 90,  y: 40,  r: 3 },
];

export const Hero = () => {
  const [powered, setPowered] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* ── keyframe animations ── */}
      <style>{`
        @keyframes current-flow {
          from { stroke-dashoffset: 24; }
          to   { stroke-dashoffset:  0; }
        }
        @keyframes led-blink {
          0%, 100% { opacity: .55; }
          50%       { opacity: 1; }
        }
      `}</style>

      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary-glow/20 blur-3xl" />

      {/* Subtle circuit grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-deep)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-deep)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 70%)",
        }}
      />

      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        {/* ── Left column (unchanged) ── */}
        <div className="reveal max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Powering Sri Lankan businesses since 2021
          </div>

          <h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ color: "#2B2B2B" }}
          >
            We build <span className="text-gradient">reliable software</span>{" "}
            for modern businesses.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Modern web &amp; mobile solutions, custom ERP/POS systems and
            beautiful UI/UX — engineered for performance, scale and lasting
            support.
            <span className="mt-2 block text-sm text-foreground/60">
              our team of experienced developers and designers are dedicated to providing the best possible solutions for your business.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="#contact">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#projects">View Our Work</a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "50+", v: "Projects" },
              { k: "30+", v: "Happy Clients" },
              { k: "5★",  v: "Avg. Rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-primary-deep md:text-3xl">
                  {s.k}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — circuit power button (no panel, blends with bg) ── */}
        <div className="reveal reveal-delay-2 relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Soft glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Strong glow filter (for button) */}
                <filter id="glow-xl" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="10" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Button face gradient — deep navy like the reference */}
                <radialGradient id="btn-face" cx="50%" cy="42%" r="65%">
                  <stop offset="0%"  stopColor="#13294b" />
                  <stop offset="60%" stopColor="#0b1c38" />
                  <stop offset="100%" stopColor="#071224" />
                </radialGradient>
              </defs>

              {/* ── Traces (thin lines, drawn directly on page bg) ── */}
              {TRACES.map((t) => (
                <path
                  key={t.id + "-base"}
                  d={t.d}
                  fill="none"
                  stroke={powered ? "#3b82f6" : "#8fb3d9"}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity={powered ? 0.9 : 0.55}
                  style={{ transition: "stroke 0.5s ease, opacity 0.5s ease" }}
                />
              ))}

              {/* ── Animated current flow (powered only) ── */}
              {powered &&
                TRACES.map((t, i) => (
                  <path
                    key={t.id + "-flow"}
                    d={t.d}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeDasharray="7 20"
                    filter="url(#glow)"
                    style={{
                      animation: "current-flow 1s linear infinite",
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}

              {/* ── Bend-point node dots ── */}
              {JUNCTIONS.map((j, i) => (
                <circle
                  key={i}
                  cx={j.x}
                  cy={j.y}
                  r="3"
                  fill={powered ? "#2563eb" : "#9db8d6"}
                  filter={powered ? "url(#glow)" : undefined}
                  style={{ transition: "fill 0.5s" }}
                />
              ))}

              {/* ── Endpoint node pads (ring + dot, like reference) ── */}
              {TRACES.map((t, i) => (
                <g key={t.id + "-led"} filter={powered ? "url(#glow)" : undefined}>
                  <circle
                    cx={t.ex}
                    cy={t.ey}
                    r="6.5"
                    fill="none"
                    stroke={powered ? "#3b82f6" : "#8fb3d9"}
                    strokeWidth="1.6"
                    opacity={powered ? 1 : 0.6}
                    style={{
                      transition: "stroke 0.5s, opacity 0.5s",
                      animation: powered
                        ? `led-blink ${1.4 + i * 0.1}s ease-in-out infinite`
                        : "none",
                    }}
                  />
                  <circle
                    cx={t.ex}
                    cy={t.ey}
                    r="2.6"
                    fill={powered ? "#38bdf8" : "#9db8d6"}
                    style={{ transition: "fill 0.5s" }}
                  />
                </g>
              ))}

              {/* ── Scattered accent dots ── */}
              {FLOATING_DOTS.map((d, i) => (
                <circle
                  key={"fd" + i}
                  cx={d.x}
                  cy={d.y}
                  r={d.r}
                  fill={powered ? "#60a5fa" : "#a8c2dd"}
                  opacity={powered ? 0.85 : 0.5}
                  filter={powered ? "url(#glow)" : undefined}
                  style={{
                    transition: "fill 0.5s, opacity 0.5s",
                    animation: powered
                      ? `led-blink ${1.8 + i * 0.2}s ease-in-out infinite`
                      : "none",
                  }}
                />
              ))}

              {/* ── Ambient halo behind button (powered) ── */}
              {powered && (
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="#3b82f6"
                  opacity="0.25"
                  filter="url(#glow-xl)"
                />
              )}

              {/* ── Soft drop shadow under button (always, sits on light bg) ── */}
              <circle cx="200" cy="206" r="58" fill="#0b1c38" opacity="0.18" filter="url(#glow-xl)" />

              {/* ── Button body — dark navy disc ── */}
              <circle
                cx="200"
                cy="200"
                r="58"
                fill="url(#btn-face)"
                stroke={powered ? "#3b82f6" : "#16335e"}
                strokeWidth="2"
                style={{
                  cursor: "pointer",
                  transition: "stroke 0.4s",
                }}
                onClick={() => setPowered((p) => !p)}
              />

              {/* Inner ring detail */}
              <circle
                cx="200"
                cy="200"
                r="46"
                fill="none"
                stroke={powered ? "#2563eb" : "#1d3a66"}
                strokeWidth="1"
                opacity="0.7"
                pointerEvents="none"
                style={{ transition: "stroke 0.4s" }}
              />

              {/* ── Power symbol (arc + vertical stem) ── */}
              <g
                transform="translate(200,200)"
                style={{ cursor: "pointer" }}
                onClick={() => setPowered((p) => !p)}
                filter="url(#glow)"
              >
                <path
                  d="M 16 -14 A 21.5 21.5 0 1 1 -16 -14"
                  fill="none"
                  stroke={powered ? "#7dd3fc" : "#3f6ea8"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ transition: "stroke 0.4s" }}
                />
                <line
                  x1="0" y1="-9"
                  x2="0" y2="-27"
                  stroke={powered ? "#7dd3fc" : "#3f6ea8"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ transition: "stroke 0.4s" }}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
