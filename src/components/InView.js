"use client";

import { useEffect, useRef, useState } from "react";

export default function InView({ children, className = "", activeClass = "in-view", threshold = 0.1 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} ${visible ? activeClass : ""}`}>
      {children}
    </div>
  );
}
