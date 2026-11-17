import { useEffect, useLayoutEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CitySelect from './CitySelect';
import { demoJobs, filterJobs, type Job } from './jobs';
import { loadPublishedJobs, sendInquiry, subscribe } from './backend';
import { pakistanCities } from './pakistanCities';
import { useInstallApp } from './pwa';
import './job-portal.css';
import SiteHeader from '../SiteHeader';
import VideoPopup from "../VideoPopup";
const base = '/hrwala-job-portal/assets/';
const asset = (name: string) => base + name;
const featuredEmployees = [
  ["Amaan", "Amaan.mp4", "Creative Designer Professional with 6+ years of experience managing international projects, creative teams, client relationships, technical production, and cross-functional delivery operations."],
  ["Ayesha Tariq", "Ayesha Tariq.mp4", "HR professional with experience in recruitment, onboarding, HRIS, employee records, administration and people management across retail, hospitality, events and technology sectors."],
  ["Chef Zaheer", "Chef Zaheer.mp4", "Executive Chef with 24+ years leading luxury hotel, resort, and Michelin-starred culinary operations worldwide, driving revenue growth, cost control, and world-class guest experience."],
  ["Fatma Tariq", "Fatma Tariq.mp4", "Fashion marketing and merchandising graduate with social content experience at LAAM, blending trend insight, data skills, and a self-taught artist’s creative eye."],
  ["Imaan Rao", "Imaan Rao.mp4", "Investment and real estate professional with UAE experience, specializing in strategic advisory, property consultancy, media marketing, client relations, and bilingual communication, seeking new opportunities."],
  ["Musician Zahid Shah", "Amaan.mp4", "Musician, Poianist, Vocalist, Hotel Lobbies, Music Nights, Events."],
  ["Rana Azeem", "Ayesha Tariq.mp4", "Culinary Professional | Brand Ambassador", "Cluster Executive Chef, Culinary Professional, and Brand Ambassador overseeing culinary operations across the Central Region."],
  ["Munir Ahmad", "Chef Zaheer.mp4", "Seasoned Financial Controller", "Seasoned Financial Controller with over 20 years of experience in manufacturing finance, financial management, cost control, and compliance."],
  ["Mian Asif", "Fatma Tariq.mp4", "Corporate Lawyer", "Legal professional with 25 years of experience in criminal, civil, and corporate law."],
  ["Qamar Butt", "Imaan Rao.mp4", "Strategic Hospitality & F&B Leader", "Head of F&B with over 27 years of experience in hospitality operations, business development, and guest service. Holds an MBA and an MS in HRM."],
  ["Arjumand Saqib", "Amaan.mp4", "Cyber Security Specialist", "Information technology and cybersecurity specialist with a background at Stanford University in the U.S."],
  ["Hussain Raza", "Ayesha Tariq.mp4", "Web & Application Developer", "Web & Application Developer with 3 years of experience in digital solutions. Founder of Hoverizon Tech Solutions, helping businesses strengthen their digital presence."],
];
const areaCities = [
  'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Hyderabad', 'Hunza',
  'Gilgit', 'Skardu', 'Muzaffarabad', 'Sukkur',
];
const sectors = ['Business Development', 'Information Technology', 'Manufacturing', 'Recruitment', 'Services', 'Education', 'Banking', 'Real Estate', 'Healthcare', 'Insurance', 'N.G.O.', 'Retail', 'Accounting', 'Travel', 'Call Center', 'Construction', 'BPO', 'Consultants', 'Electronics'];
const roleTitles = `
Accounts Executive
Accounts Officer
Admin Executive
Admin Officer
Area Manager Admin
Area Manager Business Development
Area Manager Commercial
Area Manager Credit
Area Manager Distribution
Area Manager Finance
Area Manager HR
Area Manager Logistics
Area Manager Marketing
Area Manager Operations
Area Manager Procurement
Area Manager Production
Area Manager Recruitment
Area Manager Retail
Area Manager Sales
Area Manager Technical
Assistant Director Admin
Assistant Director Audit
Assistant Director Business Development
Assistant Director Commercial
Assistant Director Compliance
Assistant Director Distribution
Assistant Director Engineering
Assistant Director F&B
Assistant Director Finance
Assistant Director HR
Assistant Director IT
Assistant Director Legal
Assistant Director Logistics
Assistant Director Maintenance
Assistant Director Marketing
Assistant Director Operations
Assistant Director Planning
Assistant Director Procurement
Assistant Director Production
Assistant Director Projects
Assistant Director Quality
Assistant Director Retail
Assistant Director Risk
Assistant Director Rooms
Assistant Director Sales
Assistant Director Strategy
Assistant Director Supply Chain
Assistant Director Technical
Assistant Director Training
Assistant Director Treasury
Assistant Manager Accounts
Assistant Manager Admin
Assistant Manager Audit
Assistant Manager Banquets
Assistant Manager Brand
Assistant Manager Business Development
Assistant Manager Commercial
Assistant Manager Communications
Assistant Manager Compliance
Assistant Manager Credit
Assistant Manager Customer Care
Assistant Manager Digital
Assistant Manager Distribution
Assistant Manager Engineering
Assistant Manager F&B
Assistant Manager Finance
Assistant Manager Front Office
Assistant Manager Housekeeping
Assistant Manager HR
Assistant Manager IT
Assistant Manager Legal
Assistant Manager Logistics
Assistant Manager Maintenance
Assistant Manager Marketing
Assistant Manager Operations
Assistant Manager Payroll
Assistant Manager Planning
Assistant Manager Procurement
Assistant Manager Production
Assistant Manager Projects
Assistant Manager Quality
Assistant Manager Recruitment
Assistant Manager Reservations
Assistant Manager Retail
Assistant Manager Revenue
Assistant Manager Risk
Assistant Manager Rooms
Assistant Manager Safety
Assistant Manager Sales
Assistant Manager Security
Assistant Manager Store
Assistant Manager Strategy
Assistant Manager Supply Chain
Assistant Manager Tax
Assistant Manager Technical
Assistant Manager Training
Assistant Manager Treasury
Assistant Manager Warehouse
Audit Executive
Audit Officer
Banquet Manager
Bar Manager
Barista
Bartender
Bell Captain
Business Analyst
Business Development Executive
Business Development Officer
Cashier
Chef de Partie
Chief Accountant
Chief Commercial Officer
Chief Compliance Officer
Chief Engineer
Chief Executive Officer
Chief Financial Officer
Chief HR Officer
Chief Information Officer
Chief Internal Auditor
Chief Legal Officer
Chief Marketing Officer
Chief of Operations
Chief of Sales
Chief of Staff
Chief Operating Officer
Chief Risk Officer
Chief Sales Officer
Chief Security Officer
Chief Steward
Chief Strategy Officer
Chief Technology Officer
Commercial Executive
Commercial Officer
Commis Chef
Company Secretary
Compliance Executive
Compliance Officer
Concierge
Content Writer
Country Manager Admin
Country Manager Business Development
Country Manager Commercial
Country Manager Credit
Country Manager Distribution
Country Manager Finance
Country Manager HR
Country Manager Logistics
Country Manager Marketing
Country Manager Operations
Country Manager Procurement
Country Manager Production
Country Manager Recruitment
Country Manager Retail
Country Manager Sales
Country Manager Technical
Credit Executive
Credit Officer
Customer Care Executive
Customer Care Officer
Data Analyst
Deputy Director Admin
Deputy Director Audit
Deputy Director Business Development
Deputy Director Commercial
Deputy Director Compliance
Deputy Director Distribution
Deputy Director Engineering
Deputy Director F&B
Deputy Director Finance
Deputy Director HR
Deputy Director IT
Deputy Director Legal
Deputy Director Logistics
Deputy Director Maintenance
Deputy Director Marketing
Deputy Director Operations
Deputy Director Planning
Deputy Director Procurement
Deputy Director Production
Deputy Director Projects
Deputy Director Quality
Deputy Director Retail
Deputy Director Risk
Deputy Director Rooms
Deputy Director Sales
Deputy Director Strategy
Deputy Director Supply Chain
Deputy Director Technical
Deputy Director Training
Deputy Director Treasury
Deputy Manager Accounts
Deputy Manager Admin
Deputy Manager Audit
Deputy Manager Banquets
Deputy Manager Brand
Deputy Manager Business Development
Deputy Manager Commercial
Deputy Manager Communications
Deputy Manager Compliance
Deputy Manager Credit
Deputy Manager Customer Care
Deputy Manager Digital
Deputy Manager Distribution
Deputy Manager Engineering
Deputy Manager F&B
Deputy Manager Finance
Deputy Manager Front Office
Deputy Manager Housekeeping
Deputy Manager HR
Deputy Manager IT
Deputy Manager Legal
Deputy Manager Logistics
Deputy Manager Maintenance
Deputy Manager Marketing
Deputy Manager Operations
Deputy Manager Payroll
Deputy Manager Planning
Deputy Manager Procurement
Deputy Manager Production
Deputy Manager Projects
Deputy Manager Quality
Deputy Manager Recruitment
Deputy Manager Reservations
Deputy Manager Retail
Deputy Manager Revenue
Deputy Manager Risk
Deputy Manager Rooms
Deputy Manager Safety
Deputy Manager Sales
Deputy Manager Security
Deputy Manager Store
Deputy Manager Strategy
Deputy Manager Supply Chain
Deputy Manager Tax
Deputy Manager Technical
Deputy Manager Training
Deputy Manager Treasury
Deputy Manager Warehouse
Director Admin
Director Audit
Director Business Development
Director Commercial
Director Compliance
Director Distribution
Director Engineering
Director F&B
Director Finance
Director HR
Director IT
Director Legal
Director Logistics
Director Maintenance
Director Marketing
Director Operations
Director Planning
Director Procurement
Director Production
Director Projects
Director Quality
Director Retail
Director Risk
Director Rooms
Director Sales
Director Strategy
Director Supply Chain
Director Technical
Director Training
Director Treasury
Doorman
Driver
Duty Manager
Executive Assistant
Executive Chef
Executive Director
Executive Housekeeper
Finance Executive
Finance Officer
Financial Controller
General Manager Accounts
General Manager Admin
General Manager Audit
General Manager Banquets
General Manager Brand
General Manager Business Development
General Manager Commercial
General Manager Communications
General Manager Compliance
General Manager Credit
General Manager Customer Care
General Manager Digital
General Manager Distribution
General Manager Engineering
General Manager F&B
General Manager Finance
General Manager Front Office
General Manager Housekeeping
General Manager HR
General Manager IT
General Manager Legal
General Manager Logistics
General Manager Maintenance
General Manager Marketing
General Manager Operations
General Manager Payroll
General Manager Planning
General Manager Procurement
General Manager Production
General Manager Projects
General Manager Quality
General Manager Recruitment
General Manager Reservations
General Manager Retail
General Manager Revenue
General Manager Risk
General Manager Rooms
General Manager Safety
General Manager Sales
General Manager Security
General Manager Store
General Manager Strategy
General Manager Supply Chain
General Manager Tax
General Manager Technical
General Manager Training
General Manager Treasury
General Manager Warehouse
Graphic Designer
Guest Relations
Head Admin
Head Audit
Head Business Development
Head Chef
Head Commercial
Head Compliance
Head Distribution
Head Engineering
Head F&B
Head Finance
Head HR
Head IT
Head Legal
Head Logistics
Head Maintenance
Head Marketing
Head Operations
Head Planning
Head Procurement
Head Production
Head Projects
Head Quality
Head Retail
Head Risk
Head Rooms
Head Sales
Head Strategy
Head Supply Chain
Head Technical
Head Training
Head Treasury
Head Waiter
Hostess
HR Executive
HR Officer
IT Executive
IT Officer
Kitchen Manager
Laundry Manager
Lecturer
Legal Executive
Legal Officer
Logistics Executive
Logistics Officer
Manager Accounts
Manager Admin
Manager Audit
Manager Banquets
Manager Brand
Manager Business Development
Manager Commercial
Manager Communications
Manager Compliance
Manager Credit
Manager Customer Care
Manager Digital
Manager Distribution
Manager Engineering
Manager F&B
Manager Finance
Manager Front Office
Manager Housekeeping
Manager HR
Manager IT
Manager Legal
Manager Logistics
Manager Maintenance
Manager Marketing
Manager Operations
Manager Payroll
Manager Planning
Manager Procurement
Manager Production
Manager Projects
Manager Quality
Manager Recruitment
Manager Reservations
Manager Retail
Manager Revenue
Manager Risk
Manager Rooms
Manager Safety
Manager Sales
Manager Security
Manager Store
Manager Strategy
Manager Supply Chain
Manager Tax
Manager Technical
Manager Training
Manager Treasury
Manager Warehouse
Managing Director
Marketing Executive
Marketing Officer
Medical Officer
Medical Representative
Merchandiser
Night Auditor
Night Manager
Operations Executive
Operations Officer
Pastry Chef
Payroll Executive
Payroll Officer
President
Principal
Procurement Executive
Procurement Officer
Production Executive
Production Officer
Project Engineer
Projects Executive
Projects Officer
Quality Executive
Quality Officer
Receptionist
Recruitment Executive
Recruitment Officer
Regional Manager Admin
Regional Manager Business Development
Regional Manager Commercial
Regional Manager Credit
Regional Manager Distribution
Regional Manager Finance
Regional Manager HR
Regional Manager Logistics
Regional Manager Marketing
Regional Manager Operations
Regional Manager Procurement
Regional Manager Production
Regional Manager Recruitment
Regional Manager Retail
Regional Manager Sales
Regional Manager Technical
Registrar
Restaurant Manager
Risk Executive
Risk Officer
Room Attendant
Safety Executive
Safety Officer
Sales Executive
Sales Officer
Secretary
Security Executive
Security Guard
Security Officer
Senior Accounts Executive
Senior Accounts Officer
Senior Admin Executive
Senior Admin Officer
Senior Audit Executive
Senior Audit Officer
Senior Business Development Executive
Senior Business Development Officer
Senior Commercial Executive
Senior Commercial Officer
Senior Compliance Executive
Senior Compliance Officer
Senior Credit Executive
Senior Credit Officer
Senior Customer Care Executive
Senior Customer Care Officer
Senior Finance Executive
Senior Finance Officer
Senior HR Executive
Senior HR Officer
Senior IT Executive
Senior IT Officer
Senior Legal Executive
Senior Legal Officer
Senior Logistics Executive
Senior Logistics Officer
Senior Manager Accounts
Senior Manager Admin
Senior Manager Audit
Senior Manager Banquets
Senior Manager Brand
Senior Manager Business Development
Senior Manager Commercial
Senior Manager Communications
Senior Manager Compliance
Senior Manager Credit
Senior Manager Customer Care
Senior Manager Digital
Senior Manager Distribution
Senior Manager Engineering
Senior Manager F&B
Senior Manager Finance
Senior Manager Front Office
Senior Manager Housekeeping
Senior Manager HR
Senior Manager IT
Senior Manager Legal
Senior Manager Logistics
Senior Manager Maintenance
Senior Manager Marketing
Senior Manager Operations
Senior Manager Payroll
Senior Manager Planning
Senior Manager Procurement
Senior Manager Production
Senior Manager Projects
Senior Manager Quality
Senior Manager Recruitment
Senior Manager Reservations
Senior Manager Retail
Senior Manager Revenue
Senior Manager Risk
Senior Manager Rooms
Senior Manager Safety
Senior Manager Sales
Senior Manager Security
Senior Manager Store
Senior Manager Strategy
Senior Manager Supply Chain
Senior Manager Tax
Senior Manager Technical
Senior Manager Training
Senior Manager Treasury
Senior Manager Warehouse
Senior Marketing Executive
Senior Marketing Officer
Senior Operations Executive
Senior Operations Officer
Senior Payroll Executive
Senior Payroll Officer
Senior Procurement Executive
Senior Procurement Officer
Senior Production Executive
Senior Production Officer
Senior Projects Executive
Senior Projects Officer
Senior Quality Executive
Senior Quality Officer
Senior Recruitment Executive
Senior Recruitment Officer
Senior Risk Executive
Senior Risk Officer
Senior Safety Executive
Senior Safety Officer
Senior Sales Executive
Senior Sales Officer
Senior Security Executive
Senior Security Officer
Senior Store Executive
Senior Store Officer
Senior Technical Executive
Senior Technical Officer
Senior Training Executive
Senior Training Officer
Senior Warehouse Executive
Senior Warehouse Officer
Site Engineer
Software Engineer
Sous Chef
Spa Manager
Staff Nurse
Steward
Store Executive
Store Keeper
Store Officer
Supervisor F&B
Supervisor Front Office
Supervisor Housekeeping
Supervisor Maintenance
Supervisor Production
Supervisor Quality
Supervisor Sales
Supervisor Security
Supervisor Store
Supervisor Warehouse
Teacher
Team Lead Customer Care
Team Lead Finance
Team Lead HR
Team Lead IT
Team Lead Marketing
Team Lead Operations
Team Lead Production
Team Lead Quality
Team Lead Sales
Technical Executive
Technical Officer
Territory Manager Admin
Territory Manager Business Development
Territory Manager Commercial
Territory Manager Credit
Territory Manager Distribution
Territory Manager Finance
Territory Manager HR
Territory Manager Logistics
Territory Manager Marketing
Territory Manager Operations
Territory Manager Procurement
Territory Manager Production
Territory Manager Recruitment
Territory Manager Retail
Territory Manager Sales
Territory Manager Technical
Training Executive
Training Officer
Vice President
Waiter
Warehouse Executive
Warehouse Officer
Web Developer
Zonal Manager Admin
Zonal Manager Business Development
Zonal Manager Commercial
Zonal Manager Credit
Zonal Manager Distribution
Zonal Manager Finance
Zonal Manager HR
Zonal Manager Logistics
Zonal Manager Marketing
Zonal Manager Operations
Zonal Manager Procurement
Zonal Manager Production
Zonal Manager Recruitment
Zonal Manager Retail
Zonal Manager Sales
Zonal Manager Technical

`.split(/\r?\n/).map(role => role.trim()).filter(Boolean);
const employerFiles = [3, 4, 5, 6, 7, 8, 9, 10, 11];
const employerNames = [
  'Hoverizon Tech Solutions',
  'Best Western',
  'PakNova Enterprise',
  'Premium employer',
  'Destinations Connect',
  'Escape',
  'Four Points by Sheraton',
  'Arch Villas',
  'SB',
];
const otherEmployers = [
  { name: 'Khoj Resorts', image: '/assets/ff0a1.png' },
  { name: 'Mushrooms', image: '/assets/d1f1e.png' },
  { name: 'Pakistan Society of Hospitality Professionals', image: '/assets/f6a67.png' },
  { name: 'Radisson Blu', image: '/assets/991c8.png' },
  { name: 'Ramada', image: '/assets/e3016.png' },
  { name: "Sariya's", image: '/assets/90d1a.png' },
  { name: 'Regal Immigration', image: '/assets/3bdd7.png' },
  { name: 'Resorts Holding', image: '/assets/d6b72.png' },
  { name: 'Riphah International University', image: '/assets/1ab0e.png' },
];

const employerSites: Record<string, string> = {
  'Hoverizon Tech Solutions': 'https://hoverizontechsolutions.com/',
  'Best Western': 'https://www.bestwestern.com/',
  'Four Points by Sheraton': 'https://www.marriott.com/brands/four-points-by-sheraton.mi',
  'Khoj Resorts': 'https://www.khojresorts.com/',
  'Radisson Blu': 'https://www.radissonhotels.com/en-us/brand/radisson-blu',
  'Ramada': 'https://www.wyndhamhotels.com/ramada',
  'Riphah International University': 'https://riphah.edu.pk/',
};

function EmployerLogo({ name, image, onBrowse }: {
  name: string;
  image: string;
  onBrowse: () => void;
}) {
  const url = employerSites[name];
  const logo = <img src={image} alt="" width="97" height="55" loading="lazy" />;

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}`}>
      {logo}
    </a>
  ) : (
    <button type="button" aria-label={`Browse ${name} jobs`} onClick={onBrowse}>
      {logo}
    </button>
  );
}

type ModalState = { kind: 'job'; job: Job } | { kind: 'contact'; subject: string } | { kind: 'info'; title: string; message: string } | null;
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const before = document.activeElement as HTMLElement | null; ref.current?.showModal(); const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = old; before?.focus() } }, []);
  return createPortal(<dialog ref={ref} className="jp-modal" aria-labelledby="jp-modal-title" onCancel={e => { e.preventDefault(); onClose() }} onClick={e => { if (e.target === e.currentTarget) onClose() }}><button type="button" className="jp-close" aria-label="Close dialog" onClick={onClose}>×</button><h2 id="jp-modal-title">{title}</h2>{children}</dialog>, document.body);
}
function InquiryForm({ subject }: { subject: string }) {
  const [busy, setBusy] = useState(false), [status, setStatus] = useState(''), [success, setSuccess] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); if (busy) return; const form = e.currentTarget, data = new FormData(form); setBusy(true); setStatus(''); try { await sendInquiry({ name: String(data.get('name') || ''), email: String(data.get('email') || ''), phone: String(data.get('phone') || ''), message: `${subject}\n\n${String(data.get('message') || '')}` }); setSuccess(true); setStatus('Thank you. Your inquiry has been submitted to HRwala.'); form.reset() } catch (error) { setStatus(error instanceof Error ? error.message : 'Unable to submit your inquiry. Please try again.') } finally { setBusy(false) } }
  return <><p className="jp-form-intro">Share your details with the HRwala team.</p><form className="jp-inquiry" onSubmit={submit}>
    <label>Full name<input name="name" autoComplete="name" required maxLength={120} /></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label>Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
    <label>Message<textarea name="message" required maxLength={5000} rows={4} /></label>
    <button className="jp-primary" disabled={busy || success}>{busy ? 'Submitting…' : success ? 'Submitted' : 'Send inquiry'}</button><p role="status" className="jp-status">{status}</p>
  </form></>;
}
function JobCard({ job, onOpen }: { job: Job; onOpen: (job: Job) => void }) {
  return <article className={`jp-job-card ${job.featured ? 'jp-featured-card' : ''}`}>
    <div className="jp-card-lines" aria-hidden="true"><img className="jp-card-line top-left" src={asset(job.featured ? 'imgGroup118.svg' : 'imgLine80.svg')} alt="" /><img className="jp-card-line top-right" src={asset(job.featured ? 'imgGroup115.svg' : 'imgLine78.svg')} alt="" /><img className="jp-card-line bottom-left" src={asset(job.featured ? 'imgGroup117.svg' : 'imgLine79.svg')} alt="" /><img className="jp-card-line bottom-right" src={asset(job.featured ? 'imgGroup116.svg' : 'imgLine77.svg')} alt="" /></div>
    {job.featured && (
      <img
        className="jp-featured-badge"
        src={asset('Yellow Featured badge with thicker white ring.png')}
        alt="Featured job"
      />
    )}
    <h3><button type="button" onClick={() => onOpen(job)}>{job.title}</button></h3><p>{job.company}</p><div className="jp-card-bottom"><span>{job.remote ? 'Remote' : job.city}</span><button type="button" onClick={() => onOpen(job)}>View Job</button></div>
  </article>;
}
export default function JobPortalPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroLeaving, setHeroLeaving] = useState(false);
  const wordMeasure = useRef<HTMLSpanElement>(null);
  const [wordWidth, setWordWidth] = useState<number>();

  useLayoutEffect(() => {
    const element = wordMeasure.current;
    if (!element) return;

    const measure = () => setWordWidth(element.offsetWidth);
    measure();

    document.fonts.addEventListener('loadingdone', measure);
    return () => document.fonts.removeEventListener('loadingdone', measure);
  }, [heroIndex]);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let holdTimer: number;
    let swapTimer: number;

    const schedule = () => {
      holdTimer = window.setTimeout(() => {
        setHeroLeaving(true);

        swapTimer = window.setTimeout(() => {
          setHeroIndex(index => (index + 1) % 6);
          setHeroLeaving(false);
          schedule();
        }, 700);
      }, 2000);
    };

    const updateMotion = () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(swapTimer);
      setHeroLeaving(false);

      if (!motion.matches) schedule();
    };

    updateMotion();
    motion.addEventListener('change', updateMotion);

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(swapTimer);
      motion.removeEventListener('change', updateMotion);
    };
  }, []);
  const [jobs, setJobs] = useState(demoJobs), [live, setLive] = useState(false), [loadError, setLoadError] = useState(''), [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(''), [city, setCity] = useState(''), [search, setSearch] = useState({ query: '', city: '' });
  const [tab, setTab] = useState('Role'), [browse, setBrowse] = useState<{ tab: string; value: string } | null>(null), [searched, setSearched] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabIndicatorRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const tabs = tabsRef.current;
    const indicator = tabIndicatorRef.current;
    if (!tabs || !indicator) return;

    const updateIndicator = () => {
      const selected = tabs.querySelector<HTMLButtonElement>(
        'button[aria-selected="true"]'
      );
      if (!selected) return;

      indicator.style.width = `${selected.offsetWidth}px`;
      indicator.style.height = `${selected.offsetHeight}px`;
      indicator.style.transform =
        `translate(${selected.offsetLeft}px, ${selected.offsetTop}px)`;
      indicator.style.visibility = 'visible';
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    observer.observe(tabs);
    window.addEventListener('resize', updateIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateIndicator);
    };
  }, [tab]);
  const [modal, setModal] = useState<ModalState>(null);
  const [email, setEmail] = useState(''), [newsletterBusy, setNewsletterBusy] = useState(false), [newsletterStatus, setNewsletterStatus] = useState('');
  const results = useRef<HTMLElement>(null), queryInput = useRef<HTMLInputElement>(null);
  const { mobile, install } = useInstallApp();
  const [viewportSize, setViewportSize] = useState(() => ({
    pageWidth: document.documentElement.clientWidth,
    viewportWidth: window.innerWidth,
  }));

  const { pageWidth, viewportWidth } = viewportSize;

  useLayoutEffect(() => {
    const updateWidth = () => {
      const next = {
        pageWidth: document.documentElement.clientWidth,
        viewportWidth: window.innerWidth,
      };

      setViewportSize(current =>
        current.pageWidth === next.pageWidth &&
          current.viewportWidth === next.viewportWidth
          ? current
          : next
      );
    };

    const observer = new ResizeObserver(updateWidth);
    observer.observe(document.documentElement);
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  useEffect(() => { const controller = new AbortController(); setLoading(true); loadPublishedJobs(controller.signal).then(rows => { if (rows !== null) { setJobs(rows); setLive(true) } }).catch(error => { if (!controller.signal.aborted) { setJobs([]); setLoadError(error instanceof Error ? error.message : 'Unable to load jobs.') } }).finally(() => { if (!controller.signal.aborted) setLoading(false) }); return () => controller.abort() }, []);
  const filtered = useMemo(() => filterJobs(jobs, search.query, search.city, browse), [jobs, search, browse]);
  const top = filtered.filter(j => !j.featured), featured = filtered.filter(j => j.featured);
  const browseItems = useMemo(
    () =>
      tab === 'City' ? pakistanCities :
        tab === 'Company' ? [...new Set(jobs.map(job => job.company))] :
          tab === 'Role' ? roleTitles :
            tab === 'Sector' ? sectors :
              tab === 'Job Type'
                ? ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship', 'Remote']
                : ['Fresh Graduate', 'Entry Level', 'Mid Level', 'Senior Level', 'Management'],
    [tab, jobs]
  );
  function scrollResults() { requestAnimationFrame(() => results.current?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })) }
  function runSearch(e?: FormEvent) { e?.preventDefault(); setSearch({ query, city }); setBrowse(null); setSearched(true); scrollResults() }
  function quickSearch(value: string) { setQuery(value); setSearch({ query: value, city: '' }); setCity(''); setBrowse(null); setSearched(true); scrollResults() }
  function browseSearch(value: string) { setQuery(''); setCity(''); setSearch({ query: '', city: '' }); if (value === 'Remote') { setSearch({ query: '', city: 'Remote' }); setBrowse(null) } else setBrowse({ tab, value }); setSearched(true); scrollResults() }
  function reset() { setQuery(''); setCity(''); setSearch({ query: '', city: '' }); setBrowse(null); setSearched(false) }
  async function newsletter(e: FormEvent) { e.preventDefault(); if (newsletterBusy) return; setNewsletterBusy(true); setNewsletterStatus(''); try { await subscribe(email); setNewsletterStatus('Thank you for subscribing!'); setEmail('') } catch (error) { setNewsletterStatus(error instanceof Error ? error.message : 'Unable to subscribe. Please try again.') } finally { setNewsletterBusy(false) } }
  async function installApp() { const message = await install(); if (message) setModal({ kind: 'info', title: 'Install HRwala', message }) }
  function showAll() { reset(); scrollResults() }
  return <div
    className="jp-page"
    style={{ zoom: viewportWidth >= 768 ? pageWidth / 1440 : undefined }}
  >
    <a className="jp-skip" href="#jp-job-results">Skip to jobs</a>
    <div
      className="design-page jp-shared-header"
      style={{ zoom: viewportWidth < 768 ? pageWidth / 1440 : undefined }}
    >
      <SiteHeader />
    </div>
    <main>
      <section className="jp-hero" aria-labelledby="jp-hero-title"><div className="jp-hero-copy"><h1 id="jp-hero-title">
        <span className="jp-heading-window">
          <span
            key={heroIndex}
            className={`jp-slide-text${heroLeaving ? ' is-leaving' : ''}`}
          >
            {['Find a Job', 'Post a Job'][heroIndex % 2]}
          </span>
        </span>
        <br />
        <span>That Opens New Doors</span>
      </h1>

        <p className="jp-hero-subtitle">
          The Right{' '}
          <span className="jp-word-window" style={{ width: wordWidth }}>
            <span ref={wordMeasure} className="jp-word-measure" aria-hidden="true">
              {heroIndex % 2 === 0 ? 'JOB' : 'MAN'}
            </span>
            <span
              key={heroIndex}
              className={`jp-slide-text${heroLeaving ? ' is-leaving' : ''}`}
            >
              {heroIndex % 2 === 0 ? 'JOB' : 'MAN'}
            </span>
          </span>{' '}
          Changes Everything.
        </p><p className="jp-hero-description">Connect with leading employers and employees across Pakistan.</p>
        <form className="jp-search" onSubmit={runSearch}><input ref={queryInput} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Job title, skill or company" aria-label="Job title, skill or company" /><CitySelect value={city} onChange={setCity} /><button className="jp-primary" type="submit">Search jobs</button></form>
        <p className="jp-popular">Popular: {['IT & Software', 'Banking', 'Sales', 'Remote'].map((value, i) => <span key={value}>{i > 0 && <span aria-hidden="true"> · </span>}<button type="button" onClick={() => value === 'Remote' ? (setCity('Remote'), setQuery(''), setSearch({ query: '', city: 'Remote' }), setBrowse(null), setSearched(true), scrollResults()) : quickSearch(value === 'IT & Software' ? 'Information Technology' : value)}>{value}</button></span>)}</p>
        <div className="jp-hero-actions"><button type="button" className="jp-primary" onClick={() => { queryInput.current?.focus(); queryInput.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) }}>Find a Job</button><button type="button" className="jp-primary" onClick={() => setModal({ kind: 'contact', subject: 'Post a Job — Employer inquiry' })}>Post a Job</button><button type="button" className="jp-primary" onClick={() => { setQuery('Freelance'); setSearch({ query: 'Freelance', city: '' }); setCity(''); setBrowse(null); setSearched(true); scrollResults() }}>Freelancers</button><button
          type="button"
          className="jp-app-button"
          onClick={installApp}
          title={mobile ? 'Install HRwala on your phone' : 'Install HRwala on your computer'}
        >
          {mobile ? 'Mobile App' : 'Desktop App'}
        </button></div>
      </div><div className="jp-hero-portrait"><img src={asset('Businesswoman with laptop on transparent background.png')} alt="Career advisor with a laptop" width="559" height="540" fetchPriority="high" /></div></section>
      <section className="jp-browse" aria-labelledby="jp-browse-title">
        <h2 id="jp-browse-title"><span>Browse</span> Jobs</h2>

        <div className="jp-browse-layout">
          <div
            className="jp-tabs"
            role="tablist"
            aria-label="Browse jobs by"
            ref={tabsRef}
          >
            <span
              ref={tabIndicatorRef}
              className="jp-tabs-indicator"
              aria-hidden="true"
            />

            {['Role', 'City', 'Company', 'Sector', 'Job Type', 'Experience'].map(t => (
              <button
                key={t}
                id={`jp-tab-${t.replace(' ', '-')}`}
                type="button"
                role="tab"
                aria-selected={tab === t}
                aria-controls="jp-browse-panel"
                onClick={() => setTab(t)}
                onKeyDown={e => {
                  if (
                    e.key === 'ArrowDown' || e.key === 'ArrowRight' ||
                    e.key === 'ArrowLeft' || e.key === 'ArrowUp'
                  ) {
                    e.preventDefault();
                    const buttons = Array.from(
                      e.currentTarget.parentElement!.querySelectorAll('button')
                    );
                    const step =
                      e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
                    const next =
                      buttons[(buttons.indexOf(e.currentTarget) + step + buttons.length) % buttons.length];
                    next.focus();
                    next.click();
                  }
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div
            className="jp-browse-panel"
            id="jp-browse-panel"
            role="tabpanel"
            aria-labelledby={`jp-tab-${tab.replace(' ', '-')}`}
          >
            <h3 key={`title-${tab}`} className="jp-browse-enter">
              Select {tab}
            </h3>
            <div key={tab} className="jp-browse-options jp-browse-enter">
              {browseItems.map(item => (
                <button type="button" key={item} onClick={() => browseSearch(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <aside className="jp-employers">
            <h3>Top Employers</h3>

            <div className="jp-employer-grid">
              <div className="jp-employer-set jp-employer-set-first">
                {employerFiles.map((n, i) => (
                  <EmployerLogo
                    key={n}
                    name={employerNames[i]}
                    image={asset(`imgArchVillasGoldLogoOnCrimsonBackground${n}.png`)}
                    onBrowse={() => {
                      setQuery(employerNames[i]);
                      setSearch({ query: employerNames[i], city: '' });
                      setCity('');
                      setBrowse(null);
                      setSearched(true);
                      scrollResults();
                    }}
                  />
                ))}
              </div>

              <div className="jp-employer-set jp-employer-set-second">
                {otherEmployers.map(employer => (
                  <EmployerLogo
                    key={employer.name}
                    name={employer.name}
                    image={employer.image}
                    onBrowse={() => {
                      setQuery(employer.name);
                      setSearch({ query: employer.name, city: '' });
                      setCity('');
                      setBrowse(null);
                      setSearched(true);
                      scrollResults();
                    }}
                  />
                ))}
              </div>

              <div className="jp-employer-set jp-employer-set-second">
                {otherEmployers.map(employer => (
                  <button
                    type="button"
                    key={employer.name}
                    aria-label={`Browse ${employer.name} jobs`}
                    onClick={() => {
                      setQuery(employer.name);
                      setSearch({ query: employer.name, city: '' });
                      setCity('');
                      setBrowse(null);
                      setSearched(true);
                      scrollResults();
                    }}
                  >
                    <img
                      src={employer.image}
                      alt={employer.name}
                      width="97"
                      height="55"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="jp-results" id="jp-job-results" ref={results} aria-label="Job opportunities" tabIndex={-1} data-filtered={searched}>
        <div className="jp-result-status" role="status">{loading ? 'Loading jobs…' : loadError || (searched ? `${filtered.length} matching ${filtered.length === 1 ? 'job' : 'jobs'}${search.city ? ` · ${search.city}` : ''}${browse ? ` · ${browse.value}` : ''}` : '')}{searched && <button type="button" onClick={reset}>Clear filters</button>}</div>
        {filtered.length === 0 && !loading && <div className="jp-empty"><h2>{loadError ? 'Jobs unavailable' : 'No matching jobs'}</h2><p>{loadError ? 'Please try again later.' : 'Try another title, city or category. The current design listings have limited locations.'}</p><button type="button" className="jp-primary" onClick={reset}>Show all jobs</button></div>}
        <div className="jp-job-panels">{[{ title: 'Top', jobs: top }, { title: 'Featured', jobs: featured }].map(group => <section className="jp-job-panel" key={group.title} aria-label={`${group.title} jobs`}><h2><span>{group.title}</span> Jobs</h2><div className="jp-job-grid">{group.jobs.map(job => <JobCard key={job.id} job={job} onOpen={j => setModal({ kind: 'job', job: j })} />)}</div>{!group.jobs.length && filtered.length > 0 && <p className="jp-panel-empty">No {group.title.toLowerCase()} jobs match these filters.</p>}<button type="button" className="jp-view-all" onClick={showAll}>View all →</button></section>)}</div>
      </section>

      <section className="jp-employees" aria-labelledby="featured-employees-title">
        <h2 id="featured-employees-title"><span>Featured</span> Employees</h2>

        {[0, 1].map(row => (
          <div
            className="jp-employee-window"
            key={row}
            tabIndex={0}
            role="region"
            aria-label={`Featured employees row ${row + 1}`}
          >
            <div className="jp-employee-track">
              {[0, 1].map(copy => (
                <div className="jp-employee-set" key={copy} aria-hidden={copy === 1}>
                  {featuredEmployees.slice(row * 6, row * 6 + 6).map(employee => {
                    const [name, roleOrVideo, imageOrDescription, oldDescription] = employee;
                    const videoFile =
                      typeof roleOrVideo === "string" && roleOrVideo.toLowerCase().endsWith(".mp4")
                        ? roleOrVideo
                        : undefined;
                    const role = videoFile
                      ? (oldDescription !== undefined ? imageOrDescription : "")
                      : roleOrVideo;
                    const description = videoFile
                      ? (oldDescription ?? imageOrDescription)
                      : oldDescription;

                    return (
                      <article className="jp-employee-card" key={name}>
                        {name === "Hussain Raza" && (
                          <a
                            className="jp-employee-profile"
                            href="https://www.linkedin.com/in/hussain-raza-508611336"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={copy === 1 ? -1 : undefined}
                            aria-label="Hussain Raza ki LinkedIn profile"
                          />
                        )}

                        <div className="jp-employee-photo-wrap">
                          {videoFile ? (
                            <VideoPopup
                              src={`/assets/${encodeURIComponent(videoFile)}`}
                              title={name ?? "Featured employee"}
                              previewClassName="jp-employee-video-preview"
                            />
                          ) : (
                            <img src={`/assets/${imageOrDescription}`} alt="" loading="lazy" />
                          )}
                          <img
                            className="jp-featured-badge"
                            src={asset("Yellow Featured badge with thicker white ring.png")}
                            alt=""
                          />
                        </div>

                        <h3>{name}</h3>
                        {role && <p className="jp-employee-role">{role}</p>}
                        <p className="jp-employee-description">{description}</p>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
    <footer className="jp-footer">
      <div className="jp-footer-grid">
        <div className="jp-footer-brand">
          <a href="/" aria-label="HRwala Discover">
            <img
              src={asset('imgHrWalaFullWhiteGold2.png')}
              alt="HRwala.net"
              width="153"
              height="44"
              loading="lazy"
            />
          </a>

          <p>
            HRWala.net brings together talent, opportunities, and innovative HR
            solutions on one platform. We empower professionals to advance their
            careers and support organizations in building stronger, more capable teams.
          </p>

          <div className="jp-newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={newsletter}>
              <input
                type="email"
                name="email"
                aria-label="Email for newsletter"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                maxLength={254}
                required
              />
              <button disabled={newsletterBusy}>
                {newsletterBusy ? 'Sending…' : 'Subscribe'}
              </button>
            </form>
            <p className="jp-newsletter-status" role="status">{newsletterStatus}</p>
          </div>

          <nav className="jp-socials" aria-label="Social media">
            {[
              ['imgVector.svg', 'LinkedIn', 'https://www.linkedin.com/'],
              ['imgVector4.svg', 'Facebook', 'https://www.facebook.com/'],
              ['imgVector1.svg', 'Instagram', 'https://www.instagram.com/'],
              ['imgVector2.svg', 'YouTube', 'https://www.youtube.com/'],
            ].map(([file, name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <img src={asset(file)} alt="" loading="lazy" />
              </a>
            ))}

            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M16.5 2c.2 2.4 1.6 3.9 4 4.1v3.2a8.3 8.3 0 0 1-4-1.2v6.8a6 6 0 1 1-5.2-5.9v3.3a2.8 2.8 0 1 0 2 2.7V2h3.2Z" />
              </svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.2-8.3L1.8 2h6.5l4.4 6.7L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
              </svg>
            </a>
          </nav>

          <section className="jp-disclaimer" aria-labelledby="jp-disclaimer-title">
            <h3 id="jp-disclaimer-title">Disclaimer</h3>
            <p>
              I understand and accept the following terms, and hrwala.net’s role as a
              connecting platform only, by signing-in / Loging-in and checking the empty
              box, to the following:
            </p>
            <ol>
              <li>I voluntarily share my CV, photo, contact details.</li>
              <li>
                My 30-second video may be publicly displayed. (Provide a tick mark in the
                empty box additionally.)
              </li>
              <li>Employers may view my profile and contact me.</li>
              <li>Interviews occur on Zoom; its privacy terms apply.</li>
              <li>Data is used only for professional job placement.</li>
              <li>Information I provide is true and accurate.</li>
              <li>hrwala.net does not guarantee jobs, hiring, or candidates.</li>
              <li>I may withdraw consent and delete data anytime.</li>
              <li>Data may be stored on servers outside Pakistan.</li>
              <li>hrwala.net isn’t liable for third-party conduct or misuse.</li>
            </ol>
          </section>
        </div>

        <div className="jp-footer-links">
          <h3>Role</h3>
          {[
            ['Sales & Business Growth', 'Sales'],
            ['Office & Administrative Services', 'Administration'],
            ['Education & Professional Learning', 'Education'],
            ['Accounting & Financial Services', 'Finance'],
            ['People & Talent Management', 'Human Resources'],
            ['Project Planning & Delivery', 'Project Management'],
            ['Engineering & Technical Services', 'Engineering'],
            ['Healthcare & Medical Services', 'Health'],
            ['Marketing & Brand Communications', 'Marketing'],
            ['Performance Monitoring & Evaluation', 'Monitoring'],
            ['Retail & Store Management', 'Retail'],
            ['Business Operations & Management', 'Operations'],
          ].map(([label, searchTerm]) => (
            <button type="button" key={label} onClick={() => quickSearch(searchTerm)}>
              {label}
            </button>
          ))}
        </div>

        <div className="jp-footer-links">
          <h3>City</h3>
          {areaCities.map(c => (
            <button
              type="button"
              key={c}
              onClick={() => {
                setCity(c);
                setQuery('');
                setSearch({ query: '', city: c });
                setBrowse(null);
                setSearched(true);
                scrollResults();
              }}
            >
              Jobs in {c}
            </button>
          ))}
        </div>

        <div className="jp-footer-links">
          <h3>Sector</h3>
          {sectors.slice(0, 14).map(s => (
            <button type="button" key={s} onClick={() => quickSearch(s)}>
              {s === 'Information Technology' ? 'IT' : s} Jobs
            </button>
          ))}
        </div>

        <div className="jp-footer-group">
          {
            <div className="jp-footer-links">
              <h3>Explore</h3>
              <a href="/">Discover</a>
              <a href="/job-portal">Job Portal</a>
              <a href="/#software">HRWala Software</a>
              <a href="/#certifications">Certifications</a>
            </div>
          }
          {
            <div className="jp-footer-links">
              <h3>Contact</h3>
              <a href="https://wa.me/923008523878">+92 300 8523878</a>
              <a href="https://wa.me/923055243737">+92 305 5243737</a>
              <a href="mailto:hello@hrwala.net">hello@hrwala.net</a>
            </div>
          }
        </div>
        <div className="jp-footer-links">
          <h3>International Jobs</h3>
          {['Saudi Arabia', 'Bahrain', 'Qatar', 'UAE', 'Malaysia'].map(country => (
            <a key={country} href="#" onClick={e => e.preventDefault()}>
              Jobs in {country}
            </a>
          ))}
        </div>
      </div>

      <p className="jp-copyright">
        © {new Date().getFullYear()} HRWala.net. All rights reserved.
      </p>
    </footer>
    {modal && <Modal title={modal.kind === 'job' ? modal.job.title : modal.kind === 'contact' ? modal.subject : modal.title} onClose={() => setModal(null)}>{modal.kind === 'job' ? <><p className="jp-modal-company">{modal.job.company}</p><p>{modal.job.remote ? 'Remote' : modal.job.city} · {modal.job.type} · {modal.job.experience}</p><p className="jp-job-description">{modal.job.description || `Explore this ${modal.job.title} opportunity with ${modal.job.company}. Contact HRwala for further information about this role.`}</p>{!live && <p className="jp-demo-note">Example listing from the page design. Vacancy availability has not been verified.</p>}{modal.job.apply_url && /^https:\/\//i.test(modal.job.apply_url) ? <a className="jp-primary jp-apply-link" href={modal.job.apply_url} target="_blank" rel="noopener noreferrer">Apply at source ↗</a> : <button type="button" className="jp-primary" onClick={() => setModal({ kind: 'contact', subject: `Job inquiry: ${modal.job.title} — ${modal.job.company}` })}>Enquire about this job</button>}</> : modal.kind === 'contact' ? <InquiryForm subject={modal.subject} /> : <p>{modal.message}</p>}</Modal>}
  </div>;
}
