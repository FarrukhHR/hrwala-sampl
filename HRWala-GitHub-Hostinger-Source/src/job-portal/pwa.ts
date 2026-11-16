import { useEffect, useState } from 'react';
type InstallEvent=Event & {prompt:()=>Promise<void>;userChoice:Promise<{outcome:'accepted'|'dismissed'}>};
let deferred:InstallEvent|null=null;
const isIOS=()=>/iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const isMobile=()=>isIOS()||/Android/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&matchMedia('(max-width:1024px)').matches);
export function registerPortalPwa(){
  if(!document.querySelector('link[rel="manifest"]')){const link=document.createElement('link');link.rel='manifest';link.href='/hrwala.webmanifest';document.head.append(link)}
  if(!document.querySelector('link[rel="apple-touch-icon"]')){const link=document.createElement('link');link.rel='apple-touch-icon';link.href='/hrwala-app/apple-touch-icon.png';document.head.append(link)}
  if(!document.querySelector('meta[name="theme-color"]')){const meta=document.createElement('meta');meta.name='theme-color';meta.content='#0144ab';document.head.append(meta)}
  const capture = (e: Event) => {
  e.preventDefault();
  deferred = e as InstallEvent;
};
  window.addEventListener('beforeinstallprompt',capture);
  // Do not replace an unrelated service worker already controlling the website.
  if('serviceWorker' in navigator&&window.isSecureContext){navigator.serviceWorker.getRegistration('/').then(current=>{if(!current||current.active?.scriptURL.endsWith('/hrwala-sw.js'))return navigator.serviceWorker.register('/hrwala-sw.js',{scope:'/',updateViaCache:'none'})}).catch(()=>{})}
  return()=>window.removeEventListener('beforeinstallprompt',capture);
}
export function useInstallApp(){
  const [mobile,setMobile]=useState(false);
  useEffect(()=>{const update=()=>setMobile(isMobile());update();window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update)},[]);
  async function install():Promise<string|null>{
    
    if(matchMedia('(display-mode: standalone)').matches||(navigator as Navigator&{standalone?:boolean}).standalone)return 'HRwala is already running as an app.';
    if(deferred){const prompt=deferred;deferred=null;await prompt.prompt();const choice=await prompt.userChoice;return choice.outcome==='accepted'?null:'Installation was cancelled. You can try again from your browser menu.'}
    if(isIOS())return 'On iPhone or iPad: open this page in Safari, tap Share, then Add to Home Screen and Add. The app name is HRwala.';
    if (!isMobile()) {
    return 'In Chrome or Edge, open the browser menu and select Install app. If available, you can also use the install icon in the address bar.';
  }
    return 'Open this website in Chrome on your phone. Tap the browser menu (⋮), then Install app or Add to Home screen. The app name is HRwala. If installation is not available yet, refresh once and try again.';
  }
  return {mobile,install};
}
