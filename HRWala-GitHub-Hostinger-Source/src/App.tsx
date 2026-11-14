import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DesignPage from "./DesignPage";
import "./mobile-top.css";

const DESIGN_WIDTH = 1440;
const MOBILE_EXTRA = 1450;
const getWidth = () => typeof window === "undefined" ? DESIGN_WIDTH : document.documentElement.clientWidth;

export default function App() {
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

  useLayoutEffect(() => {
  if (!mobile) return;

  const page = canvas.current?.querySelector<HTMLElement>(".design-page");
  if (!page) return;

  const original = new Map<HTMLElement, string | null>();

  const apply = (el: HTMLElement, rules: Record<string, string>) => {
    if (!original.has(el)) original.set(el, el.getAttribute("style"));
    Object.entries(rules).forEach(([key, value]) => {
      el.style.setProperty(key, value, "important");
    });
  };

  const frame = requestAnimationFrame(() => {
    const find = (id: string) =>
      page.querySelector<HTMLElement>(`[data-node-id="${id}"]`);

    const section = find("260:36");
    const heading = find("260:32");
    const partnersHeading = find("274:62");
    const partners =
      page.querySelector<HTMLElement>(".featured-partners-marquee");
    const hussain =
      page.querySelector<HTMLElement>(".hussain-team-card");

    const upperCards = Array.from(
      page.querySelectorAll<HTMLElement>(
        '[data-node-id="169:4"] .industry-card-group'
      )
    );

    if (!section || !heading || !partners || !hussain || !upperCards.length)
      return;

    const pairs = [
      ["437:13757", "262:37"],
      ["437:13857", "437:13860"],
      ["437:13879", "437:13882"],
      ["437:13901", "437:13904"],
      ["437:13923", "437:13926"],
      ["437:13934", "437:13937"],
      ["437:13945", "437:13948"],
      ["437:13956", "437:13959"],
      ["442:14070", "442:14073"],
      ["437:14011", "437:14014"],
      ["437:14022", "437:14025"],
    ];

    const cards = pairs.flatMap(([wrapperId, backgroundId]) => {
      const wrapper = find(wrapperId);
      const background = find(backgroundId);
      return wrapper && background
        ? [{
            wrapper,
            x: background.offsetLeft,
            y: background.offsetTop,
          }]
        : [];
    });

    if (cards.length !== 11) return;

    const pageTop = page.getBoundingClientRect().top;
    const unit = page.getBoundingClientRect().width / DESIGN_WIDTH;
    const bottom = (el: HTMLElement) =>
      (el.getBoundingClientRect().bottom - pageTop) / unit;

    // 30px gap on a 390px mobile screen.
    const teamTop = Math.max(...upperCards.map(bottom)) + 110;
    const firstRow = teamTop + 140;
    const rowStep = 450;
    const cardScale = 1.25;
    const teamEnd = firstRow + rowStep * 3 + 410 + 55;

    const previousPartnersTop =
      Number.parseFloat(getComputedStyle(partners).top);
    const nextPartnersTop = teamEnd + 190;
    const difference = nextPartnersTop - previousPartnersTop;

    // Keep the contact section and footer below the enlarged team.
    const moveLater = (parent: HTMLElement) => {
      Array.from(parent.children).forEach(child => {
        if (!(child instanceof HTMLElement)) return;
        if (
          child === section || child === heading ||
          child === partners || child === partnersHeading ||
          child === hussain ||
          cards.some(card => card.wrapper === child)
        ) return;

        const css = getComputedStyle(child);

        if (css.display === "contents") {
          moveLater(child);
          return;
        }

        if (css.position !== "absolute") return;
        const top = Number.parseFloat(css.top);

        if (Number.isFinite(top) && top >= previousPartnersTop) {
          apply(child, { top: `${top + difference}px` });
        } else if (top === 0 && child.offsetHeight >= 7000) {
          moveLater(child);
        }
      });
    };

    if (Number.isFinite(difference)) moveLater(page);

    cards.forEach(({ wrapper, x, y }, index) => {
      const left = 110 + (index % 3) * 430;
      const top = firstRow + Math.floor(index / 3) * rowStep;

      apply(wrapper, {
        display: "block",
        position: "absolute",
        inset: "0 auto auto 0",
        width: "1440px",
        height: "0",
        margin: "0",
        overflow: "visible",
        "transform-origin": "0 0",
        "--team-zoom-origin": "0px 0px",
        translate: `${left - x * cardScale}px ${top - y * cardScale}px`,
        scale: `${cardScale}`,
      });
    });

    apply(hussain, {
      left: "970px",
      top: `${firstRow + rowStep * 3}px`,
      margin: "0",
      scale: `${cardScale}`,
      "transform-origin": "0 0",
      "--team-zoom-origin": "0px 0px",
    });

    apply(section, {
      top: `${teamTop}px`,
      height: `${teamEnd - teamTop}px`,
      margin: "0",
    });

    const placeHeading = (el: HTMLElement, top: number) => {
      apply(el, {
        display: "block",
        left: "90px",
        top: `${top}px`,
        width: "1260px",
        height: "auto",
        margin: "0",
        "font-size": "62px",
        "line-height": "1.15",
        "letter-spacing": "-2px",
        transform: "none",
        translate: "none",
        "z-index": "5",
      });

      el.querySelectorAll<HTMLElement>("span").forEach(span => {
        apply(span, {
          "font-size": "inherit",
          "line-height": "inherit",
        });
      });
    };

    placeHeading(heading, teamTop + 35);
    if (partnersHeading) placeHeading(partnersHeading, teamEnd + 70);

    apply(partners, {
      top: `${nextPartnersTop}px`,
      margin: "0",
    });

    let pageBottom = teamEnd;
    page.querySelectorAll<HTMLElement>("*").forEach(el => {
      if (getComputedStyle(el).position === "absolute") {
        pageBottom = Math.max(pageBottom, bottom(el));
      }
    });

    apply(page, { height: `${pageBottom + 40}px` });

    if (canvas.current) {
      apply(canvas.current, { height: `${pageBottom + 40}px` });
      if (canvas.current.parentElement) {
        apply(canvas.current.parentElement, {
          height: `${(pageBottom + 40) * scale}px`,
        });
      }
    }
  });

  return () => {
    cancelAnimationFrame(frame);
    original.forEach((style, el) => {
      if (style === null) el.removeAttribute("style");
      else el.setAttribute("style", style);
    });
  };
}, [mobile, width, scale]);

  return (
    <main className="design-viewport" style={{ height: (7215 + (mobile ? MOBILE_EXTRA : 0)) * scale }} aria-label="HRwala landing page">
      <div ref={canvas} className="design-canvas" style={{ transform: `scale(${scale}) translateX(-50%)` }}>
        <DesignPage className="design-page" />
      </div>
    </main>
  );
}
