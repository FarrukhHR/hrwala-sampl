import { useEffect, useState, type FormEvent, type ReactNode } from 'react'

const ASSETS = '/assets'
const asset = (name: string) => ASSETS + '/' + name
// Replace image paths below with files in public/assets.
const media = {
  logoBlue: asset('cd40f.png'), logoWhite: asset('0b611.png'),
  heroWoman: asset('7da0d.png'), softwareWoman: asset('10bd4.png'),
  interview: asset('58338.png'), teamDiscussion: asset('a1b62.png'), profile: asset('51fdd.png'),
  certificates: [asset('67f31.png'), asset('57cda.png'), asset('8bc8e.png')],
  badges: [asset('996de.png'), asset('8d021.png'), asset('45f95.png')],
}
const links = {
  jobs: 'https://hrwala.net/job-portal', portal: 'https://hrwala.net/login',
  email: 'hello@hrwala.net', whatsapp: '923008523878',
  linkedin: 'https://www.linkedin.com/', facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/', youtube: 'https://www.youtube.com/',
}
const partnerSlots = ['Partner 01', 'Partner 02', 'Partner 03', 'Partner 04', 'Partner 05', 'Partner 06']
const heroSlides = [
  { title: 'HR Certifications', bullets: ['Get Certified', 'Get Noticed', 'Get Hired'] },
  { title: 'Career Opportunities', bullets: ['Discover Relevant Roles', 'Showcase Your Skills', 'Move Forward'] },
  { title: 'Talent Acquisition', bullets: ['Reach Qualified Talent', 'Shortlist With Clarity', 'Hire With Confidence'] },
  { title: 'HR Consulting', bullets: ['Build Stronger Teams', 'Strengthen Your Policies', 'Support Better Decisions'] },
  { title: 'Brand Standards', bullets: ['Define Your Standards', 'Align Every Touchpoint', 'Build Lasting Trust'] },
  { title: 'People @ Top', bullets: ['Put People First', 'Develop Your Workforce', 'Create Room to Grow'] },
  { title: 'HRWala Software', bullets: ['Organise HR Tasks', 'Connect Your Workflows', 'Support Your Team'] },
  { title: 'A Better Way to Work', bullets: ['Find the Right Opportunity', 'Connect People and Business', 'Shape What Comes Next'] },
]
const videos = [
  // Put MP4 files in public/videos and set src to '/videos/your-file.mp4'.
  { title: 'HR Consultants', topic: 'People-first advice', src: '' },
  { title: 'Brand Standards', topic: 'Standards in practice', src: '' },
  { title: 'Job Portal', topic: 'A clearer route to opportunity', src: '' },
  { title: 'HRWala Software', topic: 'One connected HR experience', src: '' },
]
const services = [
  ['01', 'People', 'HR Consultants', 'Build stronger teams with people-first advice, practical policies and a clear HR direction.'],
  ['02', 'Standards', 'Brand Standards', 'Turn your standards into everyday practices that protect your people and your brand.'],
  ['03', 'Opportunity', 'Job Portal', 'A considered space for candidates and employers to find their next great connection.'],
  ['04', 'Systems', 'HRWala Software', 'Bring the employee lifecycle together in one connected HRIS experience.'],
]
const candidateFeatures = ['Smart Job Search', 'Employee Dashboard', 'Resume & CV Builder', 'Verified Job Listings', 'Application Tracking', 'Profile Visibility', 'Mobile-Friendly Access', 'Interview Notifications']
const employerFeatures = ['Quick Job Posting', 'Hiring Dashboard', 'Candidate Database', 'Application Tracking', 'Interview Scheduling', 'Employer Branding', 'Recruitment Analytics', 'Direct Messaging']
const modules = [
  ['Finance', 'Budgeting', 'Map workforce budgets, departmental allocations and planned employee costs.'],
  ['People', 'Talent Acquisition', 'Organise vacancies, candidate pipelines and hiring stages in one place.'],
  ['People', 'On-boarding', 'Coordinate joining tasks, documentation and an organised welcome for new employees.'],
  ['Operations', 'Leaves & Attendance', 'View attendance, manage leave requests and simplify approval workflows.'],
  ['Finance', 'Payroll', 'Prepare payroll inputs, salary components and payslip workflows.'],
  ['People', 'Employee Dashboard', 'Give employees a clear view of their information, requests and everyday HR tasks.'],
  ['Operations', 'Separation', 'Coordinate exit requests, clearance activities and off-boarding documentation.'],
  ['Finance', 'Employee Benefits', 'Organise benefit records and employee entitlements with a consistent process.'],
  ['Growth', '360° Performance', 'Structure goals and feedback from multiple perspectives to support development.'],
  ['Operations', 'HR Dashboards', 'Bring key workforce information together for clearer HR reporting.'],
  ['Growth', 'E-Learning', 'Organise learning resources and track employee development activities.'],
  ['Operations', 'Discipline & Policies', 'Maintain policy resources and structured records for disciplinary processes.'],
]
const industries = [
  ['Resorts & Hotels', 'Elevate guest experiences with consistent service, thoughtful hospitality and a distinctive brand identity.'],
  ['Cafés & Restaurants', 'Build memorable dining experiences through consistent service, welcoming spaces and clear brand standards.'],
  ['Serviced Apartments', 'Build guest trust with reliable service, clean spaces and a consistent brand experience.'],
  ['Private Schools & Academies', 'Build parent trust with clear communication, caring staff and consistent standards across campus.'],
  ['Aviation & Travelling', 'Build passenger trust with attentive service, clear communication and consistent standards across journeys.'],
  ['Event & Wedding Venues', 'Make every event special with skilled teams, warm service and clear brand standards.'],
  ['Spa, Fitness Centers & Gyms', 'Build member trust with skilled teams, clean spaces and consistent care at every visit.'],
  ['Banks & Financial Services', 'Build client trust with professional service, clear communication and consistent standards across branches.'],
  ['Hospitals & Clinics', 'Build patient trust with caring teams, clear communication and consistent standards across facilities.'],
  ['Beauty & Aesthetic Clinics', 'Build client confidence with skilled teams, attentive service and consistent standards of care.'],
  ['Retail Flagship Stores', 'Create memorable shopping experiences with attentive teams, inviting displays and consistent brand standards.'],
  ['Property Sales Galleries', 'Build buyer confidence with informed teams, welcoming spaces and a consistent brand experience.'],
]
const team = [
  { name: 'Farrukh Sohail', role: 'Founder & CEO', image: '' },
  { name: 'Team Member 02', role: 'Leadership', image: '' },
  { name: 'Team Member 03', role: 'Leadership', image: '' },
  { name: 'Team Member 04', role: 'Leadership', image: '' },
  { name: 'Team Member 05', role: 'People & Culture', image: '' },
  { name: 'Team Member 06', role: 'People & Culture', image: '' },
  { name: 'Team Member 07', role: 'HR Consultant', image: '' },
  { name: 'Team Member 08', role: 'HR Consultant', image: '' },
]
const faqs = [
  ['How can HRWala.net help me find a job?', 'Explore job opportunities and connect with potential employers through our job portal.'],
  ['Can employers use HRWala.net for recruitment?', 'Yes. Employers can present their organisation, publish vacancies and manage candidate conversations through a more organised hiring process.'],
  ['What HR services does HRWala.net offer?', 'HRWala.net brings together HR consulting, brand standards, recruitment and HR software to support people and organisations.'],
  ['How can I get information about professional certifications?', 'Send us a message through the contact form and select Certifications. Our team can guide you on the available programmes.'],
]
const certifications = ['Certified HR Professional', 'Certified Human Resource Business Partner', 'Certified Learning & Development Professional']
const steps = ['Hire', 'On-board', 'Manage', 'Pay', 'Grow']

function ActionLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a className={'button ' + className} href={href}>{children}</a>
}
function Heading({ first, second }: { first: string; second: string }) {
  return <h2 className="section-heading"><span>{first}</span> {second}</h2>
}
function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="HRWala home"><img src={media.logoBlue} alt="HRWala.net" /></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
      <a href="#home" onClick={() => setOpen(false)}>Discover</a><a href="#job-portal" onClick={() => setOpen(false)}>Job Portal</a>
    </nav>
    <a className="portal-link" href={links.portal}>My Portal</a>
    <a className="profile-link" href={links.portal} aria-label="Open My Portal"><img src={media.profile} alt="" /></a>
  </header>
}
function Hero() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5200)
    return () => window.clearInterval(timer)
  }, [])
  const slide = heroSlides[active]
  return <section className="hero section-shell" id="home" aria-label="HRWala introduction">
    <div className="hero-copy">
      <p className="eyebrow"><span />People @ Top</p>
      <div className="hero-slide" key={active}>
        <h1>{slide.title}</h1><ul className="hero-bullets">{slide.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </div>
      <p className="hero-description">Recognized credentials for working professionals.<br className="desktop-break" /> Your next career step starts here.</p>
      <ActionLink href={links.jobs}>Job Portal</ActionLink>
    </div>
    <div className="hero-visual">
      <img className="hero-person" src={media.heroWoman} alt="Professional HRWala representative" />
      <span className="floating-word word-one">HR Consulting</span><span className="floating-word word-two">Career Opportunities</span>
      <span className="floating-word word-three">Brand Standards</span><span className="floating-word word-four">Talent Acquisition</span>
    </div>
  </section>
}
function VideoCard({ title, topic, src }: { title: string; topic: string; src: string }) {
  return <div className="video-card">{src
    ? <video controls playsInline preload="metadata" aria-label={title + ': ' + topic}><source src={src} />Your browser does not support video playback.</video>
    : <div className="video-placeholder" role="img" aria-label={'Video placeholder for ' + title} />}</div>
}
function FeaturePanel({ title, number, features }: { title: string; number: string; features: string[] }) {
  return <article className="feature-panel hover-card">
    <div className="feature-title"><span className="feature-number">{number}</span><h3>{title}</h3></div>
    <ul className="feature-list">{features.map((f) => <li key={f}>{f}</li>)}</ul>
  </article>
}
function SoftwareSection() {
  return <section className="software-section section-shell" id="software">
    <div className="software-intro">
      <div className="software-copy">
        <Heading first="HRWala" second="Software" /><h3 className="software-lede">The system behind a better-run workforce.</h3>
        <p>HRWala brings employee records, onboarding, attendance, payroll and performance into one organised platform—so every HR process has a clear place and a smoother flow.</p>
        <div className="workflow" aria-label="Employee lifecycle">{steps.map((s, i) => <div className="workflow-step" key={s}><span>{['♙', '▤', '♟', '▣', '↗'][i]}</span><b>{s}</b></div>)}</div>
        <ActionLink href="#modules">Explore the Platform</ActionLink>
      </div>
      <div className="software-visual">
        <img src={media.softwareWoman} alt="HR professional presenting the HRWala employee dashboard" />
        <span className="floating-word software-word-one">Leaves & Attendance</span><span className="floating-word software-word-two">On-boarding</span>
        <span className="floating-word software-word-three">Employee Dashboard</span><span className="floating-word software-word-four">Payroll</span>
        <span className="floating-word software-word-five">Talent Acquisition</span>
      </div>
    </div>
    <div id="modules"><Heading first="Top" second="Modules" /><div className="module-grid">
      {modules.map(([category, title, text], i) => <article className="info-card hover-card" key={title}><span className="card-kicker">{String(i + 1).padStart(2, '0')} / {category}</span><h3>{title}</h3><p>{text}</p></article>)}
    </div></div>
  </section>
}
function ContactForm() {
  const [notice, setNotice] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = 'HRWala enquiry — ' + String(data.get('topic') || 'General Inquiry')
    const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nTopic: ' + data.get('topic') + '\n\n' + data.get('message')
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(links.email) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
    setNotice('A Gmail draft is opening with your message. Review it and press Send.')
    event.currentTarget.reset()
  }
  return <form className="contact-form" onSubmit={submit}>
    <h3>Get in Touch</h3><p>Tell us how we can assist you.</p>
    <label>Full Name<input name="name" autoComplete="name" placeholder="Enter your name" required /></label>
    <label>Email<input name="email" type="email" autoComplete="email" placeholder="example@gmail.com" required /></label>
    <label>How Can We Help?<select name="topic" defaultValue="General Inquiry"><option>General Inquiry</option><option>Job Portal</option><option>HR Services</option><option>HRWala Software</option><option>Certifications</option></select></label>
    <label>Your Message<textarea name="message" placeholder="Tell us more about your inquiry..." required /></label>
    <button className="button button-gold" type="submit">Submit</button>{notice && <p className="form-notice" role="status">{notice}</p>}
  </form>
}
function ContactSection() {
  const [open, setOpen] = useState<number | null>(0)
  return <section className="contact-section section-shell" id="contact">
    <div className="contact-copy">
      <Heading first="Got a" second="Question?" /><h2 className="connect-title">Let's Connect &amp; Move Forward</h2>
      <p>Whether you're exploring career opportunities, looking for the right talent, or interested in our HR solutions, we're here to assist you.</p>
      <p>Connect with HRWala.net and let our team guide you toward the right solution.</p>
      <p className="mini-label">Need more information?</p><h3 className="faq-heading">Frequently Asked Questions</h3>
      <div className="faq-list">{faqs.map(([q, a], i) => {
        const expanded = open === i
        return <article className={'faq-item ' + (expanded ? 'is-open' : '')} key={q}>
          <button type="button" className="faq-question" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : i)}><span>{q}</span><span className="faq-icon" aria-hidden="true">{expanded ? '−' : '+'}</span></button>
          <div className="faq-answer" aria-hidden={!expanded}><div><p>{a}</p></div></div>
        </article>
      })}</div>
    </div><ContactForm />
  </section>
}
function Footer() {
  const [notice, setNotice] = useState('')
  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = 'Please subscribe ' + String(data.get('newsletter-email')) + ' to the HRWala newsletter.'
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(links.email) + '&su=' + encodeURIComponent('Newsletter subscription request') + '&body=' + encodeURIComponent(body)
    setNotice('A Gmail draft is opening. Send it to complete your subscription request.')
    event.currentTarget.reset()
  }
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-about"><a href="#home" aria-label="HRWala home"><img className="footer-logo" src={media.logoWhite} alt="HRWala.net" /></a>
        <p>HRWala.net brings together talent, opportunities, and innovative HR solutions on one platform. We empower professionals to advance their careers and support organizations in building stronger, more capable teams.</p>
      </div>
      <nav className="footer-nav" aria-label="Footer links"><h3>Explore</h3><a href="#home">Discover</a><a href="#job-portal">Job Portal</a><a href="#software">HRWala Software</a><a href="#certifications">Certifications</a></nav>
      <div className="footer-contact"><h3>Contact</h3>
        <a href={'https://wa.me/' + links.whatsapp} target="_blank" rel="noreferrer">+92 300 8523878</a>
        <a href={'https://wa.me/' + links.whatsapp} target="_blank" rel="noreferrer">+92 300 8523878</a>
        <a href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(links.email)} target="_blank" rel="noreferrer">{links.email}</a>
      </div>
      <div className="newsletter"><h3>Subscribe to our Newsletter</h3><form onSubmit={subscribe}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="newsletter-email" type="email" placeholder="Enter your email" required />
        <button className="button button-gold" type="submit">Subscribe</button>
      </form>{notice && <p className="form-notice" role="status">{notice}</p>}
        <div className="social-links" aria-label="Social media">
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a href={links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
        </div>
      </div>
    </div><div className="copyright">© 2026 HRWala.net. All rights reserved.</div>
  </footer>
}

export default function App() {
  return <>
    <Header /><main>
      <Hero />
      <section className="services-section section-shell" id="services"><Heading first="A' La Carte:" second="We Offer" />
        <div className="video-grid">{videos.map((v) => <VideoCard key={v.title} {...v} />)}</div>
        <div className="service-grid">{services.map(([number, category, title, text]) => <article className="service-card hover-card" key={number}>
          <span className="service-kicker">{number} / {category}</span><span className="service-watermark">{number}</span><h3>{title}</h3><p>{text}</p>
        </article>)}</div>
      </section>
      <section className="portal-section section-shell" id="job-portal">
        <div className="portal-intro"><div className="portal-copy"><Heading first="JOB" second="Portal" />
          <p>Every career move shapes a future. Every hiring decision shapes a business. HRWala.net connects professionals with opportunities and employers with talent—making it easier to showcase skills, explore roles and manage hiring in one place.</p>
          <p><strong>For candidates:</strong> Build a profile that reflects your skills, experience and ambitions. Explore relevant roles, create your CV and apply with ease, while keeping your applications, interview schedules and employer conversations organised in one place.</p>
          <p><strong>For employers:</strong> Present your organisation, publish vacancies and connect with candidates who meet your requirements. Review profiles, shortlist applicants, coordinate interviews and manage communication through a central dashboard.</p>
          <ActionLink href={links.jobs}>Explore Job Portal</ActionLink>
        </div><img className="portal-image" src={media.interview} alt="Professionals discussing recruitment in a modern office" /></div>
        <div className="feature-grid"><FeaturePanel title="Candidates" number="01" features={candidateFeatures} /><FeaturePanel title="Employers" number="02" features={employerFeatures} /></div>
      </section>
      <section className="process-section section-shell" id="process">
        <div className="process-copy"><p className="mini-label">A clearer way forward</p><Heading first="Our" second="Process" />
          <p>From the first conversation to everyday practice, we help connect the right people, systems and standards.</p>
          <div className="process-steps">{[
            ['01', 'Understand your needs', 'We learn about your goals, people and current priorities.'],
            ['02', 'Shape the right approach', 'We recommend practical steps aligned with your organisation.'],
            ['03', 'Build lasting trust', 'Create a dependable experience across every touchpoint.'],
          ].map(([number, title, text]) => <article className="process-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div><img src={media.teamDiscussion} alt="HR team collaborating on a workforce plan" />
      </section>
      <section className="industry-section section-shell" id="industries"><Heading first="Built for" second="Every Industry" />
        <div className="industry-grid">{industries.map(([title, text]) => <article className="info-card hover-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <SoftwareSection />
      <section className="certification-section section-shell" id="certifications">
        <div className="certification-copy"><p className="mini-label">Learn · Earn · Showcase</p><Heading first="Professional" second="Certifications" />
          <p>Build your HR expertise with professional learning pathways designed to help you develop practical skills and demonstrate your knowledge.</p>
          <ul className="certification-list">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
          <ActionLink href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(links.email) + '&su=' + encodeURIComponent('Professional certifications inquiry')}>Get Certified</ActionLink>
        </div>
        <div className="certificate-grid">{media.certificates.map((img, i) => <figure className="certificate-card hover-card" key={img}><img src={img} alt={certifications[i]} /><figcaption>{certifications[i]}</figcaption></figure>)}</div>
        <div className="badge-grid">{media.badges.map((img, i) => <img className="badge-image hover-card" src={img} alt={['Ready to Serve', 'Skilled Professional', 'Featured Associate'][i]} key={img} />)}</div>
      </section>
      <section className="team-section section-shell" id="team"><div className="team-heading"><Heading first="HRWala" second="Team" /><p>Meet the people behind a thoughtful, connected HR experience.</p></div>
        <div className="team-grid">{team.map((person, i) => <article className="team-card hover-card" key={person.name}>
          <div className="team-photo">{person.image ? <img src={person.image} alt={person.name} /> : <div className="image-placeholder" role="img" aria-label={'Replace team photo ' + (i + 1) + ' in App.tsx'} />}</div>
          <div className="team-meta"><span className="team-lines" aria-hidden="true"><i /><i /><i /></span><h3>{person.name}</h3><p>{person.role}</p></div>
        </article>)}</div>
      </section>
      <section className="partners-section" aria-label="Featured partners"><div className="section-shell"><Heading first="Featured" second="Partners" /></div>
        <div className="partner-marquee"><div className="partner-track">{[...partnerSlots, ...partnerSlots].map((_, i) => <div className="partner-node" key={i}><span className="partner-dot" /><div className="partner-placeholder" aria-label={'Partner logo placeholder ' + (i % 6 + 1)} /><span className="partner-dot" /></div>)}</div></div>
      </section>
      <ContactSection />
    </main><Footer />
  </>
}

