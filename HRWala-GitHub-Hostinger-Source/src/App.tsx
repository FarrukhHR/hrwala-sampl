import { useEffect, useRef, useState } from "react";
import DesignPage from "./DesignPage";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 7330;

function getScale() {
  if (typeof window === "undefined") return 1;
  return document.documentElement.clientWidth / DESIGN_WIDTH;
}

export default function App() {
  const [scale, setScale] = useState(getScale);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => setScale(getScale());

    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanup: Array<() => void> = [];
    const processed = new Set<HTMLElement>();

    const backgrounds = Array.from(
      canvas.querySelectorAll<HTMLElement>("div"),
    ).filter((element) => {
      const style = getComputedStyle(element);
      const width = parseFloat(style.width);
      const height = parseFloat(style.height);

      return (
        style.position === "absolute" &&
        style.backgroundColor === "rgb(255, 255, 255)" &&
        parseFloat(style.borderTopLeftRadius) > 0 &&
        width >= 200 &&
        width <= 500 &&
        height >= 100 &&
        height <= 400
      );
    });

    backgrounds.forEach((background) => {
      const style = getComputedStyle(background);
      const x = parseFloat(style.left);
      const y = parseFloat(style.top);
      const width = parseFloat(style.width);
      const height = parseFloat(style.height);

      if (![x, y, width, height].every(Number.isFinite)) return;

      let parent = background.parentElement;
      let group: HTMLElement | null = null;

      if (parent && getComputedStyle(parent).display === "contents") {
        group = parent;
      }

      while (
        parent &&
        parent !== canvas &&
        getComputedStyle(parent).display === "contents"
      ) {
        const parentStyle = getComputedStyle(parent);
        const parentX = parseFloat(parentStyle.left);
        const parentY = parseFloat(parentStyle.top);

        if (
          Math.abs(parentX - x) < 3 &&
          Math.abs(parentY - y) < 3
        ) {
          group = parent;
        }

        parent = parent.parentElement;
      }

      if (!group || processed.has(group)) return;
      processed.add(group);

      const originalGroup = group;
      const originalParent = originalGroup.parentElement;
      if (!originalParent) return;

      // These portraits sit above the cards in the supplied design.
      const separatePortraits = Array.from(
        originalGroup.querySelectorAll<HTMLElement>(
          '[data-node-id="440:14068"], ' +
            '[data-name="Straight-on portrait in charcoal suit"]',
        ),
      );

      const portraitPositions = separatePortraits.map((portrait) => {
        const marker = document.createComment("portrait-position");
        portrait.replaceWith(marker);
        originalParent.appendChild(portrait);
        return { portrait, marker };
      });

      const card = document.createElement("div");
      card.className = "site-hover-card";

      Object.assign(card.style, {
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      });

      const plane = document.createElement("div");
      plane.className = "site-hover-card-coordinate-plane";

      Object.assign(plane.style, {
        left: `${-x}px`,
        top: `${-y}px`,
        width: `${DESIGN_WIDTH}px`,
        height: `${DESIGN_HEIGHT}px`,
      });

      originalParent.insertBefore(card, originalGroup);
      card.appendChild(plane);
      plane.appendChild(originalGroup);

      cleanup.push(() => {
        card.replaceWith(originalGroup);

        portraitPositions.forEach(({ portrait, marker }) => {
          marker.replaceWith(portrait);
        });
      });
    });

    return () => {
      cleanup.reverse().forEach((restore) => restore());
    };
  }, []);

  return (
    <main
      className="design-viewport"
      style={{ height: DESIGN_HEIGHT * scale }}
      aria-label="HRwala landing page"
    >
      <div
        ref={canvasRef}
        className="design-canvas"
        style={{ transform: `scale(${scale}) translateX(-50%)` }}
      >
        <DesignPage className="design-page" />
      </div>
    </main>
  );
}