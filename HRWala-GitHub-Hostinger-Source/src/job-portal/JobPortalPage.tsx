import { useEffect, useLayoutEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CitySelect from './CitySelect';
import { demoJobs, filterJobs, type Job } from './jobs';
import { loadPublishedJobs, sendInquiry, subscribe } from './backend';
import { pakistanCities } from './pakistanCities';
import { useInstallApp } from './pwa';
import './job-portal.css';
import SiteHeader from '../SiteHeader';
const base='/hrwala-job-portal/assets/';
const asset=(name:string)=>base+name;
const areaCities = [
  'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Hyderabad', 'Hunza',
  'Gilgit', 'Skardu', 'Muzaffarabad', 'Sukkur',
];
const sectors=['Business Development','Information Technology','Manufacturing','Recruitment','Services','Education','Banking','Real Estate','Healthcare','Insurance','N.G.O.','Retail','Accounting','Travel','Call Center','Construction','BPO','Consultants','Electronics'];
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

type ModalState={kind:'job';job:Job}|{kind:'contact';subject:string}|{kind:'info';title:string;message:string}|null;
function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:ReactNode}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const before=document.activeElement as HTMLElement|null;ref.current?.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;before?.focus()}},[]);
  return createPortal(<dialog ref={ref} className="jp-modal" aria-labelledby="jp-modal-title" onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><button type="button" className="jp-close" aria-label="Close dialog" onClick={onClose}>×</button><h2 id="jp-modal-title">{title}</h2>{children}</dialog>,document.body);
}
function InquiryForm({subject}:{subject:string}){
  const [busy,setBusy]=useState(false),[status,setStatus]=useState(''),[success,setSuccess]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(busy)return;const form=e.currentTarget,data=new FormData(form);setBusy(true);setStatus('');try{await sendInquiry({name:String(data.get('name')||''),email:String(data.get('email')||''),phone:String(data.get('phone')||''),message:`${subject}\n\n${String(data.get('message')||'')}`});setSuccess(true);setStatus('Thank you. Your inquiry has been submitted to HRwala.');form.reset()}catch(error){setStatus(error instanceof Error?error.message:'Unable to submit your inquiry. Please try again.')}finally{setBusy(false)}}
  return <><p className="jp-form-intro">Share your details with the HRwala team.</p><form className="jp-inquiry" onSubmit={submit}>
    <label>Full name<input name="name" autoComplete="name" required maxLength={120}/></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
    <label>Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={40}/></label>
    <label>Message<textarea name="message" required maxLength={5000} rows={4}/></label>
    <button className="jp-primary" disabled={busy||success}>{busy?'Submitting…':success?'Submitted':'Send inquiry'}</button><p role="status" className="jp-status">{status}</p>
  </form></>;
}
function JobCard({job,onOpen}:{job:Job;onOpen:(job:Job)=>void}){
  return <article className={`jp-job-card ${job.featured?'jp-featured-card':''}`}>
    <div className="jp-card-lines" aria-hidden="true"><img className="jp-card-line top-left" src={asset(job.featured?'imgGroup118.svg':'imgLine80.svg')} alt=""/><img className="jp-card-line top-right" src={asset(job.featured?'imgGroup115.svg':'imgLine78.svg')} alt=""/><img className="jp-card-line bottom-left" src={asset(job.featured?'imgGroup117.svg':'imgLine79.svg')} alt=""/><img className="jp-card-line bottom-right" src={asset(job.featured?'imgGroup116.svg':'imgLine77.svg')} alt=""/></div>
    {job.featured && (
  <img
    className="jp-featured-badge"
    src={asset('Yellow Featured badge with thicker white ring.png')}
    alt="Featured job"
  />
)}
    <h3><button type="button" onClick={()=>onOpen(job)}>{job.title}</button></h3><p>{job.company}</p><div className="jp-card-bottom"><span>{job.remote?'Remote':job.city}</span><button type="button" onClick={()=>onOpen(job)}>View Job</button></div>
  </article>;
}
export default function JobPortalPage(){
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
  const [jobs,setJobs]=useState(demoJobs),[live,setLive]=useState(false),[loadError,setLoadError]=useState(''),[loading,setLoading]=useState(false);
  const [query,setQuery]=useState(''),[city,setCity]=useState(''),[search,setSearch]=useState({query:'',city:''});
  const [tab,setTab]=useState('Role'),[browse,setBrowse]=useState<{tab:string;value:string}|null>(null),[searched,setSearched]=useState(false);
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
  const [modal,setModal]=useState<ModalState>(null);
  const [email,setEmail]=useState(''),[newsletterBusy,setNewsletterBusy]=useState(false),[newsletterStatus,setNewsletterStatus]=useState('');
  const results=useRef<HTMLElement>(null),queryInput=useRef<HTMLInputElement>(null);
  const {mobile,install}=useInstallApp();
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
  useEffect(()=>{const controller=new AbortController();setLoading(true);loadPublishedJobs(controller.signal).then(rows=>{if(rows!==null){setJobs(rows);setLive(true)}}).catch(error=>{if(!controller.signal.aborted){setJobs([]);setLoadError(error instanceof Error?error.message:'Unable to load jobs.')}}).finally(()=>{if(!controller.signal.aborted)setLoading(false)});return()=>controller.abort()},[]);
  const filtered=useMemo(()=>filterJobs(jobs,search.query,search.city,browse),[jobs,search,browse]);
  const top=filtered.filter(j=>!j.featured),featured=filtered.filter(j=>j.featured);
  const browseItems=useMemo(()=>tab==='City'?pakistanCities:tab==='Company'?[...new Set(jobs.map(j=>j.company))]:tab==='Role'||tab==='Sector'?sectors:tab==='Job Type'?['Full-time','Part-time','Contract','Freelance','Internship','Remote']:['Fresh Graduate','Entry Level','Mid Level','Senior Level','Management'],[tab,jobs]);
  function scrollResults(){requestAnimationFrame(()=>results.current?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}))}
  function runSearch(e?:FormEvent){e?.preventDefault();setSearch({query,city});setBrowse(null);setSearched(true);scrollResults()}
  function quickSearch(value:string){setQuery(value);setSearch({query:value,city:''});setCity('');setBrowse(null);setSearched(true);scrollResults()}
  function browseSearch(value:string){setQuery('');setCity('');setSearch({query:'',city:''});if(value==='Remote'){setSearch({query:'',city:'Remote'}) ;setBrowse(null)}else setBrowse({tab,value});setSearched(true);scrollResults()}
  function reset(){setQuery('');setCity('');setSearch({query:'',city:''});setBrowse(null);setSearched(false)}
  async function newsletter(e:FormEvent){e.preventDefault();if(newsletterBusy)return;setNewsletterBusy(true);setNewsletterStatus('');try{await subscribe(email);setNewsletterStatus('Thank you for subscribing!');setEmail('')}catch(error){setNewsletterStatus(error instanceof Error?error.message:'Unable to subscribe. Please try again.')}finally{setNewsletterBusy(false)}}
  async function installApp(){const message=await install();if(message)setModal({kind:'info',title:'Install HRwala',message})}
  function showAll(){reset();scrollResults()}
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
  <span>That Open New Doors</span>
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
        <form className="jp-search" onSubmit={runSearch}><input ref={queryInput} type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Job title, skill or company" aria-label="Job title, skill or company"/><CitySelect value={city} onChange={setCity}/><button className="jp-primary" type="submit">Search jobs</button></form>
        <p className="jp-popular">Popular: {['IT & Software','Banking','Sales','Remote'].map((value,i)=><span key={value}>{i>0&&<span aria-hidden="true"> · </span>}<button type="button" onClick={()=>value==='Remote'?(setCity('Remote'),setQuery(''),setSearch({query:'',city:'Remote'}),setBrowse(null),setSearched(true),scrollResults()):quickSearch(value==='IT & Software'?'Information Technology':value)}>{value}</button></span>)}</p>
        <div className="jp-hero-actions"><button type="button" className="jp-primary" onClick={()=>{queryInput.current?.focus();queryInput.current?.scrollIntoView({block:'center',behavior:'smooth'})}}>Find a Job</button><button type="button" className="jp-primary" onClick={()=>setModal({kind:'contact',subject:'Post a Job — Employer inquiry'})}>Post a Job</button><button type="button" className="jp-primary" onClick={()=>{setQuery('Freelance');setSearch({query:'Freelance',city:''});setCity('');setBrowse(null);setSearched(true);scrollResults()}}>Freelancers</button><button
  type="button"
  className="jp-app-button"
  onClick={installApp}
  title={mobile ? 'Install HRwala on your phone' : 'Install HRwala on your computer'}
>
  {mobile ? 'Mobile App' : 'Desktop App'}
</button></div>
      </div><div className="jp-hero-portrait"><img src={asset('Businesswoman with laptop on transparent background.png')} alt="Career advisor with a laptop" width="559" height="540" fetchPriority="high"/></div></section>
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
            <button
              type="button"
              key={n}
              aria-label={`Browse ${employerNames[i]} jobs`}
              onClick={() => {
                setQuery(employerNames[i]);
                setSearch({ query: employerNames[i], city: '' });
                setCity('');
                setBrowse(null);
                setSearched(true);
                scrollResults();
              }}
            >
              <img
                src={asset(`imgArchVillasGoldLogoOnCrimsonBackground${n}.png`)}
                alt={employerNames[i]}
                width="97"
                height="55"
                loading="lazy"
              />
            </button>
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
        <div className="jp-result-status" role="status">{loading?'Loading jobs…':loadError|| (searched?`${filtered.length} matching ${filtered.length===1?'job':'jobs'}${search.city?` · ${search.city}`:''}${browse?` · ${browse.value}`:''}`:'')}{searched&&<button type="button" onClick={reset}>Clear filters</button>}</div>
        {filtered.length===0&&!loading&&<div className="jp-empty"><h2>{loadError?'Jobs unavailable':'No matching jobs'}</h2><p>{loadError?'Please try again later.':'Try another title, city or category. The current design listings have limited locations.'}</p><button type="button" className="jp-primary" onClick={reset}>Show all jobs</button></div>}
        <div className="jp-job-panels">{[{title:'Top',jobs:top},{title:'Featured',jobs:featured}].map(group=><section className="jp-job-panel" key={group.title} aria-label={`${group.title} jobs`}><h2><span>{group.title}</span> Jobs</h2><div className="jp-job-grid">{group.jobs.map(job=><JobCard key={job.id} job={job} onOpen={j=>setModal({kind:'job',job:j})}/>)}</div>{!group.jobs.length&&filtered.length>0&&<p className="jp-panel-empty">No {group.title.toLowerCase()} jobs match these filters.</p>}<button type="button" className="jp-view-all" onClick={showAll}>View all →</button></section>)}</div>
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
    </div>

    <div className="jp-footer-links">
      <h3>Jobs by Functional Area</h3>
      {[
        ['Sales & Business Development', 'Sales'],
        ['Administration', 'Administration'],
        ['Teachers/Education, Training & Development', 'Education'],
        ['Accounts, Finance & Financial Services', 'Finance'],
        ['Human Resources', 'Human Resources'],
        ['Project Management', 'Project Management'],
        ['Engineering', 'Engineering'],
        ['Health & Medicine', 'Health'],
        ['Marketing', 'Marketing'],
        ['Monitoring & Evaluation (M&E)', 'Monitoring'],
        ['Retail', 'Retail'],
        ['Operations', 'Operations'],
      ].map(([label, searchTerm]) => (
        <button type="button" key={label} onClick={() => quickSearch(searchTerm)}>
          {label}
        </button>
      ))}
    </div>

    <div className="jp-footer-links">
      <h3>Jobs by City</h3>
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
      <h3>Industry Jobs</h3>
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
    {modal&&<Modal title={modal.kind==='job'?modal.job.title:modal.kind==='contact'?modal.subject:modal.title} onClose={()=>setModal(null)}>{modal.kind==='job'?<><p className="jp-modal-company">{modal.job.company}</p><p>{modal.job.remote?'Remote':modal.job.city} · {modal.job.type} · {modal.job.experience}</p><p className="jp-job-description">{modal.job.description||`Explore this ${modal.job.title} opportunity with ${modal.job.company}. Contact HRwala for further information about this role.`}</p>{!live&&<p className="jp-demo-note">Example listing from the page design. Vacancy availability has not been verified.</p>}{modal.job.apply_url&&/^https:\/\//i.test(modal.job.apply_url)?<a className="jp-primary jp-apply-link" href={modal.job.apply_url} target="_blank" rel="noopener noreferrer">Apply at source ↗</a>:<button type="button" className="jp-primary" onClick={()=>setModal({kind:'contact',subject:`Job inquiry: ${modal.job.title} — ${modal.job.company}`})}>Enquire about this job</button>}</>:modal.kind==='contact'?<InquiryForm subject={modal.subject}/>:<p>{modal.message}</p>}</Modal>}
  </div>;
}
