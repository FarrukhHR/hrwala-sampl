import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import JobPortalGate from'./job-portal/JobPortalGate';

function ContentProtection() {
  React.useEffect(() => {
    const onCopy = (event: ClipboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) return;
      event.preventDefault();
    };

    const onContextMenu = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('img, video')) {
        event.preventDefault();
      }
    };

    const onDrag = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement) event.preventDefault();
    };

    document.addEventListener('copy', onCopy);
    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('dragstart', onDrag);

    return () => {
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('dragstart', onDrag);
    };
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContentProtection />
    <JobPortalGate>
      <App />
    </JobPortalGate>
  </React.StrictMode>,
)
