import { useEffect, useId, useRef, useState } from 'react';
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);
const menuId = useId();

useEffect(() => {
  if (!menuOpen) return;

  menuRef.current?.querySelector<HTMLAnchorElement>('.site-mobile-menu a')?.focus();

  const closeOutside = (event: PointerEvent) => {
    if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  if (event.key === 'Escape') {
  setMenuOpen(false);
  requestAnimationFrame(() => {
    menuRef.current?.querySelector<HTMLButtonElement>('.site-mobile-menu-button')?.focus();
  });
}

  document.addEventListener('pointerdown', closeOutside);
  document.addEventListener('keydown', closeOnEscape);
  return () => {
    document.removeEventListener('pointerdown', closeOutside);
    document.removeEventListener('keydown', closeOnEscape);
  };
}, [menuOpen]);

  return (
    <>
      <div
        className="absolute contents left-[-0.94px] top-[-1.94px]"
        data-node-id="413:617"
      >
        <div
          className="absolute bg-white border-0 border-black border-solid h-[87px] left-0 top-[-1px] w-[1440px]"
          data-node-id="3:7"
        />

        <a
          href="/"
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[575px] not-italic text-[#232323] text-[15.059px] top-[43.29px] whitespace-nowrap design-header-link"
          data-node-id="5:5"
        >
          Discover
        </a>

        <a
          href="/job-portal"
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[684.18px] not-italic text-[#232323] text-[15.059px] top-[43.29px] whitespace-nowrap design-header-link"
          data-node-id="5:17"
        >
          Job Portal
        </a>

        <a
          href="/login"
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[0] left-[793.18px] not-italic text-[#505050] text-[0px] top-[42.35px] whitespace-nowrap design-header-link"
          data-node-id="5:31"
        >
          <span className="leading-[normal] text-[#232323] text-[15.059px]">My</span>
          <span className="leading-[normal] text-[15.059px]"> </span>
          <span className="leading-[normal] text-[#232323] text-[15.059px]">Portal</span>
        </a>
      </div>

      <a
        href="/"
        aria-label="HRWala home"
        className="absolute h-[56px] left-[72.06px] top-[20.06px] w-[190px] design-header-logo"
        data-node-id="469:14184"
        data-name="HRwala-full-blue-gold 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src="/assets/b7c26.png"
        />
      </a>

      <div
        className={`absolute left-[1292.56px] size-[60px] top-[28.56px] site-header-avatar${menuOpen ? ' is-menu-open' : ''}`}
        data-node-id="474:14188"
        data-name="Maroon blazer portrait on pale blue 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src="/assets/5bdd7.png"
        />
      </div>

      <div
  className={`site-mobile-navigation${menuOpen ? ' is-menu-open' : ''}`}
  ref={menuRef}
>
  <button
    type="button"
    className="site-mobile-menu-button"
    aria-label="Navigation menu"
    aria-expanded={menuOpen}
    aria-controls={menuId}
    tabIndex={menuOpen ? -1 : 0}
    onClick={() => setMenuOpen(true)}
  >
    <span />
    <span />
    <span />
  </button>

  <nav
    id={menuId}
    className="site-mobile-menu"
    aria-label="Main navigation"
    aria-hidden={!menuOpen}
    inert={!menuOpen}
  >
    <a href="/" onClick={() => setMenuOpen(false)}>Discover</a>
    <a href="/job-portal" onClick={() => setMenuOpen(false)}>Job Portal</a>
    <a href="/login" onClick={() => setMenuOpen(false)}>My Portal</a>
  </nav>
</div>
    </>
  );
}