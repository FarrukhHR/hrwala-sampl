import { Children, cloneElement, isValidElement, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactElement, type ReactNode } from 'react'

const assetPathPrefix = "/assets";
// Add videos under public/videos, then set a path such as /videos/hr-consultants.mp4.
const videoSources = ['', '', '', '']
// Add portraits under public/assets and set the matching path here.
const teamPhotos = ['', '', '', '', '', '', '', '']
const heroSlides = [
  { heading: 'HR Certifications', bullets: ['Get Certified', 'Get Noticed', 'Get Hired'] },
  { heading: 'Career Opportunities', bullets: ['Explore Opportunities', 'Showcase Your Skills', 'Move Forward'] },
  { heading: 'Talent Acquisition', bullets: ['Reach Qualified Talent', 'Build Stronger Teams', 'Hire With Confidence'] },
  { heading: 'HR Consulting', bullets: ['People-First Advice', 'Practical HR Policies', 'Clear Direction'] },
  { heading: 'Brand Standards', bullets: ['Set Clear Standards', 'Align Your People', 'Build Lasting Trust'] },
  { heading: 'Professional Growth', bullets: ['Learn New Skills', 'Get Recognized', 'Advance Your Career'] },
  { heading: 'HRWala Software', bullets: ['Organise HR Tasks', 'Connect Workflows', 'Support Your Team'] },
  { heading: 'People @ Top', bullets: ['Put People First', 'Create Better Workplaces', 'Grow Together'] },
]
const imgGirlProfileIconRemovebgPreview1 = `${assetPathPrefix}/51fdd.png`;
const imgHumanConnectionInTheInterviewRoom1 = `${assetPathPrefix}/58338.png`;
const imgCorporateTeamDiscussingATablet1 = `${assetPathPrefix}/a1b62.png`;
const imgLuminousPortraitWithAFadingBlueRing1 = `${assetPathPrefix}/7da0d.png`;
const imgLuminousWomanWithinBlueRing2X1 = `${assetPathPrefix}/10bd4.png`;
const imgLearningDevelopmentProfessionalCertificate1 = `${assetPathPrefix}/8bc8e.png`;
const imgUpdatedCertificateWithHrWalaNetSeal1 = `${assetPathPrefix}/67f31.png`;
const imgCertifiedHrBusinessPartnerCertificate1 = `${assetPathPrefix}/57cda.png`;
const imgHrWalaReadyToServeCredentialBadge11 = `${assetPathPrefix}/996de.png`;
const imgHrWalaSkilledProfessionalBadge1 = `${assetPathPrefix}/8d021.png`;
const imgHrWalaNetFeaturedAssociateBadge1 = `${assetPathPrefix}/45f95.png`;
const imgHrWalaFullBlueGold1 = `${assetPathPrefix}/cd40f.png`;
const imgHrWalaFullWhiteGold1 = `${assetPathPrefix}/0b611.png`;
const imgEllipse1 = `${assetPathPrefix}/03fde.svg`;
const imgRectangle12 = `${assetPathPrefix}/c30b9.svg`;
const imgRectangle13 = `${assetPathPrefix}/3c1b0.svg`;
const imgRectangle26 = `${assetPathPrefix}/97446.svg`;
const imgLine1 = `${assetPathPrefix}/bbab3.svg`;
const imgGroup20 = `${assetPathPrefix}/ed87d.svg`;
const imgLine2 = `${assetPathPrefix}/7c3c3.svg`;
const imgGroup21 = `${assetPathPrefix}/75596.svg`;
const imgLine3 = `${assetPathPrefix}/2d51d.svg`;
const imgLine4 = `${assetPathPrefix}/2852d.svg`;
const imgLine5 = `${assetPathPrefix}/064a7.svg`;
const imgLine6 = `${assetPathPrefix}/3ebff.svg`;
const imgLine7 = `${assetPathPrefix}/4682a.svg`;
const imgLine8 = `${assetPathPrefix}/cc32a.svg`;
const imgLine9 = `${assetPathPrefix}/ff340.svg`;
const imgEllipse5 = `${assetPathPrefix}/d787d.svg`;
const imgLine10 = `${assetPathPrefix}/ffeae.svg`;
const imgLine11 = `${assetPathPrefix}/58e4e.svg`;
const imgRectangle2 = `${assetPathPrefix}/dcba3.svg`;
const imgGroup2 = `${assetPathPrefix}/69fa8.svg`;
const imgRectangle3 = `${assetPathPrefix}/9dff4.svg`;
const imgLine12 = `${assetPathPrefix}/ebf28.svg`;
const imgLine13 = `${assetPathPrefix}/33581.svg`;
const imgLine14 = `${assetPathPrefix}/02161.svg`;
const imgLine15 = `${assetPathPrefix}/319b3.svg`;
const imgGroup46 = `${assetPathPrefix}/b0239.svg`;
const imgLine17 = `${assetPathPrefix}/66a8e.svg`;
const imgLine21 = `${assetPathPrefix}/958ba.svg`;
const imgEllipse17 = `${assetPathPrefix}/7eaa5.svg`;
const imgEllipse26 = `${assetPathPrefix}/c149b.svg`;
const imgLine39 = `${assetPathPrefix}/d58d8.svg`;
const imgLine43 = `${assetPathPrefix}/c00ea.svg`;
const imgLine45 = `${assetPathPrefix}/e3b6d.svg`;
const imgLine46 = `${assetPathPrefix}/f06d2.svg`;
const imgLine47 = `${assetPathPrefix}/bd594.svg`;
const imgLine48 = `${assetPathPrefix}/593c8.svg`;
const imgLine49 = `${assetPathPrefix}/a744b.svg`;
const imgLine50 = `${assetPathPrefix}/29666.svg`;
const imgLine51 = `${assetPathPrefix}/92b87.svg`;
const imgVector = `${assetPathPrefix}/0c0ac.svg`;
const imgVector1 = `${assetPathPrefix}/93121.svg`;
const imgVector2 = `${assetPathPrefix}/9d4b8.svg`;
const imgGroup = `${assetPathPrefix}/3ced3.svg`;
const imgGroup1 = `${assetPathPrefix}/986ec.svg`;
const imgEllipse27 = `${assetPathPrefix}/61b3e.svg`;
const imgEllipse28 = `${assetPathPrefix}/2a6b6.svg`;
const imgLine44 = `${assetPathPrefix}/b235f.svg`;

function VideoSlot({ index, className, nodeId }: { index: number; className: string; nodeId: string }) {
  const src = videoSources[index]
  return src ? (
    <video className={className + ' video-slot'} controls playsInline preload="metadata" aria-label={`Video ${index + 1}`} data-node-id={nodeId}>
      <source src={src} />Your browser does not support video playback.
    </video>
  ) : (
    <div className={className + ' video-slot'} aria-label={`Video placeholder ${index + 1}`} data-node-id={nodeId} />
  )
}

function TeamPhoto({ index, className, nodeId }: { index: number; className: string; nodeId: string }) {
  const src = teamPhotos[index]
  return src ? (
    <img className={className + ' team-photo-slot'} src={src} alt={`HRWala team member ${index + 1}`} data-node-id={nodeId} />
  ) : (
    <div className={className + ' team-photo-slot'} aria-label={`Team photo placeholder ${index + 1}`} data-node-id={nodeId} />
  )
}

function LiveContactForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = 'HRWala enquiry — ' + String(data.get('topic'))
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=hello%40hrwala.net&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
  }
  return (
    <form className="live-contact-form" onSubmit={submit} aria-label="Contact HRWala">
      <label><span className="live-contact-label">Full Name</span><input name="name" autoComplete="name" placeholder="Enter your name" aria-label="Full name" required /></label>
      <label><span className="live-contact-label">Email</span><input name="email" type="email" autoComplete="email" placeholder="example@gmail.com" aria-label="Email" required /></label>
      <label><span className="live-contact-label">How Can We Help?</span><select name="topic" aria-label="How can we help?" defaultValue="General Inquiry">
        <option>General Inquiry</option><option>Job Portal</option><option>HR Services</option><option>HRWala Software</option><option>Certifications</option>
      </select></label>
      <label><span className="live-contact-label">Your Message</span><textarea name="message" placeholder="Tell us more about your inquiry..." aria-label="Your message" required /></label>
      <button type="submit" aria-label="Submit contact form">Submit</button>
    </form>
  )
}

function LiveNewsletter() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('newsletter-email')
    const subject = encodeURIComponent('HRWala newsletter subscription')
    const body = encodeURIComponent('Please add this email address to the HRWala newsletter: ' + String(email))
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=hello%40hrwala.net&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
  }
  return <form className="live-newsletter" onSubmit={submit} aria-label="Subscribe to the HRWala newsletter">
    <input type="email" name="newsletter-email" placeholder="Enter your email" aria-label="Email for newsletter" required />
    <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
  </form>
}

const faqEntries = [
  ['How can HRWala.net help me find a job?', 'Explore job opportunities and connect with potential employers through our job portal.'],
  ['Can employers use HRWala.net for recruitment?', 'Employers can publish vacancies, review applicants and organise recruitment through HRWala.net.'],
  ['What HR services does HRWala.net offer?', 'HRWala.net brings together HR consulting, brand standards, recruitment and HR software.'],
  ['How can I get information about professional certifications?', 'Contact our team and select Certifications in the enquiry form for programme information.'],
]

function LiveFaq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="live-faq" aria-label="Frequently asked questions">
      {faqEntries.map(([question, answer], index) => {
        const expanded = open === index
        return (
          <div className={'live-faq-item' + (expanded ? ' is-open' : '')} key={question}>
            <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
              <span>{question}</span><b aria-hidden="true">{expanded ? '−' : '+'}</b>
            </button>
            <div className="live-faq-answer"><div><p>{answer}</p></div></div>
          </div>
        )
      })}
    </div>
  )
}

function Desktop1({ className }: { className?: string }) {
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlideIndex((index) => (index + 1) % heroSlides.length), 5200)
    return () => window.clearInterval(timer)
  }, [])
  const activeHeroSlide = heroSlides[heroSlideIndex]
  const design = (
    <div id="home" className={className || "border border-black border-solid h-[7615px] overflow-clip relative w-[1530px]"} data-node-id="3:6" data-name="Desktop - 1">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <div className="absolute bg-white border-0 border-black border-solid h-[92px] left-[-1px] top-[-1px] w-[1540px]" data-node-id="3:7" />
      <a href="#home" className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[665px] not-italic text-[#232323] text-[16px] top-[45px] whitespace-nowrap no-underline" data-node-id="5:5">
        Discover
      </a>
      <a href="https://hrwala.net/job-portal" className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[781px] not-italic text-[#232323] text-[16px] top-[45px] whitespace-nowrap no-underline" data-node-id="5:17">
        Job Portal
      </a>
      <a href="https://hrwala.net/login" className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[0] left-[1316px] not-italic text-[#505050] text-[0px] top-[44px] whitespace-nowrap no-underline" data-node-id="5:31">
        <span className="leading-[normal] text-[#232323] text-[16px]">My</span>
        <span className="leading-[normal] text-[16px]">{` `}</span>
        <span className="leading-[normal] text-[#232323] text-[16px]">Portal</span>
      </a>
      <div className="absolute contents left-[1401.83px] top-[31px]" data-node-id="9:3">
        <div className="absolute inset-[2.52%_4.48%_93.14%_91.69%]" data-node-id="8:13">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
        </div>
        <div className="absolute left-[1414px] size-[54px] top-[32px]" data-node-id="9:2" data-name="girl_profile_icon-removebg-preview 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGirlProfileIconRemovebgPreview1} />
        </div>
        <a href="https://hrwala.net/login" className="absolute left-[1414px] size-[54px] top-[32px] z-10" aria-label="Open My Portal" />
      </div>
      <div className="absolute h-[837px] left-[28px] top-[1331px] w-[1472px]" data-node-id="207:31">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle12} />
      </div>
      <div className="absolute h-[987px] left-[28px] top-[5438px] w-[1472px]" data-node-id="260:36">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle13} />
      </div>
      <div className="absolute h-[628px] left-[28px] top-[6712px] w-[1472px]" data-node-id="274:202">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle26} />
      </div>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[45px] leading-[0] left-[89px] not-italic text-[0px] text-black top-[calc(50%-2994.5px)] tracking-[-0.8px] w-[453px]" data-node-id="69:3">
        <span className="leading-[normal] text-[#f6ac04] text-[40px]">{`A' La Carte:`}</span>
        <span className="leading-[normal] text-[40px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[40px]">We Offer</span>
      </p>
      <div className="absolute contents left-[104px] top-[264px]" data-node-id="88:4">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[calc(50%-592.5px)] not-italic text-[14px] text-black text-center top-[282px] tracking-[-0.56px] whitespace-nowrap" data-node-id="33:85">
          <p className="leading-[normal]">People @ Top</p>
        </div>
        <div className="absolute h-0 left-[105px] top-[282px] w-[18px]" data-node-id="33:87">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
      </div>
      <div className="absolute h-[371px] left-[785px] rounded-[18px] top-[1376px] w-[659px]" data-node-id="172:6" data-name="Human Connection in the Interview Room 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgHumanConnectionInTheInterviewRoom1} />
      </div>
      <div className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[252px] leading-[0] left-[85px] not-italic text-[#757575] text-[0px] text-justify top-[1436px] tracking-[-0.28px] w-[617px] whitespace-pre-wrap" data-node-id="171:5">
        <p className="leading-[21px] mb-0 text-[14px]">Every career move shapes a future. Every hiring decision shapes a business. HRwala.net connects professionals with opportunities and employers with talent—making it easier to showcase skills, explore roles and manage hiring in one place.</p>
        <p className="leading-[21px] mb-0 text-[14px]">​</p>
        <p className="mb-0 text-[14px]">
          <span className="[word-break:break-word] font-['Poppins:Bold'] leading-[21px] not-italic text-black">For candidates:</span>
          <span className="leading-[21px]">{` Build a profile that reflects your skills, experience and ambitions. Explore relevant roles, create your CV and apply with ease, while keeping your applications, interview schedules and employer conversations organised in one place.`}</span>
        </p>
        <p className="leading-[21px] mb-0 text-[14px]">​</p>
        <p className="text-[14px]">
          <span className="[word-break:break-word] font-['Poppins:Bold'] leading-[21px] not-italic text-black">For employers:</span>
          <span className="leading-[21px]">{` Present your organisation, publish vacancies and connect with candidates who meet your requirements. Review profiles, shortlist applicants, coordinate interviews and manage communication through a central dashboard, giving your team a shared view of every stage of recruitment.`}</span>
        </p>
      </div>
      <div className="absolute contents left-[79px] top-[1376px]" data-node-id="167:3">
        <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[45px] leading-[0] left-[84px] not-italic text-[0px] text-black top-[calc(50%-2430.5px)] tracking-[-0.8px] w-[453px]" data-node-id="109:6">
          <span className="leading-[normal] text-[#f6ac04] text-[40px]">JOB</span>
          <span className="leading-[normal] text-[40px]">{` `}</span>
          <span className="leading-[normal] text-[#0144ab] text-[40px]">Portal</span>
        </p>
        <div className="absolute contents left-[80px] top-[1823px]" data-node-id="118:121">
          <div className="absolute bg-white h-[299.746px] left-[80px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[1823.25px] w-[628px]" data-node-id="109:10" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[51.154px] leading-[normal] left-[204px] not-italic text-[#0144ab] text-[57px] top-[1836.72px] tracking-[-1.14px] w-[380px]" data-node-id="109:12">
            Candidates
          </p>
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[110.843px] leading-[normal] left-[111px] not-italic opacity-10 text-[#0144ab] text-[68px] text-justify top-[1830.43px] tracking-[-1.36px] w-[166.294px]" data-node-id="109:14">
            01
          </p>
          <div className="absolute h-[10.959px] left-[82px] top-[1823px] w-[623.779px]" data-node-id="118:120">
            <div className="absolute inset-[-13.68%_-0.24%_-13.69%_-0.24%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup20} />
            </div>
          </div>
          <div className="absolute contents left-[104px] top-[1973.13px]" data-node-id="118:35">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-579.5px)] not-italic text-[#0144ab] text-[14px] text-center top-[1981.16px] tracking-[-0.56px] w-[119px]" data-node-id="118:36">
              <p className="leading-[normal]">Smart Job Search</p>
            </div>
            <div className="absolute h-0 left-[104px] top-[1980.77px] w-[15px]" data-node-id="118:37">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[491px] top-[1973.13px]" data-node-id="118:67">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-180px)] not-italic text-[#0144ab] text-[14px] text-center top-[1981.16px] tracking-[-0.56px] w-[144px]" data-node-id="118:68">
              <p className="leading-[normal]">Employee Dashboard</p>
            </div>
            <div className="absolute h-0 left-[491px] top-[1980.77px] w-[15px]" data-node-id="118:69">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[104px] top-[2009.83px]" data-node-id="118:58">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-570px)] not-italic text-[#0144ab] text-[14px] text-center top-[2017.86px] tracking-[-0.56px] w-[140px]" data-node-id="118:59">
              <p className="leading-[normal]">{`Resume & CV Builder`}</p>
            </div>
            <div className="absolute h-0 left-[104px] top-[2017.48px] w-[15px]" data-node-id="118:60">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[491px] top-[2009.83px]" data-node-id="118:70">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-184.5px)] not-italic text-[#0144ab] text-[14px] text-center top-[2017.86px] tracking-[-0.56px] w-[131px]" data-node-id="118:71">
              <p className="leading-[normal]">Verified Job Listings</p>
            </div>
            <div className="absolute h-0 left-[491px] top-[2017.48px] w-[15px]" data-node-id="118:72">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[104px] top-[2046.53px]" data-node-id="118:61">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-570px)] not-italic text-[#0144ab] text-[14px] text-center top-[2054.56px] tracking-[-0.56px] w-[138px]" data-node-id="118:62">
              <p className="leading-[normal]">Application Tracking</p>
            </div>
            <div className="absolute h-0 left-[104px] top-[2054.18px] w-[15px]" data-node-id="118:63">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[491px] top-[2046.53px]" data-node-id="118:73">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-198.5px)] not-italic text-[#0144ab] text-[14px] text-center top-[2054.56px] tracking-[-0.56px] w-[99px]" data-node-id="118:74">
              <p className="leading-[normal]">Profile Visibility</p>
            </div>
            <div className="absolute h-0 left-[491px] top-[2054.18px] w-[15px]" data-node-id="118:75">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[104px] top-[2083.24px]" data-node-id="118:64">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-561.5px)] not-italic text-[#0144ab] text-[14px] text-center top-[2091.27px] tracking-[-0.56px] w-[155px]" data-node-id="118:65">
              <p className="leading-[normal]">Mobile-Friendly Access</p>
            </div>
            <div className="absolute h-0 left-[104px] top-[2090.88px] w-[15px]" data-node-id="118:66">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[491px] top-[2083.24px]" data-node-id="118:76">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%-176.5px)] not-italic text-[#0144ab] text-[14px] text-center top-[2091.27px] tracking-[-0.56px] w-[147px]" data-node-id="118:77">
              <p className="leading-[normal]">Interview Notifications</p>
            </div>
            <div className="absolute h-0 left-[491px] top-[2090.88px] w-[15px]" data-node-id="118:78">
              <div className="absolute inset-[-0.5px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[798px] top-[1823px]" data-node-id="118:122">
          <div className="absolute bg-white h-[299.746px] left-[798px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[1823.25px] w-[647px]" data-node-id="118:123" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[51.154px] leading-[normal] left-[944.3px] not-italic text-[#0144ab] text-[57px] top-[1836.72px] tracking-[-1.14px] w-[391.497px]" data-node-id="118:124">
            Employers
          </p>
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[110.843px] leading-[normal] left-[829.94px] not-italic opacity-10 text-[#0144ab] text-[68px] text-justify top-[1830.43px] tracking-[-1.36px] w-[171.325px]" data-node-id="118:125">
            02
          </p>
          <div className="absolute h-[10.959px] left-[800.06px] top-[1823px] w-[642.651px]" data-node-id="118:126">
            <div className="absolute inset-[-13.68%_-0.23%_-13.69%_-0.23%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup21} />
            </div>
          </div>
          <div className="absolute contents left-[822.73px] top-[1973.13px]" data-node-id="118:129">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+141.69px)] not-italic text-[#0144ab] text-[14px] text-center top-[1981.16px] tracking-[-0.56px] w-[122.6px]" data-node-id="118:130">
              <p className="leading-[normal]">Quick Job Posting</p>
            </div>
            <div className="absolute h-0 left-[822.73px] top-[1980.77px] w-[15.454px]" data-node-id="118:131">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1221.43px] top-[1973.13px]" data-node-id="118:132">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+537.31px)] not-italic text-[#0144ab] text-[14px] text-center top-[1981.16px] tracking-[-0.56px] w-[120.54px]" data-node-id="118:133">
              <p className="leading-[normal]">Hiring Dashboard</p>
            </div>
            <div className="absolute h-0 left-[1221.43px] top-[1980.77px] w-[15.454px]" data-node-id="118:134">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[822.73px] top-[2009.83px]" data-node-id="118:135">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+151.48px)] not-italic text-[#0144ab] text-[14px] text-center top-[2017.86px] tracking-[-0.56px] w-[144.236px]" data-node-id="118:136">
              <p className="leading-[normal]">Candidate Database</p>
            </div>
            <div className="absolute h-0 left-[822.73px] top-[2017.48px] w-[15.454px]" data-node-id="118:137">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1221.43px] top-[2009.83px]" data-node-id="118:138">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+548.13px)] not-italic text-[#0144ab] text-[14px] text-center top-[2017.86px] tracking-[-0.56px] w-[142.175px]" data-node-id="118:139">
              <p className="leading-[normal]">Application Tracking</p>
            </div>
            <div className="absolute h-0 left-[1221.43px] top-[2017.48px] w-[15.454px]" data-node-id="118:140">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[822.73px] top-[2046.53px]" data-node-id="118:141">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+151.99px)] not-italic text-[#0144ab] text-[14px] text-center top-[2054.56px] tracking-[-0.56px] w-[143.205px]" data-node-id="118:142">
              <p className="leading-[normal]">Interview Scheduling</p>
            </div>
            <div className="absolute h-0 left-[822.73px] top-[2054.18px] w-[15.454px]" data-node-id="118:143">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1221.43px] top-[2046.53px]" data-node-id="118:144">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+542.98px)] not-italic text-[#0144ab] text-[14px] text-center top-[2054.56px] tracking-[-0.56px] w-[131.873px]" data-node-id="118:145">
              <p className="leading-[normal]">Employer Branding</p>
            </div>
            <div className="absolute h-0 left-[1221.43px] top-[2054.18px] w-[15.454px]" data-node-id="118:146">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[822.73px] top-[2083.24px]" data-node-id="118:147">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+156.12px)] not-italic text-[#0144ab] text-[14px] text-center top-[2091.27px] tracking-[-0.56px] w-[151.447px]" data-node-id="118:148">
              <p className="leading-[normal]">Recruitment Analytics</p>
            </div>
            <div className="absolute h-0 left-[822.73px] top-[2090.88px] w-[15.454px]" data-node-id="118:149">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1221.43px] top-[2083.24px]" data-node-id="118:150">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[16.058px] justify-center leading-[0] left-[calc(50%+537.82px)] not-italic text-[#0144ab] text-[14px] text-center top-[2091.27px] tracking-[-0.56px] w-[119.51px]" data-node-id="118:151">
              <p className="leading-[normal]">Direct Messaging</p>
            </div>
            <div className="absolute h-0 left-[1221.43px] top-[2090.88px] w-[15.454px]" data-node-id="118:152">
              <div className="absolute inset-[-0.5px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[79px] top-[1705px]" data-node-id="188:18">
        <div className="absolute bg-[#0144ab] h-[42px] left-[80px] rounded-[8px] top-[1706px] w-[167px]" data-node-id="188:19" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[26.011px] justify-center leading-[0] left-[calc(50%-601.5px)] not-italic text-[14px] text-center text-white top-[calc(50%-2080.49px)] tracking-[-0.28px] w-[167px]" data-node-id="188:20">
          <p className="leading-[normal]">Explore Job Portal</p>
        </div>
      </div>
      <VideoSlot index={0} className="absolute bg-[#d9d9d9] h-[183px] left-[83px] rounded-[18px] top-[896px] w-[321px]" nodeId="88:17" />
      <VideoSlot index={1} className="absolute bg-[#d9d9d9] h-[183px] left-[430px] rounded-[18px] top-[896px] w-[320px]" nodeId="88:24" />
      <VideoSlot index={2} className="absolute bg-[#d9d9d9] h-[183px] left-[777px] rounded-[18px] top-[896px] w-[320px]" nodeId="88:25" />
      <VideoSlot index={3} className="absolute bg-[#d9d9d9] h-[183px] left-[1123px] rounded-[18px] top-[896px] w-[321px]" nodeId="88:26" />
      <div className="absolute contents hover-card-group left-[83px] top-[1099px]" style={{ transformOrigin: '244px 1196px' }} data-node-id="101:66">
        <div className="absolute bg-white h-[192px] left-[84px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[1100px] w-[321px]" data-node-id="88:27" />
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[105px] not-italic text-[13px] text-black text-justify top-[1135px] tracking-[-0.26px] whitespace-nowrap" data-node-id="92:19">
          01 / People
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[105px] not-italic text-[#0144ab] text-[22px] top-[1156px] tracking-[-0.44px] whitespace-nowrap" data-node-id="88:31">
          HR Consultants
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[105px] not-italic text-[#757575] text-[13px] text-justify top-[1197px] tracking-[-0.26px] w-[263px]" data-node-id="88:32">
          Build stronger teams with people-first advice, practical policies and a clear HR direction.
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[71px] leading-[normal] left-[320px] not-italic opacity-10 text-[#0144ab] text-[68px] text-justify top-[1110px] tracking-[-1.36px] w-[78px]" data-node-id="92:17">
          01
        </p>
        <div className="absolute h-[5px] left-[177.5px] top-[1101px] w-[221px]" data-node-id="92:58">
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div className="absolute flex h-[7.903px] items-center justify-center left-[87px] top-[1101px] w-[89px]" data-node-id="100:65">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.903px] relative w-[89px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents hover-card-group left-[426px] top-[1099px]" style={{ transformOrigin: '587px 1196px' }} data-node-id="101:109">
        <div className="absolute bg-white h-[192px] left-[427px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[1100px] w-[321px]" data-node-id="101:110" />
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[448px] not-italic text-[13px] text-black text-justify top-[1135px] tracking-[-0.26px] whitespace-nowrap" data-node-id="101:111">
          02 / Standards
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[448px] not-italic text-[#0144ab] text-[22px] top-[1156px] tracking-[-0.44px] whitespace-nowrap" data-node-id="101:112">
          Brand Standards
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[448px] not-italic text-[#757575] text-[13px] text-justify top-[1197px] tracking-[-0.26px] w-[263px]" data-node-id="101:113">
          Turn your standards into everyday practices that protect your people and your brand.
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[71px] leading-[normal] left-[656px] not-italic opacity-10 text-[#0144ab] text-[68px] text-justify top-[1109px] tracking-[-1.36px] w-[85px]" data-node-id="101:114">
          02
        </p>
        <div className="absolute h-[5px] left-[520.5px] top-[1101px] w-[221px]" data-node-id="101:115">
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div className="absolute flex h-[7.903px] items-center justify-center left-[430px] top-[1101px] w-[89px]" data-node-id="101:116">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.903px] relative w-[89px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents hover-card-group left-[776px] top-[1100px]" style={{ transformOrigin: '937px 1197px' }} data-node-id="101:125">
        <div className="absolute bg-white h-[192px] left-[777px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[1101px] w-[321px]" data-node-id="101:126" />
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[798px] not-italic text-[13px] text-black text-justify top-[1136px] tracking-[-0.26px] whitespace-nowrap" data-node-id="101:127">
          03 / Oppurtunity
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[798px] not-italic text-[#0144ab] text-[22px] top-[1157px] tracking-[-0.44px] whitespace-nowrap" data-node-id="101:128">
          Job Portal
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[798px] not-italic text-[#757575] text-[13px] text-justify top-[1198px] tracking-[-0.26px] w-[263px]" data-node-id="101:129">
          A considered space for candidates and employers to find their next great connection.
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[71px] leading-[normal] left-[1004px] not-italic opacity-10 text-[#0144ab] text-[68px] text-justify top-[1110px] tracking-[-1.36px] w-[85px]" data-node-id="101:130">
          03
        </p>
        <div className="absolute h-[5px] left-[870.5px] top-[1102px] w-[221px]" data-node-id="101:131">
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div className="absolute flex h-[7.903px] items-center justify-center left-[780px] top-[1102px] w-[89px]" data-node-id="101:132">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.903px] relative w-[89px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents hover-card-group left-[1123px] top-[1100px]" style={{ transformOrigin: '1284px 1197px' }} data-node-id="101:133">
        <div className="absolute bg-white h-[192px] left-[1124px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[1101px] w-[321px]" data-node-id="101:134" />
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[1145px] not-italic text-[13px] text-black text-justify top-[1136px] tracking-[-0.26px] whitespace-nowrap" data-node-id="101:135">
          04 / Systems
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[1145px] not-italic text-[#0144ab] text-[22px] top-[1157px] tracking-[-0.44px] whitespace-nowrap" data-node-id="101:136">
          HRwala Software
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] font-medium leading-[normal] left-[1145px] text-[#757575] text-[13px] text-justify top-[1198px] tracking-[-0.26px] w-[263px]" dir="auto" data-node-id="101:137" style={{ fontVariationSettings: '"wdth" 100' }}>
          Bring the employee lifecycle together in one connected HRIS experience۔ HRWala Software brings..
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[71px] leading-[normal] left-[1346px] not-italic opacity-10 text-[#0144ab] text-[68px] text-justify top-[1110px] tracking-[-1.36px] w-[96px]" data-node-id="101:138">
          04
        </p>
        <div className="absolute h-[5px] left-[1217.5px] top-[1102px] w-[221px]" data-node-id="101:139">
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div className="absolute flex h-[7.903px] items-center justify-center left-[1127px] top-[1102px] w-[89px]" data-node-id="101:140">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.903px] relative w-[89px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[74px] top-[2232px]" data-node-id="169:4">
        <div className="absolute contents hover-card-group left-[75px] top-[2753px]" style={{ transformOrigin: '235.5px 2826.5px' }} data-node-id="159:37">
          <div className="absolute bg-white h-[147px] left-[75px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2753px] w-[321px]" data-node-id="159:38" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[30px] leading-[normal] left-[96px] not-italic text-[#0144ab] text-[22px] top-[2783px] tracking-[-0.44px] w-[190px]" data-node-id="159:40">{`Resorts & Hotels`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[55px] leading-[normal] left-[96px] not-italic text-[#757575] text-[13px] text-justify top-[2820px] tracking-[-0.26px] w-[263px]" data-node-id="159:41">
            Elevate guest experiences with consistent service, thoughtful hospitality and a distinctive brand identity.
          </p>
          <div className="absolute h-[4.583px] left-[168.5px] top-[2753.92px] w-[221px]" data-node-id="159:43">
            <div className="absolute inset-[-32.71%_-0.68%_-32.73%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine6} />
            </div>
          </div>
          <div className="absolute flex h-[7.244px] items-center justify-center left-[78px] top-[2753.92px] w-[89px]" data-node-id="159:44">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[7.244px] relative w-[89px]">
                <div className="absolute inset-[-20.71%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[75px] top-[2937px]" style={{ transformOrigin: '235.5px 3010.5px' }} data-node-id="159:277">
          <div className="absolute bg-white h-[147px] left-[75px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2937px] w-[321px]" data-node-id="159:278" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[30px] leading-[normal] left-[96px] not-italic text-[#0144ab] text-[22px] top-[2967px] tracking-[-0.44px] w-[243px]" data-node-id="159:279">{`Aviation & Travelling`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[55px] leading-[normal] left-[96px] not-italic text-[#757575] text-[13px] text-justify top-[3004px] tracking-[-0.26px] w-[263px]" data-node-id="159:280">
            Build passenger trust with attentive service, clear communication and consistent standards across journeys.
          </p>
          <div className="absolute h-[4.583px] left-[168.5px] top-[2937.92px] w-[221px]" data-node-id="159:281">
            <div className="absolute inset-[-32.71%_-0.68%_-32.73%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine6} />
            </div>
          </div>
          <div className="absolute flex h-[7.244px] items-center justify-center left-[78px] top-[2937.92px] w-[89px]" data-node-id="159:282">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[7.244px] relative w-[89px]">
                <div className="absolute inset-[-20.71%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[78px] top-[3121px]" style={{ transformOrigin: '238.5px 3194.5px' }} data-node-id="159:301">
          <div className="absolute bg-white h-[147px] left-[78px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3121px] w-[321px]" data-node-id="159:302" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[30px] leading-[normal] left-[99px] not-italic text-[#0144ab] text-[22px] top-[3151px] tracking-[-0.44px] w-[228px]" data-node-id="159:303">{`Hospitals & Clinics`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[55px] leading-[normal] left-[99px] not-italic text-[#757575] text-[13px] text-justify top-[3188px] tracking-[-0.26px] w-[263px]" data-node-id="159:304">
            Build patient trust with caring teams, clear communication and consistent standards across facilities.
          </p>
          <div className="absolute h-[4.583px] left-[171.5px] top-[3121.92px] w-[221px]" data-node-id="159:305">
            <div className="absolute inset-[-32.71%_-0.68%_-32.73%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine6} />
            </div>
          </div>
          <div className="absolute flex h-[7.244px] items-center justify-center left-[81px] top-[3121.92px] w-[89px]" data-node-id="159:306">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[7.244px] relative w-[89px]">
                <div className="absolute inset-[-20.71%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[418px] top-[2753px]" style={{ transformOrigin: '578.5px 2826.1px' }} data-node-id="159:45">
          <div className="absolute bg-white h-[146.238px] left-[418px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2753px] w-[321px]" data-node-id="159:46" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[439px] not-italic text-[#0144ab] text-[22px] top-[2783px] tracking-[-0.44px] w-[236px]" data-node-id="159:48">{`Cafés & Restaurants`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[439px] not-italic text-[#757575] text-[13px] text-justify top-[2820px] tracking-[-0.26px] w-[263px]" data-node-id="159:49">
            Build memorable dining experiences through consistent service, welcoming spaces and clear brand standards.
          </p>
          <div className="absolute h-[3.808px] left-[511.5px] top-[2753.76px] w-[221px]" data-node-id="159:51">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[421px] top-[2753.76px] w-[89px]" data-node-id="159:52">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[418px] top-[2937px]" style={{ transformOrigin: '578.5px 3010.1px' }} data-node-id="159:283">
          <div className="absolute bg-white h-[146.238px] left-[418px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2937px] w-[321px]" data-node-id="159:284" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[439px] not-italic text-[#0144ab] text-[22px] top-[2967px] tracking-[-0.44px] w-[300px]" data-node-id="159:285">{`Event & Wedding Venues`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[439px] not-italic text-[#757575] text-[13px] text-justify top-[3004px] tracking-[-0.26px] w-[263px]" data-node-id="159:286">
            Make every event special with skilled teams, warm service and clear brand standards.
          </p>
          <div className="absolute h-[3.808px] left-[511.5px] top-[2937.76px] w-[221px]" data-node-id="159:287">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[421px] top-[2937.76px] w-[89px]" data-node-id="159:288">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[421px] top-[3121px]" style={{ transformOrigin: '581.5px 3194.1px' }} data-node-id="159:307">
          <div className="absolute bg-white h-[146.238px] left-[421px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3121px] w-[321px]" data-node-id="159:308" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[442px] not-italic text-[#0144ab] text-[20px] top-[3151px] tracking-[-0.4px] w-[293px]" data-node-id="159:309">{`Beauty & Aesthetic Clinics`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[442px] not-italic text-[#757575] text-[13px] text-justify top-[3188px] tracking-[-0.26px] w-[263px]" data-node-id="159:310">
            Build client confidence with skilled teams, attentive service and consistent standards of care.
          </p>
          <div className="absolute h-[3.808px] left-[514.5px] top-[3121.76px] w-[221px]" data-node-id="159:311">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[424px] top-[3121.76px] w-[89px]" data-node-id="159:312">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[768px] top-[2753.76px]" style={{ transformOrigin: '928.5px 2826.9px' }} data-node-id="159:53">
          <div className="absolute bg-white h-[146.238px] left-[768px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2753.76px] w-[321px]" data-node-id="159:54" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[789px] not-italic text-[#0144ab] text-[22px] top-[2785px] tracking-[-0.44px] w-[263px]" data-node-id="159:56">
            Serviced Apartments
          </p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[789px] not-italic text-[#757575] text-[13px] text-justify top-[2820px] tracking-[-0.26px] w-[263px]" data-node-id="159:57">
            Build guest trust with reliable service, clean spaces and a consistent brand experience.
          </p>
          <div className="absolute h-[3.808px] left-[861.5px] top-[2754.52px] w-[221px]" data-node-id="159:59">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[771px] top-[2754.52px] w-[89px]" data-node-id="159:60">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[768px] top-[2937.76px]" style={{ transformOrigin: '928.5px 3010.9px' }} data-node-id="159:289">
          <div className="absolute bg-white h-[146.238px] left-[768px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2937.76px] w-[321px]" data-node-id="159:290" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[24px] left-[789px] not-italic text-[#0144ab] text-[19px] top-[2969px] tracking-[-0.38px] w-[293px]" data-node-id="159:291">{`Spa, Fitness Centers & Gyms`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[789px] not-italic text-[#757575] text-[13px] text-justify top-[3004px] tracking-[-0.26px] w-[263px]" data-node-id="159:292">
            Build member trust with skilled teams, clean spaces and consistent care at every visit.
          </p>
          <div className="absolute h-[3.808px] left-[861.5px] top-[2938.52px] w-[221px]" data-node-id="159:293">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[771px] top-[2938.52px] w-[89px]" data-node-id="159:294">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[771px] top-[3121.76px]" style={{ transformOrigin: '931.5px 3194.9px' }} data-node-id="159:313">
          <div className="absolute bg-white h-[146.238px] left-[771px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3121.76px] w-[321px]" data-node-id="159:314" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[792px] not-italic text-[#0144ab] text-[22px] top-[3153px] tracking-[-0.44px] w-[283px]" data-node-id="159:315">
            Retail Flagship Stores
          </p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[792px] not-italic text-[#757575] text-[13px] text-justify top-[3188px] tracking-[-0.26px] w-[263px]" data-node-id="159:316">
            Create memorable shopping experiences with attentive teams, inviting displays and consistent brand standards.
          </p>
          <div className="absolute h-[3.808px] left-[864.5px] top-[3122.52px] w-[221px]" data-node-id="159:317">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[774px] top-[3122.52px] w-[89px]" data-node-id="159:318">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[1115px] top-[2753.76px]" style={{ transformOrigin: '1275.5px 2826.9px' }} data-node-id="159:61">
          <div className="absolute bg-white h-[146.238px] left-[1115px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2753.76px] w-[321px]" data-node-id="159:62" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[1136px] not-italic text-[#0144ab] text-[18px] top-[2783px] tracking-[-0.36px] w-[300px]" data-node-id="159:64">{`Private Schools & Academies`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[1136px] not-italic text-[#757575] text-[13px] text-justify top-[2820px] tracking-[-0.26px] w-[263px]" dir="auto" data-node-id="159:65">
            Build parent trust with clear communication, caring staff and consistent standards across campus.
          </p>
          <div className="absolute h-[3.808px] left-[1208.5px] top-[2754.52px] w-[221px]" data-node-id="159:67">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[1118px] top-[2754.52px] w-[89px]" data-node-id="159:68">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[1115px] top-[2937.76px]" style={{ transformOrigin: '1275.5px 3010.9px' }} data-node-id="159:295">
          <div className="absolute bg-white h-[146.238px] left-[1115px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[2937.76px] w-[321px]" data-node-id="159:296" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[1136px] not-italic text-[#0144ab] text-[20px] top-[2967px] tracking-[-0.4px] w-[293px]" data-node-id="159:297">{`Banks & Financial Services`}</p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[1136px] not-italic text-[#757575] text-[13px] text-justify top-[3004px] tracking-[-0.26px] w-[263px]" dir="auto" data-node-id="159:298">
            Build client trust with professional service, clear communication and consistent standards across branches.
          </p>
          <div className="absolute h-[3.808px] left-[1208.5px] top-[2938.52px] w-[221px]" data-node-id="159:299">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[1118px] top-[2938.52px] w-[89px]" data-node-id="159:300">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents hover-card-group left-[1118px] top-[3121.76px]" style={{ transformOrigin: '1278.5px 3194.9px' }} data-node-id="159:319">
          <div className="absolute bg-white h-[146.238px] left-[1118px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3121.76px] w-[321px]" data-node-id="159:320" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25px] leading-[normal] left-[1139px] not-italic text-[#0144ab] text-[22px] top-[3151px] tracking-[-0.44px] w-[266px]" data-node-id="159:321">
            Property Sales Galleries
          </p>
          <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[45.699px] leading-[normal] left-[1139px] not-italic text-[#757575] text-[13px] text-justify top-[3188px] tracking-[-0.26px] w-[263px]" dir="auto" data-node-id="159:322">
            Build buyer confidence with informed teams, welcoming spaces and a consistent brand experience.
          </p>
          <div className="absolute h-[3.808px] left-[1211.5px] top-[3122.52px] w-[221px]" data-node-id="159:323">
            <div className="absolute inset-[-39.38%_-0.68%_-39.39%_-0.68%]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
          <div className="absolute flex h-[6.019px] items-center justify-center left-[1121px] top-[3122.52px] w-[89px]" data-node-id="159:324">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.019px] relative w-[89px]">
                <div className="absolute inset-[-24.92%_-1.69%_-24.93%_-1.69%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine9} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[75px] top-[2233px]" data-node-id="205:14">
          <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[45px] leading-[0] left-[75px] not-italic text-[0px] text-black top-[calc(50%-1574.5px)] tracking-[-2.4px] w-[453px]" data-node-id="133:2">
            <span className="leading-[normal] text-[#f6ac04] text-[40px]">Develop</span>
            <span className="leading-[normal] text-[40px]">{` `}</span>
            <span className="leading-[normal] text-[#0144ab] text-[40px]">Your Brand</span>
          </p>
          <div className="absolute contents left-[75px] top-[2315px]" data-node-id="244:253">
            <div className="absolute contents left-[75px] top-[2315px]" data-node-id="145:193">
              <div className="absolute left-[75px] size-[74px] top-[2315px]" data-node-id="145:187">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
              </div>
              <div className="absolute left-[75px] size-[74px] top-[2458px]" data-node-id="145:189">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
              </div>
              <div className="absolute left-[75px] size-[74px] top-[2601px]" data-node-id="145:191">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
              </div>
              <div className="absolute flex h-[69px] items-center justify-center left-[112px] top-[2389px] w-0" data-node-id="145:188">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[69px]">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[69px] items-center justify-center left-[112px] top-[2532px] w-0" data-node-id="145:190">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[69px]">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] left-[96px] not-italic text-[#f6ac04] text-[32px] text-justify top-[2328px] tracking-[-0.64px] whitespace-nowrap" data-node-id="145:194">
                01
              </p>
              <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] left-[93px] not-italic text-[#f6ac04] text-[32px] text-justify top-[2471px] tracking-[-0.64px] whitespace-nowrap" data-node-id="145:195">
                02
              </p>
              <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] left-[93px] not-italic text-[#f6ac04] text-[32px] text-justify top-[2614px] tracking-[-0.64px] whitespace-nowrap" data-node-id="145:196">
                03
              </p>
            </div>
            <div className="[word-break:break-word] absolute contents leading-[normal] left-[158px] not-italic text-justify top-[2315px] whitespace-nowrap" data-node-id="145:203">
              <p className="absolute font-['Poppins:Medium'] left-[158px] text-[16px] text-black top-[2315px] tracking-[-0.32px]" data-node-id="145:197">
                Step 1
              </p>
              <p className="absolute font-['Poppins:SemiBold'] left-[158px] text-[#f6ac04] text-[17px] top-[2339px] tracking-[-0.34px]" data-node-id="145:198">
                Define the experience
              </p>
              <p className="absolute font-['Poppins:Medium'] left-[158px] text-[#757575] text-[12px] top-[2365px] tracking-[-0.24px]" data-node-id="145:202">
                Set clear standards for service, communication and presentation.
              </p>
            </div>
            <div className="[word-break:break-word] absolute contents leading-[normal] left-[158px] not-italic text-justify top-[2461px] whitespace-nowrap" data-node-id="145:204">
              <p className="absolute font-['Poppins:Medium'] left-[158px] text-[16px] text-black top-[2461px] tracking-[-0.32px]" data-node-id="145:205">
                Step 2
              </p>
              <p className="absolute font-['Poppins:SemiBold'] left-[158px] text-[#f6ac04] text-[17px] top-[2485px] tracking-[-0.34px]" data-node-id="145:206">
                Align your people
              </p>
              <p className="absolute font-['Poppins:Medium'] left-[158px] text-[#757575] text-[12px] top-[2511px] tracking-[-0.24px]" data-node-id="145:207">
                Give teams a shared way to deliver those standards every day.
              </p>
            </div>
            <div className="[word-break:break-word] absolute contents leading-[normal] left-[158px] not-italic text-justify top-[2607px] whitespace-nowrap" data-node-id="145:208">
              <p className="absolute font-['Poppins:Medium'] left-[158px] text-[16px] text-black top-[2607px] tracking-[-0.32px]" data-node-id="145:209">
                Step 3
              </p>
              <p className="absolute font-['Poppins:SemiBold'] left-[158px] text-[#f6ac04] text-[17px] top-[2631px] tracking-[-0.34px]" data-node-id="145:210">
                Build lasting trust
              </p>
              <p className="absolute font-['Poppins:Medium'] left-[158px] text-[#757575] text-[12px] top-[2657px] tracking-[-0.24px]" data-node-id="145:211">
                Create a dependable experience across every customer touchpoint.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute border border-[#e1e1e1] border-solid h-[421px] left-[685px] rounded-[18px] top-[2254px] w-[748px]" data-node-id="151:214" data-name="Corporate Team Discussing a Tablet 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgCorporateTeamDiscussingATablet1} />
        </div>
      </div>
      <div className="absolute contents left-[33px] top-[122px]" data-node-id="207:33">
        <div className="absolute h-[641px] left-[34px] top-[123px] w-[1472px]" data-node-id="9:4">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle2} />
        </div>
        <p key={'hero-heading-' + heroSlideIndex} className="hero-copy-cycle [word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[65px] leading-[normal] left-[100px] not-italic text-[#0144ab] text-[56px] top-[291px] tracking-[-1.12px] w-[682px]" data-node-id="12:68" aria-live="polite">
          {activeHeroSlide.heading}
        </p>
        <div className="absolute contents left-[105px] top-[381px]" data-node-id="31:78">
          <div key={'hero-bullets-' + heroSlideIndex} className="hero-copy-cycle [word-break:break-word] absolute font-['Poppins:Bold'] leading-[0] left-[128px] not-italic text-[#f6ac04] text-[33px] top-[381px] whitespace-nowrap" data-node-id="28:71" aria-live="polite">
            {activeHeroSlide.bullets.map((bullet, index) => <p className={index < 2 ? 'leading-[normal] mb-0' : 'leading-[normal]'} key={bullet}>{bullet}</p>)}
          </div>
          <div key={'hero-markers-' + heroSlideIndex} className="hero-copy-cycle absolute h-[114px] left-[105px] top-[398px] w-[10.158px]" data-node-id="31:77">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[100px] not-italic text-[#757575] text-[16px] top-[544px] tracking-[-0.32px] whitespace-nowrap" data-node-id="31:83">
          Recognized credentials for working professionals.
          <br aria-hidden />
          Your next career step starts here.
        </p>
        <div className="absolute contents left-[105px] top-[265px]" data-node-id="118:38">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[calc(50%-592.5px)] not-italic text-[14px] text-black text-center top-[282px] tracking-[-0.56px] whitespace-nowrap" data-node-id="118:39">
            <p className="leading-[normal]">People @ Top</p>
          </div>
          <div className="absolute h-0 left-[105px] top-[282px] w-[18px]" data-node-id="118:40">
            <div className="absolute inset-[-0.5px_-2.78%]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[100px] top-[617px]" data-node-id="35:95">
          <div className="absolute bg-[#0144ab] h-[43.598px] left-[100px] rounded-[8px] top-[617px] w-[131.186px]" data-node-id="35:93" />
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[26.829px] leading-[normal] left-[123px] not-italic text-[16px] text-white top-[626px] tracking-[-0.32px] w-[98.807px]" data-node-id="35:94">
            Job Portal
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[45px] leading-[normal] left-[782px] not-italic text-[#1d59b5] text-[22px] top-[208px] tracking-[-1.32px] w-[200px]" data-node-id="81:10">
          HR Consulting
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[45px] leading-[normal] left-[1241px] not-italic text-[#9669d9] text-[21px] top-[208px] tracking-[-1.26px] w-[227px]" data-node-id="84:2">
          Career Opportunities
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[45px] leading-[normal] left-[615px] not-italic text-[#9669d9] text-[22px] top-[662px] tracking-[-1.32px] w-[259px]" data-node-id="81:11">
          Talent Acquisition
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[36px] leading-[normal] left-[581px] not-italic text-[#5194d8] text-[21px] top-[420px] tracking-[-1.26px] w-[184px]" data-node-id="81:13">
          Brand Standards
        </p>
        <div className="absolute h-[578px] left-[744px] top-[155px] w-[701px]" data-node-id="197:8" data-name="Luminous Portrait with a Fading Blue Ring 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLuminousPortraitWithAFadingBlueRing1} />
        </div>
      </div>
      <div className="absolute contents left-[28px] top-[3321px]" data-node-id="207:34">
        <div className="absolute h-[1106px] left-[29px] top-[3322px] w-[1472px]" data-node-id="207:35">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle3} />
        </div>
        <p id="modules" className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50.656px] leading-[0] left-[85px] not-italic text-[0px] text-black top-[calc(50%+7.5px)] tracking-[-2.4px] w-[246px]" data-node-id="228:236">
          <span className="leading-[normal] text-[#f6ac04] text-[40px]">Top</span>
          <span className="leading-[normal] text-[40px]">{` `}</span>
          <span className="leading-[normal] text-[#0144ab] text-[40px]">Modules</span>
        </p>
        <p className="[word-break:break-word] absolute font-['PoetsenOne:Regular'] h-[41.929px] leading-[normal] left-[80px] not-italic text-[#0144ab] text-[32px] top-[3490px] tracking-[-0.64px] w-[774px]" data-node-id="224:22">
          The system behind a better-run workforce.
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[77.236px] leading-[0] left-[84px] not-italic text-[#0144ab] text-[56px] top-[3373.21px] tracking-[-1.12px] w-[498px]" data-node-id="207:36">
          <span className="leading-[normal] text-[#f6ac04]">HRWala</span>
          <span className="leading-[normal]">{` Software`}</span>
        </p>
        <div className="absolute h-[46.074px] left-[404.71px] top-[3813.25px] w-[54.572px]" data-node-id="224:4" data-name="charm:notes-tick" />
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[73.856px] leading-[21px] left-[84px] not-italic text-[#757575] text-[16px] text-justify top-[3538.45px] tracking-[-0.32px] w-[617px]" data-node-id="224:24">
          HRwala brings employee records, onboarding, attendance, payroll and performance into one organised platform—so every HR process has a clear place and a smoother flow.
        </p>
      </div>
      <div className="absolute contents left-[70px] top-[3900px]" data-node-id="228:235">
        <div className="absolute contents left-[78px] top-[3901px]" data-node-id="228:135">
          <div className="absolute contents hover-card-group left-[78px] top-[3901px]" style={{ transformOrigin: '238.5px 3972.6px' }} data-node-id="228:103">
            <div className="absolute bg-white h-[143.254px] left-[78px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3901px] w-[321px]" data-node-id="228:104" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.922px] leading-[normal] left-[99px] not-italic text-[13px] text-black text-justify top-[3927.11px] tracking-[-0.26px] w-[76px]" data-node-id="228:105">
              01 / Finance
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.622px] leading-[normal] left-[99px] not-italic text-[#0144ab] text-[22px] top-[3951px] tracking-[-0.44px] w-[115px]" data-node-id="228:106">
              Budgeting
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.845px] leading-[normal] left-[99px] not-italic text-[#757575] text-[13px] text-justify top-[3986px] tracking-[-0.26px] w-[263px]" data-node-id="228:107">
              Map workforce budgets, departmental allocations and planned employee costs.
            </p>
            <div className="absolute h-[3.731px] left-[171.5px] top-[3901.75px] w-[221px]" data-node-id="228:109">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[81px] top-[3901.75px] w-[89px]" data-node-id="228:110">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[421px] top-[3901px]" style={{ transformOrigin: '581.5px 3972.6px' }} data-node-id="228:111">
            <div className="absolute bg-white h-[143.254px] left-[421px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3901px] w-[321px]" data-node-id="228:112" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.922px] leading-[normal] left-[442px] not-italic text-[13px] text-black text-justify top-[3927.11px] tracking-[-0.26px] w-[71px]" data-node-id="228:113">
              02 / People
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.622px] leading-[normal] left-[442px] not-italic text-[#0144ab] text-[22px] top-[3951px] tracking-[-0.44px] w-[198px]" data-node-id="228:114">
              Talent Acquisition
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.845px] leading-[normal] left-[442px] not-italic text-[#757575] text-[13px] text-justify top-[3986px] tracking-[-0.26px] w-[263px]" data-node-id="228:115">
              Organise vacancies, candidate pipelines and hiring stages in one place.
            </p>
            <div className="absolute h-[3.731px] left-[514.5px] top-[3901.75px] w-[221px]" data-node-id="228:117">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[424px] top-[3901.75px] w-[89px]" data-node-id="228:118">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[774px] top-[3901px]" style={{ transformOrigin: '934.5px 3972.6px' }} data-node-id="228:119">
            <div className="absolute bg-white h-[143.254px] left-[774px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3901px] w-[321px]" data-node-id="228:120" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.922px] leading-[normal] left-[795px] not-italic text-[13px] text-black text-justify top-[3927.11px] tracking-[-0.26px] w-[72px]" data-node-id="228:121">
              03 / People
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.622px] leading-[normal] left-[795px] not-italic text-[#0144ab] text-[22px] top-[3951px] tracking-[-0.44px] w-[145px]" data-node-id="228:122">
              On-boarding
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[25.368px] leading-[normal] left-[795px] not-italic text-[#757575] text-[11px] text-justify top-[3986px] tracking-[-0.22px] w-[263px]" data-node-id="228:123">
              Coordinate joining tasks, documentation and an organised welcome for new employees.
            </p>
            <div className="absolute h-[3.731px] left-[867.5px] top-[3901.75px] w-[221px]" data-node-id="228:125">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[777px] top-[3901.75px] w-[89px]" data-node-id="228:126">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[1118px] top-[3901.75px]" style={{ transformOrigin: '1278.5px 3973.4px' }} data-node-id="228:127">
            <div className="absolute bg-white h-[143.254px] left-[1118px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[3901.75px] w-[321px]" data-node-id="228:128" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.922px] leading-[normal] left-[1139px] not-italic text-[13px] text-black text-justify top-[3927.86px] tracking-[-0.26px] w-[100px]" data-node-id="228:129">
              04 / Operations
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.379px] leading-[normal] left-[1139px] not-italic text-[#0144ab] text-[22px] top-[3951.98px] tracking-[-0.44px] w-[246px]" data-node-id="228:130">{`Leaves & Attendance`}</p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[26.86px] leading-[normal] left-[1139px] not-italic text-[#757575] text-[12px] text-justify top-[3986.75px] tracking-[-0.24px] w-[263px]" dir="auto" data-node-id="228:131">
              View attendance, manage leave requests and simplify approval workflows.
            </p>
            <div className="absolute h-[3.731px] left-[1211.5px] top-[3902.49px] w-[221px]" data-node-id="228:133">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[1121px] top-[3902.49px] w-[89px]" data-node-id="228:134">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[78px] top-[4071.31px]" data-node-id="228:136">
          <div className="absolute contents hover-card-group left-[78px] top-[4071.31px]" style={{ transformOrigin: '238.5px 4142.9px' }} data-node-id="228:137">
            <div className="absolute bg-white h-[143.254px] left-[78px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4071.31px] w-[321px]" data-node-id="228:138" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.538px] leading-[normal] left-[99px] not-italic text-[13px] text-black text-justify top-[4097.55px] tracking-[-0.26px] w-[84px]" data-node-id="228:139">
              05 / Finance
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.622px] leading-[normal] left-[99px] not-italic text-[#0144ab] text-[22px] top-[4118.14px] tracking-[-0.44px] w-[77px]" data-node-id="228:140">
              Payroll
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.845px] leading-[normal] left-[99px] not-italic text-[#757575] text-[13px] text-justify top-[4158px] tracking-[-0.26px] w-[263px]" data-node-id="228:141">
              Prepare payroll inputs, salary components and payslip workflows.
            </p>
            <div className="absolute h-[3.731px] left-[171.5px] top-[4072.05px] w-[221px]" data-node-id="228:143">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[81px] top-[4072.05px] w-[89px]" data-node-id="228:144">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[421px] top-[4071.31px]" style={{ transformOrigin: '581.5px 4142.9px' }} data-node-id="228:145">
            <div className="absolute bg-white h-[143.254px] left-[421px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4071.31px] w-[321px]" data-node-id="228:146" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.538px] leading-[normal] left-[442px] not-italic text-[13px] text-black text-justify top-[4097.55px] tracking-[-0.26px] w-[80px]" data-node-id="228:147">
              06 / People
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[20.524px] leading-[normal] left-[442px] not-italic text-[#0144ab] text-[22px] top-[4118px] tracking-[-0.44px] w-[248px]" data-node-id="228:148">
              Employee Dashboard
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[25.368px] leading-[normal] left-[442px] not-italic text-[#757575] text-[11px] text-justify top-[4158px] tracking-[-0.22px] w-[263px]" data-node-id="228:149">
              Give employees a clear view of their information, requests and everyday HR tasks.
            </p>
            <div className="absolute h-[3.731px] left-[514.5px] top-[4072.05px] w-[221px]" data-node-id="228:151">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[424px] top-[4072.05px] w-[89px]" data-node-id="228:152">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[771px] top-[4072.05px]" style={{ transformOrigin: '931.5px 4143.7px' }} data-node-id="228:153">
            <div className="absolute bg-white h-[143.254px] left-[771px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4072.05px] w-[321px]" data-node-id="228:154" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.922px] leading-[normal] left-[792px] not-italic text-[13px] text-black text-justify top-[4098.17px] tracking-[-0.26px] w-[99px]" data-node-id="228:155">
              07 / Operations
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.622px] leading-[normal] left-[792px] not-italic text-[#0144ab] text-[22px] top-[4118.89px] tracking-[-0.44px] w-[122px]" data-node-id="228:156">
              Separation
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[26.86px] leading-[normal] left-[792px] not-italic text-[#757575] text-[12px] text-justify top-[4158.75px] tracking-[-0.24px] w-[263px]" data-node-id="228:157">
              Coordinate exit requests, clearance activities and off-boarding documentation.
            </p>
            <div className="absolute h-[3.731px] left-[864.5px] top-[4072.8px] w-[221px]" data-node-id="228:159">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[774px] top-[4072.8px] w-[89px]" data-node-id="228:160">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[1118px] top-[4072.05px]" style={{ transformOrigin: '1278.5px 4143.7px' }} data-node-id="228:161">
            <div className="absolute bg-white h-[143.254px] left-[1118px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4072.05px] w-[321px]" data-node-id="228:162" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.922px] leading-[normal] left-[1139px] not-italic text-[13px] text-black text-justify top-[4098.17px] tracking-[-0.26px] w-[79px]" data-node-id="228:163">
              08 / Finance
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.622px] leading-[normal] left-[1139px] not-italic text-[#0144ab] text-[22px] top-[4118.89px] tracking-[-0.44px] w-[202px]" data-node-id="228:164">
              Employee Benefits
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.845px] leading-[normal] left-[1139px] not-italic text-[#757575] text-[13px] text-justify top-[4158.75px] tracking-[-0.26px] w-[263px]" dir="auto" data-node-id="228:165">
              Organise benefit records and employee entitlements with a consistent process.
            </p>
            <div className="absolute h-[3.731px] left-[1211.5px] top-[4072.8px] w-[221px]" data-node-id="228:167">
              <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <div className="absolute flex h-[5.896px] items-center justify-center left-[1121px] top-[4072.8px] w-[89px]" data-node-id="228:168">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.896px] relative w-[89px]">
                  <div className="absolute inset-[-25.44%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[71px] top-[4242px]" data-node-id="228:202">
          <div className="absolute contents hover-card-group left-[71px] top-[4242px]" style={{ transformOrigin: '231.5px 4314px' }} data-node-id="228:203">
            <div className="absolute bg-white h-[144px] left-[71px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4242px] w-[321px]" data-node-id="228:204" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[15.201px] leading-[normal] left-[92px] not-italic text-[13px] text-black text-justify top-[4267.66px] tracking-[-0.26px] w-[84px]" data-node-id="228:205">
              09 / Growth
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.491px] leading-[normal] left-[92px] not-italic text-[#0144ab] text-[22px] top-[4289px] tracking-[-0.44px] w-[263px]" data-node-id="228:206">
              360 degre Performance
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[26.526px] leading-[normal] left-[92px] not-italic text-[#757575] text-[12px] text-justify top-[4327px] tracking-[-0.24px] w-[263px]" data-node-id="228:207">
              Structure goals and feedback from multiple perspectives to support development.
            </p>
            <div className="absolute h-[3.684px] left-[164.5px] top-[4242.74px] w-[221px]" data-node-id="228:209">
              <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
            <div className="absolute flex h-[5.823px] items-center justify-center left-[74px] top-[4242.74px] w-[89px]" data-node-id="228:210">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.823px] relative w-[89px]">
                  <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[414px] top-[4242px]" style={{ transformOrigin: '574.5px 4312.7px' }} data-node-id="228:211">
            <div className="absolute bg-white h-[141.47px] left-[414px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4242px] w-[321px]" data-node-id="228:212" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.737px] leading-[normal] left-[435px] not-italic text-[13px] text-black text-justify top-[4267.79px] tracking-[-0.26px] w-[99px]" data-node-id="228:213">
              10 / Operations
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.315px] leading-[normal] left-[435px] not-italic text-[#0144ab] text-[22px] top-[4289.4px] tracking-[-0.44px] w-[169px]" data-node-id="228:214">
              HR Dashboards
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.473px] leading-[normal] left-[435px] not-italic text-[#757575] text-[13px] text-justify top-[4327px] tracking-[-0.26px] w-[263px]" data-node-id="228:215">
              Bring key workforce information together for clearer HR reporting.
            </p>
            <div className="absolute h-[3.684px] left-[507.5px] top-[4242.74px] w-[221px]" data-node-id="228:217">
              <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
            <div className="absolute flex h-[5.823px] items-center justify-center left-[417px] top-[4242.74px] w-[89px]" data-node-id="228:218">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.823px] relative w-[89px]">
                  <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[764px] top-[4242.74px]" style={{ transformOrigin: '924.5px 4313.5px' }} data-node-id="228:219">
            <div className="absolute bg-white h-[141.47px] left-[764px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4242.74px] w-[321px]" data-node-id="228:220" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.737px] leading-[normal] left-[785px] not-italic text-[13px] text-black text-justify top-[4268.53px] tracking-[-0.26px] w-[75px]" data-node-id="228:221">
              11 / Growth
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.315px] leading-[normal] left-[785px] not-italic text-[#0144ab] text-[22px] top-[4290.13px] tracking-[-0.44px] w-[121px]" data-node-id="228:222">
              E-Learning
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.473px] leading-[normal] left-[785px] not-italic text-[#757575] text-[13px] text-justify top-[4327.74px] tracking-[-0.26px] w-[263px]" data-node-id="228:223">
              Organise learning resources and track employee development activities.
            </p>
            <div className="absolute h-[3.684px] left-[857.5px] top-[4243.47px] w-[221px]" data-node-id="228:225">
              <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
            <div className="absolute flex h-[5.823px] items-center justify-center left-[767px] top-[4243.47px] w-[89px]" data-node-id="228:226">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.823px] relative w-[89px]">
                  <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents hover-card-group left-[1111px] top-[4242.74px]" style={{ transformOrigin: '1271.5px 4313.5px' }} data-node-id="228:227">
            <div className="absolute bg-white h-[141.47px] left-[1111px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[4242.74px] w-[321px]" data-node-id="228:228" />
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.737px] leading-[normal] left-[1132px] not-italic text-[13px] text-black text-justify top-[4268.53px] tracking-[-0.26px] w-[100px]" data-node-id="228:229">
              12 / Operations
            </p>
            <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[24.315px] leading-[normal] left-[1132px] not-italic text-[#0144ab] text-[22px] top-[4290.13px] tracking-[-0.44px] w-[216px]" data-node-id="228:230">{`Discipline & Policies`}</p>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[29.473px] leading-[normal] left-[1132px] not-italic text-[#757575] text-[13px] text-justify top-[4327.74px] tracking-[-0.26px] w-[263px]" dir="auto" data-node-id="228:231">
              Maintain policy resources and structured records for disciplinary processes.
            </p>
            <div className="absolute h-[3.684px] left-[1204.5px] top-[4243.47px] w-[221px]" data-node-id="228:233">
              <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
            <div className="absolute flex h-[5.823px] items-center justify-center left-[1114px] top-[4243.47px] w-[89px]" data-node-id="228:234">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[5.823px] relative w-[89px]">
                  <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgLine15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[79px] top-[3719px]" data-node-id="228:27">
        <div className="absolute bg-[#0144ab] h-[48px] left-[80px] rounded-[8px] top-[3720px] w-[205.714px]" data-node-id="228:28" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[29.726px] justify-center leading-[0] left-[calc(50%-582.14px)] not-italic text-[16px] text-center text-white top-[calc(50%-63.64px)] tracking-[-0.32px] w-[205.714px]" data-node-id="228:29">
          <p className="leading-[normal]">Explore the Platform</p>
        </div>
      </div>
      <div className="absolute contents left-[758px] top-[3362px]" data-node-id="239:245">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[38.874px] leading-[normal] left-[859.59px] not-italic text-[#1d59b5] text-[16px] top-[3402.16px] tracking-[-0.96px] w-[180.388px]" data-node-id="207:50">{`Leaves & Attendance`}</p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[43.193px] leading-[normal] left-[1324.41px] not-italic text-[#9669d9] text-[16px] top-[3402.18px] tracking-[-0.96px] w-[150.323px]" data-node-id="207:51">
          On-boarding
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[43.193px] leading-[normal] left-[839.47px] not-italic text-[#9669d9] text-[16px] top-[3731.47px] tracking-[-0.96px] w-[163.685px]" data-node-id="207:52">
          360° Performance
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[43.193px] leading-[normal] left-[1337.12px] not-italic text-[#9669d9] text-[16px] top-[3731.47px] tracking-[-0.96px] w-[163.685px]" data-node-id="239:243">
          Talent Acquisition
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[38.874px] leading-[normal] left-[759px] not-italic text-[#5194d8] text-[16px] top-[3559.94px] tracking-[-0.96px] w-[187.069px]" data-node-id="207:53">
          Employee Dashboard
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[39.176px] leading-[normal] left-[1399.59px] not-italic text-[#5194d8] text-[16px] top-[3559.94px] tracking-[-0.96px] w-[73.059px]" data-node-id="239:241">
          Payroll
        </p>
        <div className="absolute h-[432px] left-[889.24px] top-[3363px] w-[570.984px]" data-node-id="239:239" data-name="Luminous woman within blue ring-2x 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLuminousWomanWithinBlueRing2X1} />
        </div>
      </div>
      <div className="absolute contents left-[76px] top-[3382px]" data-node-id="224:18">
        <div className="absolute h-[528px] left-[77px] top-[3383px] w-[520px]" data-node-id="201:10" data-name="Royal blue HR dashboard presenter 1" />
      </div>
      <div className="absolute h-[61px] left-[77px] top-[3617px] w-[425px]" data-node-id="224:21">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup46} />
      </div>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[92px] not-italic text-[#f6ac04] text-[18px] top-[3677px] tracking-[-1.08px] whitespace-nowrap" data-node-id="239:246">
        Hire
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[157px] not-italic text-[#f6ac04] text-[18px] top-[3676px] tracking-[-1.08px] whitespace-nowrap" dir="auto" data-node-id="239:247">
        On-board
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[259px] not-italic text-[#f6ac04] text-[18px] top-[3676px] tracking-[-1.08px] whitespace-nowrap" data-node-id="239:248">
        Manage
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[364px] not-italic text-[#f6ac04] text-[18px] top-[3676px] tracking-[-1.08px] whitespace-nowrap" data-node-id="239:249">
        Pay
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[448px] not-italic text-[#f6ac04] text-[18px] top-[3679px] tracking-[-1.08px] whitespace-nowrap" data-node-id="239:250">
        Grow
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[54px] leading-[0] left-[79px] not-italic text-[0px] text-black top-[calc(50%+661.5px)] tracking-[-2.4px] w-[321px]" data-node-id="242:251">
        <span className="leading-[normal] text-[#f6ac04] text-[40px]">Future</span>
        <span className="leading-[normal] text-[40px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[40px]">Academy</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[54px] leading-[0] left-[78px] not-italic text-[0px] text-black top-[calc(50%+1670.5px)] tracking-[-2.4px] w-[371px]" data-node-id="260:32">
        <span className="leading-[normal] text-[#f6ac04] text-[40px]">HRWala</span>
        <span className="leading-[normal] text-[40px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[40px]">Team</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[54px] leading-[0] left-[78px] not-italic text-[0px] text-black top-[calc(50%+2657.5px)] tracking-[-2.4px] w-[371px]" data-node-id="274:62">
        <span className="leading-[normal] text-[#f6ac04] text-[40px]">Featured</span>
        <span className="leading-[normal] text-[40px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[40px]">Partners</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[54px] leading-[0] left-[78px] not-italic text-[0px] text-black top-[calc(50%+2937.5px)] tracking-[-2.4px] w-[371px]" dir="auto" data-node-id="274:203">
        <span className="leading-[normal] text-[#f6ac04] text-[40px]">Got a</span>
        <span className="leading-[normal] text-[40px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[40px]">Question?</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[48px] leading-[40px] left-[78px] not-italic text-[#0144ab] text-[40px] top-[calc(50%+3014.5px)] tracking-[-2.4px] w-[590px]" dir="auto" data-node-id="274:206">{`Let's Connect & Move Forward`}</p>
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[48px] leading-[40px] left-[78px] not-italic text-[#0144ab] text-[25px] top-[calc(50%+3220.5px)] tracking-[-1.5px] w-[336px]" dir="auto" data-node-id="289:47">
        Frequently Asked Questions
      </p>
      <div className="absolute contents left-[77px] top-[4542px]" data-node-id="247:337">
        <div className="absolute contents left-[86px] top-[4543px]" data-node-id="247:299">
          <div className="[word-break:break-word] absolute contents font-['Poppins:Bold'] left-[86px] not-italic top-[4543px]" data-node-id="247:296">
            <div className="-translate-y-1/2 absolute flex flex-col h-[71px] justify-center leading-[0] left-[86px] opacity-10 text-[#0144ab] text-[66px] text-justify top-[4578.5px] tracking-[-1.32px] w-[78px]" data-node-id="245:284">
              <p className="leading-[normal]">01</p>
            </div>
            <p className="absolute h-[45px] leading-[normal] left-[104px] text-[#f6ac04] text-[27px] top-[calc(50%+749.5px)] tracking-[-1.62px] w-[189px]" data-node-id="245:286">
              Get Certified
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[128px] leading-[21px] left-[78px] not-italic text-[#757575] text-[16px] text-justify top-[4614px] tracking-[-0.32px] w-[376px]" data-node-id="247:335">
          Earn respected HR credentials that validate your knowledge and strengthen your professional profile. Learn practical, in-demand skills from experienced practitioners and build the confidence to take the next step in your HR career.
        </p>
      </div>
      <div className="absolute contents left-[584px] top-[4542px]" data-node-id="247:338">
        <div className="absolute contents left-[593px] top-[4543px]" data-node-id="247:339">
          <div className="[word-break:break-word] absolute contents font-['Poppins:Bold'] left-[593px] not-italic top-[4543px]" data-node-id="247:340">
            <div className="-translate-y-1/2 absolute flex flex-col h-[71px] justify-center leading-[0] left-[593px] opacity-10 text-[#0144ab] text-[66px] text-justify top-[4578.5px] tracking-[-1.32px] w-[89px]" data-node-id="247:341">
              <p className="leading-[normal]">02</p>
            </div>
            <p className="absolute h-[45px] leading-[normal] left-[618px] text-[#f6ac04] text-[27px] top-[calc(50%+749.5px)] tracking-[-1.62px] w-[189px]" dir="auto" data-node-id="247:342">
              Get Noticed
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[128px] leading-[21px] left-[585px] not-italic text-[#757575] text-[16px] text-justify top-[4608px] tracking-[-0.32px] w-[351px]" data-node-id="247:343">
          Earn professional badges that highlight your verified HR skills and make your achievements easy for employers to recognise. Add them to your profile to build credibility and stand out in a competitive job market.
        </p>
      </div>
      <div className="absolute contents left-[1108px] top-[4542px]" data-node-id="247:344">
        <div className="absolute contents left-[1116px] top-[4543px]" data-node-id="247:345">
          <div className="[word-break:break-word] absolute contents font-['Poppins:Bold'] left-[1116px] not-italic top-[4543px]" data-node-id="247:346">
            <div className="-translate-y-1/2 absolute flex flex-col h-[71px] justify-center leading-[0] left-[1116px] opacity-10 text-[#0144ab] text-[66px] text-justify top-[4578.5px] tracking-[-1.32px] w-[91px]" data-node-id="247:347">
              <p className="leading-[normal]">03</p>
            </div>
            <p className="absolute h-[45px] leading-[normal] left-[1146px] text-[#f6ac04] text-[27px] top-[calc(50%+749.5px)] tracking-[-1.62px] w-[189px]" data-node-id="247:348">
              Get Hired
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[128px] leading-[21px] left-[1109px] not-italic text-[#757575] text-[16px] text-justify top-[4608px] tracking-[-0.32px] w-[324px]" data-node-id="247:349">
          Put your HR skills and credentials to work when pursuing your next opportunity. Build the practical knowledge employers value, demonstrate your readiness, and take a confident step toward the role you want.
        </p>
      </div>
      <p id="certifications" className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[45px] leading-[normal] left-[73px] not-italic text-[#f6ac04] text-[27px] top-[calc(50%+965.5px)] tracking-[-1.62px] w-[333px]" dir="auto" data-node-id="247:356">
        Professional Certification
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[45px] leading-[normal] left-[78px] not-italic text-[#f6ac04] text-[27px] top-[calc(50%+1352.5px)] tracking-[-1.62px] w-[333px]" dir="auto" data-node-id="256:2">
        Professional Badges
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[45px] justify-center leading-[0] left-[228px] not-italic text-[#0144ab] text-[21px] text-center top-[calc(50%+1278px)] tracking-[-1.26px] w-[326px]" data-node-id="250:359">
        <p className="leading-[normal]" dir="auto">
          Certified HR Professional
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[45px] justify-center leading-[0] left-[221px] not-italic text-[#0144ab] text-[21px] text-center top-[calc(50%+1566px)] tracking-[-1.26px] w-[326px]" data-node-id="257:5">
        <p className="leading-[normal]" dir="auto">
          Ready to Serve
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[45px] justify-center leading-[0] left-[747px] not-italic text-[#0144ab] text-[21px] text-center top-[calc(50%+1573px)] tracking-[-1.26px] w-[326px]" data-node-id="258:7">
        <p className="leading-[normal]" dir="auto">
          Skilled Professional
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[45px] justify-center leading-[0] left-[1256px] not-italic text-[#0144ab] text-[21px] text-center top-[calc(50%+1573px)] tracking-[-1.26px] w-[326px]" data-node-id="258:9">
        <p className="leading-[normal]" dir="auto">
          Featured Associate
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[45px] justify-center leading-[0] left-[747px] not-italic text-[#0144ab] text-[21px] text-center top-[calc(50%+1278px)] tracking-[-1.26px] w-[326px]" data-node-id="253:362">
        <p className="leading-[normal]" dir="auto">
          Certified HR Business Partner
        </p>
      </div>
      <div className="absolute h-[225px] left-[1095px] top-[4837px] w-[337px]" data-node-id="254:368" data-name="Learning & Development Professional Certificate 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLearningDevelopmentProfessionalCertificate1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[45px] justify-center leading-[0] left-[1266px] not-italic text-[#0144ab] text-[21px] text-center top-[calc(50%+1294px)] tracking-[-1.26px] w-[326px]" data-node-id="254:366">
        <p className="leading-[normal]" dir="auto">{`Certified Learning & Development Professional`}</p>
      </div>
      <div className="absolute h-[225px] left-[69px] top-[4837px] w-[337px]" data-node-id="253:361" data-name="Updated certificate with HRWala.net seal 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUpdatedCertificateWithHrWalaNetSeal1} />
      </div>
      <div className="absolute h-[225px] left-[580px] top-[4837px] w-[337px]" data-node-id="254:365" data-name="Certified HR business partner certificate 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCertifiedHrBusinessPartnerCertificate1} />
      </div>
      <div className="absolute h-[169px] left-[73px] top-[5204px] w-[338px]" data-node-id="257:3" data-name="HRWala Ready to Serve Credential Badge (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHrWalaReadyToServeCredentialBadge11} />
      </div>
      <div className="absolute h-[168px] left-[584px] top-[5209px] w-[336px]" data-node-id="258:6" data-name="HRWala skilled professional badge 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHrWalaSkilledProfessionalBadge1} />
      </div>
      <div className="absolute h-[168px] left-[1093px] top-[5209px] w-[336px]" data-node-id="258:8" data-name="HRWala.net Featured Associate Badge 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHrWalaNetFeaturedAssociateBadge1} />
      </div>
      <div className="absolute contents team-card-group left-[153px] top-[5583px]" data-node-id="263:42">
        <div className="absolute bg-white h-[331px] left-[154px] rounded-[18px] top-[5584px] w-[211px]" data-node-id="262:37" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[256.5px] not-italic text-[21px] text-black text-center top-[5781px] tracking-[-1.26px] whitespace-nowrap" data-node-id="262:39">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[230px] not-italic text-[#757575] text-[13px] text-center top-[5807px] tracking-[-0.78px] whitespace-nowrap" data-node-id="262:40">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={0} className="absolute bg-[#d9d9d9] h-[146px] left-[256px] rounded-[18px] top-[5604px] w-[194px]" nodeId="262:38" />
      </div>
      <div className="absolute contents team-card-group left-[153px] top-[6014px]" data-node-id="274:17">
        <div className="absolute bg-white h-[331px] left-[154px] rounded-[18px] top-[6015px] w-[211px]" data-node-id="274:18" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[256.5px] not-italic text-[21px] text-black text-center top-[6212px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:19">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[230px] not-italic text-[#757575] text-[13px] text-center top-[6238px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:20">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={1} className="absolute bg-[#d9d9d9] h-[146px] left-[256px] rounded-[18px] top-[6035px] w-[194px]" nodeId="274:21" />
      </div>
      <div className="absolute contents team-card-group left-[468px] top-[5583px]" data-node-id="274:2">
        <div className="absolute bg-white h-[331px] left-[469px] rounded-[18px] top-[5584px] w-[211px]" data-node-id="274:3" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[571.5px] not-italic text-[21px] text-black text-center top-[5781px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:4">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[545px] not-italic text-[#757575] text-[13px] text-center top-[5807px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:5">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={2} className="absolute bg-[#d9d9d9] h-[146px] left-[571px] rounded-[18px] top-[5604px] w-[194px]" nodeId="274:6" />
      </div>
      <div className="absolute contents team-card-group left-[468px] top-[6014px]" data-node-id="274:22">
        <div className="absolute bg-white h-[331px] left-[469px] rounded-[18px] top-[6015px] w-[211px]" data-node-id="274:23" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[571.5px] not-italic text-[21px] text-black text-center top-[6212px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:24">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[545px] not-italic text-[#757575] text-[13px] text-center top-[6238px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:25">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={3} className="absolute bg-[#d9d9d9] h-[146px] left-[571px] rounded-[18px] top-[6035px] w-[194px]" nodeId="274:26" />
      </div>
      <div className="absolute contents team-card-group left-[783px] top-[5583px]" data-node-id="274:7">
        <div className="absolute bg-white h-[331px] left-[784px] rounded-[18px] top-[5584px] w-[211px]" data-node-id="274:8" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[886.5px] not-italic text-[21px] text-black text-center top-[5781px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:9">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[860px] not-italic text-[#757575] text-[13px] text-center top-[5807px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:10">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={4} className="absolute bg-[#d9d9d9] h-[146px] left-[886px] rounded-[18px] top-[5604px] w-[194px]" nodeId="274:11" />
      </div>
      <div className="absolute contents team-card-group left-[783px] top-[6014px]" data-node-id="274:27">
        <div className="absolute bg-white h-[331px] left-[784px] rounded-[18px] top-[6015px] w-[211px]" data-node-id="274:28" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[886.5px] not-italic text-[21px] text-black text-center top-[6212px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:29">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[860px] not-italic text-[#757575] text-[13px] text-center top-[6238px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:30">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={5} className="absolute bg-[#d9d9d9] h-[146px] left-[886px] rounded-[18px] top-[6035px] w-[194px]" nodeId="274:31" />
      </div>
      <div className="absolute contents team-card-group left-[1098px] top-[5583px]" data-node-id="274:12">
        <div className="absolute bg-white h-[331px] left-[1099px] rounded-[18px] top-[5584px] w-[211px]" data-node-id="274:13" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[1201.5px] not-italic text-[21px] text-black text-center top-[5781px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:14">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[1175px] not-italic text-[#757575] text-[13px] text-center top-[5807px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:15">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={6} className="absolute bg-[#d9d9d9] h-[146px] left-[1201px] rounded-[18px] top-[5604px] w-[194px]" nodeId="274:16" />
      </div>
      <div className="absolute contents team-card-group left-[1098px] top-[6014px]" data-node-id="274:32">
        <div className="absolute bg-white h-[331px] left-[1099px] rounded-[18px] top-[6015px] w-[211px]" data-node-id="274:33" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[1201.5px] not-italic text-[21px] text-black text-center top-[6212px] tracking-[-1.26px] whitespace-nowrap" data-node-id="274:34">
          <p className="leading-[normal]">Farrukh Sohail</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[1175px] not-italic text-[#757575] text-[13px] text-center top-[6238px] tracking-[-0.78px] whitespace-nowrap" data-node-id="274:35">
          <p className="leading-[normal]">{`Founder & CEO`}</p>
        </div>
        <TeamPhoto index={7} className="absolute bg-[#d9d9d9] h-[146px] left-[1201px] rounded-[18px] top-[6035px] w-[194px]" nodeId="274:36" />
      </div>
      <div className="absolute h-0 left-[179px] top-[5643px] w-[60px]" data-node-id="274:37">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[185px] top-[5664px] w-[60px]" data-node-id="274:38">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[185px] top-[6090px] w-[60px]" data-node-id="274:50">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[500px] top-[6090px] w-[60px]" data-node-id="274:53">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[6090px] w-[60px]" data-node-id="274:56">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[1130px] top-[6090px] w-[60px]" data-node-id="274:59">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[500px] top-[5664px] w-[60px]" data-node-id="274:41">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[5664px] w-[60px]" data-node-id="274:44">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine21} />
        </div>
      </div>
      <div className="absolute h-0 left-[1130px] top-[5664px] w-[60px]" data-node-id="274:47">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[185px] top-[5682px] w-[60px]" data-node-id="274:39">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[185px] top-[6108px] w-[60px]" data-node-id="274:51">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[500px] top-[6108px] w-[60px]" data-node-id="274:54">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[6108px] w-[60px]" data-node-id="274:57">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[1130px] top-[6108px] w-[60px]" data-node-id="274:60">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[500px] top-[5682px] w-[60px]" data-node-id="274:42">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[5682px] w-[60px]" data-node-id="274:45">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine21} />
        </div>
      </div>
      <div className="absolute h-0 left-[1130px] top-[5682px] w-[60px]" data-node-id="274:48">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[185px] top-[5698px] w-[60px]" data-node-id="274:40">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[185px] top-[6124px] w-[60px]" data-node-id="274:52">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[500px] top-[6124px] w-[60px]" data-node-id="274:55">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[6124px] w-[60px]" data-node-id="274:58">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[1130px] top-[6124px] w-[60px]" data-node-id="274:61">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[500px] top-[5698px] w-[60px]" data-node-id="274:43">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[5698px] w-[60px]" data-node-id="274:46">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine21} />
        </div>
      </div>
      <div className="absolute h-0 left-[1130px] top-[5698px] w-[60px]" data-node-id="274:49">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine17} />
        </div>
      </div>
      <div className="partner-marquee-window">
        <div className="partner-marquee-track">
      <div className="absolute flex h-[87px] items-center justify-center left-[22px] top-[6557px] w-[22px]" data-node-id="274:197">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#d9d9d9] h-[87px] opacity-39 relative rounded-[18px] w-[22px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[15px] top-[6595px]" data-node-id="274:198">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[15px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse27} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[26px] size-[15px] top-[6595px]" data-node-id="274:199">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[15px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse28} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[34px] top-[6603px] w-[96px]" data-node-id="274:200">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-0 relative w-[96px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine44} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[103px] rounded-[18px] top-[6557px] w-[186px]" data-node-id="274:158" />
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[369px] rounded-[18px] top-[6557px] w-[186px]" data-node-id="274:161" />
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[635px] rounded-[18px] top-[6557px] w-[186px]" data-node-id="274:177" />
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[901px] rounded-[18px] top-[6557px] w-[186px]" data-node-id="274:181" />
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[1167px] rounded-[18px] top-[6557px] w-[186px]" data-node-id="274:185" />
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[1433px] rounded-[18px] top-[6557px] w-[186px]" data-node-id="274:189" />
      <div className="absolute left-[271px] size-[15px] top-[6595px]" data-node-id="274:166">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[537px] size-[15px] top-[6595px]" data-node-id="274:178">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[803px] size-[15px] top-[6595px]" data-node-id="274:182">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[1069px] size-[15px] top-[6595px]" data-node-id="274:186">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[1335px] size-[15px] top-[6595px]" data-node-id="274:190">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[372px] size-[15px] top-[6595px]" data-node-id="274:167">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[638px] size-[15px] top-[6595px]" data-node-id="274:179">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[904px] size-[15px] top-[6595px]" data-node-id="274:183">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[1170px] size-[15px] top-[6595px]" data-node-id="274:187">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[1436px] size-[15px] top-[6595px]" data-node-id="274:191">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse26} />
      </div>
      <div className="absolute h-0 left-[283px] top-[6603px] w-[96px]" data-node-id="274:165">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine39} />
        </div>
      </div>
      <div className="absolute h-0 left-[549px] top-[6603px] w-[96px]" data-node-id="274:180">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine39} />
        </div>
      </div>
      <div className="absolute h-0 left-[815px] top-[6603px] w-[96px]" data-node-id="274:184">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine39} />
        </div>
      </div>
      <div className="absolute h-0 left-[1081px] top-[6603px] w-[96px]" data-node-id="274:188">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine39} />
        </div>
      </div>
      <div className="absolute h-0 left-[1347px] top-[6603px] w-[96px]" data-node-id="274:192">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine43} />
        </div>
      </div>
      <div className="absolute left-[1601px] size-[15px] top-[6595px]" aria-hidden="true"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} /></div>
      <div className="absolute h-0 left-[1613px] top-[6603px] w-[96px]" aria-hidden="true"><div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine39} /></div></div>
      <div className="absolute left-[1702px] size-[15px] top-[6595px]" aria-hidden="true"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} /></div>
      <div className="absolute bg-[#d9d9d9] h-[87px] left-[1699px] rounded-[18px] top-[6557px] w-[186px]" aria-hidden="true" />
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[118px] leading-[0] left-[78px] not-italic text-[#757575] text-[16px] text-justify top-[6877px] tracking-[-0.32px] w-[540px] whitespace-pre-wrap" data-node-id="278:3">
        <p className="leading-[21px] mb-0">{`Whether you're exploring career opportunities, looking for the right talent, or interested in our HR solutions, we're here to assist you.`}</p>
        <p className="leading-[21px] mb-0">​</p>
        <p className="leading-[21px]">Connect with HRWala.net and let our team guide you toward the right solution.</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[28px] leading-[21px] left-[78px] not-italic text-[#f6ac04] text-[16px] text-justify top-[7005px] tracking-[-0.32px] w-[229px]" data-node-id="289:46">
        NEED MORE INFORMATION?
      </p>
      <div className="absolute contents left-[829px] top-[6741px]" data-node-id="289:45">
        <div className="absolute bg-[#0144ab] h-[560px] left-[830px] rounded-[18px] shadow-[1px_2px_6px_2px_rgba(146,144,144,0.25)] top-[6742px] w-[513px]" data-node-id="278:5" />
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[30px] leading-[21px] left-[857px] not-italic text-[#eaeaea] text-[16px] text-justify top-[6807px] tracking-[-0.32px] w-[241px]" data-node-id="285:23">
          Tell us how we can assist you.
        </p>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:ExtraBold'] h-[41px] justify-center leading-[0] left-[857px] not-italic text-[20px] text-white top-[calc(50%+2983px)] tracking-[-1.2px] w-[447px]" data-node-id="278:9">
          <p className="leading-[normal] [word-spacing:1px]" dir="auto">
            Get in Touch
          </p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[887px] not-italic text-[13px] text-center text-white top-[6853px] tracking-[-0.78px] whitespace-nowrap" data-node-id="278:10">
          <p className="leading-[normal]">Full Name</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[874px] not-italic text-[13px] text-center text-white top-[6929px] tracking-[-0.78px] whitespace-nowrap" data-node-id="289:25">
          <p className="leading-[normal]">Email</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[899.5px] not-italic text-[13px] text-center text-white top-[7087px] tracking-[-0.78px] whitespace-nowrap" data-node-id="289:37">
          <p className="leading-[normal]">Your Message</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[913px] not-italic text-[13px] text-center text-white top-[7006px] tracking-[-0.78px] whitespace-nowrap" data-node-id="289:31">
          <p className="leading-[normal]">How Can We Help?</p>
        </div>
        <div className="absolute bg-[rgba(154,183,228,0.43)] h-[39px] left-[850px] rounded-[18px] top-[6869px] w-[473px]" data-node-id="278:12" />
        <div className="absolute bg-[#4376c3] h-[39px] left-[850px] rounded-[18px] top-[6945px] w-[473px]" data-node-id="289:26" />
        <div className="absolute bg-[#f6ac04] h-[39px] left-[850px] rounded-[18px] top-[7233px] w-[473px]" data-node-id="289:40" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[1073px] not-italic text-[13px] text-center text-white top-[7253px] tracking-[-0.78px] whitespace-nowrap" data-node-id="289:42">
          <p className="leading-[normal]">Submit</p>
        </div>
        <div className="absolute bg-[#4376c3] h-[114px] left-[850px] rounded-[18px] top-[7103px] w-[473px]" data-node-id="289:38" />
        <div className="absolute bg-[#4376c3] h-[39px] left-[850px] rounded-[18px] top-[7022px] w-[473px]" data-node-id="289:32" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[870px] not-italic text-[13px] text-white top-[6889px] tracking-[-0.78px] w-[186px]" data-node-id="283:15">
          <p className="leading-[normal]">Enter your name</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[870px] not-italic text-[13px] text-white top-[6965px] tracking-[-0.78px] w-[186px]" data-node-id="289:27">
          <p className="leading-[normal]" dir="auto">
            example@gmail.com
          </p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[870px] not-italic text-[13px] text-white top-[7123px] tracking-[-0.78px] w-[186px]" data-node-id="289:39">
          <p className="leading-[normal]" dir="auto">
            Tell us more about your inquiry...
          </p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[870px] not-italic text-[13px] text-white top-[7042px] tracking-[-0.78px] w-[186px]" data-node-id="289:33">
          <p className="leading-[normal]" dir="auto">
            General Inquiry
          </p>
        </div>
        <div className="absolute h-[5.5px] left-[1285px] top-[7041px] w-[10px]" data-node-id="289:34">
          <div className="absolute inset-[-6.12%_-3.7%_-13.51%_-3.7%]">
            <img alt="" className="block max-w-none size-full" src={imgLine45} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[71px] top-[7075px]" data-node-id="289:54">
        <div className="absolute bg-white h-[74px] left-[72px] rounded-[8px] top-[7077px] w-[458px]" data-node-id="289:48" />
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[40px] left-[89.13px] not-italic text-[16px] text-black top-[7076px] tracking-[-0.96px] w-[333.506px]" data-node-id="289:50">
          How can HRWala.net help me find a job?
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[35px] leading-[17px] left-[89.13px] not-italic text-[#757575] text-[11px] text-justify top-[7109px] tracking-[-0.22px] w-[405.461px]" data-node-id="289:51">
          Explore job opportunities and connect with potential employers through our job portal.
        </p>
        <div className="absolute h-0 left-[501.45px] top-[7096px] w-[11.421px]" data-node-id="289:53">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine46} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[71px] top-[7154px]" data-node-id="289:64">
        <div className="absolute contents left-[72px] top-[7155px]" data-node-id="289:55">
          <div className="absolute bg-white h-[40.453px] left-[72px] rounded-[8px] top-[7155.55px] w-[401px]" data-node-id="289:56" />
          <div className="absolute flex h-[10px] items-center justify-center left-[453px] top-[7171px] w-0" data-node-id="289:61">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10px]">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine47} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[21.867px] leading-[40px] left-[87px] not-italic text-[16px] text-black top-[7155px] tracking-[-0.96px] w-[292px]" data-node-id="289:57">
            How can HRWala.net help me find a job?
          </p>
          <div className="absolute h-0 left-[448px] top-[7176.43px] w-[10px]" data-node-id="289:59">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine48} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[71px] top-[7154px]" data-node-id="289:65">
        <div className="absolute contents left-[72px] top-[7155px]" data-node-id="289:66">
          <div className="absolute bg-white h-[40.453px] left-[72px] rounded-[8px] top-[7155.55px] w-[458px]" data-node-id="289:67" />
          <div className="absolute flex h-[10px] items-center justify-center left-[507.16px] top-[7171px] w-0" data-node-id="289:68">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10px]">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine49} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[22px] leading-[40px] left-[89.13px] not-italic text-[16px] text-black top-[7155px] tracking-[-0.96px] w-[399.751px]" data-node-id="289:69">
            Can employers use HRWala.net for recruitment?
          </p>
          <div className="absolute h-0 left-[501.45px] top-[7176.43px] w-[11.421px]" data-node-id="289:70">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine46} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[71px] top-[7199px]" data-node-id="289:77">
        <div className="absolute contents left-[72px] top-[7200px]" data-node-id="289:78">
          <div className="absolute bg-white h-[40.453px] left-[72px] rounded-[8px] top-[7200.55px] w-[458px]" data-node-id="289:79" />
          <div className="absolute flex h-[10px] items-center justify-center left-[507.16px] top-[7216px] w-0" data-node-id="289:80">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10px]">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine49} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[22px] leading-[40px] left-[89.13px] not-italic text-[16px] text-black top-[7200px] tracking-[-0.96px] w-[405.461px]" data-node-id="289:81">
            What HR services does HRWala.net offer?
          </p>
          <div className="absolute h-0 left-[501.45px] top-[7221.43px] w-[11.421px]" data-node-id="289:82">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine46} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[71px] top-[7244px]" data-node-id="289:90">
        <div className="absolute contents left-[72px] top-[7245px]" data-node-id="289:91">
          <div className="absolute bg-white h-[40.453px] left-[72px] rounded-[8px] top-[7245.55px] w-[458px]" data-node-id="289:92" />
          <div className="absolute flex h-[10px] items-center justify-center left-[507.16px] top-[7261px] w-0" data-node-id="289:93">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10px]">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine49} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[22px] leading-[40px] left-[89.13px] not-italic text-[14px] text-black top-[7245px] tracking-[-0.84px] w-[423.736px]" data-node-id="289:94">
            How can I get information about professional certifications?
          </p>
          <div className="absolute h-0 left-[501.45px] top-[7266.43px] w-[11.421px]" data-node-id="289:95">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine46} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0144ab] h-[252px] left-[12px] rounded-[18px] top-[7372px] w-[1499px]" data-node-id="296:2" />
      <div className="absolute bg-[#4376c3] h-[36px] left-[968px] rounded-[18px] top-[7468px] w-[296px]" data-node-id="299:37" />
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[54px] leading-[0] left-[976px] not-italic text-[0px] text-black top-[calc(50%+3604.5px)] tracking-[-1.28px] w-[508px] whitespace-pre-wrap" dir="auto" data-node-id="299:35">
        <span className="leading-[normal] text-[#f6ac04] text-[32px]">{`Subscribe to our  Newsletter`}</span>
        <span className="leading-[normal] text-[32px]">{` `}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[105px] leading-[21px] left-[78px] not-italic text-[#eaeaea] text-[12px] text-justify top-[7468px] tracking-[-0.24px] w-[343px]" data-node-id="299:5">
        HRWala.net brings together talent, opportunities, and innovative HR solutions on one platform. We empower professionals to advance their careers and support organizations in building stronger, more capable teams.
      </p>
      <div className="absolute h-[56px] left-[75px] top-[29px] w-[192px]" data-node-id="297:3" data-name="HRWala-full-blue-gold 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHrWalaFullBlueGold1} />
      </div>
      <div className="absolute h-[47px] left-[78px] top-[7412px] w-[161px]" data-node-id="297:4" data-name="HRWala-full-white-gold 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHrWalaFullWhiteGold1} />
      </div>
      <div className="absolute contents left-[78px] top-[7573px]" data-node-id="299:20">
        <div className="absolute h-0 left-[79px] top-[7574px] w-[1367px]" data-node-id="299:7">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine50} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Medium'] justify-center leading-[0] left-[calc(50%-2.5px)] not-italic text-[13px] text-center text-white top-[7594.5px] tracking-[-0.26px] w-[275px]" data-node-id="299:19">
          <p className="leading-[21px]">© 2015 HRWala.net. All rights reserved.</p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[21px] left-[569px] not-italic text-justify top-[7415px] whitespace-nowrap" data-node-id="299:25">
        <p className="footer-link-text footer-link-discover absolute font-['Poppins:Medium'] left-[570px] text-[12px] text-white top-[7446px] tracking-[-0.24px]" data-node-id="299:22">
          Discover
        </p>
        <p className="footer-link-text footer-link-jobs absolute font-['Poppins:Medium'] left-[570px] text-[12px] text-white top-[7476px] tracking-[-0.24px]" data-node-id="299:23">
          Job Portal
        </p>
        <p className="footer-link-text footer-link-software absolute font-['Poppins:Medium'] left-[570px] text-[12px] text-white top-[7505px] tracking-[-0.24px]" data-node-id="299:24">
          HRWala Software
        </p>
        <p className="footer-link-text footer-link-certifications absolute font-['Poppins:Medium'] left-[570px] text-[12px] text-white top-[7534px] tracking-[-0.24px]" data-node-id="299:34">
          Certifications
        </p>
        <p className="absolute font-['Poppins:Bold'] left-[570px] text-[#f6ac04] text-[19px] top-[7416px] tracking-[-0.38px]" data-node-id="299:21">
          Explore
        </p>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[21px] left-[764px] not-italic text-justify top-[7420px] whitespace-nowrap" data-node-id="299:27">
        <p className="footer-link-text footer-link-phone-primary absolute font-['Poppins:Medium'] left-[765px] text-[12px] text-white top-[7451px] tracking-[-0.24px]" data-node-id="299:28">
          +92 300 8523878
        </p>
        <p className="footer-link-text footer-link-phone-secondary absolute font-['Poppins:Medium'] left-[765px] text-[12px] text-white top-[7481px] tracking-[-0.24px]" data-node-id="299:29">
          +92 300 8523878
        </p>
        <p className="footer-link-text footer-link-email absolute font-['Poppins:Medium'] left-[765px] text-[12px] text-white top-[7510px] tracking-[-0.24px]" data-node-id="299:30">
          hello@hrwala.net
        </p>
        <p className="absolute font-['Poppins:Bold'] left-[765px] text-[#f6ac04] text-[19px] top-[7421px] tracking-[-0.38px]" data-node-id="299:31">
          Contact
        </p>
      </div>
      <div className="absolute flex h-[103px] items-center justify-center left-[484px] top-[7429px] w-0" data-node-id="299:26">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[103px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine51} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[992px] not-italic text-[13px] text-white top-[7485px] tracking-[-0.78px] w-[186px]" data-node-id="299:38">
        <p className="leading-[normal]" dir="auto">
          Enter your email
        </p>
      </div>
      <div className="absolute contents left-[1271px] top-[7468px]" data-node-id="299:61">
        <div className="absolute bg-[#f6ac04] h-[39px] left-[1272px] rounded-[18px] top-[7469px] w-[135px]" data-node-id="299:40" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[1339px] not-italic text-[13px] text-center text-white top-[7489px] tracking-[-0.78px] whitespace-nowrap" data-node-id="299:41">
          <p className="leading-[normal]">Subscribe</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] left-[754px] size-[90px] top-[3797px]" data-node-id="299:43" data-name="entypo-social:linkedin-with-circle" />
      <div className="absolute inset-[calc(98.77%+0.98px)_calc(34.38%-0.31px)_calc(0.83%-0.98px)_calc(63.66%+0.27px)]" data-node-id="299:44" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[1099px] size-[40px] top-[7521px]" data-node-id="299:48" data-name="akar-icons:instagram-fill" />
      <div className="absolute inset-[calc(98.79%+0.98px)_calc(29.28%-0.41px)_calc(0.84%-0.98px)_calc(68.95%+0.38px)]" data-node-id="299:49" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
      <div className="absolute h-[31px] left-[1156px] top-[7525px] w-[44px]" data-node-id="299:52" data-name="fontisto:youtube-play" />
      <div className="absolute inset-[calc(98.82%+0.98px)_calc(26.21%-0.48px)_calc(0.88%-0.98px)_calc(71.63%+0.43px)]" data-node-id="299:53" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
      </div>
      <div className="absolute left-[1046px] size-[39px] top-[7520px]" data-node-id="299:54" data-name="akar-icons:facebook-fill" />
      <div className="absolute contents inset-[calc(98.77%+0.98px)_calc(31.81%-0.36px)_calc(0.85%-0.98px)_calc(66.29%+0.33px)]" data-node-id="299:55" data-name="Group">
        <div className="absolute contents inset-[98.77%_31.81%_0.85%_66.29%]" data-node-id="299:60" data-name="Clip path group">
          <div className="absolute inset-[98.77%_31.81%_0.85%_66.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[29.084px_29.084px]" data-node-id="299:56" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
      </div>
      {/* Invisible hit-areas make the existing Figma-designed controls clickable without changing their artwork. */}
      <a className="design-hit-area left-[100px] top-[617px] h-[44px] w-[132px]" href="https://hrwala.net/job-portal" aria-label="Open Job Portal" />
      <a className="design-hit-area left-[80px] top-[1706px] h-[43px] w-[167px]" href="https://hrwala.net/job-portal" aria-label="Explore Job Portal" />
      <a className="design-hit-area left-[80px] top-[3720px] h-[48px] w-[206px]" href="#modules" aria-label="Explore the HRWala platform" />
      <a className="design-hit-area left-[75px] top-[29px] h-[56px] w-[192px]" href="#home" aria-label="HRWala home" />
      <a className="design-hit-area left-[78px] top-[7412px] h-[47px] w-[161px]" href="#home" aria-label="HRWala home" />
      <a className="design-hit-area footer-hit-discover left-[570px] top-[7444px] h-[25px] w-[150px]" href="#home" aria-label="Discover" />
      <a className="design-hit-area footer-hit-jobs left-[570px] top-[7474px] h-[25px] w-[150px]" href="https://hrwala.net/job-portal" aria-label="Job Portal" />
      <a className="design-hit-area footer-hit-software left-[570px] top-[7503px] h-[25px] w-[170px]" href="#software" aria-label="HRWala Software" />
      <a className="design-hit-area footer-hit-certifications left-[570px] top-[7532px] h-[25px] w-[150px]" href="#certifications" aria-label="Certifications" />
      <a className="design-hit-area footer-hit-phone-primary left-[765px] top-[7449px] h-[25px] w-[180px]" href="https://wa.me/923008523878" target="_blank" rel="noreferrer" aria-label="WhatsApp HRWala" />
      <a className="design-hit-area footer-hit-phone-secondary left-[765px] top-[7479px] h-[25px] w-[180px]" href="https://wa.me/923008523878" target="_blank" rel="noreferrer" aria-label="WhatsApp HRWala" />
      <a className="design-hit-area footer-hit-email left-[765px] top-[7508px] h-[25px] w-[180px]" href="https://mail.google.com/mail/?view=cm&fs=1&to=hello%40hrwala.net" target="_blank" rel="noreferrer" aria-label="Email HRWala" />
      <a className="design-hit-area left-[972px] top-[7518px] h-[43px] w-[40px]" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" />
      <a className="design-hit-area left-[1012px] top-[7518px] h-[43px] w-[40px]" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" />
      <a className="design-hit-area left-[1052px] top-[7518px] h-[43px] w-[42px]" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" />
      <a className="design-hit-area left-[1094px] top-[7520px] h-[38px] w-[46px]" href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" />
      <LiveContactForm />
      <LiveFaq />
      <LiveNewsletter />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
  return <AdaptiveOriginal design={design} />
}


// The mobile layout reuses the original React elements, copy, images and widgets.
// The desktop artwork is rendered unchanged above the reflow breakpoint.
type DesignProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  id?: string
  'data-node-id'?: string
  nodeId?: string
  src?: string
  alt?: string
  'data-name'?: string
  href?: string
  'aria-label'?: string
}

const reflowQuery = '(max-width: 1100px)'
function subscribeReflow(callback: () => void) {
  const query = window.matchMedia(reflowQuery)
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}

function designElements(tree: ReactNode): ReactElement<DesignProps>[] {
  const elements: ReactElement<DesignProps>[] = []
  Children.forEach(tree, (child) => {
    if (!isValidElement<DesignProps>(child)) return
    elements.push(child)
    elements.push(...designElements(child.props.children))
  })
  return elements
}

function flowElement(tree: ReactNode): ReactNode {
  return Children.map(tree, (child) => {
    if (!isValidElement<DesignProps>(child)) return child
    const original = child.props.className || ''
    const classes = original.split(/\s+/).filter((token) => !/^(?:absolute|relative|contents|flex|flex-col|justify-center|items-center|whitespace-\S+|text-justify|text-center|leading-\S+|tracking-\S+|(?:-?translate|inset|top|left|right|bottom|w|h|size|min-w|max-w|mb)-\S+)$/.test(token))
    const size = Number(original.match(/text-\[([\d.]+)px\]/)?.[1] || 0)
    const fontSize = size >= 40 ? 'clamp(28px, 4vw, 40px)' : size >= 27 ? 'clamp(23px, 3vw, 30px)' : size ? Math.max(14, size) : undefined
    return cloneElement(child, {
      className: classes.filter((c) => !/^text-\[[\d.]+px\]$/.test(c)).join(' '),
      style: { ...child.props.style, ...(fontSize ? { fontSize } : {}) },
      children: flowElement(child.props.children),
    })
  })
}

function Flow({ node, className = '' }: { node?: ReactElement<DesignProps>; className?: string }) {
  if (!node) return null
  return <div className={'reflow-text ' + className}>{flowElement(node)}</div>
}

function OriginalImage({ node, className = '', alt }: { node?: ReactElement<DesignProps>; className?: string; alt?: string }) {
  const image = designElements(node).find((child) => child.type === 'img')
  if (!image) return null
  const classes = node?.props.className || ''
  const width = Number(classes.match(/w-\[([\d.]+)px\]/)?.[1] || 0)
  const height = Number(classes.match(/h-\[([\d.]+)px\]/)?.[1] || 0)
  return <img src={image.props.src} alt={alt || node?.props['data-name'] || image.props.alt || ''} className={'reflow-image ' + className} style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined} loading="lazy" />
}

function OriginalCard({ node, team = false, accent = false }: { node: ReactElement<DesignProps>; team?: boolean; accent?: boolean }) {
  const elements = designElements(node.props.children)
  // Font wrappers carry inherited styles; stop at those rather than copying their inner p twice.
  const collect = (tree: ReactNode, inheritedFont = ''): ReactElement<DesignProps>[] => {
    const result: ReactElement<DesignProps>[] = []
    Children.forEach(tree, (child) => {
      if (!isValidElement<DesignProps>(child)) return
      const descendants = designElements(child.props.children)
      const hasDesignChild = descendants.some((n) => n.props['data-node-id'])
      const classes = child.props.className || ''
      const font = classes.split(/\s+/).filter((c) => c.startsWith('font-')).join(' ') || inheritedFont
      const hasText = /font-|text-\[[\d.]+px\]/.test(classes) || child.type === 'p'
      if (hasText && !hasDesignChild) result.push(cloneElement(child, { className: `${font} ${classes}` }))
      else result.push(...collect(child.props.children, font))
    })
    return result
  }
  const photo = elements.find((n) => n.type === TeamPhoto)
  return <article className={'reflow-card' + (team ? ' reflow-team-card' : '') + (accent ? ' reflow-card-accented' : '')} data-original-card={node.props['data-node-id']}>
    {accent && <div className="reflow-card-accent" aria-hidden="true"><img src={imgLine5} alt="" /><img src={imgLine4} alt="" /></div>}
    {photo && cloneElement(photo, { className: 'reflow-team-photo' })}
    {collect(node.props.children).map((text, index) => <Flow node={text} key={text.props['data-node-id'] || index} className={(text.props.className || '').includes('opacity-10') ? 'reflow-watermark' : ''} />)}
  </article>
}

function ScaledOriginal({ design }: { design: ReactElement<DesignProps> }) {
  const viewport = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const element = viewport.current
    if (!element) return
    const update = () => setScale(Math.min(1, element.clientWidth / 1530))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <div ref={viewport} className="design-viewport" style={{ height: 7624 * scale }}>
    <div className="design-canvas" style={{ transform: `scale(${scale})` }}>{design}</div>
  </div>
}

function AdaptiveOriginal({ design }: { design: ReactElement<DesignProps> }) {
  const reflow = useSyncExternalStore(subscribeReflow, () => window.matchMedia(reflowQuery).matches, () => false)
  if (!reflow) return <ScaledOriginal design={design} />
  return <ReflowOriginal design={design} />
}

function ReflowOriginal({ design }: { design: ReactElement<DesignProps> }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const elements = designElements(design)
  const nodes = new Map(elements.filter((n) => n.props['data-node-id'] || n.props.nodeId).map((n) => [n.props['data-node-id'] || n.props.nodeId, n]))
  const get = (id: string) => nodes.get(id)
  const text = (id: string, className = '') => <Flow node={get(id)} className={className} key={id} />
  const image = (id: string, className = '') => <OriginalImage node={get(id)} className={className} key={id} />
  const cards = (prefix: string) => elements.filter((n) => (n.props.className || '').includes('hover-card-group') && n.props['data-node-id']?.startsWith(prefix))
  const button = (labelId: string, href: string) => <a className="reflow-button" href={href}>{text(labelId)}</a>
  const footerLinks = [
    ['299:22', '#home'], ['299:23', 'https://hrwala.net/job-portal'],
    ['299:24', '#software'], ['299:34', '#certifications'],
  ]
  const contacts = [
    ['299:28', 'https://wa.me/923008523878'], ['299:29', 'https://wa.me/923008523878'],
    ['299:30', 'https://mail.google.com/mail/?view=cm&fs=1&to=hello%40hrwala.net'],
  ]
  return <div className="reflow-site" id="home">
    <header className="reflow-header">
      <a href="#home" aria-label="HRWala home">{image('297:3', 'reflow-logo')}</a>
      <button className="reflow-menu-toggle" type="button" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="main-navigation" onClick={() => setMobileMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <nav id="main-navigation" className={mobileMenuOpen ? 'is-open' : ''} aria-label="Main navigation" onClick={() => setMobileMenuOpen(false)}>{text('5:5')}{text('5:17')}<div className="reflow-portal">{text('5:31')}<a href="https://hrwala.net/login" aria-label="Open My Portal">{image('9:2')}</a></div></nav>
    </header>
    <main className="reflow-main">
      <section className="reflow-section reflow-panel reflow-hero" aria-label="HRWala">
        <div className="reflow-stack">
          {text('118:39', 'reflow-kicker')}{text('12:68', 'reflow-hero-heading')}
          {text('28:71', 'reflow-bullets')}{text('31:83')}
          {button('35:94', 'https://hrwala.net/job-portal')}
        </div>
      </section>
      <section className="reflow-section" id="services">
        {text('69:3', 'reflow-heading')}
        <div className="reflow-grid reflow-service-grid">
          {cards('101:').map((card, index) => {
            const video = elements.find((n) => n.type === VideoSlot && (n.props as DesignProps & { index: number }).index === index)
            return <div className="reflow-stack" key={card.props['data-node-id']}>
              {video && cloneElement(video, { className: 'reflow-video' })}<OriginalCard node={card} accent />
            </div>
          })}
        </div>
      </section>
      <section className="reflow-section reflow-panel" id="jobs">
        <div className="reflow-split">
          <div className="reflow-stack">{text('109:6', 'reflow-heading')}{text('171:5')}{button('188:20', 'https://hrwala.net/job-portal')}</div>
          {image('172:6', 'reflow-cover')}
        </div>
        <div className="reflow-grid reflow-audiences">
          {['118:121', '118:122'].map((id) => <OriginalCard node={get(id)!} key={id} accent />)}
        </div>
      </section>
      <section className="reflow-section" id="brand-standards">
        {text('133:2', 'reflow-heading')}
        <div className="reflow-split">
          <div className="reflow-stack">
            {[[194, 197, 198, 202], [195, 205, 206, 207], [196, 209, 210, 211]].map(([number, ...ids]) => <div className="reflow-step" key={number}>{text('145:' + number, 'reflow-step-number')}<div className="reflow-stack">{ids.map((id) => text('145:' + id))}</div></div>)}
          </div>
          {image('151:214', 'reflow-cover')}
        </div>
        <div className="reflow-grid reflow-industries">{cards('159:').sort((a, b) => originalPosition(a) - originalPosition(b)).map((card) => <OriginalCard node={card} key={card.props['data-node-id']} />)}</div>
      </section>
      <section className="reflow-section reflow-panel" id="software">
        <div className="reflow-split">
          <div className="reflow-stack">
            {text('207:36', 'reflow-heading')}{text('224:22')}{text('224:24')}
            {image('224:21')}
            <div className="reflow-lifecycle">{[246, 247, 248, 249, 250].map((id) => text('239:' + id))}</div>
            {button('228:29', '#modules')}
          </div>
          <div className="reflow-orbit reflow-software-orbit">
            {image('239:239')}
            <div className="reflow-floating reflow-floating-1">{text('207:50')}</div>
            <div className="reflow-floating reflow-floating-2">{text('207:51')}</div>
            <div className="reflow-floating reflow-floating-3">{text('207:53')}</div>
            <div className="reflow-floating reflow-floating-4">{text('239:241')}</div>
            <div className="reflow-floating reflow-floating-5">{text('207:52')}</div>
            <div className="reflow-floating reflow-floating-6">{text('239:243')}</div>
          </div>
        </div>
        {text('228:236', 'reflow-heading')}
        <div className="reflow-grid reflow-module-grid">{cards('228:').map((card) => <OriginalCard node={card} key={card.props['data-node-id']} />)}</div>
      </section>
      <section className="reflow-section" id="academy">
        {text('242:251', 'reflow-heading')}
        <div className="reflow-grid reflow-three">
          {['247:337', '247:338', '247:344'].map((id) => get(id) && <OriginalCard node={get(id)!} key={id} />)}
        </div>
        {text('247:356', 'reflow-subheading')}
        <div className="reflow-grid reflow-three">
          {[['253:361', '250:359'], ['254:365', '253:362'], ['254:368', '254:366']].map(([picture, title]) => <article className="reflow-credential" key={picture}>{image(picture)}{text(title)}</article>)}
        </div>
        {text('256:2', 'reflow-subheading')}
        <div className="reflow-grid reflow-three">
          {[['257:3', '257:5'], ['258:6', '258:7'], ['258:8', '258:9']].map(([picture, title]) => <article className="reflow-credential" key={picture}>{image(picture)}{text(title)}</article>)}
        </div>
      </section>
      <section className="reflow-section reflow-panel" id="team">
        {text('260:32', 'reflow-heading')}
        <div className="reflow-grid reflow-team-grid">{elements.filter((n) => (n.props.className || '').includes('team-card-group')).sort((a, b) => originalPosition(a) - originalPosition(b)).map((card) => <OriginalCard node={card} team key={card.props['data-node-id']} />)}</div>
      </section>
      <section className="reflow-section">
        {text('274:62', 'reflow-heading')}
        <div className="reflow-partner-window" aria-label="Featured partner placeholders">
          <div className="reflow-partner-track" aria-hidden="true">{[0, 1].map((copy) => <div className="reflow-partner-set" key={copy}>{['274:158', '274:161', '274:177', '274:181', '274:185', '274:189'].map((id) => <div className="reflow-partner" key={id} />)}</div>)}</div>
        </div>
      </section>
      <section className="reflow-section reflow-panel reflow-contact" id="contact">
        <div className="reflow-stack">
          {text('274:203', 'reflow-heading')}{text('274:206', 'reflow-heading')}{text('278:3')}
          {text('289:46')}{text('289:47', 'reflow-subheading')}<LiveFaq />
        </div>
        <div className="reflow-form-panel reflow-stack">{text('278:9')}{text('285:23')}<LiveContactForm /></div>
      </section>
    </main>
    <footer className="reflow-footer">
      <div className="reflow-stack"><a href="#home" aria-label="HRWala home">{image('297:4', 'reflow-logo')}</a>{text('299:5')}</div>
      <nav className="reflow-stack" aria-label="Footer navigation">{text('299:21')}{footerLinks.map(([id, href]) => <a href={href} key={id}>{text(id)}</a>)}</nav>
      <div className="reflow-stack">{text('299:31')}{contacts.map(([id, href]) => <a href={href} key={id} target="_blank" rel="noreferrer">{text(id)}</a>)}</div>
      <div className="reflow-stack">{text('299:35')}<LiveNewsletter /><div className="reflow-socials">{[['299:44', 'https://www.linkedin.com/', 'LinkedIn'], ['299:55', 'https://www.facebook.com/', 'Facebook'], ['299:49', 'https://www.instagram.com/', 'Instagram'], ['299:53', 'https://www.youtube.com/', 'YouTube']].map(([id, href, label]) => <a href={href} aria-label={label} key={id} target="_blank" rel="noreferrer">{image(id)}</a>)}</div></div>
      <div className="reflow-copyright">{text('299:19')}</div>
    </footer>
  </div>
}

function originalPosition(node: ReactElement<DesignProps>) {
  const classes = node.props.className || ''
  return Number(classes.match(/top-\[([\d.]+)px\]/)?.[1] || 0) * 2000 + Number(classes.match(/left-\[([\d.]+)px\]/)?.[1] || 0)
}

export default function Frame1() {
  return <Desktop1 className="relative h-[7615px] w-[1530px] overflow-clip border border-black border-solid" />
}
