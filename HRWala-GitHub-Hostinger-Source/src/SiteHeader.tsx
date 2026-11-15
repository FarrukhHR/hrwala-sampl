export default function SiteHeader() {
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
        className="absolute left-[1292.56px] size-[60px] top-[28.56px]"
        data-node-id="474:14188"
        data-name="Maroon blazer portrait on pale blue 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src="/assets/5bdd7.png"
        />
      </div>
    </>
  );
}