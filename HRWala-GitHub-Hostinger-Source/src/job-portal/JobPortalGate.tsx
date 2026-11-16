import { useEffect, useState, type ReactNode } from 'react';
import { registerPortalPwa } from './pwa';
import './site-overflow.css';
import JobPortalPage from './JobPortalPage';
import { flushSync } from 'react-dom';
const portalPath=(path:string)=>/^\/job-portal\/?$/.test(path);
/** Wrap the existing <App /> once in main.tsx. Other routes keep the existing app. */
export default function JobPortalGate({children}:{children:ReactNode}){
  const [path,setPath]=useState(()=>window.location.pathname);
  useEffect(()=>{
    const cleanupPwa=registerPortalPwa();
    const update = () => {
  const renderPage = () => {
    flushSync(() => setPath(window.location.pathname));
  };

  const transitionDocument = document as Document & {
    startViewTransition?: (callback: () => void) => unknown;
  };

  if (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    typeof transitionDocument.startViewTransition === 'function'
  ) {
    transitionDocument.startViewTransition(renderPage);
  } else {
    renderPage();
  }
};
    function onClick(e: MouseEvent) {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    ) return;

    const target = e.target instanceof Element ? e.target : null;
    const anchor = target?.closest<HTMLAnchorElement>('a[href]');

    if (
      anchor &&
      ((anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download'))
    ) return;

    if (anchor) {
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      if (
        portalPath(window.location.pathname) &&
        url.pathname === '/' &&
        !url.search &&
        !url.hash
      ) {
        e.preventDefault();
        history.pushState({}, '', '/');
        update();
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      if (!portalPath(url.pathname)) return;
    } else {
      const button = target?.closest<HTMLElement>(
        'button,[role="button"],[data-job-portal]'
      );
      const label = (button?.getAttribute('aria-label') || button?.textContent || '').trim();
      const match = !!button && (
        button.hasAttribute('data-job-portal') ||
        /^(?:explore\s+)?job\s+portal$/i.test(label)
      );

      if (!match) return;
    }

    e.preventDefault();

    if (portalPath(window.location.pathname)) return;

    e.stopPropagation();
    history.pushState({}, '', '/job-portal');
    update();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
    window.addEventListener('popstate',update);document.addEventListener('click',onClick,true);
    return()=>{cleanupPwa();window.removeEventListener('popstate',update);document.removeEventListener('click',onClick,true)};
  },[]);
  useEffect(()=>{document.documentElement.classList.toggle('hrwala-portal-active',portalPath(path));return()=>document.documentElement.classList.remove('hrwala-portal-active')},[path]);
 return (
  <div className="hrwala-route" key={path}>
    {portalPath(path) ? <JobPortalPage /> : children}
  </div>
);
}
