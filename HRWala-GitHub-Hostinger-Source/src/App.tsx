import { useEffect, useRef, useState } from 'react'
import DesignPage from './DesignPage'

export default function App() {
  const viewport = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(() => typeof window === 'undefined' ? 1440 : window.innerWidth)
  useEffect(() => {
    const element = viewport.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  const mobile = width < 1024
  const scale = Math.min(1, width / 1440)
  return <div ref={viewport} className="design-viewport" style={{ height: mobile ? 'auto' : 7330 * scale }}>
    <div className="design-canvas" style={{ position: mobile ? 'static' : 'absolute', width: mobile ? '100%' : 1440, height: mobile ? 'auto' : 7330, left: mobile ? 'auto' : '50%', transform: mobile ? 'none' : `translateX(-50%) scale(${scale})`, transformOrigin: 'top center' }}>
      <DesignPage />
    </div>
  </div>
}