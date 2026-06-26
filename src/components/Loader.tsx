import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: hide ? 0 : 1, pointerEvents: hide ? "none" : "auto" }}
    >
      <div className="relative">
        <div className="absolute inset-0 -m-8 rounded-full bg-primary/10 blur-2xl animate-power-pulse" />
        <Logo className="relative h-28 w-28" animated />
      </div>
      <div className="mt-8 text-lg font-display font-semibold tracking-wide shimmer-text">
        GENO
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Booting Systems
      </div>
    </div>
  );
};

export default Loader;
