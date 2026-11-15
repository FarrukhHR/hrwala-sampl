import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { registerPortalPwa } from './pwa';
import './site-overflow.css';
const JobPortalPage=lazy(()=>import('./JobPortalPage'));
const portalPath=(path:string)=>/^\/job-portal\/?$/.test(path);
/** Wrap the existing <App /> once in main.tsx. Other routes keep the existing app. */
export default function JobPortalGate({children}:{children:ReactNode}){
  const [path,setPath]=useState(()=>window.location.pathname);
  useEffect(()=>{
    const cleanupPwa=registerPortalPwa();
    const update=()=>setPath(window.location.pathname);
    function onClick(e:MouseEvent){
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      const target=e.target instanceof Element?e.target:null;
      const anchor=target?.closest<HTMLAnchorElement>('a[href]');
      if(anchor&&(anchor.target==='_blank'||anchor.hasAttribute('download')))return;
      const button=target?.closest<HTMLElement>('button,[role="button"],[data-job-portal]');
      const label=(button?.getAttribute('aria-label')||button?.textContent||'').trim();
      let match=!!button&&(button.hasAttribute('data-job-portal')||/^(?:explore\s+)?job\s+portal$/i.test(label));
      if(anchor){try{const url=new URL(anchor.href,window.location.href);match=url.origin===window.location.origin&&portalPath(url.pathname)}catch{}}
      if(!match)return;
      if(portalPath(window.location.pathname)){e.preventDefault();return;}
      e.preventDefault();e.stopPropagation();
      if(!portalPath(window.location.pathname))history.pushState({},'','/job-portal');
      update();window.scrollTo({top:0,behavior:'auto'});
    }
    window.addEventListener('popstate',update);document.addEventListener('click',onClick,true);
    return()=>{cleanupPwa();window.removeEventListener('popstate',update);document.removeEventListener('click',onClick,true)};
  },[]);
  useEffect(()=>{document.documentElement.classList.toggle('hrwala-portal-active',portalPath(path));return()=>document.documentElement.classList.remove('hrwala-portal-active')},[path]);
  return portalPath(path)?<Suspense fallback={<p style={{padding:'3rem',color:'#0144ab',fontFamily:'sans-serif'}}>Loading Job Portal…</p>}><JobPortalPage/></Suspense>:<>{children}</>;
}
