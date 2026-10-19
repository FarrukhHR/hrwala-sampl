import { useEffect, useMemo, useRef, useState } from "react"
import {
  candidates,
  heroImage,
  jobs,
  type Candidate,
  type Job,
  type Role,
} from "./data"

type Screen = "auth" | "home" | "portal"
type IconName = "arrow" | "bookmark" | "briefcase" | "calendar" | "check" | "chevron" | "close" | "document" | "download" | "edit" | "location" | "menu" | "search" | "settings" | "user"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    bookmark: (
      <path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.5L6 21Z" />
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    close: <path d="M18 6 6 18M6 6l12 12" />,
    document: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5" />
        <path d="M5 20h14" />
      </>
    ),
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({
  light = false,
  brandName = "HR Junction",
  inlineBold = false,
}: {
  light?: boolean
  brandName?: "HR Junction" | "HR Wala"
  inlineBold?: boolean
}) {
  return (
    <button
      className={`logo ${light ? "logo-light" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="HR Junction home"
    >
      <span className="logo-mark">
        <i />
        <i />
      </span>
      <span>
        {inlineBold ? <span className="fg-inline-bold">HR</span> : <strong>HR</strong>}{" "}
        {brandName === "HR Wala" ? "Wala" : "Junction"}
      </span>
    </button>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  type = "button",
  disabled,
  onClick,
  className = "",
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost" | "light"
  icon?: IconName
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {icon && <Icon name={icon} size={18} />}
      {children}
    </button>
  )
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  error?: string
  required?: boolean
}) {
  return (
    <label className="field">
      <span>
        {label}
        {required && <b> *</b>}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={!!error}
      />
      {error && <small className="error">{error}</small>}
    </label>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <span className="select-wrap">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <Icon name="chevron" size={17} />
      </span>
    </label>
  )
}

function CustomSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", close)
    document.addEventListener("keydown", escape)
    return () => {
      document.removeEventListener("mousedown", close)
      document.removeEventListener("keydown", escape)
    }
  }, [])
  return (
    <div className="field custom-select" ref={ref}>
      <span>{label}</span>
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (["Enter", " ", "ArrowDown"].includes(event.key)) {
            event.preventDefault()
            setOpen(true)
          }
        }}
      >
        {value}
        <Icon name="chevron" size={17} />
      </button>
      {open && (
        <div className="options" role="listbox">
          {options.map((option) => (
            <button
              role="option"
              aria-selected={value === option}
              key={option}
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
            >
              {option}
              {value === option && <Icon name="check" size={17} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Auth({
  onSuccess,
}: {
  onSuccess: (role: Role, name: string) => void
}) {
  const [mode, setMode] = useState<"signup" | "signin">("signup")
  const [role, setRole] = useState<Role>("candidate")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [terms, setTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (mode === "signup" && !name.trim())
      next.name = "Please enter your full name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address."
    if (password.length < 8) next.password = "Use at least 8 characters."
    if (mode === "signup" && confirm !== password)
      next.confirm = "Passwords do not match."
    if (mode === "signup" && !terms) next.terms = "Please agree to continue."
    setErrors(next)
    if (Object.keys(next).length) return
    setLoading(true)
    window.setTimeout(
      () =>
        onSuccess(
          role,
          name || (role === "candidate" ? "Ayesha Khan" : "Omar Siddiqui"),
        ),
      650,
    )
  }
  return (
    <main className="auth-page">
      <section className="auth-brand">
        <div className="auth-brand-inner">
          <Logo light brandName="HR Wala" />
          <div>
            <span className="eyebrow light">
              PAKISTAN’S PROFESSIONAL TALENT PLATFORM
            </span>
            <h1>Where talent meets opportunity.</h1>
            <p>
              Build professional connections that move careers and teams
              forward.
            </p>
          </div>
          <div className="auth-proof">
            <span>
              <Icon name="check" /> Professional profiles
            </span>
            <span>
              <Icon name="check" /> Relevant opportunities
            </span>
            <span>
              <Icon name="check" /> Structured hiring workflows
            </span>
          </div>
        </div>
      </section>
      <section className="auth-form-side">
        <form className="auth-card" onSubmit={submit} noValidate>
          <div className="mobile-auth-logo">
            <Logo brandName="HR Wala" />
          </div>
          <div className="auth-tabs">
            <button
              type="button"
              className={mode === "signup" ? "active" : ""}
              onClick={() => {
                setMode("signup")
                setErrors({})
              }}
            >
              Create account
            </button>
            <button
              type="button"
              className={mode === "signin" ? "active" : ""}
              onClick={() => {
                setMode("signin")
                setErrors({})
              }}
            >
              Sign in
            </button>
          </div>
          <div className="form-heading">
            <span className="eyebrow">
              {mode === "signup" ? "GET STARTED" : "WELCOME BACK"}
            </span>
            <h2>
              {mode === "signup"
                ? "Create your HR Wala account"
                : "Sign in to HR Junction"}
            </h2>
            <p>
              {mode === "signup"
                ? "Account setup takes less than a minute. Complete your professional profile later in My Portal."
                : "Use your demo account to continue to Home."}
            </p>
          </div>
          <fieldset className="role-choice">
            <legend>I’m joining as</legend>
            <button
              type="button"
              className={role === "candidate" ? "active" : ""}
              onClick={() => setRole("candidate")}
            >
              <Icon name="user" />
              <span>
                <b>Employee / Candidate</b>
                <small>Discover opportunities</small>
              </span>
            </button>
            <button
              type="button"
              className={role === "employer" ? "active" : ""}
              onClick={() => setRole("employer")}
            >
              <Icon name="briefcase" />
              <span>
                <b>Employer</b>
                <small>Find and hire talent</small>
              </span>
            </button>
          </fieldset>
          {mode === "signup" && (
            <Field
              label="Full name"
              value={name}
              onChange={setName}
              placeholder="Your full name"
              error={errors.name}
              required
            />
          )}
          <Field
            label="Email"
            value={email}
            onChange={setEmail}
            type="email"
            placeholder="name@example.com"
            error={errors.email}
            required
          />
          <div className={mode === "signup" ? "field-row" : ""}>
            <Field
              label="Password"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="At least 8 characters"
              error={errors.password}
              required
            />
            {mode === "signup" && (
              <Field
                label="Confirm password"
                value={confirm}
                onChange={setConfirm}
                type="password"
                placeholder="Repeat password"
                error={errors.confirm}
                required
              />
            )}
          </div>
          {mode === "signup" && (
            <label className="check-row">
              <input
                type="checkbox"
                checked={terms}
                onChange={(event) => setTerms(event.target.checked)}
              />
              <span>
                I agree to the Terms of Use and Privacy Policy.{" "}
                <small>Demo links; policy content pending.</small>
                {errors.terms && <b className="error">{errors.terms}</b>}
              </span>
            </label>
          )}
          <Button type="submit" disabled={loading} className="full">
            {loading
              ? "Creating demo session…"
              : mode === "signup"
                ? "Create account"
                : "Sign in"}
          </Button>
          <p className="demo-note">
            <Icon name="settings" size={16} /> Prototype access only.
            Authentication is simulated and passwords are never stored.
          </p>
        </form>
      </section>
    </main>
  )
}

function Header({
  role,
  name,
  onPortal,
  onSignOut,
}: {
  role: Role
  name: string
  onPortal: () => void
  onSignOut: () => void
}) {
  const [menu, setMenu] = useState(false)
  const [mobile, setMobile] = useState(false)
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobile(false)
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo brandName="HR Wala" inlineBold />
        <nav
          className={mobile ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          <button onClick={() => scroll("top")}>Discover</button>
          <button onClick={() => scroll("talent")}>Jobs</button>
          <button onClick={() => scroll("latest-jobs")}>Software</button>
          <button onClick={onPortal}>My Portal</button>
        </nav>
        <div className="profile-wrap">
          <button
            className="profile-trigger"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
          >
            <span className="avatar">{initials}</span>
            <span>
              <b>{name}</b>
              <small>{role === "candidate" ? "Candidate" : "Employer"}</small>
            </span>
            <Icon name="chevron" size={16} />
          </button>
          {menu && (
            <div className="profile-menu">
              <button onClick={onPortal}>
                <Icon name="edit" /> View / Edit Profile
              </button>
              <button onClick={onPortal}>
                <Icon name="briefcase" /> My Portal
              </button>
              <button onClick={onPortal}>
                <Icon name="settings" /> Settings
              </button>
              <hr />
              <button onClick={onSignOut}>Sign out</button>
            </div>
          )}
        </div>
        <button
          className="mobile-menu"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle navigation"
        >
          <Icon name={mobile ? "close" : "menu"} />
        </button>
      </div>
    </header>
  )
}

const heroSlides = [
  {
    kicker: "CAREERS & RECRUITMENT",
    title: "The right talent. The right opportunity.",
    body: "Build your professional profile, discover relevant jobs, and connect with employers across Pakistan.",
  },
  {
    kicker: "YOUR PROFESSIONAL STORY",
    title: "Build a profile that represents you.",
    body: "Showcase your experience, strengths, and career goals in one clear professional profile.",
  },
  {
    kicker: "SMARTER TEAM BUILDING",
    title: "Find people who fit your team.",
    body: "Review relevant talent, manage shortlists, and keep your hiring process moving.",
  },
]

function Hero() {
  const [slide, setSlide] = useState(0)
  const item = heroSlides[slide]
  const go = (offset: number) =>
    setSlide((slide + offset + heroSlides.length) % heroSlides.length)
  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="HR Junction highlights"
    >
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">{item.kicker}</span>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <div className="button-row">
            <Button
              onClick={() =>
                document
                  .getElementById("latest-jobs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Jobs
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("talent")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Find Talent
            </Button>
          </div>
          <div className="carousel-controls">
            <button onClick={() => go(-1)} aria-label="Previous slide">
              ←
            </button>
            <div>
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={slide === index ? "active" : ""}
                  onClick={() => setSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next slide">
              →
            </button>
          </div>
        </div>
        <div className="hero-art">
          <div className="arch arch-one" />
          <div className="arch arch-two" />
          <img
            src={heroImage}
            alt="Fictional Pakistani professional in a navy blazer"
          />
          {[
            "Candidate Profiles",
            "CV Submission",
            "HR Shortlisting",
            "Assessments",
            "Online Interviews",
            "Employer Access",
          ].map((label, index) => (
            <span key={label} className={`service-label label-${index + 1}`}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
  aside,
}: {
  eyebrow: string
  title: string
  body: string
  aside?: React.ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {aside}
    </div>
  )
}

function CandidateCard({
  person,
  onOpen,
}: {
  person: Candidate
  onOpen: () => void
}) {
  return (
    <article className="candidate-card">
      <div className="candidate-photo">
        <img src={person.image} alt={`${person.name}, ${person.designation}`} />
        {person.featured && <span className="badge">Featured</span>}
      </div>
      <div className="candidate-content">
        <h3>{person.name}</h3>
        <p className="designation">{person.designation}</p>
        <dl>
          <div>
            <dt>Skills</dt>
            <dd>{person.skills}</dd>
          </div>
          <div>
            <dt>Qualification</dt>
            <dd>{person.qualification}</dd>
          </div>
        </dl>
        <span className="meta">
          <Icon name="location" size={17} />
          {person.meta}
        </span>
        <p className="about">{person.about}</p>
        <Button variant="secondary" onClick={onOpen}>
          View Profile <Icon name="arrow" size={17} />
        </Button>
      </div>
    </article>
  )
}

function JobCard({
  job,
  onOpen,
  saved,
  onSave,
}: {
  job: Job
  onOpen: () => void
  saved: boolean
  onSave: () => void
}) {
  return (
    <article className="job-card">
      <div className="job-top">
        <span className="company-mark">{job.monogram}</span>
        <button
          className={saved ? "save active" : "save"}
          onClick={onSave}
          aria-label={saved ? "Remove saved job" : "Save job"}
        >
          <Icon name="bookmark" />
        </button>
      </div>
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <div className="job-tags">
        <span>
          <Icon name="location" size={16} />
          {job.location}
        </span>
        <span>
          <Icon name="briefcase" size={16} />
          {job.type}
        </span>
      </div>
      <p className="industry">
        {job.industry} · {job.category}
      </p>
      <p className="salary">{job.salary}</p>
      <p className="job-description">{job.description}</p>
      <div className="job-bottom">
        <span>{job.age}</span>
        <Button variant="secondary" onClick={onOpen}>
          View Job <Icon name="arrow" size={17} />
        </Button>
      </div>
    </article>
  )
}

function Drawer({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode
  onClose: () => void
  title: string
}) {
  useEffect(() => {
    const escape = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    document.addEventListener("keydown", escape)
    return () => document.removeEventListener("keydown", escape)
  }, [onClose])
  return (
    <div
      className="drawer-layer"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        className="drawer-backdrop"
        onClick={onClose}
        aria-label="Close drawer"
      />
      <aside className="drawer">
        <div className="drawer-head">
          <div>
            <span className="eyebrow">HR JUNCTION</span>
            <h2>{title}</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
        </div>
        {children}
      </aside>
    </div>
  )
}

function ProfileDrawer({
  person,
  onClose,
}: {
  person: Candidate
  onClose: () => void
}) {
  return (
    <Drawer title="Candidate profile" onClose={onClose}>
      <div className="drawer-profile">
        <img src={person.image} alt="" />
        <div>
          <h3>{person.name}</h3>
          <p>{person.designation}</p>
          <span>{person.meta}</span>
        </div>
      </div>
      <div className="drawer-section">
        <h4>Professional summary</h4>
        <p>{person.about}</p>
      </div>
      <div className="drawer-section">
        <h4>Core skills</h4>
        <span className="chip">{person.skills}</span>
      </div>
      <div className="drawer-section">
        <h4>Qualification</h4>
        <p>{person.qualification}</p>
      </div>
      <div className="notice">
        <Icon name="settings" />
        <p>
          Contact details and CV access are available only within authorized
          employer workflows. This prototype uses masked sample data.
        </p>
      </div>
      <Button className="full">Add to shortlist</Button>
    </Drawer>
  )
}

function JobDrawer({
  job,
  role,
  onClose,
  onApply,
}: {
  job: Job
  role: Role
  onClose: () => void
  onApply: () => void
}) {
  const [applied, setApplied] = useState(false)
  const apply = () => {
    setApplied(true)
    onApply()
  }
  return (
    <Drawer title={job.title} onClose={onClose}>
      <div className="drawer-company">
        <span className="company-mark large">{job.monogram}</span>
        <div>
          <h3>{job.company}</h3>
          <p>{job.industry}</p>
        </div>
      </div>
      <div className="job-tags large">
        <span>
          <Icon name="location" size={17} />
          {job.location}
        </span>
        <span>
          <Icon name="briefcase" size={17} />
          {job.type}
        </span>
      </div>
      <div className="drawer-section">
        <h4>About this role</h4>
        <p>
          {job.description} The selected professional will support structured
          people operations and collaborate with business leaders across the
          organization.
        </p>
      </div>
      <div className="drawer-section">
        <h4>Compensation</h4>
        <p className="salary">{job.salary}</p>
        <small>
          Illustrative demo listing; verify all details with the employer.
        </small>
      </div>
      {role === "candidate" ? (
        <Button className="full" disabled={applied} onClick={apply}>
          {applied ? "Application submitted" : "Apply with demo profile"}
        </Button>
      ) : (
        <div className="notice">
          <Icon name="briefcase" />
          <p>
            Employers can review this listing but cannot apply. Open My Portal
            to manage your own job posts.
          </p>
        </div>
      )}
    </Drawer>
  )
}

function Footer({ onPortal }: { onPortal: () => void }) {
  const pending = () =>
    window.alert(
      "Prototype content pending: live support and legal policy details are not configured.",
    )
  return (
    <footer className="footer container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>Connecting professionals and employers across Pakistan.</p>
          <span>Where talent meets opportunity.</span>
        </div>
        <div>
          <h4>Explore</h4>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </button>
          <button
            onClick={() =>
              document
                .getElementById("talent")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Find Talent
          </button>
          <button
            onClick={() =>
              document
                .getElementById("latest-jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Latest Jobs
          </button>
        </div>
        <div>
          <h4>Account</h4>
          <button onClick={onPortal}>My Profile</button>
          <button onClick={onPortal}>My Portal</button>
          <button onClick={onPortal}>Account Settings</button>
        </div>
        <div>
          <h4>Support</h4>
          <button onClick={pending}>Contact Support</button>
          <button onClick={pending}>Privacy Policy</button>
          <button onClick={pending}>Terms of Use</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 HR Junction. All rights reserved.</span>
        <span>Frontend prototype · Pakistan</span>
      </div>
    </footer>
  )
}

function Home({
  role,
  name,
  onPortal,
  onSignOut,
}: {
  role: Role
  name: string
  onPortal: () => void
  onSignOut: () => void
}) {
  const [functionFilter, setFunctionFilter] = useState("HR")
  const [category, setCategory] = useState("HR Management")
  const [jobType, setJobType] = useState("Full-time")
  const [location, setLocation] = useState("Lahore")
  const [jobCategory, setJobCategory] = useState("Human Resources (HR)")
  const [activeCandidate, setActiveCandidate] = useState<Candidate | null>(null)
  const [activeJob, setActiveJob] = useState<Job | null>(null)
  const [saved, setSaved] = useState<string[]>([])
  const [toast, setToast] = useState("")
  const categories =
    functionFilter === "HR"
      ? [
          "All HR Categories",
          "HR Management",
          "Talent Acquisition",
          "HR Operations",
          "Payroll & Benefits",
          "Learning & Development",
          "Employee Relations",
          "Compensation & Benefits",
        ]
      : [`All ${functionFilter} Categories`, `${functionFilter} Management`]
  const results =
    functionFilter === "HR" &&
    ["HR Management", "All HR Categories"].includes(category)
      ? candidates
      : []
  const filteredJobs = jobs.filter(
    (job) =>
      job.type === jobType &&
      job.location === location &&
      job.category === jobCategory,
  )
  const clearTalent = () => {
    setFunctionFilter("HR")
    setCategory("All HR Categories")
  }
  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 2600)
  }
  return (
    <div id="top">
      <Header
        role={role}
        name={name}
        onPortal={onPortal}
        onSignOut={onSignOut}
      />
      <Hero />
      <main>
        <section className="section container" id="talent">
          <SectionHeading
            eyebrow="TALENT DIRECTORY"
            title="Find the right talent"
            body="Explore professional profiles from across Pakistan and build a more focused shortlist."
            aside={
              <span className="result-pill">{results.length} profiles</span>
            }
          />
          <div className="filter-box">
            <SelectField
              label="Job Type"
              value={functionFilter}
              onChange={(value) => {
                setFunctionFilter(value)
                setCategory(
                  value === "HR" ? "HR Management" : `All ${value} Categories`,
                )
              }}
              options={["HR", "Finance", "IT", "Sales", "Operations"]}
            />
            <CustomSelect
              label="Choose Job Category"
              value={category}
              onChange={setCategory}
              options={categories}
            />
            <Button icon="search">Search Profiles</Button>
          </div>
          <div className="active-filters">
            <span>Active filters</span>
            <button>{functionFilter} ×</button>
            <button>{category} ×</button>
            <button className="clear" onClick={clearTalent}>
              Clear filters
            </button>
          </div>
          {results.length ? (
            <div className="candidate-grid">
              {results.map((person) => (
                <CandidateCard
                  key={person.name}
                  person={person}
                  onOpen={() => setActiveCandidate(person)}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <Icon name="search" size={28} />
              <h3>No profiles match these filters</h3>
              <p>
                Try selecting HR and HR Management to view the demo profiles.
              </p>
              <Button variant="secondary" onClick={clearTalent}>
                Reset filters
              </Button>
            </div>
          )}
        </section>
        <section className="section jobs-section" id="latest-jobs">
          <div className="container">
            <SectionHeading
              eyebrow="OPPORTUNITIES"
              title="Latest Jobs"
              body="Discover relevant roles from employers across Pakistan. All listings shown here are illustrative mock data."
              aside={<span className="demo-listing">Demo listings</span>}
            />
            <div className="filter-box job-filters">
              <SelectField
                label="Job Type"
                value={jobType}
                onChange={setJobType}
                options={["Full-time", "Part-time", "Contract", "Internship"]}
              />
              <SelectField
                label="Location"
                value={location}
                onChange={setLocation}
                options={[
                  "Lahore",
                  "Karachi",
                  "Islamabad",
                  "Rawalpindi",
                  "Faisalabad",
                  "Multan",
                  "Peshawar",
                ]}
              />
              <SelectField
                label="Category"
                value={jobCategory}
                onChange={setJobCategory}
                options={[
                  "Human Resources (HR)",
                  "Finance",
                  "IT",
                  "Sales",
                  "Operations",
                ]}
              />
              <Button icon="search">Search Jobs</Button>
            </div>
            <div className="results-line">
              <span>
                <b>{filteredJobs.length}</b> matching jobs
              </span>
              <button
                onClick={() => {
                  setJobType("Full-time")
                  setLocation("Lahore")
                  setJobCategory("Human Resources (HR)")
                }}
              >
                Reset filters
              </button>
            </div>
            {filteredJobs.length ? (
              <div className="jobs-grid">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.company}
                    job={job}
                    saved={saved.includes(job.company)}
                    onSave={() => {
                      setSaved((items) =>
                        items.includes(job.company)
                          ? items.filter((item) => item !== job.company)
                          : [...items, job.company],
                      )
                      notify(
                        saved.includes(job.company)
                          ? "Removed from saved jobs"
                          : "Job saved to My Portal",
                      )
                    }}
                    onOpen={() => setActiveJob(job)}
                  />
                ))}
              </div>
            ) : (
              <div className="empty">
                <Icon name="briefcase" size={28} />
                <h3>No jobs match all three filters</h3>
                <p>
                  Adjust employment type, city, or category to discover other
                  demo opportunities.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setJobType("Full-time")
                    setLocation("Lahore")
                    setJobCategory("Human Resources (HR)")
                  }}
                >
                  Show initial jobs
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer onPortal={onPortal} />
      {activeCandidate && (
        <ProfileDrawer
          person={activeCandidate}
          onClose={() => setActiveCandidate(null)}
        />
      )}
      {activeJob && (
        <JobDrawer
          job={activeJob}
          role={role}
          onClose={() => setActiveJob(null)}
          onApply={() => notify("Application added to My Portal")}
        />
      )}
      {toast && (
        <div className="toast">
          <Icon name="check" />
          {toast}
        </div>
      )}
    </div>
  )
}

const candidateNav = [
  "Overview",
  "My Profile",
  "CV & Introduction",
  "Applications",
  "Interviews",
  "Settings",
]
const employerNav = [
  "Overview",
  "Company Profile",
  "Job Posts",
  "Applications",
  "Shortlists",
  "Interviews",
  "Downloads",
  "Settings",
]

function PortalShell({
  role,
  name,
  active,
  setActive,
  onHome,
  children,
}: {
  role: Role
  name: string
  active: string
  setActive: (value: string) => void
  onHome: () => void
  children: React.ReactNode
}) {
  const nav = role === "candidate" ? candidateNav : employerNav
  return (
    <div className="portal-page">
      <header className="portal-header">
        <div className="container">
          <Logo />
          <button className="back-home" onClick={onHome}>
            ← Back to Home
          </button>
          <div className="portal-identity">
            <span className="avatar">
              {name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span>
              <b>{name}</b>
              <small>
                {role === "candidate" ? "Candidate Portal" : "Employer Portal"}
              </small>
            </span>
          </div>
        </div>
      </header>
      <div className="container portal-layout">
        <aside className="portal-sidebar">
          <div className="portal-title">
            <span className="eyebrow">
              {role === "candidate" ? "MY WORKSPACE" : "HIRING WORKSPACE"}
            </span>
            <h2>
              {role === "candidate" ? "Candidate Portal" : "Employer Portal"}
            </h2>
          </div>
          <nav>
            {nav.map((item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
              >
                <Icon
                  name={
                    item.includes("Profile")
                      ? "user"
                      : item === "Settings"
                        ? "settings"
                        : item === "Interviews"
                          ? "calendar"
                          : item === "Downloads"
                            ? "download"
                            : item === "Overview"
                              ? "briefcase"
                              : "document"
                  }
                />
                {item}
              </button>
            ))}
          </nav>
          <div className="demo-panel">
            <b>Demo workspace</b>
            <p>
              Changes stay in this browser session. No real files or personal
              data are uploaded.
            </p>
          </div>
        </aside>
        <div className="mobile-portal-nav">
          <label>
            Portal section
            <select
              value={active}
              onChange={(event) => setActive(event.target.value)}
            >
              {nav.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <main className="portal-content">{children}</main>
      </div>
    </div>
  )
}

function Status({
  children,
  tone = "blue",
}: {
  children: React.ReactNode
  tone?: "blue" | "green" | "amber" | "gray"
}) {
  return <span className={`status status-${tone}`}>{children}</span>
}

function CandidatePortal({
  name,
  onHome,
}: {
  name: string
  onHome: () => void
}) {
  const [active, setActive] = useState("Overview")
  const [editing, setEditing] = useState(false)
  const [saved, setSaved] = useState(false)
  const [file, setFile] = useState("")
  const [video, setVideo] = useState("")
  const [profile, setProfile] = useState({
    name,
    designation: "",
    function: "HR",
    category: "HR Management",
    skills: "",
    industry: "",
    years: "",
    qualification: "",
    city: "Lahore",
    about: "",
    email: "",
    phone: "",
  })
  const required = [
    "name",
    "designation",
    "skills",
    "years",
    "qualification",
    "city",
    "about",
    "email",
  ]
  const completion = Math.round(
    (required.filter((key) => profile[(key as keyof typeof profile)].trim())
      .length /
      required.length) *
      100,
  )
  const change = (key: keyof typeof profile, value: string) =>
    setProfile({ ...profile, [key]: value })
  const panelTitle = active
  return (
    <PortalShell
      role="candidate"
      name={name}
      active={active}
      setActive={setActive}
      onHome={onHome}
    >
      <div className="portal-heading">
        <div>
          <span className="eyebrow">EMPLOYEE / CANDIDATE</span>
          <h1>{panelTitle}</h1>
          <p>Manage your professional profile and opportunity activity.</p>
        </div>
        {active === "My Profile" && (
          <Button icon="edit" onClick={() => setEditing(!editing)}>
            {editing ? "Cancel editing" : "Edit profile"}
          </Button>
        )}
      </div>
      {active === "Overview" && (
        <div className="dashboard-grid">
          <section className="panel profile-summary">
            <div className="summary-person">
              <span className="profile-photo">
                <Icon name="user" size={32} />
              </span>
              <div>
                <h2>{name}</h2>
                <p>
                  {profile.designation ||
                    "Professional profile not yet completed"}
                </p>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            <div className="completion">
              <div>
                <b>Profile completion</b>
                <strong>{completion}%</strong>
              </div>
              <span>
                <i style={{ width: `${completion}%` }} />
              </span>
              <p>
                Complete required fields in My Profile to improve profile
                readiness. Video is never required.
              </p>
            </div>
            <Button variant="secondary" onClick={() => setActive("My Profile")}>
              Complete my profile
            </Button>
          </section>
          <section className="panel">
            <div className="panel-head">
              <div>
                <span className="eyebrow">NEXT STEP</span>
                <h2>Profile checklist</h2>
              </div>
            </div>
            <ul className="checklist">
              <li className={profile.designation ? "done" : ""}>
                <Icon name="check" />
                Professional details
              </li>
              <li className={file ? "done" : ""}>
                <Icon name="check" />
                CV added
              </li>
              <li>
                <Icon name="check" />
                Video introduction <small>Optional</small>
              </li>
            </ul>
          </section>
          <section className="panel span-2">
            <div className="panel-head">
              <div>
                <span className="eyebrow">ACTIVITY</span>
                <h2>Recent applications</h2>
              </div>
              <Button variant="ghost" onClick={() => setActive("Applications")}>
                View all
              </Button>
            </div>
            <div className="table-list">
              <div>
                <span className="company-mark">NT</span>
                <p>
                  <b>HR Manager</b>
                  <small>Northfield Technologies · Lahore</small>
                </p>
                <Status tone="amber">Under Review</Status>
              </div>
              <div>
                <span className="company-mark">CH</span>
                <p>
                  <b>Talent Acquisition Specialist</b>
                  <small>Cedar Hospitality Group · Lahore</small>
                </p>
                <Status tone="blue">Submitted</Status>
              </div>
            </div>
          </section>
        </div>
      )}
      {active === "My Profile" && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Professional profile</h2>
              <p>
                Account creation and professional profile completion are
                separate.
              </p>
            </div>
            <span className="result-pill">{completion}% complete</span>
          </div>
          <div className="profile-avatar-edit">
            <span className="profile-photo">
              <Icon name="user" size={34} />
            </span>
            <div>
              <Button variant="secondary">Choose photograph</Button>
              <small>Demo selection only · JPG or PNG</small>
            </div>
          </div>
          <div className="form-grid">
            {Object.entries({
              name: "Full name",
              designation: "Designation",
              function: "Job function",
              category: "Job category",
              skills: "Skills",
              industry: "Relevant industry experience",
              years: "Years of experience",
              qualification: "Qualification",
              city: "City",
              email: "Email",
              phone: "Phone",
            }).map(([key, label]) => (
              <Field
                key={key}
                label={label}
                value={profile[(key as keyof typeof profile)]}
                onChange={(value) => change(key as keyof typeof profile, value)}
                required={required.includes(key)}
              />
            ))}
            <label className="field full-grid">
              <span>About *</span>
              <textarea
                value={profile.about}
                onChange={(event) => change("about", event.target.value)}
                placeholder="Write a concise professional summary"
              />
            </label>
          </div>
          <div className="form-actions">
            <Button variant="ghost" onClick={() => setEditing(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setEditing(false)
                setSaved(true)
                window.setTimeout(() => setSaved(false), 2000)
              }}
            >
              {saved ? "Profile saved" : "Save changes"}
            </Button>
          </div>
        </section>
      )}
      {active === "CV & Introduction" && (
        <div className="dashboard-grid">
          <UploadPanel
            title="CV / Resume"
            body="Add a PDF or DOCX for employer workflows. No file is uploaded in this prototype."
            file={file}
            setFile={setFile}
          />
          <UploadPanel
            title="Short video introduction"
            body="A brief introduction can complement your profile, but it never affects profile completion."
            file={video}
            setFile={setVideo}
            optional
          />
        </div>
      )}
      {active === "Applications" && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Application history</h2>
              <p>Illustrative statuses for your demo applications.</p>
            </div>
          </div>
          <div className="table-list expanded">
            {[
              [
                "HR Manager",
                "Northfield Technologies",
                "Under Review",
                "amber",
              ],
              [
                "Talent Acquisition Specialist",
                "Cedar Hospitality Group",
                "Submitted",
                "blue",
              ],
              [
                "HR Generalist",
                "Crestline Manufacturing",
                "Shortlisted",
                "green",
              ],
              [
                "People Operations Specialist",
                "Urban Table Foods",
                "Interview Scheduled",
                "green",
              ],
            ].map((row) => (
              <div key={row[0]}>
                <span className="company-mark">
                  {row[1]
                    .split(" ")
                    .map((x) => x[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <p>
                  <b>{row[0]}</b>
                  <small>{row[1]} · Lahore</small>
                </p>
                <Status tone={row[3] as "blue"}>{row[2]}</Status>
              </div>
            ))}
          </div>
          <div className="saved-strip">
            <Icon name="bookmark" />
            <div>
              <b>Saved jobs</b>
              <p>2 demo roles saved for later.</p>
            </div>
            <Button variant="secondary">Review saved jobs</Button>
          </div>
        </section>
      )}
      {active === "Interviews" && (
        <section className="panel interview-card">
          <span className="calendar-block">
            <b>18</b>
            <small>JUN</small>
          </span>
          <div>
            <Status tone="green">Interview Scheduled</Status>
            <h2>HR Manager · Northfield Technologies</h2>
            <p>Wednesday, 18 June 2026 · 11:30 AM Pakistan Standard Time</p>
            <span className="muted">
              Online interview · Demo Zoom-link placeholder
            </span>
          </div>
          <Button disabled>Join meeting (demo)</Button>
        </section>
      )}
      {active === "Settings" && <SettingsPanel />}
    </PortalShell>
  )
}

function UploadPanel({
  title,
  body,
  file,
  setFile,
  optional,
}: {
  title: string
  body: string
  file: string
  setFile: (value: string) => void
  optional?: boolean
}) {
  return (
    <section className="panel upload-panel">
      <span className="upload-icon">
        <Icon name={optional ? "user" : "document"} size={28} />
      </span>
      <div>
        <h2>
          {title} {optional && <small className="optional">Optional</small>}
        </h2>
        <p>{body}</p>
      </div>
      <label className="upload-control">
        <input
          type="file"
          onChange={(event) => setFile(event.target.files?.[0]?.name || "")}
        />
        <span>{file ? file : "Choose a demo file"}</span>
      </label>
      {file && (
        <button className="text-button" onClick={() => setFile("")}>
          Remove selection
        </button>
      )}
    </section>
  )
}

function SettingsPanel() {
  return (
    <section className="panel">
      <h2>Account settings</h2>
      <p className="panel-intro">
        These controls demonstrate local UI states only.
      </p>
      <div className="settings-list">
        <label>
          <span>
            <b>Email notifications</b>
            <small>Application and interview updates</small>
          </span>
          <input type="checkbox" defaultChecked />
        </label>
        <label>
          <span>
            <b>Profile visibility</b>
            <small>Visible within authorized employer search</small>
          </span>
          <input type="checkbox" defaultChecked />
        </label>
        <label>
          <span>
            <b>Marketing updates</b>
            <small>Product news and career resources</small>
          </span>
          <input type="checkbox" />
        </label>
      </div>
      <Button>Save preferences</Button>
    </section>
  )
}

function EmployerPortal({ name, onHome }: { name: string; onHome: () => void }) {
  const [active, setActive] = useState("Overview")
  const [jobDrawer, setJobDrawer] = useState(false)
  const [shortlisted, setShortlisted] = useState<string[]>(["Sana Fatima"])
  const [scheduled, setScheduled] = useState(false)
  const candidateRows = candidates.slice(0, 4)
  const title = active
  return (
    <PortalShell
      role="employer"
      name={name}
      active={active}
      setActive={setActive}
      onHome={onHome}
    >
      <div className="portal-heading">
        <div>
          <span className="eyebrow">EMPLOYER</span>
          <h1>{title}</h1>
          <p>
            Manage roles and move candidates through a clear, human-led process.
          </p>
        </div>
        {["Overview", "Job Posts"].includes(active) && (
          <Button onClick={() => setJobDrawer(true)}>+ Post a job</Button>
        )}
      </div>
      {active === "Overview" && (
        <div className="dashboard-grid">
          <section className="panel span-2 company-summary">
            <span className="company-logo">NT</span>
            <div>
              <span className="eyebrow">COMPANY WORKSPACE</span>
              <h2>Northfield Technologies</h2>
              <p>IT / Technology · Lahore</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => setActive("Company Profile")}
            >
              Edit company profile
            </Button>
          </section>
          {[
            ["Active job posts", "3", "2 drafts"],
            ["New applications", "18", "This week"],
            ["Shortlisted", "6", "Human reviewed"],
            ["Interviews", "3", "Upcoming"],
          ].map((stat) => (
            <section className="panel metric" key={stat[0]}>
              <span>{stat[0]}</span>
              <strong>{stat[1]}</strong>
              <small>{stat[2]}</small>
            </section>
          ))}
          <section className="panel span-2">
            <div className="panel-head">
              <div>
                <span className="eyebrow">HIRING PIPELINE</span>
                <h2>HR Manager</h2>
              </div>
              <Status tone="green">Active</Status>
            </div>
            <div className="pipeline">
              {[
                ["Applications", "18"],
                ["HR Review", "9"],
                ["Shortlisted", "4"],
                ["Assessment", "Pending setup"],
                ["Interview", "2"],
              ].map((item) => (
                <div key={item[0]}>
                  <span>{item[0]}</span>
                  <b>{item[1]}</b>
                </div>
              ))}
            </div>
            <div className="notice">
              <Icon name="user" />
              <p>
                HR makes all selection decisions. Assessments are optional and
                remain pending provider configuration.
              </p>
            </div>
          </section>
        </div>
      )}
      {active === "Company Profile" && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Company profile</h2>
              <p>Details shown on your demo listings.</p>
            </div>
          </div>
          <div className="profile-avatar-edit">
            <span className="company-logo">NT</span>
            <div>
              <Button variant="secondary">Choose logo</Button>
              <small>Demo selection only</small>
            </div>
          </div>
          <div className="form-grid">
            <Field
              label="Company name"
              value="Northfield Technologies"
              onChange={() => {}}
            />
            <Field label="City" value="Lahore" onChange={() => {}} />
            <SelectField
              label="Industry"
              value="IT / Technology"
              onChange={() => {}}
              options={[
                "Real Estate",
                "Construction",
                "IT / Technology",
                "Manufacturing",
                "Hospitality",
                "Food & Beverage",
                "Restaurants",
                "Healthcare / Hospitals",
              ]}
            />
            <Field
              label="Hospitality detail (if applicable)"
              value=""
              placeholder="4-star / 5-star hotel"
              onChange={() => {}}
            />
          </div>
          <Button>Save company profile</Button>
        </section>
      )}
      {active === "Job Posts" && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Job posts</h2>
              <p>Published and draft demo listings.</p>
            </div>
          </div>
          <div className="table-list expanded">
            {jobs.slice(0, 3).map((job, index) => (
              <div key={job.title}>
                <span className="company-mark">{job.monogram}</span>
                <p>
                  <b>{job.title}</b>
                  <small>
                    {job.location} · {job.type}
                  </small>
                </p>
                <Status tone={index < 2 ? "green" : "gray"}>
                  {index < 2 ? "Active" : "Draft"}
                </Status>
                <button
                  className="icon-button"
                  onClick={() => setJobDrawer(true)}
                >
                  <Icon name="edit" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
      {["Applications", "Shortlists"].includes(active) && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>
                {active === "Applications"
                  ? "Received applications"
                  : "Shortlisted candidates"}
              </h2>
              <p>Review profiles and move candidates manually.</p>
            </div>
            <label className="compact-search">
              <Icon name="search" />
              <input placeholder="Filter candidates" />
            </label>
          </div>
          <div className="employer-candidates">
            {candidateRows
              .filter(
                (person) =>
                  active === "Applications" ||
                  shortlisted.includes(person.name),
              )
              .map((person, index) => (
                <div key={person.name}>
                  <img src={person.image} alt="" />
                  <p>
                    <b>{person.name}</b>
                    <small>
                      {person.designation} · {person.meta}
                    </small>
                  </p>
                  <Status tone={index === 0 ? "amber" : "blue"}>
                    {index === 0 ? "HR Review" : "Application Received"}
                  </Status>
                  <Button variant="ghost">Inspect profile</Button>
                  <Button
                    variant={
                      shortlisted.includes(person.name)
                        ? "secondary"
                        : "primary"
                    }
                    onClick={() =>
                      setShortlisted((list) =>
                        list.includes(person.name)
                          ? list.filter((item) => item !== person.name)
                          : [...list, person.name],
                      )
                    }
                  >
                    {shortlisted.includes(person.name)
                      ? "Remove shortlist"
                      : "Add shortlist"}
                  </Button>
                </div>
              ))}
          </div>
        </section>
      )}
      {active === "Interviews" && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Schedule interview</h2>
              <p>
                Pakistan Standard Time (PKT) is used for all demo scheduling.
              </p>
            </div>
          </div>
          <div className="form-grid">
            <SelectField
              label="Candidate"
              value="Sana Fatima"
              onChange={() => {}}
              options={shortlisted}
            />
            <Field
              label="Date"
              value="2026-06-18"
              onChange={() => {}}
              type="date"
            />
            <Field
              label="Pakistan time"
              value="11:30"
              onChange={() => {}}
              type="time"
            />
            <Field
              label="Meeting link"
              value="https://zoom.example/demo-placeholder"
              onChange={() => {}}
            />
          </div>
          <Button onClick={() => setScheduled(true)}>
            {scheduled ? "Interview scheduled" : "Schedule demo interview"}
          </Button>
          {scheduled && (
            <div className="success-box">
              <Icon name="check" />
              Demo interview added. No live Zoom meeting was created.
            </div>
          )}
        </section>
      )}
      {active === "Downloads" && (
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Candidate materials</h2>
              <p>
                Masked sample records within an authorized employer workflow.
              </p>
            </div>
          </div>
          <div className="table-list expanded">
            {candidates.slice(0, 3).map((person) => (
              <div key={person.name}>
                <span className="profile-mini">
                  <Icon name="user" />
                </span>
                <p>
                  <b>{person.name}</b>
                  <small>CV and contact materials · Sample only</small>
                </p>
                <Button variant="secondary" disabled>
                  <Icon name="download" /> Demo download
                </Button>
              </div>
            ))}
          </div>
          <div className="notice">
            <Icon name="settings" />
            <p>
              Real downloads and access controls require backend authorization
              and payment policy configuration.
            </p>
          </div>
        </section>
      )}
      {active === "Settings" && (
        <>
          <SettingsPanel />
          <section className="panel billing">
            <div>
              <span className="eyebrow">PENDING CONFIGURATION</span>
              <h2>Billing and access</h2>
              <p>
                Card / Bank Transfer options may be supported in a future
                production workflow.
              </p>
            </div>
            <div className="billing-options">
              <button disabled>Card</button>
              <button disabled>Bank Transfer</button>
            </div>
            <div className="amount">
              <span>Amount summary</span>
              <b>Pricing to be confirmed</b>
            </div>
            <Button disabled>Continue to payment</Button>
          </section>
        </>
      )}
      {jobDrawer && <JobPostDrawer onClose={() => setJobDrawer(false)} />}
    </PortalShell>
  )
}

function JobPostDrawer({ onClose }: { onClose: () => void }) {
  const [saved, setSaved] = useState(false)
  const [title, setTitle] = useState("")
  return (
    <Drawer title="Create job post" onClose={onClose}>
      <p className="drawer-intro">
        Add a frontend-only demo listing. Publishing is simulated.
      </p>
      <div className="drawer-form">
        <Field label="Job title" value={title} onChange={setTitle} required />
        <SelectField
          label="Employment type"
          value="Full-time"
          onChange={() => {}}
          options={["Full-time", "Part-time", "Contract", "Internship"]}
        />
        <SelectField
          label="Category"
          value="Human Resources (HR)"
          onChange={() => {}}
          options={[
            "Human Resources (HR)",
            "Finance",
            "IT",
            "Sales",
            "Operations",
          ]}
        />
        <Field label="Location" value="Lahore" onChange={() => {}} />
        <Field
          label="Salary range"
          value=""
          onChange={() => {}}
          placeholder="PKR range / month"
        />
        <label className="field">
          <span>Description</span>
          <textarea placeholder="Role responsibilities and requirements" />
        </label>
      </div>
      <Button className="full" disabled={!title} onClick={() => setSaved(true)}>
        {saved ? "Demo job saved" : "Save demo job"}
      </Button>
      {!title && (
        <small className="error block">
          Job title is required before saving.
        </small>
      )}
    </Drawer>
  )
}

export default function App() {
  const existing = sessionStorage.getItem("hrj-session")
  const initial = existing
    ? JSON.parse(existing) as { role: Role; name: string }
    : null
  const [screen, setScreen] = useState<Screen>(initial ? "home" : "auth")
  const [role, setRole] = useState<Role>(initial?.role || "candidate")
  const [name, setName] = useState(initial?.name || "")
  const authenticate = (nextRole: Role, nextName: string) => {
    setRole(nextRole)
    setName(nextName)
    sessionStorage.setItem(
      "hrj-session",
      JSON.stringify({ role: nextRole, name: nextName }),
    )
    setScreen("home")
  }
  const signOut = () => {
    sessionStorage.removeItem("hrj-session")
    setScreen("auth")
  }
  if (screen === "auth") return <Auth onSuccess={authenticate} />
  if (screen === "portal")
    return role === "candidate" ? (
      <CandidatePortal name={name} onHome={() => setScreen("home")} />
    ) : (
      <EmployerPortal name={name} onHome={() => setScreen("home")} />
    )
  return (
    <Home
      role={role}
      name={name}
      onPortal={() => setScreen("portal")}
      onSignOut={signOut}
    />
  )
}
