'use client';

import { useEffect, useRef, useState } from "react";

// Wraps a red-pen mark (underline, ring) and draws it once when it scrolls into view.
// Without JS the mark is simply shown drawn (see @media (scripting: enabled) in globals.css).
export default function Drawn({ className, children }: { className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setDrawn(true);
        io.disconnect();
      }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`${className} ${drawn ? "is-drawn" : ""}`}>
      {children}
    </span>
  );
}
