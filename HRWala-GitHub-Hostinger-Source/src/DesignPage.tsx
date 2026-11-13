import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const assetPathPrefix = "/assets";
const videoProject5 = `${assetPathPrefix}/Video Project 5.mp4`;
const imgConferenceTableMeetingByCityWindows21 = `${assetPathPrefix}/22ce9.png`;
const imgWomanInPeachOnGrayBackdrop1 = `${assetPathPrefix}/Smiling bearded man in black suit.png`;
const imgWomanPortraitsInCyanRings1 = `${assetPathPrefix}/Professional portrait with blue gradient ring.png`;
const imgHrWalaFullWhiteGold1 = `${assetPathPrefix}/0b611.png`;
const imgWomanPresentingHrDashboardInsideBlueRing1 = `${assetPathPrefix}/Professional HR Dashboard Presentation.png`;
const imgManInBlueSuitRedPatternedTie1 = `${assetPathPrefix}/cd743.png`;
const imgManInBlueSuitRedPatternedTie2 = `${assetPathPrefix}/9cc71.png`;
const imgManInBlueSuitRedPatternedTie3 = `${assetPathPrefix}/6db67.png`;
const imgManInBlueSuitRedPatternedTie4 = `${assetPathPrefix}/34e75.png`;
const imgManInBlueSuitRedPatternedTie5 = `${assetPathPrefix}/2f0f8.png`;
const imgManInBlueSuitRedPatternedTie6 = `${assetPathPrefix}/0fef5.png`;
const imgManInBlueSuitRedPatternedTie7 = `${assetPathPrefix}/40251.png`;
const imgManInBlueSuitRedPatternedTie8 = `${assetPathPrefix}/e9d46.png`;
const imgManInBlueSuitRedPatternedTie9 = `${assetPathPrefix}/5f647.png`;
const imgManInBlueSuitRedPatternedTie10 = `${assetPathPrefix}/f8ce2.png`;
const imgManInBlueSuitRedPatternedTie11 = `${assetPathPrefix}/5fdb1.png`;
const imgArchVillasGoldLogoOnCrimsonBackground2 = `${assetPathPrefix}/aa9aa.png`;
const imgBestWesternLogoOnBlueGradient6 = `${assetPathPrefix}/78d42.png`;
const imgBestWesternLogoOnBlueGradient7 = `${assetPathPrefix}/ff0a1.png`;
const imgBestWesternLogoOnBlueGradient8 = `${assetPathPrefix}/d1f1e.png`;
const imgBestWesternLogoOnBlueGradient9 = `${assetPathPrefix}/f6a67.png`;
const imgBestWesternLogoOnBlueGradient10 = `${assetPathPrefix}/991c8.png`;
const imgBestWesternLogoOnBlueGradient17 = `${assetPathPrefix}/e3016.png`;
const imgBestWesternLogoOnBlueGradient18 = `${assetPathPrefix}/90d1a.png`;
const imgBestWesternLogoOnBlueGradient19 = `${assetPathPrefix}/3bdd7.png`;
const imgBestWesternLogoOnBlueGradient20 = `${assetPathPrefix}/46890.png`;
const imgBestWesternLogoOnBlueGradient21 = `${assetPathPrefix}/d6b72.png`;
const imgBestWesternLogoOnBlueGradient22 = `${assetPathPrefix}/1ab0e.png`;
const imgBestWesternLogoOnBlueGradient1 = `${assetPathPrefix}/2cf12.png`;
const imgBestWesternLogoOnBlueGradient2 = `${assetPathPrefix}/b640a.png`;
const imgBestWesternLogoOnBlueGradient3 = `${assetPathPrefix}/f6e60.png`;
const imgBestWesternLogoOnBlueGradient4 = `${assetPathPrefix}/9a51f.png`;
const imgBestWesternLogoOnBlueGradient5 = `${assetPathPrefix}/d4915.png`;
const featuredPartnerLogos = [
  imgArchVillasGoldLogoOnCrimsonBackground2,
  imgBestWesternLogoOnBlueGradient1,
  imgBestWesternLogoOnBlueGradient2,
  imgBestWesternLogoOnBlueGradient3,
  imgBestWesternLogoOnBlueGradient4,
  imgBestWesternLogoOnBlueGradient5,
  imgBestWesternLogoOnBlueGradient6,
  imgBestWesternLogoOnBlueGradient7,
  imgBestWesternLogoOnBlueGradient8,
  imgBestWesternLogoOnBlueGradient9,
  imgBestWesternLogoOnBlueGradient10,
  imgBestWesternLogoOnBlueGradient17,
  imgBestWesternLogoOnBlueGradient18,
  imgBestWesternLogoOnBlueGradient19,
  imgBestWesternLogoOnBlueGradient20,
  imgBestWesternLogoOnBlueGradient21,
  imgBestWesternLogoOnBlueGradient22,
    `${assetPathPrefix}/Hoverizon Tech Solutions logo.png`,
] as const;
const imgFormalPortraitOnGray1 = `${assetPathPrefix}/58341.png`;
const imgStraightOnPortraitInCharcoalSuit = `${assetPathPrefix}/Straight-on portrait in charcoal suit.png`;
const imgHRwalaFullBlueGold1 = `${assetPathPrefix}/b7c26.png`;
const imgMaroonBlazerPortraitOnPaleBlue1 = `${assetPathPrefix}/5bdd7.png`;
const imgCompleteHrCertificateWithBlueGoldBorders1 = `${assetPathPrefix}/362ad.png`;
const imgCertifiedHrBusinessPartnerCertificate2 = `${assetPathPrefix}/02481.png`;
const imgReadyToServeHrCredentialBadge11 = `${assetPathPrefix}/7cf1c.png`;
const imgSkilledProfessionalHrCredentialBadge21 = `${assetPathPrefix}/ac16d.png`;
const imgFeaturedAssociateCredentialBadge31 = `${assetPathPrefix}/cedc8.png`;
const imgBlueAndGoldLDCertificate1 = `${assetPathPrefix}/e5bfb.png`;
const imgMrFarrukhTeam1 = `${assetPathPrefix}/9da31.png`;
const imgRectangle12 = `${assetPathPrefix}/5b0f9.svg`;
const imgRectangle35 = `${assetPathPrefix}/dbdb5.svg`;
const imgLine1 = `${assetPathPrefix}/f931d.svg`;
const imgGroup20 = `${assetPathPrefix}/e10b0.svg`;
const imgLine2 = `${assetPathPrefix}/77310.svg`;
const imgGroup21 = `${assetPathPrefix}/6dfbc.svg`;
const imgLine3 = `${assetPathPrefix}/6f7e3.svg`;
const imgLine4 = `${assetPathPrefix}/73ca4.svg`;
const imgLine5 = `${assetPathPrefix}/02010.svg`;
const imgRectangle2 = `${assetPathPrefix}/1c206.svg`;
const imgLine45 = `${assetPathPrefix}/4c823.svg`;
const imgLine46 = `${assetPathPrefix}/9c1d3.svg`;
const imgLine47 = `${assetPathPrefix}/c4ac2.svg`;
const imgLine48 = `${assetPathPrefix}/3cd6f.svg`;
const imgLine49 = `${assetPathPrefix}/1f2ee.svg`;
const imgLine50 = `${assetPathPrefix}/ac9f3.svg`;
const imgLine51 = `${assetPathPrefix}/c3c1e.svg`;
const imgRectangle3 = `${assetPathPrefix}/64ead.svg`;
const imgLine6 = `${assetPathPrefix}/9a9e7.svg`;
const imgLine7 = `${assetPathPrefix}/0e1d0.svg`;
const imgLine8 = `${assetPathPrefix}/6232f.svg`;
const imgLine9 = `${assetPathPrefix}/adeba.svg`;
const imgGroup46 = `${assetPathPrefix}/0df5e.svg`;
const imgVector = `${assetPathPrefix}/b2689.svg`;
const imgVector1 = `${assetPathPrefix}/52db4.svg`;
const imgVector2 = `${assetPathPrefix}/c1819.svg`;
const imgGroup1 = `${assetPathPrefix}/596bb.svg`;
const imgRectangle13 = `${assetPathPrefix}/fa697.svg`;
const imgGroup86 = `${assetPathPrefix}/2ae3d.svg`;
const imgEllipse17 = `${assetPathPrefix}/fb31c.svg`;
const imgEllipse28 = `${assetPathPrefix}/e4895.svg`;
const imgLine39 = `${assetPathPrefix}/f902a.svg`;
const imgLine52 = `${assetPathPrefix}/b0af0.svg`;
const imgLine55 = `${assetPathPrefix}/81670.svg`;
const imgLine10 = `${assetPathPrefix}/0046a.svg`;
const imgLine11 = `${assetPathPrefix}/07fad.svg`;
const imgLine12 = `${assetPathPrefix}/157c9.svg`;
const imgLine13 = `${assetPathPrefix}/a92d2.svg`;
const imgLine14 = `${assetPathPrefix}/2d96f.svg`;
const imgLine15 = `${assetPathPrefix}/c2634.svg`;
const imgLine16 = `${assetPathPrefix}/1ee62.svg`;
const imgLine17 = `${assetPathPrefix}/c0586.svg`;
const imgLine18 = `${assetPathPrefix}/d600b.svg`;
const imgLine19 = `${assetPathPrefix}/49ebe.svg`;
const imgLine20 = `${assetPathPrefix}/f3e16.svg`;
const imgLine21 = `${assetPathPrefix}/66f65.svg`;
const imgLine22 = `${assetPathPrefix}/e2133.svg`;
const imgLine23 = `${assetPathPrefix}/bce2b.svg`;
const imgLine24 = `${assetPathPrefix}/53c78.svg`;
const imgLine25 = `${assetPathPrefix}/64bf8.svg`;
const imgEllipse5 = `${assetPathPrefix}/c8df2.svg`;
const imgLine26 = `${assetPathPrefix}/83a1b.svg`;
const imgLine27 = `${assetPathPrefix}/05c93.svg`;

const heroSlides = [
  { heading: "Job Portal", bullets: ["Find Talent", "Find Opportunity", "Meet Here"], description: ["Verified jobs and qualified candidates.", "Where employers and careers connect."] },
  { heading: "HRwala Software", bullets: ["Simplify HR", "Automate Payroll", "Empower People"], description: ["One system for every employee record.", "Less paperwork, more progress."] },
  { heading: "HR All-in-One", bullets: ["Hire Smarter", "Manage Better", "Grow Faster"], description: ["Recruitment, payroll and HR in one place.", "Everything your people need."] },
  { heading: "Brand Standards", bullets: ["Service Industry", "Serving People", "One Partner"], description: ["From hotels to hospitals to retail.", "HR built around your brand standards."] },
  { heading: "HR Certification", bullets: ["Get Certified", "Get Noticed", "Get Hired"], description: ["Recognized credentials for working professionals.", "Your next career step starts here."] },
  { heading: "Your Advisor", bullets: ["Expert HR Advice", "Compliant Workplaces", "Confident Leaders"], description: ["Strategy, policies and labor law support.", "Build an organization that lasts."] },
  { heading: "Head Hunting", bullets: ["Right People", "Right Roles", "Real Growth"], description: ["Executive search and talent acquisition.", "Your next great hire starts here."] },
  { heading: "Hospitality Talent", bullets: ["Hoteliers", "Star Performers", "Get Connected"], description: ["A dedicated people platform for hospitality.", "Connecting people with hoteliers."] },
];

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let holdTimer: number;
    let fadeTimer: number;
    const scheduleNext = () => {
      holdTimer = window.setTimeout(() => {
        setVisible(false);
        fadeTimer = window.setTimeout(() => {
          setActiveIndex((index) => (index + 1) % heroSlides.length);
          setVisible(true);
          scheduleNext();
        }, 450);
      }, 3550);
    };
    scheduleNext();
    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  const slide = heroSlides[activeIndex];
  return (
    <div className={`hero-carousel-copy${visible ? "" : " is-hidden"}`} aria-hidden={!visible}>
      <h1 className="hero-carousel-heading">{slide.heading}</h1>
      <ul className="hero-carousel-bullets">
        {slide.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <p className="hero-carousel-description">
        {slide.description[0]}<br />{slide.description[1]}
      </p>
      <button
        className="hero-carousel-cta"
        type="button"
        onClick={() => window.location.assign("https://hrwala.net/job-portal")}
      >
        Job Portal
      </button>
    </div>
  );
}

const faqItems = [
  {
    question: "How can HRWala.net help me find a job?",
    answer:
      "Explore current opportunities through our job portal, build your profile and connect with employers looking for your skills.",
  },
  {
    question: "Can employers use HRWala.net for recruitment?",
    answer:
      "Yes. Employers can share vacancies and connect with candidates through the HRWala job portal.",
  },
  {
    question: "What HR services does HRWala.net offer?",
    answer:
      "We provide HR consulting, practical workplace guidance, HR systems support and services tailored to your organization.",
  },
  {
    question: "How can I get information about professional certifications?",
    answer:
      "Contact our team using the form and select Certifications. We can share current program and enrollment information.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-accordion" aria-label="Frequently asked questions">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <article className="faq-accordion-item" key={item.question}>
            <h3 className="faq-accordion-heading">
              <button
                className="faq-accordion-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-accordion-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              className={`faq-accordion-answer-wrap${isOpen ? " is-open" : ""}`}
              id={answerId}
              aria-hidden={!isOpen}
            >
              <div className="faq-accordion-answer">{item.answer}</div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <section className="contact-form-panel" aria-labelledby="contact-form-title">
      <h2 className="contact-form-title" id="contact-form-title">Get in Touch</h2>
      <p className="contact-form-intro">Tell us how we can assist you.</p>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const subject = encodeURIComponent(`Website inquiry from ${formData.get("name")}`);
          const body = encodeURIComponent(
            `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nInquiry: ${formData.get("inquiry")}\n\n${formData.get("message")}`,
          );

          setStatus("Your email app will open with your message ready to send.");
          window.location.href = `mailto:hello@hrwala.net?subject=${subject}&body=${body}`;
        }}
      >
        <label className="contact-form-field">
          <span>Full Name</span>
          <input autoComplete="name" name="name" placeholder="Enter your name" required />
        </label>
        <label className="contact-form-field">
          <span>Email</span>
          <input autoComplete="email" name="email" placeholder="example@gmail.com" required type="email" />
        </label>
        <label className="contact-form-field">
          <span>How Can We Help?</span>
          <select defaultValue="General Inquiry" name="inquiry">
            <option>General Inquiry</option>
            <option>Job Seeker Support</option>
            <option>Employer Recruitment</option>
            <option>HR Services</option>
            <option>Certifications</option>
          </select>
        </label>
        <label className="contact-form-field contact-form-message">
          <span>Your Message</span>
          <textarea name="message" placeholder="Tell us more about your inquiry..." required />
        </label>
        <button className="contact-form-submit" type="submit">Submit</button>
        <p className="contact-form-status" role="status">{status}</p>
      </form>
    </section>
  );
}

function NewsletterForm() {
  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email"));
        const subject = encodeURIComponent("Newsletter subscription");
        const body = encodeURIComponent(`Please subscribe this email address: ${email}`);

        window.location.href = `mailto:hello@hrwala.net?subject=${subject}&body=${body}`;
      }}
    >
      <input
        autoComplete="email"
        aria-label="Email address for newsletter"
        name="email"
        placeholder="Enter your email"
        required
        type="email"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

function VideoProject5() {
  const [isOpen, setIsOpen] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const playPreview = () => {
    const preview = previewRef.current;
    if (!preview) return;

    preview.muted = true;
    preview.defaultMuted = true;

    void preview.play().catch(() => {
      // Retry when media becomes ready or the user interacts.
    });
  };

  useEffect(() => {
    playPreview();

    const resume = () => {
      if (!document.hidden && !isOpen) playPreview();
    };

    document.addEventListener("visibilitychange", resume);
    return () => {
      document.removeEventListener("visibilitychange", resume);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);

      if (event.key === "Tab") {
        const first = closeRef.current;
        const last = videoRef.current;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="hr-video-preview absolute h-[172.057px] left-[1060.71px] rounded-[16.94px] top-[844px] w-[301.6px]"
        onMouseEnter={() => {
          if (!isOpen) playPreview();
        }}
      >
        <video
          ref={previewRef}
          src={videoProject5}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={playPreview}
          onCanPlay={() => {
            if (!isOpen) playPreview();
          }}
          onError={() => setPreviewError(true)}
        />

        <button
          ref={triggerRef}
          type="button"
          className="hr-video-trigger"
          aria-label="Play video in larger player"
          aria-haspopup="dialog"
          onClick={() => {
            previewRef.current?.pause();
            setIsOpen(true);
          }}
        >
          <span className="hr-video-play">Play video</span>
        </button>

        {previewError && (
          <span className="hr-video-error">
            Video load nahi hui — MP4 file ka path check karein.
          </span>
        )}
      </div>

      {isOpen &&
        createPortal(
          <div
            className="hr-video-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <section
              className="hr-video-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="30 second HR video"
            >
              <button
                ref={closeRef}
                type="button"
                className="hr-video-close"
                onClick={() => setIsOpen(false)}
              >
                Close ✕
              </button>

              <video
                ref={videoRef}
                src={videoProject5}
                autoPlay
                loop
                controls
                playsInline
                preload="auto"
                tabIndex={0}
              />
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
export default function Desktop1({ className }: { className?: string }) {
    useEffect(() => {
    const page = document.getElementById("home");
    if (!page) return;

    const elements = Array.from(
      page.querySelectorAll<HTMLElement>("*")
    );

    const changes = elements.flatMap((element) => {
      const css = getComputedStyle(element);
      const top = Number.parseFloat(css.top);

      // Sirf neeche ke sections ke main positioned elements.
      if (
        css.position !== "absolute" ||
        css.display === "contents" ||
        element.offsetParent !== page ||
        !Number.isFinite(top) ||
        top < 4450
      ) {
        return [];
      }

      return [{
        element,
        originalTop: element.style.getPropertyValue("top"),
        priority: element.style.getPropertyPriority("top"),
        newTop: top - 110,
      }];
    });

    changes.forEach(({ element, newTop }) => {
      element.style.setProperty("top", `${newTop}px`);
    });

    return () => {
      changes.forEach(({ element, originalTop, priority }) => {
        if (originalTop) {
          element.style.setProperty("top", originalTop, priority);
        } else {
          element.style.removeProperty("top");
        }
      });
    };
  }, []);

  useEffect(() => {
  const page = document.getElementById("home");

  if (
    !page ||
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const items: {
    element: HTMLElement;
    trigger: Element;
    delay: number;
  }[] = [];

  const addItem = (
    selector: string,
    delay: number,
    isBox = false
  ) => {
    const element = page.querySelector<HTMLElement>(selector);
    if (!element) return;

    items.push({
      element,
      // Boxes ke wrappers poore canvas jitne hain:
      // actual box ko dekh kar animation trigger karein.
      trigger: isBox
        ? element.firstElementChild ?? element
        : element,
      delay,
    });
  };

  addItem('[data-node-id="69:3"]', 0);

  [
    '[data-node-id="440:14062"]',
    '[data-node-id="440:14068"]',
    '[data-name="Straight-on portrait in charcoal suit"]',
    ".hr-video-preview",
  ].forEach((selector, index) => {
    addItem(selector, index * 70);
  });

  [
    ".service-card-group--people",
    ".service-card-group--standards",
    ".service-card-group--opportunity",
    ".service-card-group--systems",
  ].forEach((selector, index) => {
    addItem(selector, 80 + index * 70, true);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const item = items.find(
          ({ trigger }) => trigger === entry.target
        );

        item?.element.classList.add("offer-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px",
    }
  );

  items.forEach(({ element, trigger, delay }) => {
    element.style.setProperty("--offer-delay", `${delay}ms`);
    element.classList.add("offer-reveal");
    observer.observe(trigger);
  });

  return () => {
    observer.disconnect();

    items.forEach(({ element }) => {
      element.classList.remove("offer-reveal", "offer-visible");
      element.style.removeProperty("--offer-delay");
    });
  };
}, []);

  return (
    <div
      className={
        className ||
        "border-[0.941px] border-black border-solid h-[7330px] overflow-clip relative w-[1440px]"
      }
      id="home"
      data-node-id="3:6"
      data-name="Desktop - 1"
    >
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <article
  className="hussain-team-card absolute left-[1043px] top-[5841px]"
  aria-label="Hussain Raza"
>
  <div className="hussain-card-lines" aria-hidden="true">
  <svg
    width="56.471"
    height="34"
    viewBox="0 0 56.471 34"
    fill="none"
  >
    <path
      d="M0 1H56.471 M0 17H56.471 M0 33H56.471"
      stroke="black"
      strokeWidth="1.8"
    />
  </svg>
</div>

  <img
    className="hussain-card-photo"
    src={`${assetPathPrefix}/Close-up portrait of a young executive.png`}
    alt="Hussain Raza"
  />

  <h3>Hussain Raza</h3>

  <p className="hussain-card-role">
    Web &amp; Application Developer
  </p>

  <p className="hussain-card-description">
    Web & Application Developer with 3 years of experience in digital solutions. Founder of Hoverizon Tech Solutions, helping businesses strengthen their digital presence.
  </p>
</article>
      <button className="design-action-button" style={{ left: 82.29, top: 1605.65, width: 157.176, height: 39.529 }} type="button" aria-label="Explore Job Portal" onClick={() => window.location.assign("https://hrwala.net/job-portal")} />
      <button className="design-action-button" style={{ left: 105, top: 1902, width: 157.176, height: 39.529 }} type="button" aria-label="Find Your Dream Job" onClick={() => window.location.assign("https://hrwala.net/job-portal")} />
      <button className="design-action-button" style={{ left: 824, top: 1902, width: 138, height: 39.529 }} type="button" aria-label="Start Hiring" onClick={() => window.location.assign("https://hrwala.net/login")} />
      <button className="design-action-button" style={{ left: 89.76, top: 3273.59, width: 193.613, height: 45.176 }} type="button" aria-label="Explore the Platform" onClick={() => window.location.assign("https://hrwala.net/login")} />
      <div
        className="absolute h-[756px] left-[26.06px] top-[1252.71px] w-[1386px]"
        data-node-id="207:31"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle12} />
      </div>
      <div
        className="absolute h-[591px] left-[17.06px] top-[6488.06px] w-[1385px]"
        data-node-id="432:13544"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle35} />
      </div>
      <p
        className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[85px] leading-[19.765px] left-[63.06px] not-italic text-[#757575] text-[15.059px] text-justify top-[6637.76px] tracking-[-0.3012px] w-[509px]"
        data-node-id="513:712"
      >{`Whether you're exploring new career opportunities, looking for the right talent, or interested in our HR solutions, we're here to assist you. Connect with our team to discuss your goals, explore our services, and find the right support for your career or business.`}</p>
      <p
        className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[42.353px] leading-[0] left-[83.76px] not-italic text-[0px] text-black top-[calc(50%-2895.82px)] tracking-[-0.7529px] w-[426.353px]"
        data-node-id="69:3"
      >
        <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">{`A' La Carte:`}</span>
        <span className="leading-[normal] text-[37.647px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[37.647px]">We Offer</span>
      </p>
      <div className="absolute contents left-[97.88px] top-[248.47px]" data-node-id="88:4">
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[124px] not-italic text-[15px] text-black text-center top-[259.41px] tracking-[-0.5271px] whitespace-nowrap"
          data-node-id="33:85"
        >
          <p className="leading-[normal]">People @ Top</p>
        </div>
        <div
          className="absolute h-0 left-[98.82px] top-[258.82px] w-[16.941px]"
          data-node-id="33:87"
        >
          <div className="absolute inset-[-0.47px_-2.78%]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[349.18px] left-[746.06px] rounded-[16.94px] top-[1295.06px] w-[620.435px]"
        data-node-id="413:611"
        data-name="Conference Table Meeting by City Windows-2 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
          src={imgConferenceTableMeetingByCityWindows21}
        />
      </div>
      <div
        className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[237.176px] leading-[0] left-[87px] not-italic text-[#757575] text-[0px] text-justify top-[1351.53px] tracking-[-0.2635px] w-[580.706px] whitespace-pre-wrap"
        data-node-id="171:5"
      >
        <p className="leading-[19.765px] mb-0 text-[13.176px]">
          Every career move shapes a future. Every hiring decision shapes a business. HRwala.net
          connects professionals with opportunities and employers with talent—making it easier to
          showcase skills, explore roles and manage hiring in one place.
        </p>
        <p className="leading-[19.765px] mb-0 text-[13.176px]">​</p>
        <p className="mb-0 text-[13.176px]">
          <span className="[word-break:break-word] font-['Poppins:Bold'] leading-[19.765px] not-italic text-black">
            For candidates:
          </span>
          <span className="leading-[19.765px]">{` Build a profile that reflects your skills, experience and ambitions. Explore relevant roles, create your CV and apply with ease, while keeping your applications, interview schedules and employer conversations organised in one place.`}</span>
        </p>
        <p className="leading-[19.765px] mb-0 text-[13.176px]">​</p>
        <p className="text-[13.176px]">
          <span className="[word-break:break-word] font-['Poppins:Bold'] leading-[19.765px] not-italic text-black">
            For employers:
          </span>
          <span className="leading-[19.765px]">{` Present your organisation, publish vacancies and connect with candidates who meet your requirements. Review profiles, shortlist applicants, coordinate interviews and manage communication through a central dashboard, giving your team a shared view of every stage of recruitment.`}</span>
        </p>
      </div>
      <div className="absolute contents left-[81.06px] top-[1299.06px]" data-node-id="167:3">
        <p
          className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[42.353px] leading-[0] left-[86.06px] not-italic text-[0px] text-black top-[calc(50%-2365px)] tracking-[-0.7529px] w-[426.353px]"
          data-node-id="109:6"
        >
          <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">JOB</span>
          <span className="leading-[normal] text-[37.647px]">{` `}</span>
          <span className="leading-[normal] text-[#0144ab] text-[37.647px]">Portal</span>
        </p>
        <div className="absolute contents left-[82px] top-[1716px]" data-node-id="118:121">
          <div
            className="absolute bg-white h-[244px] left-[82px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[1716px] w-[554px]"
            data-node-id="109:10"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[59px] leading-[normal] left-[199px] not-italic text-[#0144ab] text-[53.647px] top-[1729px] tracking-[-1.0729px] w-[358px]"
            data-node-id="109:12"
          >
            Dream Job
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[104.323px] leading-[normal] left-[111.47px] not-italic opacity-10 text-[#0144ab] text-[64px] text-justify top-[1722.76px] tracking-[-1.28px] w-[156.512px]"
            data-node-id="109:14"
          >
            01
          </p>
          <div
            className="absolute h-[10.079px] left-[84.18px] top-[1716px] w-[551.823px]"
            data-node-id="118:120"
          >
            <div className="absolute inset-[-14%_-0.26%_-14.01%_-0.26%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup20} />
            </div>
          </div>
          <div className="absolute contents left-[104.88px] top-[1833px]" data-node-id="118:35">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%-538.41px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1840.56px] tracking-[-0.5271px] w-[112px]"
              data-node-id="118:36"
            >
              <p className="leading-[normal]">Smart Job Search</p>
            </div>
            <div
              className="absolute h-0 left-[104.88px] top-[1840.2px] w-[14.118px]"
              data-node-id="118:37"
            >
              <div className="absolute inset-[-0.47px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[450px] top-[1833px]" data-node-id="118:67">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%-181.53px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1840.56px] tracking-[-0.5271px] w-[135.529px]"
              data-node-id="118:68"
            >
              <p className="leading-[normal]">Employee Dashboard</p>
            </div>
            <div
              className="absolute h-0 left-[450px] top-[1840.2px] w-[14.118px]"
              data-node-id="118:69"
            >
              <div className="absolute inset-[-0.47px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[104.88px] top-[1867.54px]" data-node-id="118:58">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%-529.47px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1875.1px] tracking-[-0.5271px] w-[131.765px]"
              data-node-id="118:59"
            >
              <p className="leading-[normal]">{`Resume & CV Builder`}</p>
            </div>
            <div
              className="absolute h-0 left-[104.88px] top-[1874.74px] w-[14.118px]"
              data-node-id="118:60"
            >
              <div className="absolute inset-[-0.47px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[450px] top-[1867.54px]" data-node-id="118:70">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%-185.76px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1875.1px] tracking-[-0.5271px] w-[123.294px]"
              data-node-id="118:71"
            >
              <p className="leading-[normal]">Verified Job Listings</p>
            </div>
            <div
              className="absolute h-0 left-[450px] top-[1874.74px] w-[14.118px]"
              data-node-id="118:72"
            >
              <div className="absolute inset-[-0.47px_-3.33%]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[105px] top-[1902px]" data-node-id="413:595">
            <div
              className="absolute bg-[#0144ab] h-[39.529px] left-[105px] rounded-[7.529px] top-[1902px] w-[157.176px]"
              data-node-id="413:596"
            />
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[24.481px] justify-center leading-[0] left-[calc(50%-536.41px)] not-italic text-[13.176px] text-center text-white top-[calc(50%-1742.76px)] tracking-[-0.2635px] w-[157.176px]"
              data-node-id="413:597"
            >
              <p className="leading-[normal]">Find Your Dream Job</p>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[802px] top-[1716px]" data-node-id="118:122">
          <div
            className="absolute bg-white h-[244px] left-[802px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[1716px] w-[554px]"
            data-node-id="118:123"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[59px] leading-[normal] left-[940px] not-italic text-[#0144ab] text-[53.647px] top-[1729px] tracking-[-1.0729px] w-[368px]"
            data-node-id="118:124"
          >
            Hire People
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[104.323px] leading-[normal] left-[832.12px] not-italic opacity-10 text-[#0144ab] text-[64px] text-justify top-[1722.76px] tracking-[-1.28px] w-[161.247px]"
            data-node-id="118:125"
          >
            02
          </p>
          <div
            className="absolute h-[10.079px] left-[804px] top-[1716px] w-[552.002px]"
            data-node-id="118:126"
          >
            <div className="absolute inset-[-14%_-0.26%_-14.01%_-0.26%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup21} />
            </div>
          </div>
          <div className="absolute contents left-[825.33px] top-[1830px]" data-node-id="118:129">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%+184.36px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1837.56px] tracking-[-0.5271px] w-[115.389px]"
              data-node-id="118:130"
            >
              <p className="leading-[normal]">Quick Job Posting</p>
            </div>
            <div
              className="absolute h-0 left-[825.33px] top-[1837.2px] w-[14.545px]"
              data-node-id="118:131"
            >
              <div className="absolute inset-[-0.47px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1171px] top-[1830px]" data-node-id="118:132">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%+527.12px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1837.56px] tracking-[-0.5271px] w-[113.449px]"
              data-node-id="118:133"
            >
              <p className="leading-[normal]">Hiring Dashboard</p>
            </div>
            <div
              className="absolute h-0 left-[1171px] top-[1837.2px] w-[14.545px]"
              data-node-id="118:134"
            >
              <div className="absolute inset-[-0.47px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[825.33px] top-[1864.54px]" data-node-id="118:135">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%+193.57px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1872.1px] tracking-[-0.5271px] w-[135.751px]"
              data-node-id="118:136"
            >
              <p className="leading-[normal]">Candidate Database</p>
            </div>
            <div
              className="absolute h-0 left-[825.33px] top-[1871.74px] w-[14.545px]"
              data-node-id="118:137"
            >
              <div className="absolute inset-[-0.47px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1171px] top-[1864.54px]" data-node-id="118:138">
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] h-[15.113px] justify-center leading-[0] left-[calc(50%+537.3px)] not-italic text-[#0144ab] text-[13.176px] text-center top-[1872.1px] tracking-[-0.5271px] w-[133.812px]"
              data-node-id="118:139"
            >
              <p className="leading-[normal]">Application Tracking</p>
            </div>
            <div
              className="absolute h-0 left-[1171px] top-[1871.74px] w-[14.545px]"
              data-node-id="118:140"
            >
              <div className="absolute inset-[-0.47px_-3.24%]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[824px] top-[1902px]" data-node-id="413:602">
            <div
              className="absolute bg-[#0144ab] h-[39.529px] left-[824px] rounded-[7.529px] top-[1902px] w-[138px]"
              data-node-id="413:603"
            />
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[24.481px] justify-center leading-[0] left-[calc(50%+173px)] not-italic text-[14.18px] text-center text-white top-[calc(50%-1742.76px)] tracking-[-0.2836px] w-[138px]"
              data-node-id="413:604"
            >
              <p className="leading-[normal]">Start Hiring</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[81.35px] top-[1604.71px]" data-node-id="188:18">
        <div
          className="absolute bg-[#0144ab] h-[39.529px] left-[82.29px] rounded-[7.529px] top-[1605.65px] w-[157.176px]"
          data-node-id="188:19"
        />
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[24.481px] justify-center leading-[0] left-[calc(50%-559.12px)] not-italic text-[13.176px] text-center text-white top-[calc(50%-2039.76px)] tracking-[-0.2635px] w-[157.176px]"
          data-node-id="188:20"
        >
          <p className="leading-[normal]">Explore Job Portal</p>
        </div>
      </div>
      <div className="service-card-group service-card-group--people" data-node-id="101:66">
        <div
          className="absolute bg-white h-[180.706px] left-[79.06px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[1035.29px] w-[302.118px]"
          data-node-id="88:27"
        />
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[98.82px] not-italic text-[12.235px] text-black text-justify top-[1068.24px] tracking-[-0.2447px] whitespace-nowrap"
          data-node-id="92:19"
        >
          01 / People
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[98.82px] not-italic text-[#0144ab] text-[20.706px] top-[1088px] tracking-[-0.4141px] whitespace-nowrap"
          data-node-id="88:31"
        >
          HR Consultants
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[98.82px] not-italic text-[#757575] text-[12.235px] text-justify top-[1126.59px] tracking-[-0.2447px] w-[247.529px]"
          data-node-id="88:32"
        >
          Build stronger teams with expert HR guidance, practical policies and connected HRIS
          solutions.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[66.824px] leading-[normal] left-[301.18px] not-italic opacity-10 text-[#0144ab] text-[64px] text-justify top-[1044.71px] tracking-[-1.28px] w-[73.412px]"
          data-node-id="92:17"
        >
          01
        </p>
        <div
          className="absolute h-[4.706px] left-[167.06px] top-[1036.24px] w-[208px]"
          data-node-id="92:58"
        >
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div
          className="absolute flex h-[7.438px] items-center justify-center left-[81.88px] top-[1036.24px] w-[83.765px]"
          data-node-id="100:65"
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.438px] relative w-[83.765px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-card-group service-card-group--standards" data-node-id="101:109">
        <div
          className="absolute bg-white h-[180.706px] left-[401.88px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[1035.29px] w-[302.118px]"
          data-node-id="101:110"
        />
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[421.65px] not-italic text-[12.235px] text-black text-justify top-[1068.24px] tracking-[-0.2447px] whitespace-nowrap"
          data-node-id="101:111"
        >
          02 / Oppurtunity
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[421.65px] not-italic text-[#0144ab] text-[20.706px] top-[1088px] tracking-[-0.4141px] whitespace-nowrap"
          data-node-id="101:112"
        >
          Job Portal
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[421.65px] not-italic text-[#757575] text-[12.235px] text-justify top-[1126.59px] tracking-[-0.2447px] w-[247.529px]"
          data-node-id="101:113"
        >
           A considered space for candidates and employers to find their next great connection.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[66.824px] leading-[normal] left-[617.41px] not-italic opacity-10 text-[#0144ab] text-[64px] text-justify top-[1043.76px] tracking-[-1.28px] w-[80px]"
          data-node-id="101:114"
        >
          02
        </p>
        <div
          className="absolute h-[4.706px] left-[489.88px] top-[1036.24px] w-[208px]"
          data-node-id="101:115"
        >
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div
          className="absolute flex h-[7.438px] items-center justify-center left-[404.71px] top-[1036.24px] w-[83.765px]"
          data-node-id="101:116"
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.438px] relative w-[83.765px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-card-group service-card-group--opportunity" data-node-id="101:125">
        <div
          className="absolute bg-white h-[180.706px] left-[731.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[1036.24px] w-[302.118px]"
          data-node-id="101:126"
        />
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[751.06px] not-italic text-[12.235px] text-black text-justify top-[1069.18px] tracking-[-0.2447px] whitespace-nowrap"
          data-node-id="101:127"
        >
          03 / Technology
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[751.06px] not-italic text-[#0144ab] text-[20.706px] top-[1088.94px] tracking-[-0.4141px] whitespace-nowrap"
          data-node-id="101:128"
        >
          HRwala Software
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[751.06px] not-italic text-[#757575] text-[12.235px] text-justify top-[1127.53px] tracking-[-0.2447px] w-[247.529px]"
          data-node-id="101:129"
        >
          Future HR will be shaped by technology. HRwala Software is a cloud-based HRIS that streamlines HR and lets employees manage their own data.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[66.824px] leading-[normal] left-[944.94px] not-italic opacity-10 text-[#0144ab] text-[64px] text-justify top-[1044.71px] tracking-[-1.28px] w-[80px]"
          data-node-id="101:130"
        >
          03
        </p>
        <div
          className="absolute h-[4.706px] left-[819.29px] top-[1037.18px] w-[208px]"
          data-node-id="101:131"
        >
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div
          className="absolute flex h-[7.438px] items-center justify-center left-[734.12px] top-[1037.18px] w-[83.765px]"
          data-node-id="101:132"
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.438px] relative w-[83.765px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-card-group service-card-group--systems" data-node-id="101:133">
        <div
          className="absolute bg-white h-[180.706px] left-[1057.88px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[1036.24px] w-[302.118px]"
          data-node-id="101:134"
        />
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[1077.65px] not-italic text-[12.235px] text-black text-justify top-[1069.18px] tracking-[-0.2447px] whitespace-nowrap"
          data-node-id="101:135"
        >
          04 / Trends
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[1077.65px] not-italic text-[#0144ab] text-[20.706px] top-[1088.94px] tracking-[-0.4141px] whitespace-nowrap"
          data-node-id="101:136"
        >
          30 Second HR
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[1077.65px] not-italic text-[#757575] text-[12.235px] text-justify top-[1127.53px] tracking-[-0.2447px] w-[247.529px]"
          dir="auto"
          data-node-id="101:137"
        >
          Explore HR guidelines and practical tips through short videos, HR TikTok and HR YouTube
          content.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[66.824px] leading-[normal] left-[1266.82px] not-italic opacity-10 text-[#0144ab] text-[64px] text-justify top-[1044.71px] tracking-[-1.28px] w-[90.353px]"
          data-node-id="101:138"
        >
          04
        </p>
        <div
          className="absolute h-[4.706px] left-[1145.88px] top-[1037.18px] w-[208px]"
          data-node-id="101:139"
        >
          <div className="absolute inset-[-29.99%_-0.68%_-30%_-0.68%]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
        <div
          className="absolute flex h-[7.438px] items-center justify-center left-[1060.71px] top-[1037.18px] w-[83.765px]"
          data-node-id="101:140"
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[7.438px] relative w-[83.765px]">
              <div className="absolute inset-[-18.98%_-1.69%_-18.99%_-1.69%]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[172.057px] left-[405px] rounded-[16.94px] top-[844px] w-[301.6px]"
        data-node-id="440:14068"
        data-name="Woman in peach on gray backdrop 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16.94px]">
          <img
            alt=""
            className="absolute left-[-13.99%] max-w-none size-[128%] top-[0.05%]"
            src={imgWomanInPeachOnGrayBackdrop1}
          />
        </div>
      </div>
      <div
        className="absolute h-[172.057px] left-[734.12px] rounded-[16.94px] top-[844px] w-[301.6px]"
        data-name="Straight-on portrait in charcoal suit"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16.94px]">
          <img
            alt=""
            className="absolute inset-0 size-full object-cover"
            src={imgStraightOnPortraitInCharcoalSuit}
          />
        </div>
      </div>
      <VideoProject5 />
      <div className="absolute contents left-[31.06px] top-[114.82px]" data-node-id="207:33">
        <div
          className="absolute h-[603.294px] left-[32px] top-[115.76px] w-[1385.412px]"
          data-node-id="9:4"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle2} />
        </div>
        <div className="absolute contents left-[94.12px] top-[225px]" data-node-id="412:1222">
          <HeroCarousel />
          <div className="absolute contents left-[98.82px] top-[225px]" data-node-id="118:38">
            <div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[124px] not-italic text-[15px] text-black text-center top-[235px] tracking-[-0.5271px] whitespace-nowrap"
              data-node-id="118:39"
            >
              <p className="leading-[normal]">People @ Top</p>
            </div>
            <div
              className="absolute h-0 left-[98.82px] top-[234.41px] w-[16.941px]"
              data-node-id="118:40"
            >
              <div className="absolute inset-[-0.47px_-2.78%]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[94.12px] top-[556.29px]" data-node-id="35:95">
            <div
              className="absolute bg-[#0144ab] h-[41.033px] left-[94.12px] rounded-[7.529px] top-[556.29px] w-[123.469px]"
              data-node-id="35:93"
            />
            <p
              className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25.251px] leading-[normal] left-[115.76px] not-italic text-[15.059px] text-white top-[564.76px] tracking-[-0.3012px] w-[92.995px]"
              data-node-id="35:94"
            >
              Job Portal
            </p>
          </div>
        </div>
        <div className="absolute contents left-[589px] top-[197px]" data-node-id="412:1205">
          <p
            className="-translate-x-full [word-break:break-word] absolute font-['Poppins:Bold'] h-[40.73px] leading-[normal] left-[883.41px] not-italic text-[#1d59b5] text-[18.06px] text-right top-[236.91px] tracking-[-1.0836px] w-[189px]"
            data-node-id="412:1206"
          >
            Job Portal
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[46px] leading-[normal] left-[1181px] not-italic text-[#9669d9] text-[18.06px] top-[237px] tracking-[-1.0836px] w-[179px]"
            data-node-id="412:1207"
          >
            Leadership Training
          </p>
          <p
            className="-translate-x-full [word-break:break-word] absolute font-['Poppins:Bold'] h-[45.255px] leading-[normal] left-[844.84px] not-italic text-[#9669d9] text-[18.06px] text-right top-[581.95px] tracking-[-1.0836px] w-[171.5px]"
            data-node-id="412:1208"
          >
            Talent Acquisition
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[45px] leading-[normal] left-[1195px] not-italic text-[#9669d9] text-[18.06px] top-[582px] tracking-[-1.0836px] w-[187px]"
            data-node-id="412:1209"
          >
            Career Development
          </p>
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold'] h-[41px] leading-[normal] left-[699px] not-italic text-[#5194d8] text-[18.06px] text-center top-[402px] tracking-[-1.0836px] w-[220px]"
            data-node-id="412:1210"
          >
            Future Academy
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[41.189px] leading-[normal] left-[1260.3px] not-italic text-[#5194d8] text-[18.06px] top-[401.83px] tracking-[-1.0836px] w-[134.7px]"
            data-node-id="412:1211"
          >
            HR Compliance
          </p>
          <div
            className="absolute h-[461.989px] left-[784.95px] top-[197px] w-[480.017px]"
            data-node-id="412:1238"
            data-name="Woman portraits in cyan rings 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgWomanPortraitsInCyanRings1}
            />
          </div>
        </div>
      </div>
      <p
        className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50.824px] leading-[0] left-[71.06px] not-italic text-[0px] text-black top-[calc(50%+2589px)] tracking-[-2.2588px] w-[349.176px]"
        data-node-id="274:62"
      >
        <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">Featured</span>
        <span className="leading-[normal] text-[37.647px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[37.647px]">Partners</span>
      </p>
      <div className="featured-partners-marquee" role="region" aria-label="Featured partners">
        <div className="featured-partners-track">
          {[0, 1].map((setIndex) => (
            <div
              className="featured-partners-set"
              aria-hidden={setIndex === 1}
              key={setIndex}
            >
              {featuredPartnerLogos.map((logo, logoIndex) => (
                <div className="featured-partners-item" key={`${setIndex}-${logoIndex}`}>
                  <div className="featured-partners-card">
                    <img src={logo} alt="" draggable="false" />
                  </div>
                  <div className="featured-partners-connector" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p
        className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50.824px] leading-[0] left-[63.71px] not-italic text-[0px] text-black top-[calc(50%+2852.53px)] tracking-[-2.2588px] w-[349.176px]"
        dir="auto"
        data-node-id="274:203"
      >
        <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">Got a</span>
        <span className="leading-[normal] text-[37.647px]">{` `}</span>
        <span className="leading-[normal] text-[#0144ab] text-[37.647px]">Question?</span>
      </p>
      <p
        className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[45.176px] leading-[37.647px] left-[63.71px] not-italic text-[#0144ab] text-[37.647px] top-[calc(50%+2925px)] tracking-[-2.2588px] w-[555.294px]"
        dir="auto"
        data-node-id="274:206"
      >{`Let's Connect & Move Forward`}</p>
      <p
        className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50px] leading-[37.647px] left-[64.35px] not-italic text-[#0144ab] text-[23.529px] top-[calc(50%+3100.35px)] tracking-[-1.4118px] w-[352px]"
        dir="auto"
        data-node-id="289:47"
      >
        Frequently Asked Questions
      </p>
      <p
        className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[29px] leading-[19.765px] left-[64.35px] not-italic text-[#f6ac04] text-[15.059px] text-justify top-[6737.41px] tracking-[-0.3012px] w-[240px]"
        data-node-id="289:46"
      >
        NEED MORE INFORMATION?
      </p>
      <ContactForm />
      <div className="absolute contents left-[770.53px] top-[6509.76px]" data-node-id="289:45">
        <div
          className="absolute bg-[#0144ab] h-[527.059px] left-[771.47px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[6510.71px] w-[482.824px]"
          data-node-id="278:5"
        />
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[28.235px] leading-[19.765px] left-[796.88px] not-italic text-[#eaeaea] text-[15.059px] text-justify top-[6571.88px] tracking-[-0.3012px] w-[226.824px]"
          data-node-id="285:23"
        >
          Tell us how we can assist you.
        </p>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:ExtraBold'] h-[38.588px] justify-center leading-[0] left-[796.88px] not-italic text-[18.824px] text-white top-[calc(50%+2895.35px)] tracking-[-0.5647px] w-[420.706px]"
          data-node-id="278:9"
        >
          <p className="leading-[normal]" dir="auto">
            Get in Touch
          </p>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[825.38px] not-italic text-[12.235px] text-center text-white top-[6614.76px] tracking-[-0.7341px] whitespace-nowrap"
          data-node-id="278:10"
        >
          <p className="leading-[normal]">Full Name</p>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[812.88px] not-italic text-[12.235px] text-center text-white top-[6686.29px] tracking-[-0.7341px] whitespace-nowrap"
          data-node-id="289:25"
        >
          <p className="leading-[normal]">Email</p>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[836.88px] not-italic text-[12.235px] text-center text-white top-[6835px] tracking-[-0.7341px] whitespace-nowrap"
          data-node-id="289:37"
        >
          <p className="leading-[normal]">Your Message</p>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[849.88px] not-italic text-[12.235px] text-center text-white top-[6758.76px] tracking-[-0.7341px] whitespace-nowrap"
          data-node-id="289:31"
        >
          <p className="leading-[normal]">How Can We Help?</p>
        </div>
        <div
          className="absolute bg-[rgba(154,183,228,0.43)] h-[36.706px] left-[790.29px] rounded-[16.941px] top-[6630.24px] w-[445.176px]"
          data-node-id="278:12"
        />
        <div
          className="absolute bg-[#4376c3] h-[36.706px] left-[790.29px] rounded-[16.941px] top-[6701.76px] w-[445.176px]"
          data-node-id="289:26"
        />
        <div
          className="absolute bg-[#f6ac04] h-[36.706px] left-[790.29px] rounded-[16.941px] top-[6972.82px] w-[445.176px]"
          data-node-id="289:40"
        />
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[1000.47px] not-italic text-[12.235px] text-center text-white top-[6991.24px] tracking-[-0.7341px] whitespace-nowrap"
          data-node-id="289:42"
        >
          <p className="leading-[normal]">Submit</p>
        </div>
        <div
          className="absolute bg-[#4376c3] h-[107.294px] left-[790.29px] rounded-[16.941px] top-[6850.47px] w-[445.176px]"
          data-node-id="289:38"
        />
        <div
          className="absolute bg-[#4376c3] h-[36.706px] left-[790.29px] rounded-[16.941px] top-[6774.24px] w-[445.176px]"
          data-node-id="289:32"
        />
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[809.12px] not-italic text-[12.235px] text-white top-[6648.65px] tracking-[-0.7341px] w-[175.059px]"
          data-node-id="283:15"
        >
          <p className="leading-[normal]">Enter your name</p>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[809.12px] not-italic text-[12.235px] text-white top-[6720.18px] tracking-[-0.7341px] w-[175.059px]"
          data-node-id="289:27"
        >
          <p className="leading-[normal]" dir="auto">
            example@gmail.com
          </p>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[809.12px] not-italic text-[12.235px] text-white top-[6868.88px] tracking-[-0.7341px] w-[175.059px]"
          data-node-id="289:39"
        >
          <p className="leading-[normal]" dir="auto">
            Tell us more about your inquiry...
          </p>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[809.12px] not-italic text-[12.235px] text-white top-[6792.65px] tracking-[-0.7341px] w-[175.059px]"
          data-node-id="289:33"
        >
          <p className="leading-[normal]" dir="auto">
            General Inquiry
          </p>
        </div>
        <div
          className="absolute h-[5.176px] left-[1199.71px] top-[6792.12px] w-[9.412px]"
          data-node-id="289:34"
        >
          <div className="absolute inset-[-6.12%_-3.7%_-13.51%_-3.7%]">
            <img alt="" className="block max-w-none size-full" src={imgLine45} />
          </div>
        </div>
      </div>
      <FAQAccordion />
      <div className="absolute contents left-[57.12px] top-[6810.48px]" data-node-id="289:54">
        <div
          className="absolute bg-white h-[77.431px] left-[58.06px] rounded-[7.529px] top-[6812.47px] w-[479.235px]"
          data-node-id="289:48"
        />
        <p
          className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[42.247px] leading-[37.647px] left-[75.99px] not-italic text-[15.059px] text-black top-[6811.42px] tracking-[-0.9035px] w-[348.969px]"
          data-node-id="289:50"
        >
          How can HRWala.net help me find a job?
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[36.623px] leading-[16px] left-[75.99px] not-italic text-[#757575] text-[10.353px] text-justify top-[6845.95px] tracking-[-0.2071px] w-[424.261px]"
          data-node-id="289:51"
        >
          Explore job opportunities and connect with potential employers through our job portal.
        </p>
        <div
          className="absolute h-0 left-[507.42px] top-[6832.35px] w-[11.951px]"
          data-node-id="289:53"
        >
          <div className="absolute inset-[-0.94px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine46} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[57.12px] top-[6893.14px]" data-node-id="289:64">
        <div className="absolute contents left-[58.06px] top-[6894.08px]" data-node-id="289:55">
          <div
            className="absolute bg-white h-[42.329px] left-[58.06px] rounded-[7.529px] top-[6894.66px] w-[419.593px]"
            data-node-id="289:56"
          />
          <div
            className="absolute flex h-[10.464px] items-center justify-center left-[456.72px] top-[6910.83px] w-0"
            data-node-id="289:61"
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10.464px]">
                <div className="absolute inset-[-0.47px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine47} />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[22.881px] leading-[37.647px] left-[73.75px] not-italic text-[15.059px] text-black top-[6894.08px] tracking-[-0.9035px] w-[305.539px]"
            data-node-id="289:57"
          >
            How can HRWala.net help me find a job?
          </p>
          <div
            className="absolute h-0 left-[451.49px] top-[6916.51px] w-[10.464px]"
            data-node-id="289:59"
          >
            <div className="absolute inset-[-0.94px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine48} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[57.12px] top-[6893.14px]" data-node-id="289:65">
        <div className="absolute contents left-[58.06px] top-[6894.08px]" data-node-id="289:66">
          <div
            className="absolute bg-white h-[42.329px] left-[58.06px] rounded-[7.529px] top-[6894.66px] w-[479.235px]"
            data-node-id="289:67"
          />
          <div
            className="absolute flex h-[10.464px] items-center justify-center left-[513.39px] top-[6910.83px] w-0"
            data-node-id="289:68"
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10.464px]">
                <div className="absolute inset-[-0.47px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine49} />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[23.02px] leading-[37.647px] left-[75.99px] not-italic text-[15.059px] text-black top-[6894.08px] tracking-[-0.9035px] w-[418.285px]"
            data-node-id="289:69"
          >
            Can employers use HRWala.net for recruitment?
          </p>
          <div
            className="absolute h-0 left-[507.42px] top-[6916.51px] w-[11.951px]"
            data-node-id="289:70"
          >
            <div className="absolute inset-[-0.94px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine46} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[57.12px] top-[6940.23px]" data-node-id="289:77">
        <div className="absolute contents left-[58.06px] top-[6941.17px]" data-node-id="289:78">
          <div
            className="absolute bg-white h-[42.329px] left-[58.06px] rounded-[7.529px] top-[6941.74px] w-[479.235px]"
            data-node-id="289:79"
          />
          <div
            className="absolute flex h-[10.464px] items-center justify-center left-[513.39px] top-[6957.91px] w-0"
            data-node-id="289:80"
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10.464px]">
                <div className="absolute inset-[-0.47px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine49} />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[23.02px] leading-[37.647px] left-[75.99px] not-italic text-[15.059px] text-black top-[6941.17px] tracking-[-0.9035px] w-[424.261px]"
            data-node-id="289:81"
          >
            What HR services does HRWala.net offer?
          </p>
          <div
            className="absolute h-0 left-[507.42px] top-[6963.6px] w-[11.951px]"
            data-node-id="289:82"
          >
            <div className="absolute inset-[-0.94px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine46} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[57.12px] top-[6987.32px]" data-node-id="289:90">
        <div className="absolute contents left-[58.06px] top-[6988.26px]" data-node-id="289:91">
          <div
            className="absolute bg-white h-[42.329px] left-[58.06px] rounded-[7.529px] top-[6988.83px] w-[479.235px]"
            data-node-id="289:92"
          />
          <div
            className="absolute flex h-[10.464px] items-center justify-center left-[513.39px] top-[7005px] w-0"
            data-node-id="289:93"
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[10.464px]">
                <div className="absolute inset-[-0.47px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine49} />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[23.02px] leading-[37.647px] left-[75.99px] not-italic text-[13.176px] text-black top-[6988.26px] tracking-[-0.7906px] w-[443.382px]"
            data-node-id="289:94"
          >
            How can I get information about professional certifications?
          </p>
          <div
            className="absolute h-0 left-[507.42px] top-[7010.68px] w-[11.951px]"
            data-node-id="289:95"
          >
            <div className="absolute inset-[-0.94px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine46} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#0144ab] h-[251px] left-[22.06px] rounded-[16.941px] top-[7104.06px] w-[1380px]"
        data-node-id="296:2"
      />
      <div
        className="absolute bg-[#4376c3] h-[33.882px] left-[901.35px] rounded-[16.941px] top-[7194px] w-[278.588px]"
        data-node-id="299:37"
      />
      <p
        className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50.824px] leading-[0] left-[908.88px] not-italic text-[0px] text-black top-[calc(50%+3480.29px)] tracking-[-1.2047px] w-[478.118px] whitespace-pre-wrap"
        dir="auto"
        data-node-id="299:35"
      >
        <span className="leading-[normal] text-[#f6ac04] text-[30.118px]">{`Subscribe to our  Newsletter`}</span>
        <span className="leading-[normal] text-[30.118px]">{` `}</span>
      </p>
      <NewsletterForm />
      <p
        className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[98.824px] leading-[19.765px] left-[63.71px] not-italic text-[#eaeaea] text-[11.294px] text-justify top-[7194px] tracking-[-0.2259px] w-[322.824px]"
        data-node-id="299:5"
      >
        HRWala.net brings together talent, opportunities, and innovative HR solutions on one
        platform. We empower professionals to advance their careers and support organizations in
        building stronger, more capable teams.
      </p>
      <div className="absolute contents left-[-0.94px] top-[-1.94px]" data-node-id="413:617">
        <div
          className="absolute bg-white border-0 border-black border-solid h-[87px] left-0 top-[-1px] w-[1440px]"
          data-node-id="3:7"
        />
        <a href="#home" className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[575px] not-italic text-[#232323] text-[15.059px] top-[43.29px] whitespace-nowrap design-header-link" data-node-id="5:5">
          Discover
        </a>
        <a href="https://hrwala.net/job-portal" className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[normal] left-[684.18px] not-italic text-[#232323] text-[15.059px] top-[43.29px] whitespace-nowrap design-header-link" data-node-id="5:17">
          Job Portal
        </a>
        <a href="https://hrwala.net/login" className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[0] left-[793.18px] not-italic text-[#505050] text-[0px] top-[42.35px] whitespace-nowrap design-header-link" data-node-id="5:31">
          <span className="leading-[normal] text-[#232323] text-[15.059px]">My</span>
          <span className="leading-[normal] text-[15.059px]">{` `}</span>
          <span className="leading-[normal] text-[#232323] text-[15.059px]">Portal</span>
        </a>
      </div>
      <a
        href="#home"
        aria-label="HRWala home"
        className="absolute h-[44.235px] left-[63.71px] top-[7141.29px] w-[152.975px] design-footer-logo"
        data-node-id="297:4"
        data-name="HRWala-full-white-gold 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgHrWalaFullWhiteGold1}
        />
      </a>
      <div className="absolute contents left-[63.71px] top-[7292.82px]" data-node-id="299:20">
        <div
          className="absolute h-0 left-[64.65px] top-[7293.76px] w-[1286.588px]"
          data-node-id="299:7"
        >
          <div className="absolute inset-[-0.94px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine50} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Medium'] justify-center leading-[0] left-[calc(50%-12.06px)] not-italic text-[12.235px] text-center text-white top-[7313.18px] tracking-[-0.2447px] w-[258.824px]"
          data-node-id="299:19"
        >
          <p className="leading-[19.765px]">© 2015 HRWala.net. All rights reserved.</p>
        </div>
      </div>
      <div
        className="[word-break:break-word] absolute contents leading-[19.765px] left-[525.82px] not-italic text-justify top-[7144.12px] whitespace-nowrap"
        data-node-id="299:25"
      >
        <a href="#home" className="absolute font-['Poppins:Medium'] left-[526.76px] text-[11.294px] text-white top-[7173.29px] tracking-[-0.2259px] design-footer-link" data-node-id="299:22">
          Discover
        </a>
        <a href="https://hrwala.net/job-portal" className="absolute font-['Poppins:Medium'] left-[526.76px] text-[11.294px] text-white top-[7201.53px] tracking-[-0.2259px] design-footer-link" data-node-id="299:23">
          Job Portal
        </a>
        <a href="#software" className="absolute font-['Poppins:Medium'] left-[526.76px] text-[11.294px] text-white top-[7228.82px] tracking-[-0.2259px] design-footer-link" data-node-id="299:24">
          HRWala Software
        </a>
        <a href="https://hrwala.net/certifications" className="absolute font-['Poppins:Medium'] left-[526.76px] text-[11.294px] text-white top-[7256.12px] tracking-[-0.2259px] design-footer-link" data-node-id="299:34">
          Certifications
        </a>
        <p
          className="absolute font-['Poppins:Bold'] left-[526.76px] text-[#f6ac04] text-[17.882px] top-[7145.06px] tracking-[-0.3576px]"
          data-node-id="299:21"
        >
          Explore
        </p>
      </div>
      <div
        className="[word-break:break-word] absolute contents leading-[19.765px] left-[709.35px] not-italic text-justify top-[7148.82px] whitespace-nowrap"
        data-node-id="299:27"
      >
        <a href="tel:+923008523878" className="absolute font-['Poppins:Medium'] left-[710.29px] text-[11.294px] text-white top-[7178px] tracking-[-0.2259px] design-footer-link" data-node-id="299:28">
          +92 300 8523878
        </a>
        <a href="tel:+923055243737" className="absolute font-['Poppins:Medium'] left-[710.29px] text-[11.294px] text-white top-[7206.24px] tracking-[-0.2259px] design-footer-link" data-node-id="299:29">
          +92 305 5243737
        </a>
        <a href="mailto:hello@hrwala.net" className="absolute font-['Poppins:Medium'] left-[710.29px] text-[11.294px] text-white top-[7233.53px] tracking-[-0.2259px] design-footer-link" data-node-id="299:30">
          hello@hrwala.net
        </a>
        <p
          className="absolute font-['Poppins:Bold'] left-[710.29px] text-[#f6ac04] text-[17.882px] top-[7149.76px] tracking-[-0.3576px]"
          data-node-id="299:31"
        >
          Contact
        </p>
      </div>
      <div
        className="absolute flex h-[96.941px] items-center justify-center left-[445.82px] top-[7157.29px] w-0"
        data-node-id="299:26"
      >
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[96.941px]">
            <div className="absolute inset-[-1.88px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine51} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[923.94px] not-italic text-[12.235px] text-white top-[7209.59px] tracking-[-0.7341px] w-[175.059px]"
        data-node-id="299:38"
      >
        <p className="leading-[normal]" dir="auto">
          Enter your email
        </p>
      </div>
      <div className="absolute contents left-[1186.53px] top-[7194px]" data-node-id="299:61">
        <div
          className="absolute bg-[#f6ac04] h-[36.706px] left-[1187.47px] rounded-[16.941px] top-[7194.94px] w-[127.059px]"
          data-node-id="299:40"
        />
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] left-[1250.79px] not-italic text-[12.235px] text-center text-white top-[7213.35px] tracking-[-0.7341px] whitespace-nowrap"
          data-node-id="299:41"
        >
          <p className="leading-[normal]">Subscribe</p>
        </div>
      </div>
      <NewsletterForm />
      <div id="software" className="absolute contents left-[25.65px] top-[2898.06px]" data-node-id="524:746">
        <div className="absolute contents left-[26.59px] top-[2899px]" data-node-id="207:34">
          <div
            className="absolute h-[1040.941px] left-[26.59px] top-[2899px] w-[1385.412px]"
            data-node-id="207:35"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgRectangle3}
            />
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[47.677px] leading-[0] left-[94.47px] not-italic text-[0px] text-black top-[calc(50%-298px)] tracking-[-2.2588px] w-[231.529px]"
            data-node-id="228:236"
          >
            <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">Top</span>
            <span className="leading-[normal] text-[37.647px]">{` `}</span>
            <span className="leading-[normal] text-[#0144ab] text-[37.647px]">Modules</span>
          </p>
          <p
            className="[word-break:break-word] absolute font-['PoetsenOne:Regular'] h-[39.463px] leading-[normal] left-[89.76px] not-italic text-[#0144ab] text-[30.118px] top-[3057.12px] tracking-[-0.6024px] w-[728.471px]"
            data-node-id="224:22"
          >
            Future HR will be shaped by Technology
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[72.693px] leading-[0] left-[93.53px] not-italic text-[#0144ab] text-[52.706px] top-[2947.2px] tracking-[-1.0541px] w-[468.706px]"
            data-node-id="207:36"
          >
            <span className="leading-[normal] text-[#f6ac04]">HRwala</span>
            <span className="leading-[normal]">{` Software`}</span>
          </p>
          <div
            className="absolute h-[43.364px] left-[395.38px] top-[3361.35px] w-[51.362px]"
            data-node-id="224:4"
            data-name="charm:notes-tick"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[69.512px] leading-[19.765px] left-[93.53px] not-italic text-[#757575] text-[15.059px] text-justify top-[3102.72px] tracking-[-0.3012px] w-[580.706px]"
            data-node-id="224:24"
          >
            HRwala brings employee records, onboarding, attendance, payroll and performance into one
            organised platform—so every HR process has a clear place and a smoother flow.
          </p>
        </div>
        <div className="absolute contents left-[87.88px] top-[3443.94px]" data-node-id="228:235">
          <div className="absolute contents left-[87.88px] top-[3443.94px]" data-node-id="228:135">
            <div
              className="absolute contents left-[87.88px] top-[3443.94px]"
              data-node-id="228:103"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[87.88px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3443.94px] w-[302.118px]"
                data-node-id="228:104"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.044px] leading-[normal] left-[107.65px] not-italic text-[12.235px] text-black text-justify top-[3468.52px] tracking-[-0.2447px] w-[71.529px]"
                data-node-id="228:105"
              >
                01 / Finance
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.173px] leading-[normal] left-[107.65px] not-italic text-[#0144ab] text-[20.706px] top-[3491px] tracking-[-0.4141px] w-[108.235px]"
                data-node-id="228:106"
              >
                Budgeting
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[28.089px] leading-[normal] left-[107.65px] not-italic text-[#757575] text-[12.235px] text-justify top-[3523.94px] tracking-[-0.2447px] w-[247.529px]"
                data-node-id="228:107"
              >
                Map workforce budgets, departmental allocations and planned employee costs.
              </p>
              <div
                className="absolute h-[3.511px] left-[175.88px] top-[3444.64px] w-[208px]"
                data-node-id="228:109"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[90.71px] top-[3444.64px] w-[83.765px]"
                data-node-id="228:110"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[410.71px] top-[3443.94px]"
              data-node-id="228:111"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[410.71px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3443.94px] w-[302.118px]"
                data-node-id="228:112"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.044px] leading-[normal] left-[430.47px] not-italic text-[12.235px] text-black text-justify top-[3468.52px] tracking-[-0.2447px] w-[66.824px]"
                data-node-id="228:113"
              >
                02 / People
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.173px] leading-[normal] left-[430.47px] not-italic text-[#0144ab] text-[20.706px] top-[3491px] tracking-[-0.4141px] w-[186.353px]"
                data-node-id="228:114"
              >
                Talent Acquisition
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[28.089px] leading-[normal] left-[430.47px] not-italic text-[#757575] text-[12.235px] text-justify top-[3523.94px] tracking-[-0.2447px] w-[247.529px]"
                data-node-id="228:115"
              >
                Organise vacancies, candidate pipelines and hiring stages in one place.
              </p>
              <div
                className="absolute h-[3.511px] left-[498.71px] top-[3444.64px] w-[208px]"
                data-node-id="228:117"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[413.53px] top-[3444.64px] w-[83.765px]"
                data-node-id="228:118"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[742.94px] top-[3443.94px]"
              data-node-id="228:119"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[742.94px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3443.94px] w-[302.118px]"
                data-node-id="228:120"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.044px] leading-[normal] left-[762.71px] not-italic text-[12.235px] text-black text-justify top-[3468.52px] tracking-[-0.2447px] w-[67.765px]"
                data-node-id="228:121"
              >
                03 / People
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.173px] leading-[normal] left-[762.71px] not-italic text-[#0144ab] text-[20.706px] top-[3491px] tracking-[-0.4141px] w-[136.471px]"
                data-node-id="228:122"
              >
                On-boarding
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[23.876px] leading-[normal] left-[762.71px] not-italic text-[#757575] text-[10.353px] text-justify top-[3523.94px] tracking-[-0.2071px] w-[247.529px]"
                data-node-id="228:123"
              >
                Coordinate joining tasks, documentation and an organised welcome for new employees.
              </p>
              <div
                className="absolute h-[3.511px] left-[830.94px] top-[3444.64px] w-[208px]"
                data-node-id="228:125"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[745.76px] top-[3444.64px] w-[83.765px]"
                data-node-id="228:126"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[1066.71px] top-[3444.64px]"
              data-node-id="228:127"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[1066.71px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3444.64px] w-[302.118px]"
                data-node-id="228:128"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.044px] leading-[normal] left-[1086.47px] not-italic text-[12.235px] text-black text-justify top-[3469.22px] tracking-[-0.2447px] w-[94.118px]"
                data-node-id="228:129"
              >
                04 / Operations
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[20.122px] leading-[normal] left-[1086.47px] not-italic text-[#0144ab] text-[20.706px] top-[3491.92px] tracking-[-0.4141px] w-[231.529px]"
                data-node-id="228:130"
              >{`Leaves & Attendance`}</p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[25.28px] leading-[normal] left-[1086.47px] not-italic text-[#757575] text-[11.294px] text-justify top-[3524.64px] tracking-[-0.2259px] w-[247.529px]"
                dir="auto"
                data-node-id="228:131"
              >
                View attendance, manage leave requests and simplify approval workflows.
              </p>
              <div
                className="absolute h-[3.511px] left-[1154.71px] top-[3445.35px] w-[208px]"
                data-node-id="228:133"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[1069.53px] top-[3445.35px] w-[83.765px]"
                data-node-id="228:134"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[87.88px] top-[3604.23px]" data-node-id="228:136">
            <div
              className="absolute contents left-[87.88px] top-[3604.23px]"
              data-node-id="228:137"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[87.88px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3604.23px] w-[302.118px]"
                data-node-id="228:138"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[13.683px] leading-[normal] left-[107.65px] not-italic text-[12.235px] text-black text-justify top-[3628.93px] tracking-[-0.2447px] w-[79.059px]"
                data-node-id="228:139"
              >
                05 / Finance
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.173px] leading-[normal] left-[107.65px] not-italic text-[#0144ab] text-[20.706px] top-[3648.31px] tracking-[-0.4141px] w-[72.471px]"
                data-node-id="228:140"
              >
                Payroll
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[28.089px] leading-[normal] left-[107.65px] not-italic text-[#757575] text-[12.235px] text-justify top-[3685.82px] tracking-[-0.2447px] w-[247.529px]"
                data-node-id="228:141"
              >
                Prepare payroll inputs, salary components and payslip workflows.
              </p>
              <div
                className="absolute h-[3.511px] left-[175.88px] top-[3604.93px] w-[208px]"
                data-node-id="228:143"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[90.71px] top-[3604.93px] w-[83.765px]"
                data-node-id="228:144"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[410.71px] top-[3604.23px]"
              data-node-id="228:145"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[410.71px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3604.23px] w-[302.118px]"
                data-node-id="228:146"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[13.683px] leading-[normal] left-[430.47px] not-italic text-[12.235px] text-black text-justify top-[3628.93px] tracking-[-0.2447px] w-[75.294px]"
                data-node-id="228:147"
              >
                06 / People
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[19.317px] leading-[normal] left-[430.47px] not-italic text-[#0144ab] text-[20.706px] top-[3648.18px] tracking-[-0.4141px] w-[233.412px]"
                data-node-id="228:148"
              >
                Employee Dashboard
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[23.876px] leading-[normal] left-[430.47px] not-italic text-[#757575] text-[10.353px] text-justify top-[3685.82px] tracking-[-0.2071px] w-[247.529px]"
                data-node-id="228:149"
              >
                Give employees a clear view of their information, requests and everyday HR tasks.
              </p>
              <div
                className="absolute h-[3.511px] left-[498.71px] top-[3604.93px] w-[208px]"
                data-node-id="228:151"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[413.53px] top-[3604.93px] w-[83.765px]"
                data-node-id="228:152"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[740.12px] top-[3604.93px]"
              data-node-id="228:153"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[740.12px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3604.93px] w-[302.118px]"
                data-node-id="228:154"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.044px] leading-[normal] left-[759.88px] not-italic text-[12.235px] text-black text-justify top-[3629.51px] tracking-[-0.2447px] w-[93.176px]"
                data-node-id="228:155"
              >
                07 / Operations
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.173px] leading-[normal] left-[759.88px] not-italic text-[#0144ab] text-[20.706px] top-[3649.01px] tracking-[-0.4141px] w-[114.824px]"
                data-node-id="228:156"
              >
                Separation
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[25.28px] leading-[normal] left-[759.88px] not-italic text-[#757575] text-[11.294px] text-justify top-[3686.53px] tracking-[-0.2259px] w-[247.529px]"
                data-node-id="228:157"
              >
                Coordinate exit requests, clearance activities and off-boarding documentation.
              </p>
              <div
                className="absolute h-[3.511px] left-[828.12px] top-[3605.63px] w-[208px]"
                data-node-id="228:159"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[742.94px] top-[3605.63px] w-[83.765px]"
                data-node-id="228:160"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[1066.71px] top-[3604.93px]"
              data-node-id="228:161"
            >
              <div
                className="absolute bg-white h-[134.827px] left-[1066.71px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3604.93px] w-[302.118px]"
                data-node-id="228:162"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.044px] leading-[normal] left-[1086.47px] not-italic text-[12.235px] text-black text-justify top-[3629.51px] tracking-[-0.2447px] w-[74.353px]"
                data-node-id="228:163"
              >
                08 / Finance
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.173px] leading-[normal] left-[1086.47px] not-italic text-[#0144ab] text-[20.706px] top-[3649.01px] tracking-[-0.4141px] w-[190.118px]"
                data-node-id="228:164"
              >
                Employee Benefits
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[28.089px] leading-[normal] left-[1086.47px] not-italic text-[#757575] text-[12.235px] text-justify top-[3686.53px] tracking-[-0.2447px] w-[247.529px]"
                dir="auto"
                data-node-id="228:165"
              >
                Organise benefit records and employee entitlements with a consistent process.
              </p>
              <div
                className="absolute h-[3.511px] left-[1154.71px] top-[3605.63px] w-[208px]"
                data-node-id="228:167"
              >
                <div className="absolute inset-[-40.2%_-0.68%_-40.21%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine6} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.55px] items-center justify-center left-[1069.53px] top-[3605.63px] w-[83.765px]"
                data-node-id="228:168"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.55px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.44%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[88.29px] top-[3764.88px]" data-node-id="228:202">
            <div
              className="absolute contents left-[88.29px] top-[3764.88px]"
              data-node-id="228:203"
            >
              <div
                className="absolute bg-white h-[135.529px] left-[88.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3764.88px] w-[302.118px]"
                data-node-id="228:204"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[14.307px] leading-[normal] left-[108.06px] not-italic text-[12.235px] text-black text-justify top-[3789.04px] tracking-[-0.2447px] w-[79.059px]"
                data-node-id="228:205"
              >
                09 / Growth
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.051px] leading-[normal] left-[108.06px] not-italic text-[#0144ab] text-[20.706px] top-[3809.12px] tracking-[-0.4141px] w-[247.529px]"
                data-node-id="228:206"
              >
                360 degre Performance
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[24.965px] leading-[normal] left-[108.06px] not-italic text-[#757575] text-[11.294px] text-justify top-[3844.88px] tracking-[-0.2259px] w-[247.529px]"
                data-node-id="228:207"
              >
                Structure goals and feedback from multiple perspectives to support development.
              </p>
              <div
                className="absolute h-[3.467px] left-[176.29px] top-[3765.58px] w-[208px]"
                data-node-id="228:209"
              >
                <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine8} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.48px] items-center justify-center left-[91.12px] top-[3765.58px] w-[83.765px]"
                data-node-id="228:210"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.48px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[410.29px] top-[3764.88px]"
              data-node-id="228:211"
            >
              <div
                className="absolute bg-white h-[133.149px] left-[410.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3764.88px] w-[302.118px]"
                data-node-id="228:212"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[13.87px] leading-[normal] left-[430.06px] not-italic text-[12.235px] text-black text-justify top-[3789.15px] tracking-[-0.2447px] w-[93.176px]"
                data-node-id="228:213"
              >
                10 / Operations
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[22.885px] leading-[normal] left-[430.06px] not-italic text-[#0144ab] text-[20.706px] top-[3809.49px] tracking-[-0.4141px] w-[159.059px]"
                data-node-id="228:214"
              >
                HR Dashboards
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[27.739px] leading-[normal] left-[430.06px] not-italic text-[#757575] text-[12.235px] text-justify top-[3844.88px] tracking-[-0.2447px] w-[247.529px]"
                data-node-id="228:215"
              >
                Bring key workforce information together for clearer HR reporting.
              </p>
              <div
                className="absolute h-[3.467px] left-[498.29px] top-[3765.58px] w-[208px]"
                data-node-id="228:217"
              >
                <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine8} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.48px] items-center justify-center left-[413.12px] top-[3765.58px] w-[83.765px]"
                data-node-id="228:218"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.48px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[740.29px] top-[3765.58px]"
              data-node-id="228:219"
            >
              <div
                className="absolute bg-white h-[133.149px] left-[740.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3765.58px] w-[302.118px]"
                data-node-id="228:220"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[13.87px] leading-[normal] left-[760.06px] not-italic text-[12.235px] text-black text-justify top-[3789.85px] tracking-[-0.2447px] w-[70.588px]"
                data-node-id="228:221"
              >
                11 / Growth
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[22.885px] leading-[normal] left-[760.06px] not-italic text-[#0144ab] text-[20.706px] top-[3810.19px] tracking-[-0.4141px] w-[113.882px]"
                data-node-id="228:222"
              >
                E-Learning
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[27.739px] leading-[normal] left-[760.06px] not-italic text-[#757575] text-[12.235px] text-justify top-[3845.58px] tracking-[-0.2447px] w-[247.529px]"
                data-node-id="228:223"
              >
                Organise learning resources and track employee development activities.
              </p>
              <div
                className="absolute h-[3.467px] left-[828.29px] top-[3766.27px] w-[208px]"
                data-node-id="228:225"
              >
                <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine8} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.48px] items-center justify-center left-[743.12px] top-[3766.27px] w-[83.765px]"
                data-node-id="228:226"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.48px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute contents left-[1067.29px] top-[3765.58px]"
              data-node-id="228:227"
            >
              <div
                className="absolute bg-white h-[133.149px] left-[1067.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[3765.58px] w-[302.118px]"
                data-node-id="228:228"
              />
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[13.87px] leading-[normal] left-[1087.06px] not-italic text-[12.235px] text-black text-justify top-[3789.85px] tracking-[-0.2447px] w-[94.118px]"
                data-node-id="228:229"
              >
                12 / Operations
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[22.885px] leading-[normal] left-[1087.06px] not-italic text-[#0144ab] text-[20.706px] top-[3810.19px] tracking-[-0.4141px] w-[203.294px]"
                data-node-id="228:230"
              >{`Discipline & Policies`}</p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[27.739px] leading-[normal] left-[1087.06px] not-italic text-[#757575] text-[12.235px] text-justify top-[3845.58px] tracking-[-0.2447px] w-[247.529px]"
                dir="auto"
                data-node-id="228:231"
              >
                Maintain policy resources and structured records for disciplinary processes.
              </p>
              <div
                className="absolute h-[3.467px] left-[1155.29px] top-[3766.27px] w-[208px]"
                data-node-id="228:233"
              >
                <div className="absolute inset-[-40.7%_-0.68%_-40.72%_-0.68%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine8} />
                </div>
              </div>
              <div
                className="absolute flex h-[5.48px] items-center justify-center left-[1070.12px] top-[3766.27px] w-[83.765px]"
                data-node-id="228:234"
              >
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[5.48px] relative w-[83.765px]">
                    <div className="absolute inset-[-25.76%_-1.69%_-25.77%_-1.69%]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[89.76px] top-[3273.59px]" data-node-id="228:27">
          <div
            className="absolute bg-[#0144ab] h-[45.176px] left-[89.76px] rounded-[7.529px] top-[3273.59px] w-[193.613px]"
            data-node-id="228:28"
          />
          <div
            className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[28px] justify-center leading-[0] left-[calc(50%-532.5px)] not-italic text-[15.059px] text-center text-white top-[calc(50%-369px)] tracking-[-0.3012px] w-[187px]"
            data-node-id="228:29"
          >
            <p className="leading-[normal]">Explore the Platform</p>
          </div>
        </div>
        <div className="absolute contents left-[728.82px] top-[2932.06px]" data-node-id="239:245">
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[36.587px] leading-[normal] left-[823.49px] not-italic text-[#1d59b5] text-[15.059px] top-[2974.44px] tracking-[-0.9035px] w-[169.777px]"
            data-node-id="207:50"
          >{`Leaves & Attendance`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[40.652px] leading-[normal] left-[1260.98px] not-italic text-[#9669d9] text-[15.059px] top-[2974.46px] tracking-[-0.9035px] w-[141.481px]"
            data-node-id="207:51"
          >
            On-boarding
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[40.652px] leading-[normal] left-[804.56px] not-italic text-[#9669d9] text-[15.059px] top-[3284.38px] tracking-[-0.9035px] w-[154.057px]"
            data-node-id="207:52"
          >
            360° Performance
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[40.652px] leading-[normal] left-[1272.93px] not-italic text-[#9669d9] text-[15.059px] top-[3284.38px] tracking-[-0.9035px] w-[154.057px]"
            data-node-id="239:243"
          >
            Talent Acquisition
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[36.587px] leading-[normal] left-[728.82px] not-italic text-[#5194d8] text-[15.059px] top-[3122.94px] tracking-[-0.9035px] w-[176.065px]"
            data-node-id="207:53"
          >
            Employee Dashboard
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[36.872px] leading-[normal] left-[1331.73px] not-italic text-[#5194d8] text-[15.059px] top-[3122.94px] tracking-[-0.9035px] w-[68.761px]"
            data-node-id="239:241"
          >
            Payroll
          </p>
          <div
            className="absolute left-[899px] size-[429px] top-[2932.06px]"
            data-node-id="413:615"
            data-name="Woman presenting HR dashboard inside blue ring 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgWomanPresentingHrDashboardInsideBlueRing1}
            />
          </div>
        </div>
        <div className="absolute contents left-[86.94px] top-[2956.41px]" data-node-id="224:18">
          <div
            className="absolute h-[496.941px] left-[86.94px] top-[2956.41px] w-[489.078px]"
            data-node-id="201:10"
            data-name="Royal blue HR dashboard presenter 1"
          />
        </div>
        <div
          className="absolute h-[57.412px] left-[87.88px] top-[3177.59px] w-[400px]"
          data-node-id="224:21"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup46} />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[102px] not-italic text-[#f6ac04] text-[16.941px] top-[3234.06px] tracking-[-1.0165px] whitespace-nowrap"
          data-node-id="239:246"
        >
          Hire
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[163.18px] not-italic text-[#f6ac04] text-[16.941px] top-[3233.12px] tracking-[-1.0165px] whitespace-nowrap"
          dir="auto"
          data-node-id="239:247"
        >
          On-board
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[259.18px] not-italic text-[#f6ac04] text-[16.941px] top-[3233.12px] tracking-[-1.0165px] whitespace-nowrap"
          data-node-id="239:248"
        >
          Manage
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[358px] not-italic text-[#f6ac04] text-[16.941px] top-[3233.12px] tracking-[-1.0165px] whitespace-nowrap"
          data-node-id="239:249"
        >
          Pay
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[437.06px] not-italic text-[#f6ac04] text-[16.941px] top-[3235.94px] tracking-[-1.0165px] whitespace-nowrap"
          data-node-id="239:250"
        >
          Grow
        </p>
        <div
          className="absolute bg-[rgba(255,255,255,0)] left-[725.06px] size-[84.706px] top-[3347px]"
          data-node-id="299:43"
          data-name="entypo-social:linkedin-with-circle"
        />
      </div>
      <nav className="footer-social-links" aria-label="Social media">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src={imgVector} alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <img src={imgGroup1} alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src={imgVector1} alt="" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
          <img src={imgVector2} alt="" />
        </a>
      </nav>
      <div className="absolute contents left-[27.06px] top-[4970.06px]" data-node-id="531:1062">
        <div
          className="absolute h-[1245px] left-[28px] top-[4971px] w-[1385px]"
          data-node-id="260:36"
        >
                    <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgRectangle13}
          />
        </div>

        <p
          className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50.824px] leading-[0] left-[70px] not-italic text-[0px] text-black top-[calc(50%+1347.06px)] tracking-[-2.499px] w-[349.176px]"
          data-node-id="260:32"
        >
          <span className="leading-[normal] text-[#f6ac04] text-[41.65px]">
            HRwala
          </span>
          <span className="leading-[normal] text-[41.65px]">{` `}</span>
          <span className="leading-[normal] text-[#0144ab] text-[41.65px]">
            Team
          </span>
        </p>

        <div
          className="absolute contents left-[119px] top-[5108px]"
          data-node-id="437:13757"
        >
          <div
            className="absolute contents left-[119px] top-[5108px]"
            data-node-id="437:13747"
          >
            <div
              className="absolute contents left-[119px] top-[5108px]"
              data-node-id="263:42"
            >
              <div
                className="absolute bg-white h-[328px] left-[119px] rounded-[16.941px] top-[5108px] w-[247px]"
                data-node-id="262:37"
              />
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[206.41px] not-italic text-[19.765px] text-black text-center top-[5293.18px] tracking-[-1.1859px] whitespace-nowrap"
                data-node-id="262:39"
              >
                <p className="leading-[normal]">Farrukh Sohail</p>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[193.5px] not-italic text-[#757575] text-[12.235px] text-center top-[5317.29px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="262:40"
              >
                <p className="leading-[normal]">Chief People Officer</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[89px] justify-center leading-[0] left-[140px] not-italic text-[#757575] text-[11px] text-justify top-[5377.5px] tracking-[-0.22px] w-[201px]"
                data-node-id="442:14103"
              >
                <p className="leading-[normal]">
                  HR scholar and SHRM-SCP certified C-level professional with 20 years of corporate
                  experience spanning hospitality, real estate, information technology, and
                  textiles.
                </p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[149.41px] top-[5184.06px] w-[56.471px]"
              data-node-id="437:13718"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[215px] rounded-[16.94px] top-[5127px] w-[182.624px]"
            data-node-id="428:600"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie1}
            />
          </div>
        </div>
        <div className="absolute contents left-[119.29px] top-[5482px]" data-node-id="437:13923">
          <div className="absolute contents left-[119.29px] top-[5482px]" data-node-id="437:13924">
            <div
              className="absolute contents left-[119.29px] top-[5482px]"
              data-node-id="437:13925"
            >
              <div
                className="absolute bg-white h-[328px] left-[119.29px] rounded-[16.941px] top-[5482px] w-[247px]"
                data-node-id="437:13926"
              />
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[215px] not-italic text-[#757575] text-[12.235px] text-center top-[5691.29px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="442:14162"
              >
                <p className="leading-[normal]">Study Abroad Ambassador</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[67px] justify-center leading-[0] left-[138px] not-italic text-[#757575] text-[11px] text-justify top-[5742.5px] tracking-[-0.22px] w-[201px]"
                data-node-id="442:14125"
              >
                <p className="leading-[normal]">
                  Serving with a non-profit organization dedicated to developing and empowering
                  leaders in under-resourced communities.
                </p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[149.41px] top-[5558.24px] w-[56.471px]"
              data-node-id="437:13929"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[215px] rounded-[16.94px] top-[5501.18px] w-[182.624px]"
            data-node-id="437:13933"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie2}
            />
          </div>
          <div
            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[140px] not-italic text-[19.765px] text-black top-[5667.18px] tracking-[-0.5929px] whitespace-nowrap"
            data-node-id="442:14149"
          >
            <p className="leading-[normal]">Dr. Timothius Paul</p>
          </div>
        </div>
        <div className="absolute contents left-[119px] top-[5841px]" data-node-id="442:14070">
          <div className="absolute contents left-[119px] top-[5841px]" data-node-id="442:14071">
            <div className="absolute contents left-[119px] top-[5841px]" data-node-id="442:14072">
              <div
                className="absolute bg-white h-[328px] left-[119px] rounded-[16.941px] top-[5841px] w-[247px]"
                data-node-id="442:14073"
              />
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[182px] not-italic text-[19.765px] text-black text-center top-[6026.18px] tracking-[-1.1859px] whitespace-nowrap"
                data-node-id="442:14168"
              >
                <p className="leading-[normal]">Mian Asif</p>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[189px] not-italic text-[#757575] text-[12.235px] text-center top-[6050.47px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="442:14075"
              >
                <p className="leading-[normal]">Corporate Lawyer</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[50px] justify-center leading-[0] left-[140px] not-italic text-[#757575] text-[11px] text-justify top-[6093px] tracking-[-0.22px] w-[201px]"
                data-node-id="442:14137"
              >
                <p className="leading-[normal]">
                  Legal professional with 25 years of experience in criminal, civil, and corporate
                  law.
                </p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[149.41px] top-[5917.24px] w-[56.471px]"
              data-node-id="442:14076"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[215px] rounded-[16.94px] top-[5860.18px] w-[182.624px]"
            data-node-id="442:14080"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie3}
            />
          </div>
        </div>
        <div className="absolute contents left-[427px] top-[5108px]" data-node-id="437:13857">
          <div className="absolute contents left-[427px] top-[5108px]" data-node-id="437:13858">
            <div className="absolute contents left-[427px] top-[5108px]" data-node-id="437:13859">
              <div
                className="absolute bg-white h-[328px] left-[427px] rounded-[16.941px] top-[5108px] w-[247px]"
                data-node-id="437:13860"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[67px] justify-center leading-[0] left-[450px] not-italic text-[#757575] text-[11px] text-justify top-[5368.5px] tracking-[-0.22px] w-[201px]"
                data-node-id="442:14171"
              >
                <p className="leading-[normal]">
                  Director of Business Development with eight years of experience growing B2B
                  business and working with client portals.
                </p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[450px] not-italic text-[19.765px] text-black top-[5293.18px] tracking-[-1.1859px] whitespace-nowrap"
                data-node-id="437:13861"
              >
                <p className="leading-[normal]">Qurat-ul-Ain</p>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[501px] not-italic text-[#757575] text-[12.235px] text-center top-[5317.18px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="437:13862"
              >
                <p className="leading-[normal]">Customer Support</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[457.12px] top-[5184.06px] w-[56.471px]"
              data-node-id="437:13863"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[522.71px] rounded-[16.94px] top-[5127px] w-[182.624px]"
            data-node-id="437:13867"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16.94px]">
              <img
                alt=""
                className="absolute h-[122.8%] left-[-11.11%] max-w-none top-[-0.06%] w-[123%]"
                src={imgManInBlueSuitRedPatternedTie4}
              />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[427px] top-[5482px]" data-node-id="437:13934">
          <div className="absolute contents left-[427px] top-[5482px]" data-node-id="437:13935">
            <div className="absolute contents left-[427px] top-[5482px]" data-node-id="437:13936">
              <div
                className="absolute bg-white h-[328px] left-[427px] rounded-[16.941px] top-[5482px] w-[247px]"
                data-node-id="437:13937"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[31.586px] justify-center leading-[0] left-[449px] not-italic text-[19.765px] text-black top-[5665.79px] tracking-[-0.5929px] w-[164.179px]"
                data-node-id="437:13938"
              >
                <p className="leading-[normal]">Urooj Najam</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[18.952px] justify-center leading-[0] left-[449px] not-italic text-[#757575] text-[12.235px] top-[5691.48px] tracking-[-0.7341px] w-[186.567px]"
                data-node-id="437:13939"
              >
                <p className="leading-[normal]">Study Abroad Ambassador</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[457.12px] top-[5558.24px] w-[56.471px]"
              data-node-id="437:13940"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
            <div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[50px] justify-center leading-[0] left-[449px] not-italic text-[#757575] text-[11px] text-justify top-[5734px] tracking-[-0.22px] w-[201px]"
              data-node-id="442:14128"
            >
              <p className="leading-[normal]">
                Study Abroad Ambassador who has guided 387 travelers on their journeys abroad.
              </p>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[522.71px] rounded-[16.94px] top-[5501.18px] w-[182.624px]"
            data-node-id="437:13944"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie5}
            />
          </div>
        </div>
        <div className="absolute contents left-[427px] top-[5841px]" data-node-id="437:14011">
          <div className="absolute contents left-[427px] top-[5841px]" data-node-id="437:14012">
            <div className="absolute contents left-[427px] top-[5841px]" data-node-id="437:14013">
              <div
                className="absolute bg-white h-[328px] left-[427px] rounded-[16.941px] top-[5841px] w-[247px]"
                data-node-id="437:14014"
              />
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[505px] not-italic text-[19.765px] text-black text-center top-[6026.35px] tracking-[-1.1859px] whitespace-nowrap"
                data-node-id="437:14015"
              >
                <p className="leading-[normal]">Qamar Butt</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[451px] not-italic text-[#757575] text-[12.235px] top-[6052.5px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="437:14016"
              >
                <p className="leading-[15px]">{`Strategic Hospitality & F&B Leader`}</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[457.12px] top-[5917.24px] w-[56.471px]"
              data-node-id="437:14017"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
            <div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[84px] justify-center leading-[0] left-[449px] not-italic text-[#757575] text-[11px] text-justify top-[6110px] tracking-[-0.22px] w-[201px]"
              data-node-id="442:14140"
            >
              <p className="leading-[normal]">{`Head of F&B with over 27 years of experience in hospitality operations, business development, and guest service. Holds an MBA and an MS in HRM.`}</p>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[522.71px] rounded-[16.94px] top-[5860.18px] w-[182.624px]"
            data-node-id="437:14021"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie6}
            />
          </div>
        </div>
        <div className="absolute contents left-[735px] top-[5107.82px]" data-node-id="437:13879">
          <div className="absolute contents left-[735px] top-[5107.82px]" data-node-id="437:13880">
            <div
              className="absolute contents left-[735px] top-[5107.82px]"
              data-node-id="437:13881"
            >
              <div
                className="absolute bg-white h-[328px] left-[735px] rounded-[16.941px] top-[5107.82px] w-[247px]"
                data-node-id="437:13882"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[80px] justify-center leading-[0] left-[757px] not-italic text-[#757575] text-[11px] text-justify top-[5375px] tracking-[-0.22px] w-[201px]"
                data-node-id="442:14119"
              >
                <p className="leading-[normal]">
                  Technology specialist focused on the U.S. and Canadian markets, with an
                  understanding of how technology can support business needs and day-to-day
                  operations.
                </p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[31.586px] justify-center leading-[0] left-[757px] not-italic text-[19.765px] text-black top-[5293.79px] tracking-[-1.1859px] w-[211.443px]"
                data-node-id="437:13883"
              >
                <p className="leading-[normal]">Muhammad Asim</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[18.952px] justify-center leading-[0] left-[757px] not-italic text-[#757575] text-[12.235px] top-[5317.48px] tracking-[-0.7341px] w-[185.323px]"
                data-node-id="437:13884"
              >
                <p className="leading-[normal]">International Tech Recruiter</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[765.12px] top-[5184.06px] w-[56.471px]"
              data-node-id="437:13885"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[830.71px] rounded-[16.94px] top-[5127px] w-[182.624px]"
            data-node-id="437:13889"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie7}
            />
          </div>
        </div>
        <div className="absolute contents left-[735px] top-[5482px]" data-node-id="437:13945">
          <div className="absolute contents left-[735px] top-[5482px]" data-node-id="437:13946">
            <div className="absolute contents left-[735px] top-[5482px]" data-node-id="437:13947">
              <div
                className="absolute bg-white h-[328px] left-[735px] rounded-[16.941px] top-[5482px] w-[247px]"
                data-node-id="437:13948"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[759px] not-italic text-[19.765px] text-black top-[5664px] tracking-[-0.7906px] whitespace-nowrap"
                data-node-id="437:13949"
              >
                <p className="leading-[normal]">Rana Azeem</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[757px] not-italic text-[#757575] text-[10.24px] top-[5692.5px] tracking-[-0.6144px] w-[197px]"
                data-node-id="437:13950"
              >
                <p className="leading-[15px]">Culinary Professional | Brand Ambassador</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[765.12px] top-[5558.24px] w-[56.471px]"
              data-node-id="437:13951"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
            <div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[63px] justify-center leading-[0] left-[757px] not-italic text-[#757575] text-[11px] text-justify top-[5740.5px] tracking-[-0.22px] w-[201px]"
              data-node-id="442:14131"
            >
              <p className="leading-[normal]">
                Cluster Executive Chef, Culinary Professional, and Brand Ambassador overseeing
                culinary operations across the Central Region.
              </p>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[830.71px] rounded-[16.94px] top-[5501.18px] w-[182.624px]"
            data-node-id="437:13955"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie8}
            />
          </div>
        </div>
        <div className="absolute contents left-[735px] top-[5841px]" data-node-id="437:14022">
          <div className="absolute contents left-[735px] top-[5841px]" data-node-id="437:14023">
            <div className="absolute contents left-[735px] top-[5841px]" data-node-id="437:14024">
              <div
                className="absolute bg-white h-[328px] left-[735px] rounded-[16.941px] top-[5841px] w-[247px]"
                data-node-id="437:14025"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[760px] not-italic text-[19.765px] text-black top-[6026px] tracking-[-1.1859px] whitespace-nowrap"
                data-node-id="437:14026"
              >
                <p className="leading-[normal]">Arjumand Saqib</p>
              </div>
              <div
                className="-translate-y-full [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-end leading-[0] left-[759px] not-italic text-[#757575] text-[12.235px] top-[6062px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="437:14027"
              >
                <p className="leading-[normal]">Cyber Security Specialist</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[765.12px] top-[5917.24px] w-[56.471px]"
              data-node-id="437:14028"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
            <div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[67px] justify-center leading-[0] left-[759px] not-italic text-[#757575] text-[11px] text-justify top-[6101.5px] tracking-[-0.22px] w-[201px]"
              data-node-id="442:14143"
            >
              <p className="leading-[normal]">
                Information technology and cybersecurity specialist with a background at Stanford
                University in the U.S.
              </p>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[830.71px] rounded-[16.94px] top-[5860.18px] w-[182.624px]"
            data-node-id="437:14032"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie9}
            />
          </div>
        </div>
        <div className="absolute contents left-[1043px] top-[5108px]" data-node-id="437:13901">
          <div className="absolute contents left-[1043px] top-[5108px]" data-node-id="437:13902">
            <div className="absolute contents left-[1043px] top-[5108px]" data-node-id="437:13903">
              <div
                className="absolute bg-white h-[328px] left-[1043px] rounded-[16.941px] top-[5108px] w-[247px]"
                data-node-id="437:13904"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[44px] justify-center leading-[0] left-[1064px] not-italic text-[#757575] text-[11px] text-justify top-[5357px] tracking-[-0.22px] w-[201px]"
                data-node-id="442:14122"
              >
                <p className="leading-[normal]">
                  Renowned anchor and public speaker, serving as HRwala’s Brand Ambassador for the
                  Karachi Region.
                </p>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] justify-center leading-[0] left-[1124px] not-italic text-[19.765px] text-black text-center top-[5292px] tracking-[-1.1859px] whitespace-nowrap"
                data-node-id="437:13905"
              >
                <p className="leading-[normal]">Yumna Khan</p>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] justify-center leading-[0] left-[1139px] not-italic text-[#757575] text-[12.235px] text-center top-[5316.12px] tracking-[-0.7341px] whitespace-nowrap"
                data-node-id="437:13906"
              >
                <p className="leading-[normal]">HRwala Brand Ambassador</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[1073.12px] top-[5184.06px] w-[56.471px]"
              data-node-id="437:13907"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[1138.71px] rounded-[16.94px] top-[5127px] w-[182.624px]"
            data-node-id="437:13911"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie10}
            />
          </div>
        </div>
        <div className="absolute contents left-[1043px] top-[5482px]" data-node-id="437:13956">
          <div className="absolute contents left-[1043px] top-[5482px]" data-node-id="437:13957">
            <div className="absolute contents left-[1043px] top-[5482px]" data-node-id="437:13958">
              <div
                className="absolute bg-white h-[328px] left-[1043px] rounded-[16.941px] top-[5482px] w-[247px]"
                data-node-id="437:13959"
              />
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Bold'] h-[31.586px] justify-center leading-[0] left-[1063.15px] not-italic text-[19.765px] text-black top-[5663.79px] tracking-[-1.1859px] w-[159.204px]"
                data-node-id="437:13960"
              >
                <p className="leading-[normal]">Munir Ahmad</p>
              </div>
              <div
                className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[18.952px] justify-center leading-[0] left-[1063px] not-italic text-[#757575] text-[12.235px] top-[5688.48px] tracking-[-0.7341px] w-[201.492px]"
                data-node-id="437:13961"
              >
                <p className="leading-[normal]">Seasoned Financial Controller</p>
              </div>
            </div>
            <div
              className="absolute h-[32px] left-[1073.12px] top-[5558.24px] w-[56.471px]"
              data-node-id="437:13962"
            >
              <div className="absolute inset-[-5.88%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup86} />
              </div>
            </div>
            <div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Poppins:Regular'] h-[80px] justify-center leading-[0] left-[1063px] not-italic text-[#757575] text-[11px] text-justify top-[5749px] tracking-[-0.22px] w-[201px]"
              data-node-id="442:14134"
            >
              <p className="leading-[normal]">
                Seasoned Financial Controller with over 20 years of experience in manufacturing
                finance, financial management, cost control, and compliance.
              </p>
            </div>
          </div>
          <div
            className="absolute h-[137.41px] left-[1138.71px] rounded-[16.94px] top-[5501.18px] w-[182.624px]"
            data-node-id="437:13966"
            data-name="Man in blue suit, red patterned tie 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgManInBlueSuitRedPatternedTie11}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute border border-[#cecece] border-solid h-[98px] left-[-818.94px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6043.06px] w-[175px]"
        data-node-id="429:604"
        data-name="Arch Villas Gold Logo on Crimson Background 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
          src={imgArchVillasGoldLogoOnCrimsonBackground2}
        />
      </div>
      <div
        className="absolute left-[-660.94px] size-[14.118px] top-[6083.06px]"
        data-node-id="274:166"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div
        className="absolute left-[-453.94px] size-[14.118px] top-[6083.06px]"
        data-node-id="431:719"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse28} />
      </div>
      <div className="absolute contents left-[-1966.94px] top-[6051.06px]" data-node-id="431:1586">
        <div className="absolute contents left-[-1928px] top-[6052px]" data-node-id="429:640">
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-902px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6053px] w-[175px]"
            data-node-id="431:751"
            data-name="Best Western logo on blue gradient 6"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient6}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-698px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:1460"
            data-name="Best Western logo on blue gradient 7"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient7}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-491px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:1472"
            data-name="Best Western logo on blue gradient 8"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient8}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-284px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:1484"
            data-name="Best Western logo on blue gradient 9"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient9}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-86px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:1496"
            data-name="Best Western logo on blue gradient 10"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient10}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[121px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:1508"
            data-name="Best Western logo on blue gradient 11"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient6}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[326px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:5279"
            data-name="Best Western logo on blue gradient 12"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient7}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[531px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:5291"
            data-name="Best Western logo on blue gradient 13"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient8}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[736px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:5303"
            data-name="Best Western logo on blue gradient 14"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient9}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[941px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:5315"
            data-name="Best Western logo on blue gradient 15"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient10}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[1146px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:5327"
            data-name="Best Western logo on blue gradient 16"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient6}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[1146px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:5339"
            data-name="Best Western logo on blue gradient 17"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient17}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[1351px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6338px] w-[175px]"
            data-node-id="431:7851"
            data-name="Best Western logo on blue gradient 18"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient18}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[1565px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:7863"
            data-name="Best Western logo on blue gradient 19"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient19}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[1770px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:7875"
            data-name="Best Western logo on blue gradient 20"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient20}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[1975px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:7887"
            data-name="Best Western logo on blue gradient 21"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient21}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[2180px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6052px] w-[175px]"
            data-node-id="431:7899"
            data-name="Best Western logo on blue gradient 22"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient22}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-1928px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6053px] w-[175px]"
            data-node-id="429:608"
            data-name="Best Western logo on blue gradient 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient1}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-1721px] rounded-[16.94px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] top-[6053px] w-[175px]"
            data-node-id="431:720"
            data-name="Best Western logo on blue gradient 2"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient2}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-1516px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6053px] w-[175px]"
            data-node-id="431:727"
            data-name="Best Western logo on blue gradient 3"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient3}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-1308px] rounded-[16.94px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6053px] w-[175px]"
            data-node-id="431:735"
            data-name="Best Western logo on blue gradient 4"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient4}
            />
          </div>
          <div
            className="absolute border border-[#cecece] border-solid h-[98px] left-[-1105px] rounded-[16.94px] top-[6053px] w-[175px]"
            data-node-id="431:743"
            data-name="Best Western logo on blue gradient 5"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
              src={imgBestWesternLogoOnBlueGradient5}
            />
          </div>
          <div
            className="absolute left-[-1770px] size-[14.118px] top-[6094px]"
            data-node-id="274:178"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1565px] size-[14.118px] top-[6094px]"
            data-node-id="431:728"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1357px] size-[14.118px] top-[6094px]"
            data-node-id="431:736"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1154px] size-[14.118px] top-[6094px]"
            data-node-id="431:744"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-951px] size-[14.118px] top-[6094px]"
            data-node-id="431:752"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-747px] size-[14.118px] top-[6093px]"
            data-node-id="431:1461"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-540px] size-[14.118px] top-[6093px]"
            data-node-id="431:1473"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-333px] size-[14.118px] top-[6093px]"
            data-node-id="431:1485"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-126px] size-[14.118px] top-[6093px]"
            data-node-id="431:1497"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[72px] size-[14.118px] top-[6379px]"
            data-node-id="431:1509"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[277px] size-[14.118px] top-[6379px]"
            data-node-id="431:5280"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[482px] size-[14.118px] top-[6379px]"
            data-node-id="431:5292"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[687px] size-[14.118px] top-[6379px]"
            data-node-id="431:5304"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[892px] size-[14.118px] top-[6379px]"
            data-node-id="431:5316"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1097px] size-[14.118px] top-[6379px]"
            data-node-id="431:5328"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1097px] size-[14.118px] top-[6379px]"
            data-node-id="431:5340"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1302px] size-[14.118px] top-[6379px]"
            data-node-id="431:7852"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1516px] size-[14.118px] top-[6093px]"
            data-node-id="431:7864"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1721px] size-[14.118px] top-[6093px]"
            data-node-id="431:7876"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1926px] size-[14.118px] top-[6093px]"
            data-node-id="431:7888"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[2131px] size-[14.118px] top-[6093px]"
            data-node-id="431:7900"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1926.29px] size-[14.118px] top-[6094px]"
            data-node-id="274:167"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1719.29px] size-[14.118px] top-[6094px]"
            data-node-id="431:721"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1514.29px] size-[14.118px] top-[6094px]"
            data-node-id="431:729"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1306.29px] size-[14.118px] top-[6094px]"
            data-node-id="431:737"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-1103.29px] size-[14.118px] top-[6094px]"
            data-node-id="431:745"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-900.29px] size-[14.118px] top-[6094px]"
            data-node-id="431:753"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-693px] size-[14.118px] top-[6093px]"
            data-node-id="431:1462"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-486px] size-[14.118px] top-[6093px]"
            data-node-id="431:1474"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-279px] size-[14.118px] top-[6093px]"
            data-node-id="431:1486"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[-72px] size-[14.118px] top-[6093px]"
            data-node-id="431:1498"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[126px] size-[14.118px] top-[6379px]"
            data-node-id="431:1510"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[331px] size-[14.118px] top-[6379px]"
            data-node-id="431:5281"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[536px] size-[14.118px] top-[6379px]"
            data-node-id="431:5293"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[741px] size-[14.118px] top-[6379px]"
            data-node-id="431:5305"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[946px] size-[14.118px] top-[6379px]"
            data-node-id="431:5317"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1151px] size-[14.118px] top-[6379px]"
            data-node-id="431:5329"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1151px] size-[14.118px] top-[6379px]"
            data-node-id="431:5341"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1356px] size-[14.118px] top-[6379px]"
            data-node-id="431:7853"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1570px] size-[14.118px] top-[6093px]"
            data-node-id="431:7865"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1775px] size-[14.118px] top-[6093px]"
            data-node-id="431:7877"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[1980px] size-[14.118px] top-[6093px]"
            data-node-id="431:7889"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[2185px] size-[14.118px] top-[6093px]"
            data-node-id="431:7901"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
          <div
            className="absolute left-[2336px] size-[14.118px] top-[6093px]"
            data-node-id="432:13449"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse17}
            />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-1966px] top-[6101.06px] w-[41px]"
          data-node-id="274:165"
        >
          <div className="absolute inset-[-3.94px_-12.05%_-5.94px_-12.05%]">
            <img alt="" className="block max-w-none size-full" src={imgLine39} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-1758px] top-[6101.06px] w-[40px]"
          data-node-id="431:722"
        >
          <div className="absolute inset-[-3.94px_-12.35%_-5.94px_-12.35%]">
            <img alt="" className="block max-w-none size-full" src={imgLine52} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-1553px] top-[6101.06px] w-[40px]"
          data-node-id="431:730"
        >
          <div className="absolute inset-[-3.94px_-12.35%_-5.94px_-12.35%]">
            <img alt="" className="block max-w-none size-full" src={imgLine52} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-1345px] top-[6101.06px] w-[40px]"
          data-node-id="431:738"
        >
          <div className="absolute inset-[-3.94px_-12.35%_-5.94px_-12.35%]">
            <img alt="" className="block max-w-none size-full" src={imgLine52} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-1142px] top-[6101.06px] w-[40px]"
          data-node-id="431:746"
        >
          <div className="absolute inset-[-3.94px_-12.35%_-5.94px_-12.35%]">
            <img alt="" className="block max-w-none size-full" src={imgLine52} />
          </div>
        </div>
        <div className="absolute h-0 left-[-939px] top-[6101.06px] w-[40px]" data-node-id="431:754">
          <div className="absolute inset-[-3.94px_-12.35%_-5.94px_-12.35%]">
            <img alt="" className="block max-w-none size-full" src={imgLine52} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-735px] top-[6100.06px] w-[44px]"
          data-node-id="431:1463"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-528px] top-[6100.06px] w-[44px]"
          data-node-id="431:1475"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-321px] top-[6100.06px] w-[44px]"
          data-node-id="431:1487"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[-114px] top-[6100.06px] w-[44px]"
          data-node-id="431:1499"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div className="absolute h-0 left-[84px] top-[6386.06px] w-[44px]" data-node-id="431:1511">
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div className="absolute h-0 left-[289px] top-[6386.06px] w-[44px]" data-node-id="431:5282">
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div className="absolute h-0 left-[494px] top-[6386.06px] w-[44px]" data-node-id="431:5294">
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div className="absolute h-0 left-[699px] top-[6386.06px] w-[44px]" data-node-id="431:5306">
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div className="absolute h-0 left-[904px] top-[6386.06px] w-[44px]" data-node-id="431:5318">
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[1109px] top-[6386.06px] w-[44px]"
          data-node-id="431:5330"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[1109px] top-[6386.06px] w-[44px]"
          data-node-id="431:5342"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[1314px] top-[6386.06px] w-[44px]"
          data-node-id="431:7854"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[1528px] top-[6100.06px] w-[44px]"
          data-node-id="431:7866"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[1733px] top-[6100.06px] w-[44px]"
          data-node-id="431:7878"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[1938px] top-[6100.06px] w-[44px]"
          data-node-id="431:7890"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[2143px] top-[6100.06px] w-[44px]"
          data-node-id="431:7902"
        >
          <div className="absolute inset-[-3.94px_-11.23%_-5.94px_-11.23%]">
            <img alt="" className="block max-w-none size-full" src={imgLine55} />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[172.24px] left-[81.06px] rounded-[16.94px] top-[843.06px] w-[302.102px]"
        data-node-id="440:14062"
        data-name="Formal Portrait on Gray 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
          src={imgFormalPortraitOnGray1}
        />
      </div>
      <a
        href="#home"
        aria-label="HRWala home"
        className="absolute h-[56px] left-[72.06px] top-[20.06px] w-[190px] design-header-logo"
        data-node-id="469:14184"
        data-name="HRwala-full-blue-gold 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgHRwalaFullBlueGold1}
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
          src={imgMaroonBlazerPortraitOnPaleBlue1}
        />
      </div>
      <div className="absolute contents left-[72.06px] top-[2052.06px]" data-node-id="524:715">
        <p
          className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[50.824px] leading-[0] left-[82.71px] not-italic text-[0px] text-black top-[calc(50%-1612px)] tracking-[-2.2588px] w-[302.118px]"
          data-node-id="242:251"
        >
          <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">Future</span>
          <span className="leading-[normal] text-[37.647px]">{` `}</span>
          <span className="leading-[normal] text-[#0144ab] text-[37.647px]">Academy</span>
        </p>
        <div className="absolute contents left-[80.82px] top-[2118.65px]" data-node-id="247:337">
          <div className="absolute contents left-[88.35px] top-[2118.65px]" data-node-id="247:299">
            <div
              className="[word-break:break-word] absolute contents font-['Poppins:Bold'] left-[88.35px] not-italic top-[2118.65px]"
              data-node-id="247:296"
            >
              <div
                className="-translate-y-1/2 absolute flex flex-col h-[66.824px] justify-center leading-[0] left-[88.35px] opacity-10 text-[#0144ab] text-[62.118px] text-justify top-[2152.06px] tracking-[-1.2424px] w-[73.412px]"
                data-node-id="245:284"
              >
                <p className="leading-[normal]">01</p>
              </div>
              <p
                className="absolute h-[42.353px] leading-[normal] left-[105.29px] text-[#f6ac04] text-[25.412px] top-[calc(50%-1529.18px)] tracking-[-1.5247px] w-[177.882px]"
                data-node-id="245:286"
              >
                Get Certified
              </p>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[120.471px] leading-[19.765px] left-[80.82px] not-italic text-[#757575] text-[15.059px] text-justify top-[2185.47px] tracking-[-0.3012px] w-[353.882px]"
            data-node-id="247:335"
          >
            Earn respected HR credentials that validate your knowledge and strengthen your
            professional profile. Learn practical, in-demand skills from experienced practitioners
            and build the confidence to take the next step in your HR career.
          </p>
        </div>
        <div className="absolute contents left-[558px] top-[2118.65px]" data-node-id="247:338">
          <div className="absolute contents left-[565.53px] top-[2118.65px]" data-node-id="247:339">
            <div
              className="[word-break:break-word] absolute contents font-['Poppins:Bold'] left-[565.53px] not-italic top-[2118.65px]"
              data-node-id="247:340"
            >
              <div
                className="-translate-y-1/2 absolute flex flex-col h-[66.824px] justify-center leading-[0] left-[565.53px] opacity-10 text-[#0144ab] text-[62.118px] text-justify top-[2152.06px] tracking-[-1.2424px] w-[83.765px]"
                data-node-id="247:341"
              >
                <p className="leading-[normal]">02</p>
              </div>
              <p
                className="absolute h-[42.353px] leading-[normal] left-[589.06px] text-[#f6ac04] text-[25.412px] top-[calc(50%-1529.18px)] tracking-[-1.5247px] w-[177.882px]"
                dir="auto"
                data-node-id="247:342"
              >
                Get Noticed
              </p>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[120.471px] leading-[19.765px] left-[558px] not-italic text-[#757575] text-[15.059px] text-justify top-[2179.82px] tracking-[-0.3012px] w-[330.353px]"
            data-node-id="247:343"
          >
            Earn professional badges that highlight your verified HR skills and make your
            achievements easy for employers to recognise. Add them to your profile to build
            credibility and stand out in a competitive job market.
          </p>
        </div>
        <div className="absolute contents left-[1051.18px] top-[2118.65px]" data-node-id="247:344">
          <div
            className="absolute contents left-[1057.76px] top-[2118.65px]"
            data-node-id="247:345"
          >
            <div
              className="[word-break:break-word] absolute contents font-['Poppins:Bold'] left-[1057.76px] not-italic top-[2118.65px]"
              data-node-id="247:346"
            >
              <div
                className="-translate-y-1/2 absolute flex flex-col h-[66.824px] justify-center leading-[0] left-[1057.76px] opacity-10 text-[#0144ab] text-[62.118px] text-justify top-[2152.06px] tracking-[-1.2424px] w-[85.647px]"
                data-node-id="247:347"
              >
                <p className="leading-[normal]">03</p>
              </div>
              <p
                className="absolute h-[42.353px] leading-[normal] left-[1086px] text-[#f6ac04] text-[25.412px] top-[calc(50%-1529.18px)] tracking-[-1.5247px] w-[177.882px]"
                data-node-id="247:348"
              >
                Get Hired
              </p>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[120.471px] leading-[19.765px] left-[1051.18px] not-italic text-[#757575] text-[15.059px] text-justify top-[2179.82px] tracking-[-0.3012px] w-[304.941px]"
            data-node-id="247:349"
          >
            Put your HR skills and credentials to work when pursuing your next opportunity. Build
            the practical knowledge employers value, demonstrate your readiness, and take a
            confident step toward the role you want.
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[42.353px] leading-[normal] left-[77.06px] not-italic text-[#f6ac04] text-[25.412px] top-[calc(50%-1325.88px)] tracking-[-1.5247px] w-[313.412px]"
          dir="auto"
          data-node-id="247:356"
        >
          Professional Certification
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[42.353px] leading-[normal] left-[81.76px] not-italic text-[#f6ac04] text-[25.412px] top-[calc(50%-996.12px)] tracking-[-1.5247px] w-[313.412px]"
          dir="auto"
          data-node-id="256:2"
        >
          Professional Badges
        </p>
        <div
          className="absolute h-[201px] left-[74px] top-[2408.53px] w-[309px]"
          data-node-id="509:726"
          data-name="Complete HR certificate with blue-gold borders 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgCompleteHrCertificateWithBlueGoldBorders1}
          />
        </div>
        <div
          className="absolute h-[197px] left-[554px] top-[2412.53px] w-[309px]"
          data-node-id="509:730"
          data-name="Certified HR Business Partner Certificate 2"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgCertifiedHrBusinessPartnerCertificate2}
          />
        </div>
        <div
          className="absolute h-[119px] left-[73px] top-[2730.53px] w-[310px]"
          data-node-id="501:711"
          data-name="Ready to Serve HR credential badge-1 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgReadyToServeHrCredentialBadge11}
          />
        </div>
        <div
          className="absolute h-[119px] left-[554px] top-[2730.53px] w-[310px]"
          data-node-id="502:713"
          data-name="Skilled Professional HR Credential Badge-2 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgSkilledProfessionalHrCredentialBadge21}
          />
        </div>
        <div
          className="absolute h-[119px] left-[1046px] top-[2730.53px] w-[310px]"
          data-node-id="502:715"
          data-name="Featured Associate Credential Badge-3 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgFeaturedAssociateCredentialBadge31}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[19.765px] left-[1080px] not-italic text-[#757575] text-[15.059px] text-justify top-[2678.53px] tracking-[-0.3012px] whitespace-nowrap"
          data-node-id="509:721"
        >
          Learn Tech. Lead HR. Earn Your Badge.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[19.765px] left-[1170px] not-italic text-[#757575] text-[15.059px] text-justify top-[2347.53px] tracking-[-0.3012px] whitespace-nowrap"
          data-node-id="509:723"
        >
          Certified for the HR Future
        </p>
        <div
          className="absolute h-[203px] left-[1047px] top-[2406.53px] w-[309px]"
          data-node-id="509:732"
          data-name="Blue and Gold L&D Certificate 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgBlueAndGoldLDCertificate1}
          />
        </div>
      </div>
      <div
        className="absolute h-[169.904px] left-[1055.06px] rounded-[16.94px] top-[843.06px] w-[301.42px]"
        data-node-id="521:713"
        data-name="WhatsApp Video 2026-11-05 at 7.59.33 PM 1"
      />
      <div
        className="absolute h-[169.904px] left-[733.06px] rounded-[16.94px] top-[843.06px] w-[301.42px]"
        data-node-id="539:717"
        data-name="WhatsApp Video 2026-11-05 at 7.59.33 PM 2"
      />
      <div className="absolute contents left-[69.06px] top-[3988.06px]" data-node-id="169:4">
        <div className="industry-card-group" data-node-id="159:37">
          <div
            className="absolute bg-white h-[124px] left-[70px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4487px] w-[287px]"
            data-node-id="159:38"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[26.797px] leading-[normal] left-[94px] not-italic text-[#0144ab] text-[20.706px] top-[4505px] tracking-[-0.4141px] w-[169.717px]"
            data-node-id="159:40"
          >{`Resorts & Hotels`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[49.129px] leading-[normal] left-[90px] not-italic text-[#757575] text-[12.24px] text-justify top-[4537px] tracking-[-0.2448px] w-[234.924px]"
            data-node-id="159:41"
          >
            Elevate guest experiences with thoughtful hospitality, consistent service and
            distinctive branding.
          </p>
          <div
            className="absolute h-[4.094px] left-[153.81px] top-[4487.57px] w-[197.407px]"
            data-node-id="159:43"
          >
            <div className="absolute inset-[-34.47%_-0.72%_-34.48%_-0.72%]">
              <img alt="" className="block max-w-none size-full" src={imgLine10} />
            </div>
          </div>
          <div
            className="absolute flex h-[6.471px] items-center justify-center left-[72.97px] top-[4487.57px] w-[79.499px]"
            data-node-id="159:44"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.471px] relative w-[79.499px]">
                <div className="absolute inset-[-21.82%_-1.78%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine11} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:277">
          <div
            className="absolute bg-white h-[124px] left-[70.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4639px] w-[287px]"
            data-node-id="159:278"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25.306px] leading-[normal] left-[89.07px] not-italic text-[#0144ab] text-[20.706px] top-[4662.5px] tracking-[-0.4141px] w-[217.262px]"
            data-node-id="159:279"
          >{`Aviation & Travelling`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[46.395px] leading-[normal] left-[89.07px] not-italic text-[#757575] text-[12.235px] text-justify top-[4693.71px] tracking-[-0.2447px] w-[235.143px]"
            data-node-id="159:280"
          >
            Build passenger trust with attentive service, clear communication and consistent
            standards across journeys.
          </p>
          <div
            className="absolute h-[3.866px] left-[153.89px] top-[4639.77px] w-[197.592px]"
            data-node-id="159:281"
          >
            <div className="absolute inset-[-36.5%_-0.71%_-36.52%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine12} />
            </div>
          </div>
          <div
            className="absolute flex h-[6.111px] items-center justify-center left-[72.98px] top-[4639.77px] w-[79.573px]"
            data-node-id="159:282"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.111px] relative w-[79.573px]">
                <div className="absolute inset-[-23.1%_-1.77%_-23.11%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine13} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:301">
          <div
            className="absolute bg-white h-[124px] left-[70.29px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4791px] w-[287px]"
            data-node-id="159:302"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[25.306px] leading-[normal] left-[89.07px] not-italic text-[#0144ab] text-[20.706px] top-[4811.53px] tracking-[-0.4141px] w-[203.85px]"
            data-node-id="159:303"
          >{`Hospitals & Clinics`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[46.395px] leading-[normal] left-[89.07px] not-italic text-[#757575] text-[12.235px] text-justify top-[4842.74px] tracking-[-0.2447px] w-[235.143px]"
            data-node-id="159:304"
          >
            Build patient trust with caring teams, clear communication and consistent standards
            across facilities.
          </p>
          <div
            className="absolute h-[3.866px] left-[153.89px] top-[4791.77px] w-[197.592px]"
            data-node-id="159:305"
          >
            <div className="absolute inset-[-36.5%_-0.71%_-36.52%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine12} />
            </div>
          </div>
          <div
            className="absolute flex h-[6.111px] items-center justify-center left-[72.98px] top-[4791.77px] w-[79.573px]"
            data-node-id="159:306"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[6.111px] relative w-[79.573px]">
                <div className="absolute inset-[-23.1%_-1.77%_-23.11%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine13} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:45">
          <div
            className="absolute bg-white h-[124px] left-[402px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4486.35px] w-[287px]"
            data-node-id="159:46"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.198px] leading-[normal] left-[420.78px] not-italic text-[#0144ab] text-[20.706px] top-[4503.58px] tracking-[-0.4141px] w-[211.003px]"
            data-node-id="159:48"
          >{`Cafés & Restaurants`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[48.044px] leading-[normal] left-[420.8px] not-italic text-[#757575] text-[12.235px] text-justify top-[4534.99px] tracking-[-0.2447px] w-[234.785px]"
            data-node-id="159:49"
          >
            Build memorable dining experiences through consistent service, welcoming spaces and
            clear brand standards.
          </p>
          <div
            className="absolute h-[3.229px] left-[485.6px] top-[4487px] w-[197.592px]"
            data-node-id="159:51"
          >
            <div className="absolute inset-[-43.71%_-0.71%_-43.72%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine14} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.104px] items-center justify-center left-[404.68px] top-[4487px] w-[79.573px]"
            data-node-id="159:52"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.104px] relative w-[79.573px]">
                <div className="absolute inset-[-27.66%_-1.77%_-27.67%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:283">
          <div
            className="absolute bg-white h-[124px] left-[402px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4640px] w-[287px]"
            data-node-id="159:284"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.198px] leading-[normal] left-[420.78px] not-italic text-[#0144ab] text-[20.706px] top-[4659.2px] tracking-[-0.4141px] w-[268.224px]"
            data-node-id="159:285"
          >{`Event & Wedding Venues`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[38.75px] leading-[normal] left-[420.78px] not-italic text-[#757575] text-[12.235px] text-justify top-[4690.57px] tracking-[-0.2447px] w-[235.143px]"
            data-node-id="159:286"
          >
            Make every event special with skilled teams, warm service and clear brand standards.
          </p>
          <div
            className="absolute h-[3.229px] left-[485.6px] top-[4640.65px] w-[197.592px]"
            data-node-id="159:287"
          >
            <div className="absolute inset-[-43.71%_-0.71%_-43.72%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine16} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.104px] items-center justify-center left-[404.68px] top-[4640.65px] w-[79.573px]"
            data-node-id="159:288"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.104px] relative w-[79.573px]">
                <div className="absolute inset-[-27.66%_-1.77%_-27.67%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine17} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:307">
          <div
            className="absolute bg-white h-[124px] left-[402.07px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4794px] w-[287px]"
            data-node-id="159:308"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.198px] leading-[normal] left-[420.85px] not-italic text-[#0144ab] text-[18.824px] top-[4813.92px] tracking-[-0.3765px] w-[261.966px]"
            data-node-id="159:309"
          >{`Beauty & Aesthetic Clinics`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[38.75px] leading-[normal] left-[420.85px] not-italic text-[#757575] text-[12.235px] text-justify top-[4845.29px] tracking-[-0.2447px] w-[235.143px]"
            data-node-id="159:310"
          >
            Build client confidence with skilled teams, attentive service and consistent standards
            of care.
          </p>
          <div
            className="absolute h-[3.229px] left-[485.67px] top-[4794.65px] w-[197.592px]"
            data-node-id="159:311"
          >
            <div className="absolute inset-[-43.71%_-0.71%_-43.72%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine14} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.104px] items-center justify-center left-[404.76px] top-[4794.65px] w-[79.573px]"
            data-node-id="159:312"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.104px] relative w-[79.573px]">
                <div className="absolute inset-[-27.66%_-1.77%_-27.67%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:53">
          <div
            className="absolute bg-white h-[124px] left-[733px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4488px] w-[287px]"
            data-node-id="159:54"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.095px] leading-[normal] left-[752.52px] not-italic text-[#0144ab] text-[20.706px] top-[4505.14px] tracking-[-0.4141px] w-[235.263px]"
            data-node-id="159:56"
          >
            Serviced Apartments
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[53.431px] leading-[normal] left-[752.98px] not-italic text-[#757575] text-[12.235px] text-justify top-[4537.42px] tracking-[-0.2447px] w-[235.262px]"
            data-node-id="159:57"
          >
            Build guest trust with reliable service, clean spaces and a consistent brand experience.
          </p>
          <div
            className="absolute h-[3.518px] left-[816.93px] top-[4489.06px] w-[197.692px]"
            data-node-id="159:59"
          >
            <div className="absolute inset-[-40.12%_-0.71%_-40.13%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine18} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.561px] items-center justify-center left-[735.97px] top-[4489.06px] w-[79.614px]"
            data-node-id="159:60"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.561px] relative w-[79.614px]">
                <div className="absolute inset-[-25.39%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine19} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:289">
          <div
            className="absolute bg-white h-[124px] left-[733.71px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4639px] w-[287px]"
            data-node-id="159:290"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.198px] leading-[22.588px] left-[752.48px] not-italic text-[#0144ab] text-[17.882px] top-[4656.62px] tracking-[-0.3576px] w-[261.966px]"
            data-node-id="159:291"
          >{`Spa, Fitness Centers & Gyms`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[38.75px] leading-[normal] left-[752.48px] not-italic text-[#757575] text-[12.235px] text-justify top-[4686.29px] tracking-[-0.2447px] w-[235.143px]"
            data-node-id="159:292"
          >
            Build member trust with skilled teams, clean spaces and consistent care at every visit.
          </p>
          <div
            className="absolute h-[3.229px] left-[817.3px] top-[4639.65px] w-[197.592px]"
            data-node-id="159:293"
          >
            <div className="absolute inset-[-43.71%_-0.71%_-43.72%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine14} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.104px] items-center justify-center left-[736.39px] top-[4639.65px] w-[79.573px]"
            data-node-id="159:294"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.104px] relative w-[79.573px]">
                <div className="absolute inset-[-27.66%_-1.77%_-27.67%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:313">
          <div
            className="absolute bg-white h-[124px] left-[734px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4796px] w-[287px]"
            data-node-id="159:314"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.198px] leading-[normal] left-[752.78px] not-italic text-[#0144ab] text-[18.71px] top-[4813.43px] tracking-[-0.3742px] w-[253.025px]"
            data-node-id="159:315"
          >
            Retail Flagship Stores
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[59px] leading-[normal] left-[753.22px] not-italic text-[#757575] text-[12.235px] text-justify top-[4843.43px] tracking-[-0.2447px] w-[252px]"
            data-node-id="159:316"
          >
            Create memorable shopping experiences with attentive teams, inviting displays and
            consistent branding.
          </p>
          <div
            className="absolute h-[3.229px] left-[817.6px] top-[4796.65px] w-[197.592px]"
            data-node-id="159:317"
          >
            <div className="absolute inset-[-43.71%_-0.71%_-43.72%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine14} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.104px] items-center justify-center left-[736.68px] top-[4796.65px] w-[79.573px]"
            data-node-id="159:318"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.104px] relative w-[79.573px]">
                <div className="absolute inset-[-27.66%_-1.77%_-27.67%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:61">
          <div
            className="absolute bg-white h-[124px] left-[1059px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4486px] w-[287px]"
            data-node-id="159:62"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[22.931px] leading-[normal] left-[1077.48px] not-italic text-[#0144ab] text-[16.941px] top-[4505.84px] tracking-[-0.3388px] w-[268.057px]"
            data-node-id="159:64"
          >{`Private Schools & Academies`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[52.576px] leading-[normal] left-[1077.36px] not-italic text-[#757575] text-[12.235px] text-justify top-[4540.17px] tracking-[-0.2447px] w-[234.818px]"
            dir="auto"
            data-node-id="159:65"
          >
            Build parent trust with clear communication, caring staff and consistent standards
            across campus.
          </p>
          <div
            className="absolute h-[3.493px] left-[1142.26px] top-[4487.05px] w-[197.468px]"
            data-node-id="159:67"
          >
            <div className="absolute inset-[-40.4%_-0.71%_-40.42%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine20} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.521px] items-center justify-center left-[1061.4px] top-[4487.05px] w-[79.523px]"
            data-node-id="159:68"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.521px] relative w-[79.523px]">
                <div className="absolute inset-[-25.57%_-1.78%_-25.58%_-1.78%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine21} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:295">
          <div
            className="absolute bg-white h-[124px] left-[1058.71px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4639px] w-[287px]"
            data-node-id="159:296"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[21.198px] leading-[normal] left-[1077.48px] not-italic text-[#0144ab] text-[18.824px] top-[4656.89px] tracking-[-0.3765px] w-[261.966px]"
            data-node-id="159:297"
          >{`Banks & Financial Services`}</p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[38.75px] leading-[normal] left-[1077.48px] not-italic text-[#757575] text-[12.235px] text-justify top-[4688.26px] tracking-[-0.2447px] w-[235.143px]"
            dir="auto"
            data-node-id="159:298"
          >
            Build client trust with professional service, clear communication and consistent
            standards across branches.
          </p>
          <div
            className="absolute h-[3.229px] left-[1142.3px] top-[4639.65px] w-[197.592px]"
            data-node-id="159:299"
          >
            <div className="absolute inset-[-43.71%_-0.71%_-43.72%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine22} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.104px] items-center justify-center left-[1061.39px] top-[4639.65px] w-[79.573px]"
            data-node-id="159:300"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.104px] relative w-[79.573px]">
                <div className="absolute inset-[-27.66%_-1.77%_-27.67%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine23} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-card-group" data-node-id="159:319">
          <div
            className="absolute bg-white h-[124px] left-[1059px] rounded-[16.941px] shadow-[0.941px_1.882px_5.647px_1.882px_rgba(146,144,144,0.25)] top-[4791px] w-[287px]"
            data-node-id="159:320"
          />
          <p
            className="[word-break:break-word] absolute font-['Poppins:Bold'] h-[23.47px] leading-[normal] left-[1077.58px] not-italic text-[#0144ab] text-[18.71px] top-[4807.61px] tracking-[-0.3742px] w-[237.826px]"
            data-node-id="159:321"
          >
            Property Sales Galleries
          </p>
          <p
            className="[word-break:break-word] absolute font-['Poppins:Medium'] h-[42.902px] leading-[normal] left-[1077.58px] not-italic text-[#757575] text-[12.235px] text-justify top-[4842.34px] tracking-[-0.2447px] w-[235.143px]"
            dir="auto"
            data-node-id="159:322"
          >
            Build buyer confidence with informed teams, welcoming spaces and a consistent brand
            experience.
          </p>
          <div
            className="absolute h-[3.575px] left-[1142.4px] top-[4791.3px] w-[197.592px]"
            data-node-id="159:323"
          >
            <div className="absolute inset-[-39.48%_-0.71%_-39.49%_-0.71%]">
              <img alt="" className="block max-w-none size-full" src={imgLine24} />
            </div>
          </div>
          <div
            className="absolute flex h-[5.651px] items-center justify-center left-[1061.48px] top-[4791.3px] w-[79.573px]"
            data-node-id="159:324"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5.651px] relative w-[79.573px]">
                <div className="absolute inset-[-24.98%_-1.77%_-24.99%_-1.77%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine25} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[76.88px] top-[3989px]" data-node-id="205:14">
          <p
            className="[word-break:break-word] absolute font-['Poppins:ExtraBold'] h-[42.353px] leading-[0] left-[76.88px] not-italic text-[0px] text-black top-[calc(50%+324px)] tracking-[-2.2588px] w-[426.353px]"
            data-node-id="133:2"
          >
            <span className="leading-[normal] text-[#f6ac04] text-[37.647px]">Develop</span>
            <span className="leading-[normal] text-[37.647px]">{` `}</span>
            <span className="leading-[normal] text-[#0144ab] text-[37.647px]">Your Brand</span>
          </p>
          <div className="absolute contents left-[76.88px] top-[4062.18px]" data-node-id="244:253">
            <div
              className="absolute contents left-[76.88px] top-[4062.18px]"
              data-node-id="145:193"
            >
              <div
                className="absolute left-[76.88px] size-[69.647px] top-[4062.18px]"
                data-node-id="145:187"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse5}
                />
              </div>
              <div
                className="absolute left-[76.88px] size-[69.647px] top-[4196.76px]"
                data-node-id="145:189"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse5}
                />
              </div>
              <div
                className="absolute left-[76.88px] size-[69.647px] top-[4331.35px]"
                data-node-id="145:191"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse5}
                />
              </div>
              <div
                className="absolute flex h-[64.941px] items-center justify-center left-[111.71px] top-[4131.82px] w-0"
                data-node-id="145:188"
              >
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[64.941px]">
                    <div className="absolute inset-[-1.88px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine26} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute flex h-[64.941px] items-center justify-center left-[111.71px] top-[4266.41px] w-0"
                data-node-id="145:190"
              >
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[64.941px]">
                    <div className="absolute inset-[-1.88px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine27} />
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] left-[96.65px] not-italic text-[#f6ac04] text-[30.118px] text-justify top-[4074.41px] tracking-[-0.6024px] whitespace-nowrap"
                data-node-id="145:194"
              >
                01
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] left-[93.82px] not-italic text-[#f6ac04] text-[30.118px] text-justify top-[4209px] tracking-[-0.6024px] whitespace-nowrap"
                data-node-id="145:195"
              >
                02
              </p>
              <p
                className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[normal] left-[93.82px] not-italic text-[#f6ac04] text-[30.118px] text-justify top-[4343.59px] tracking-[-0.6024px] whitespace-nowrap"
                data-node-id="145:196"
              >
                03
              </p>
            </div>
            <div
              className="[word-break:break-word] absolute contents leading-[normal] left-[155px] not-italic text-justify top-[4062.18px] whitespace-nowrap"
              data-node-id="145:203"
            >
              <p
                className="absolute font-['Poppins:Medium'] left-[155px] text-[15.059px] text-black top-[4062.18px] tracking-[-0.3012px]"
                data-node-id="145:197"
              >
                Step 1
              </p>
              <p
                className="absolute font-['Poppins:SemiBold'] left-[155px] text-[#f6ac04] text-[16px] top-[4084.76px] tracking-[-0.32px]"
                data-node-id="145:198"
              >
                Assess the Guest Experience
              </p>
              <p
                className="absolute font-['Poppins:Medium'] left-[155px] text-[#757575] text-[11.294px] top-[4109.24px] tracking-[-0.2259px]"
                data-node-id="145:202"
              >
                Map each guest touchpoint and identify gaps in service.
              </p>
            </div>
            <div
              className="[word-break:break-word] absolute contents leading-[normal] left-[155px] not-italic text-justify top-[4199.59px] whitespace-nowrap"
              data-node-id="145:204"
            >
              <p
                className="absolute font-['Poppins:Medium'] left-[155px] text-[15.059px] text-black top-[4199.59px] tracking-[-0.3012px]"
                data-node-id="145:205"
              >
                Step 2
              </p>
              <p
                className="absolute font-['Poppins:SemiBold'] left-[155px] text-[#f6ac04] text-[16px] top-[4222.18px] tracking-[-0.32px]"
                data-node-id="145:206"
              >
                Define the Brand Standards
              </p>
              <p
                className="absolute font-['Poppins:Medium'] left-[155px] text-[#757575] text-[11.294px] top-[4246.65px] tracking-[-0.2259px]"
                data-node-id="145:207"
              >
                Create a hospitality blueprint for every guest touchpoint.
              </p>
            </div>
            <div
              className="[word-break:break-word] absolute contents leading-[normal] left-[155px] not-italic text-justify top-[4337px] whitespace-nowrap"
              data-node-id="145:208"
            >
              <p
                className="absolute font-['Poppins:Medium'] left-[155px] text-[15.059px] text-black top-[4337px] tracking-[-0.3012px]"
                data-node-id="145:209"
              >
                Step 3
              </p>
              <p
                className="absolute font-['Poppins:SemiBold'] left-[155px] text-[#f6ac04] text-[16px] top-[4359.59px] tracking-[-0.32px]"
                data-node-id="145:210"
              >
                Implement and Sustain the Standards
              </p>
              <p
                className="absolute font-['Poppins:Medium'] left-[155px] text-[#757575] text-[11.294px] top-[4384.06px] tracking-[-0.2259px]"
                data-node-id="145:211"
              >
                Train staff, redesign the guest journey, and audit service for consistency.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[396.24px] left-[651px] rounded-[16.94px] top-[4007px] w-[704.052px]"
          data-node-id="413:613"
          data-name="Mr. Farrukh-team 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.94px] size-full"
            src={imgMrFarrukhTeam1}
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3.765px_3.765px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}
