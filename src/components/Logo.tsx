import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  animated?: boolean;
}

/**
 * Circuit + Power-button mark.
 * Outer ring = power circle, inner segment = power "I", with circuit
 * traces and nodes radiating outward (matches the "tech / circuit" vibe).
 */
export const Logo = ({ className, animated = false }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      aria-label="NovaSync logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="hsl(213 88% 38%)" />
          <stop offset="100%" stopColor="hsl(199 100% 60%)" />
        </linearGradient>
      </defs>

      {/* Outer rotating circuit ring */}
      <g className={animated ? "animate-rotate-slow" : ""} style={{ transformOrigin: "32px 32px" }}>
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#logoGrad)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.55"
        />
      </g>

      {/* Circuit traces */}
      <g stroke="url(#logoGrad)" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d="M2 32 H10 L14 28" className={animated ? "animate-circuit" : ""} />
        <path d="M62 32 H54 L50 36" className={animated ? "animate-circuit" : ""} style={{ animationDelay: "0.15s" }} />
        <path d="M32 2 V10 L36 14" className={animated ? "animate-circuit" : ""} style={{ animationDelay: "0.3s" }} />
        <path d="M32 62 V54 L28 50" className={animated ? "animate-circuit" : ""} style={{ animationDelay: "0.45s" }} />
      </g>

      {/* Circuit nodes */}
      <g fill="hsl(var(--primary))">
        <circle cx="2" cy="32" r="2.5" className={animated ? "animate-node" : ""} />
        <circle cx="62" cy="32" r="2.5" className={animated ? "animate-node" : ""} style={{ animationDelay: "0.2s" }} />
        <circle cx="32" cy="2" r="2.5" className={animated ? "animate-node" : ""} style={{ animationDelay: "0.4s" }} />
        <circle cx="32" cy="62" r="2.5" className={animated ? "animate-node" : ""} style={{ animationDelay: "0.6s" }} />
      </g>

      {/* Power button group */}
      <g className={animated ? "animate-power-pulse" : ""}>
        {/* Outer power ring (broken at top) */}
        <path
          d="M 22 18
             A 16 16 0 1 0 42 18"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Power I */}
        <line
          x1="32"
          y1="14"
          x2="32"
          y2="30"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Logo;
