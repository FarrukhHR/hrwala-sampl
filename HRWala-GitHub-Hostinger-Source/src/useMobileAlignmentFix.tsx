import { useEffect } from "react";

/** Import this hook in App.tsx and call useMobileAlignmentFix() inside App.
 * Keep your existing App code and mobile-top.css. This patch runs after them.
 * No desktop styles or live website files are modified.
 */
export default function useMobileAlignmentFix() {
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    let dispose = () => {};
    let frame = 0;
    const apply = () => {
      dispose();
      dispose = () => {};
      if (!media.matches) return;
      const page = document.querySelector<HTMLElement>(".design-page");
      const viewport = document.querySelector<HTMLElement>(".design-viewport");
      if (!page || !viewport) return;
      const originals = new Map<HTMLElement, string | null>();
      const remember = (el: HTMLElement) => {
        if (!originals.has(el)) originals.set(el, el.getAttribute("style"));
      };
      const set = (el: HTMLElement | null, props: Record<string, string>) => {
        if (!el) return;
        remember(el);
        Object.entries(props).forEach(([key, value]) => el.style.setProperty(key, value, "important"));
      };
      const node = (id: string) => page.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
      const place = (el: HTMLElement | null, top: number, left = 80, width = 1280) =>
        set(el, { position: "absolute", top: `${top}px`, left: `${left}px`, width: `${width}px`, right: "auto", bottom: "auto", translate: "none", transform: "none" });
      const heading = (el: HTMLElement | null, top: number) => {
        place(el, top);
        set(el, { height: "auto", "font-size": "74px", "line-height": "1.15", "letter-spacing": "-2px" });
        el?.querySelectorAll<HTMLElement>("span").forEach(span => set(span, { "font-size": "74px", "line-height": "1.15" }));
      };
      const style = document.createElement("style");
      style.textContent = `@media(max-width:767px){
        .design-page .hr-mobile-fixed-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:30px!important;height:auto!important;align-items:stretch!important}
        .design-page .hr-mobile-fixed-grid>div{position:relative!important;inset:auto!important;width:auto!important;height:auto!important;min-height:270px!important;box-sizing:border-box!important;display:flex!important;flex-direction:column!important;gap:18px!important;padding:32px 24px 28px!important;transform:none!important;translate:none!important;scale:1!important;opacity:1!important;pointer-events:auto!important}
        .design-page .hr-mobile-fixed-grid>div>p{position:relative!important;inset:auto!important;width:100%!important;height:auto!important;margin:0!important;transform:none!important;translate:none!important;text-align:left!important;white-space:normal!important;overflow-wrap:anywhere!important;letter-spacing:normal!important;flex-shrink:0!important}
        .design-page .hr-mobile-fixed-grid>div>p:first-of-type{font-size:24px!important;line-height:1.3!important}
        .design-page .hr-mobile-fixed-grid>div>p:nth-of-type(2){font-size:34px!important;line-height:1.2!important;min-height:82px!important}
        .design-page .hr-mobile-fixed-grid>div>p:last-of-type{font-size:28px!important;line-height:1.45!important;min-height:0!important}
        .design-page .hr-mobile-fixed-grid>div>div:first-child{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;z-index:-1!important}
        .design-page .hr-mobile-fixed-grid>div{isolation:isolate}
        .design-page .hr-mobile-fixed-grid>div>div:not(:first-child){display:none!important}
        .design-page .hr-mobile-industries>div>p:first-of-type{font-size:34px!important;line-height:1.2!important;min-height:82px!important}
        .design-page .hr-mobile-industries>div>p:last-of-type{font-size:28px!important;line-height:1.45!important}
        .design-page .featured-partners-item{flex-basis:290px!important;height:170px!important}
        .design-page .featured-partners-card{width:250px!important;height:140px!important;flex-shrink:0}
        .design-page .featured-partners-card img{object-fit:contain!important}
        .design-page .featured-partners-connector{flex-basis:40px!important}
        .design-page .featured-partners-track{margin-left:0!important}
        .design-page .faq-accordion-trigger{font-size:40px!important;line-height:1.4!important;min-height:150px!important;padding:30px!important}
        .design-page .faq-accordion-icon{font-size:54px!important}
        .design-page .faq-accordion-answer{font-size:34px!important;line-height:1.5!important;padding-left:30px!important;padding-right:30px!important}
        .design-page .contact-form-panel{padding:60px!important;border-radius:35px!important;min-height:0!important}
        .design-page .contact-form-title{font-size:62px!important;line-height:1.2!important}
        .design-page .contact-form-intro{font-size:38px!important;margin-bottom:45px!important}
        .design-page .contact-form{gap:36px!important}
        .design-page .contact-form-field{font-size:36px!important;gap:20px!important;padding:0!important}
        .design-page .contact-form-field input,.design-page .contact-form-field select,.design-page .contact-form-field textarea{font-size:40px!important;border-radius:24px!important;padding:24px 30px!important;height:150px!important}
        .design-page .contact-form-field textarea{height:320px!important}
        .design-page .contact-form-submit{font-size:42px!important;min-height:150px!important}
        .design-page .contact-form-status{font-size:30px!important}
        .design-page .newsletter-form{grid-template-columns:minmax(0,1fr) 340px!important;gap:24px!important}
        .design-page .newsletter-form input,.design-page .newsletter-form button{height:150px!important;font-size:38px!important;border-radius:26px!important}
      }`;
      document.head.appendChild(style);
      const grids = [node("228:235"), node("169:4")];
      grids[0]?.classList.add("hr-mobile-fixed-grid");
      grids[1]?.classList.add("hr-mobile-fixed-grid", "hr-mobile-industries");
      // Normalise the existing team artwork inside independent card-sized shells.
      // This preserves original photos, names, colours and typography.
      const shells = Array.from(page.querySelectorAll<HTMLElement>(".team-zoom-shell"));
      shells.forEach(shell => {
        const leaves = Array.from(shell.querySelectorAll<HTMLElement>("*")).filter(el => getComputedStyle(el).position === "absolute" && getComputedStyle(el).display !== "contents");
        const background = leaves.find(el => el.classList.contains("bg-white"));
        if (!background) return;
        const originTop = Number.parseFloat(getComputedStyle(background).top);
        const originLeft = Number.parseFloat(getComputedStyle(background).left);
        leaves.forEach(el => {
          // Only nodes positioned in the shared Figma canvas need rebasing.
          const top = Number.parseFloat(getComputedStyle(el).top);
          const left = Number.parseFloat(getComputedStyle(el).left);
          if (Number.isFinite(top) && top > 1000) set(el, { top: `${top - originTop}px` });
          if (Number.isFinite(left) && top > 1000) set(el, { left: `${left - originLeft}px` });
        });
        set(shell, { display: "block", position: "absolute", width: "247px", height: "328px", inset: "auto", scale: "1", transform: "scale(1.6)", "transform-origin": "top left", opacity: "1" });
      });
      const hussain = page.querySelector<HTMLElement>(".hussain-team-card");
      const cards = [...shells, ...(hussain ? [hussain] : [])];
      if (hussain) set(hussain, { scale: "1", transform: "scale(1.6)", "transform-origin": "top left", opacity: "1" });
      const layout = () => {
        const modules = grids[0];
        if (!modules) return;
        const moduleTop = Number.parseFloat(getComputedStyle(modules).top);
        const brandTop = moduleTop + modules.offsetHeight + 180;
        heading(node("133:2"), brandTop);
        place(page.querySelector(".brand-timeline"), brandTop + 160, 90, 1260);
        const industryTop = brandTop + 660;
        place(grids[1], industryTop, 80, 1280);
        const teamTop = industryTop + (grids[1]?.offsetHeight ?? 1500) + 180;
        heading(node("260:32"), teamTop);
        cards.forEach((card, i) => set(card, { top: `${teamTop + 170 + Math.floor(i / 3) * 585}px`, left: `${80 + (i % 3) * 440}px` }));
        const teamBottom = teamTop + 170 + Math.ceil(cards.length / 3) * 585;
        place(node("260:36"), teamTop - 60, 28, 1385);
        set(node("260:36"), { height: `${teamBottom - teamTop + 100}px` });
        heading(node("274:62"), teamBottom + 100);
        place(page.querySelector(".featured-partners-marquee"), teamBottom + 240, 0, 1440);
        set(page.querySelector(".featured-partners-marquee"), { height: "180px" });
        const questionTop = teamBottom + 580;
        heading(node("274:203"), questionTop);
        place(node("274:206"), questionTop + 130);
        set(node("274:206"), { height: "auto", "font-size": "50px", "line-height": "1.3" });
        place(node("513:712"), questionTop + 240);
        set(node("513:712"), { height: "auto", "font-size": "38px", "line-height": "1.5", "text-align": "left" });
        place(node("289:46"), questionTop + 670);
        set(node("289:46"), { "font-size": "32px", height: "auto", "line-height": "1.4" });
        place(node("289:47"), questionTop + 730);
        set(node("289:47"), { "font-size": "54px", height: "auto", "line-height": "1.3" });
        const faq = page.querySelector<HTMLElement>(".faq-accordion");
        place(faq, questionTop + 850);
        const form = page.querySelector<HTMLElement>(".contact-form-panel");
        const formTop = questionTop + 850 + (faq?.offsetHeight ?? 800) + 120;
        place(form, formTop);
        const footerTop = formTop + (form?.offsetHeight ?? 1700) + 180;
        place(node("432:13544"), questionTop - 80, 17, 1385);
        set(node("432:13544"), { height: `${footerTop - questionTop}px` });
        place(node("296:2"), footerTop, 22, 1380);
        set(node("296:2"), { height: "2100px" });
        place(node("297:4"), footerTop + 100, 90, 460);
        set(node("297:4"), { height: "133px" });
        place(node("299:5"), footerTop + 300, 90, 1240);
        set(node("299:5"), { "font-size": "40px", "line-height": "1.5", height: "auto" });
        [["299:21","299:22","299:23","299:24","299:34"],["299:31","299:28","299:29","299:30"]].forEach((ids,col)=>ids.forEach((id,i)=>{
          place(node(id),footerTop+650+i*100,90+col*650,580);
          set(node(id),{"font-size":i===0?"46px":"38px","line-height":"1.4",height:"auto"});
        }));
        heading(node("299:35"), footerTop + 1240);
        set(node("299:35"), { "font-size": "54px" });
        page.querySelectorAll<HTMLElement>(".newsletter-form").forEach((form,i)=>{
          if(i) set(form,{display:"none"}); else place(form,footerTop+1450,90,1240);
        });
        place(page.querySelector('[aria-label="Social media"]'),footerTop+1710,90,600);
        place(node("299:7"), footerTop + 1880, 90, 1240);
        place(node("299:19"),footerTop+1960,90,1240);
        set(node("299:19"),{"font-size":"34px",height:"auto","line-height":"1.4","text-align":"center"});
        const height = footerTop + 2220;
        set(page,{height:`${height}px`});
        set(page.parentElement,{height:`${height}px`});
        set(viewport,{height:`${height * document.documentElement.clientWidth / 1440}px`});
      };
      layout();
      let scheduled = 0;
      const observer = new ResizeObserver(() => {
        cancelAnimationFrame(scheduled);
        scheduled = requestAnimationFrame(layout);
      });
      [grids[0],grids[1],page.querySelector(".faq-accordion"),page.querySelector(".contact-form-panel")].forEach(el=>{if(el)observer.observe(el);});
      dispose = () => {
        observer.disconnect(); cancelAnimationFrame(scheduled); style.remove();
        grids[0]?.classList.remove("hr-mobile-fixed-grid");
        grids[1]?.classList.remove("hr-mobile-fixed-grid","hr-mobile-industries");
        originals.forEach((value,el)=>value===null?el.removeAttribute("style"):el.setAttribute("style",value));
      };
    };
    const schedule = () => { cancelAnimationFrame(frame); frame=requestAnimationFrame(apply); };
    schedule();
    media.addEventListener("change",schedule);
    window.addEventListener("resize",schedule);
    return () => {cancelAnimationFrame(frame);dispose();media.removeEventListener("change",schedule);window.removeEventListener("resize",schedule);};
  }, []);
}
