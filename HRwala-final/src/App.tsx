import { useEffect, useState } from "react";
import DesignPage from "./DesignPage";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 7330;

function getScale() {
  if (typeof window === "undefined") return 1;
  return Math.min(window.innerWidth / DESIGN_WIDTH, 1);
}

export default function App() {
  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const updateScale = () => setScale(getScale());
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <main
      className="design-viewport"
      style={{ height: DESIGN_HEIGHT * scale }}
      aria-label="HRwala landing page"
    >
      <div className="design-canvas" style={{ transform: `scale(${scale})` }}>
        <DesignPage />
      </div>
    </main>
  );
}
