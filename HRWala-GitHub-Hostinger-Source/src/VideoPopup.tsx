import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  title: string;
  previewClassName?: string;
};

export default function VideoPopup({ src, title, previewClassName = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const video = previewRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      if (!open) void video.play().catch(() => {});
      return () => video.pause();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (open || !entry.isIntersecting) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    }, { threshold: 0.25 });

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [open, src]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);

      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === closeRef.current) {
          event.preventDefault();
          videoRef.current?.focus();
        } else if (!event.shiftKey && document.activeElement === videoRef.current) {
          event.preventDefault();
          closeRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <div className={`video-popup-preview ${previewClassName}`}>
        <video
          ref={previewRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onError={() => setFailed(true)}
          onContextMenu={event => event.preventDefault()}
        />
        <button
          ref={triggerRef}
          type="button"
          className="video-popup-trigger"
          aria-label={`Play ${title}`}
          aria-haspopup="dialog"
          onClick={() => {
            setFailed(false);
            setOpen(true);
          }}
        >
          <span className="video-popup-play" aria-hidden="true">▶</span>
        </button>
        {failed && <span className="video-popup-error">Video load nahi hui.</span>}
      </div>

      {open && createPortal(
        <div
          className="hr-video-backdrop"
          onClick={event => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section className="hr-video-dialog" role="dialog" aria-modal="true" aria-label={`${title} video`}>
            <button
              ref={closeRef}
              type="button"
              className="hr-video-close"
              onClick={() => setOpen(false)}
            >
              Close ✕
            </button>
            <video
              ref={videoRef}
              src={src}
              autoPlay
              controls
              controlsList="nodownload"
              disablePictureInPicture
              playsInline
              preload="metadata"
              tabIndex={0}
              onError={() => setFailed(true)}
              onContextMenu={event => event.preventDefault()}
            />
            {failed && <p role="status">Video load nahi hui.</p>}
          </section>
        </div>,
        document.body
      )}
    </>
  );
}