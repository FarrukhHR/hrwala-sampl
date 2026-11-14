import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DesignPage from "./DesignPage";
import "./mobile-top.css";
import useMobileAlignmentFix from "./useMobileAlignmentFix";

const DESIGN_WIDTH = 1440;
const MOBILE_EXTRA = 1450;
const getWidth = () => typeof window === "undefined" ? DESIGN_WIDTH : document.documentElement.clientWidth;

export default function App() {
  useMobileAlignmentFix();
  const [width, setWidth] = useState(getWidth);
  const canvas = useRef<HTMLDivElement>(null);
  const mobile = width <= 767;
  const scale = width / DESIGN_WIDTH;

  useEffect(() => {
    const resize = () => setWidth(getWidth());
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useLayoutEffect(() => {
    if (!mobile) return;
    const page = canvas.current?.querySelector<HTMLElement>(".design-page");
    if (!page) return;
    const changed: HTMLElement[] = [];
    // Reserve the additional row without changing the later sections' own layout.
    // Walk through display:contents and full-canvas grouping wrappers only.
    const visit = (parent: HTMLElement) => {
      Array.from(parent.children).forEach(child => {
        if (!(child instanceof HTMLElement)) return;
        if (child.matches('.service-card-group, .hr-video-preview, [data-node-id="440:14062"], [data-node-id="440:14068"], [data-name="Straight-on portrait in charcoal suit"]')) return;
        const css = getComputedStyle(child);
        if (css.display === "contents") { visit(child); return; }
        if (css.position !== "absolute") return;
        const top = Number.parseFloat(css.top);
        if (!Number.isFinite(top)) return;
        if (top >= 1250) {
          child.style.setProperty("--mobile-original-top", `${top}px`);
          child.classList.add("mobile-later-section");
          changed.push(child);
        } else if (top === 0 && child.offsetHeight >= 7000) {
          visit(child);
        }
      });
    };
    visit(page);
    return () => changed.forEach(child => {
      child.classList.remove("mobile-later-section");
      child.style.removeProperty("--mobile-original-top");
    });
  }, [mobile]);

  return (
    <main className="design-viewport" style={{ height: (7215 + (mobile ? MOBILE_EXTRA : 0)) * scale }} aria-label="HRwala landing page">
      <div ref={canvas} className="design-canvas" style={{ transform: `scale(${scale}) translateX(-50%)` }}>
        <DesignPage className="design-page" />
      </div>
    </main>
  );
}
