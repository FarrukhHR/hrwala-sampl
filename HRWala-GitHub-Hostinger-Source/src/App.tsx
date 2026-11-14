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

  const saved = new Map<HTMLElement, string | null>();
  const remember = (el: HTMLElement) => {
    if (!saved.has(el)) saved.set(el, el.getAttribute("style"));
  };
  const set = (el: HTMLElement, name: string, value: string) => {
    remember(el);
    el.style.setProperty(name, value, "important");
  };

  const frame = requestAnimationFrame(() => {
    const find = (id: string) =>
      page.querySelector<HTMLElement>(`[data-node-id="${id}"]`);

    const background = find("260:36");
    const teamHeading = find("260:32");
    const partnersHeading = find("274:62");
    const marquee =
      page.querySelector<HTMLElement>(".featured-partners-marquee");

    if (!background || !teamHeading || !partnersHeading || !marquee) return;

    const pageRect = page.getBoundingClientRect();
    const unit = pageRect.width / DESIGN_WIDTH;
    const bounds = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return {
        left: (rect.left - pageRect.left) / unit,
        top: (rect.top - pageRect.top) / unit,
        bottom: (rect.bottom - pageRect.top) / unit,
      };
    };

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
      const cardBackground = find(backgroundId);
      return wrapper && cardBackground
        ? [{ wrapper, cardBackground }]
        : [];
    });

    const hussain = page.querySelector<HTMLElement>(".hussain-team-card");
    const industryCards = Array.from(
      page.querySelectorAll<HTMLElement>(
        '[data-node-id="169:4"] .industry-card-group'
      )
    );

    if (cards.length !== 11 || !hussain || !industryCards.length) return;

    // Snapshot positions before changing the layout.
    const oldMarqueeTop = bounds(marquee).top;
    const oldCards = cards.map(({ wrapper, cardBackground }) => ({
      wrapper,
      left: cardBackground.offsetLeft,
      top: cardBackground.offsetTop,
    }));

    const upperBottom = Math.max(
      ...industryCards.map(card => bounds(card).bottom)
    );

    const teamTop = upperBottom + 70;
    const firstRowTop = teamTop + 135;
    const cardScale = 1.25;
    const rowHeight = 450;
    const partnersTop = firstRowTop + rowHeight * 4 + 60;
    const newMarqueeTop = partnersTop + 110;
    const tailShift = newMarqueeTop - oldMarqueeTop;

    // Move contact/footer by the same amount as the partners strip.
    const moveLater = (parent: HTMLElement) => {
      Array.from(parent.children).forEach(child => {
        if (!(child instanceof HTMLElement)) return;
        if (
          child === background ||
          child === teamHeading ||
          child === partnersHeading ||
          child === marquee ||
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
        if (!Number.isFinite(top)) return;

        if (top >= oldMarqueeTop - 1) {
          set(child, "top", `${top + tailShift}px`);
        } else if (top === 0 && child.offsetHeight >= 7000) {
          moveLater(child);
        }
      });
    };
    moveLater(page);

    oldCards.forEach(({ wrapper, left, top }, index) => {
      const x = 110 + (index % 3) * 430;
      const y = firstRowTop + Math.floor(index / 3) * rowHeight;

      set(wrapper, "display", "block");
      set(wrapper, "position", "absolute");
      set(wrapper, "inset", "0 auto auto 0");
      set(wrapper, "width", "1440px");
      set(wrapper, "height", "0");
      set(wrapper, "margin", "0");
      set(wrapper, "overflow", "visible");
      set(wrapper, "transform-origin", "0 0");
      set(wrapper, "--team-zoom-origin", "0px 0px");
      set(wrapper, "translate",
        `${x - left * cardScale}px ${y - top * cardScale}px`);
      set(wrapper, "scale", `${cardScale}`);
    });

    set(hussain, "left", "970px");
    set(hussain, "top", `${firstRowTop + rowHeight * 3}px`);
    set(hussain, "margin", "0");
    set(hussain, "transform-origin", "0 0");
    set(hussain, "--team-zoom-origin", "0px 0px");
    set(hussain, "scale", `${cardScale}`);

    set(background, "top", `${teamTop}px`);
    set(background, "height", `${partnersTop - teamTop - 50}px`);

    const placeHeading = (el: HTMLElement, top: number) => {
      set(el, "display", "block");
      set(el, "left", "90px");
      set(el, "top", `${top}px`);
      set(el, "width", "1260px");
      set(el, "height", "auto");
      set(el, "margin", "0");
      set(el, "font-size", "62px");
      set(el, "line-height", "1.15");
      set(el, "letter-spacing", "-2px");
      set(el, "transform", "none");
      set(el, "translate", "none");
      set(el, "z-index", "5");

      el.querySelectorAll<HTMLElement>("span").forEach(span => {
        set(span, "font-size", "inherit");
        set(span, "line-height", "inherit");
      });
    };

    placeHeading(teamHeading, teamTop + 35);
    placeHeading(partnersHeading, partnersTop);

    set(marquee, "top", `${newMarqueeTop}px`);
    set(marquee, "margin", "0");

    // Reserve enough space through the actual footer.
    let bottom = 0;
    page.querySelectorAll<HTMLElement>("*").forEach(el => {
      if (getComputedStyle(el).position === "absolute") {
        bottom = Math.max(bottom, bounds(el).bottom);
      }
    });

    set(page, "height", `${bottom + 40}px`);
    if (canvas.current) {
      set(canvas.current, "height", `${bottom + 40}px`);
      const viewport = canvas.current.parentElement;
      if (viewport) set(viewport, "height", `${(bottom + 40) * scale}px`);
    }
  });

  return () => {
    cancelAnimationFrame(frame);
    saved.forEach((style, el) => {
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
