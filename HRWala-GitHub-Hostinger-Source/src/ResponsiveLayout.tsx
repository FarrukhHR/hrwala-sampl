import { Children, cloneElement, isValidElement, useState, useSyncExternalStore, type ReactNode, type ReactElement } from 'react'
import './mobile.css'

type Props = { children?: ReactNode; className?: string; style?: Record<string, unknown>; src?: string; 'data-node-id'?: string; [key: string]: unknown }
type Node = ReactElement<Props>
const query = '(max-width: 1023px)'
const subscribe = (notify: () => void) => {
  const media = window.matchMedia(query)
  media.addEventListener('change', notify)
  return () => media.removeEventListener('change', notify)
}
const snapshot = () => window.matchMedia(query).matches

function walk(children: ReactNode): Node[] {
  return Children.toArray(children).flatMap(child => isValidElement<Props>(child) ? [child, ...walk(child.props.children)] : [])
}

// Keep typography/colours, remove the desktop canvas coordinates.
function flow(value: ReactNode, images = true): ReactNode {
  return Children.map(value, child => {
    if (!isValidElement<Props>(child) || typeof child.type !== 'string') return child
    const tag = child.type
    if (tag === 'svg' || (tag === 'img' && !images)) return null
    if (tag === 'img' && /\.svg(?:\?|$)/i.test(child.props.src || '')) return null
    const classes = (child.props.className || '').split(/\s+/).filter(c =>
      /^(font-|text-|leading-|tracking-|not-italic|italic)/.test(c) &&
      !/^text-\[(?:0(?:px)?|right|justify)\]$/.test(c) && c !== 'text-justify'
    ).join(' ')
    const content = flow(child.props.children, images)
    if (tag === 'div' && !Children.toArray(content).some(Boolean)) return null
    return cloneElement(child, {
      className: 'm-flow ' + classes,
      style: undefined,
      id: undefined,
      'data-node-id': undefined,
      children: tag === 'img' ? undefined : content,
    })
  })
}

export default function ResponsiveLayout({ design, hero, video, steps, faq, contact, newsletter }: {
  design: Node; hero: ReactNode; video: ReactNode; steps: ReactNode;
  faq: ReactNode; contact: ReactNode; newsletter: ReactNode;
}) {
  const mobile = useSyncExternalStore(subscribe, snapshot, () => false)
  const [menu, setMenu] = useState(false)
  if (!mobile) return design
  const nodes = walk(design)
  const get = (id: string) => nodes.find(node => node.props['data-node-id'] === id)
  const show = (id: string) => <div key={id} className="m-source">{flow(get(id))}</div>
  const picture = (id: string) => {
    const node = get(id)
    const image = walk(node).find(item => item.type === 'img')
    return image ? <img src={image.props.src} alt={String(node?.props['data-name'] || '')} loading="lazy" /> : null
  }
  const heading = (id: string) => <div role="heading" aria-level={2} className="m-heading">{flow(get(id))}</div>
  const teamCard = (node: Node | undefined, key: string) => {
    const image = walk(node).find(item => item.type === 'img' && !/\.svg(?:\?|$)/i.test(item.props.src || ''))
    return <article className="m-card" key={key}>{image && <img src={image.props.src} alt="" loading="lazy" />}{flow(node, false)}</article>
  }
  const group = (ids: string[]) => <div className="m-grid">{ids.map(id => <article className="m-card" key={id}>{show(id)}</article>)}</div>
  const link = (label: string, href: string) => <a className="m-button" href={href}>{label}</a>
  const orbit = (image: string, ids: string[]) => <div className="m-orbit">
    {picture(image)}{ids.map((id, i) => <div className={`m-orbit-label m-label-${i + 1}`} key={id}>{show(id)}</div>)}
  </div>
  const nav = [['Discover', '#home'], ['Job Portal', 'https://hrwala.net/job-portal'], ['HRWala Software', '#software'], ['Academy', '#academy'], ['Our Team', '#team'], ['Contact', '#contact'], ['My Portal', 'https://hrwala.net/login']]
  const modules = ['228:103','228:111','228:119','228:127','228:137','228:145','228:153','228:161','228:203','228:211','228:219','228:227']
  return <div className="hr-mobile" id="mobile-home">
    <header className="m-header" id="home">
      <a href="#home" aria-label="HRWala home"><img src="/assets/b7c26.png" alt="HRWala" /></a>
      <button type="button" aria-expanded={menu} aria-controls="mobile-navigation" aria-label={menu ? 'Close navigation' : 'Open navigation'} onClick={() => setMenu(!menu)}>{menu ? 'âœ•' : 'â˜°'}</button>
      <nav id="mobile-navigation" hidden={!menu}>{nav.map(([label, href]) => <a href={href} key={label} onClick={() => setMenu(false)}>{label}</a>)}</nav>
    </header>
    <main>
      <section className="m-section m-hero">
        <p className="m-eyebrow">People @ Top</p><div className="m-hero-copy">{hero}</div>
        {orbit('412:1238', ['412:1206','412:1207','412:1208','412:1209','412:1210','412:1211'])}
      </section>
      <section className="m-section" id="services">{heading('69:3')}
        <div className="m-grid m-services">{['101:66','101:109','101:125','101:133'].map((id,index) => <article className="m-card" key={id}>{index < 2 && picture(['440:14062','440:14068'][index])}{index === 2 && flow(nodes.find(n => String(n.props['data-name'] || '').includes('Straight-on portrait')))}{show(id)}</article>)}</div>
        <div className="m-video">{video}</div>
      </section>
      <section className="m-section m-panel" id="jobs"><div className="m-split"><div className="m-stack">{heading('109:6')}{show('171:5')}{link('Explore Job Portal','https://hrwala.net/job-portal')}</div>{picture('413:611')}</div>
        <div className="m-grid"><article className="m-card">{show('109:12')}{show('109:14')}{['118:37','118:69','118:60','118:72'].map(show)}{link('Find Your Dream Job','https://hrwala.net/job-portal')}</article><article className="m-card">{show('118:124')}{show('118:125')}{['118:131','118:134','118:137','118:140'].map(show)}{link('Start Hiring','https://hrwala.net/login')}</article></div>
      </section>
      <section className="m-section" id="academy">{heading('242:251')}{group(['247:337','247:338','247:344'])}
        {heading('247:356')}<div className="m-grid m-credentials">{['509:726','509:730','509:732'].map(id => <article key={id}>{picture(id)}</article>)}</div>
        {heading('256:2')}<div className="m-grid m-credentials">{['501:711','502:713','502:715'].filter(id => walk(get(id)).some(n => n.type === 'img')).map(id => <article key={id}>{picture(id)}</article>)}</div>
      </section>
      <section className="m-section m-panel" id="software"><div className="m-split"><div className="m-stack">{heading('207:36')}{show('224:22')}{show('224:24')}<div className="m-lifecycle">{['239:246','239:247','239:248','239:249','239:250'].map(show)}</div>{link('Explore the Platform','https://hrwala.net/login')}</div>{orbit('413:615', ['207:50','207:51','207:53','239:241','207:52','239:243'])}</div>
        {heading('228:236')}{group(modules)}</section>
      <section className="m-section" id="brand-standards">{heading('133:2')}<div className="m-split"><div className="m-steps">{steps}</div>{picture('413:613')}</div>{group(['159:37','159:277','159:301','159:45','159:283','159:307','159:53','159:289','159:313','159:61','159:295','159:319'])}</section>
      <section className="m-section m-panel" id="team">{heading('260:32')}<div className="m-grid m-team">{['437:13757','437:13857','437:13879','437:13901','437:13923','437:13934','437:13945','437:13956','442:14070','437:14011','437:14022'].map(id => teamCard(get(id), id))}{teamCard(nodes.find(n => (n.props.className || '').includes('hussain-team-card')), 'hussain')}</div></section>
      <section className="m-section">{heading('274:62')}<div className="m-partners">{nodes.filter(n => (n.props.className || '').split(' ').includes('featured-partners-marquee'))}</div></section>
      <section className="m-section m-panel" id="contact"><div className="m-split"><div className="m-stack">{heading('274:203')}{heading('274:206')}{show('513:712')}{heading('289:47')}{faq}</div>{contact}</div></section>
    </main>
    <footer className="m-footer"><div className="m-footer-grid"><div><img className="m-footer-logo" src="/assets/0b611.png" alt="HRWala" />{show('299:5')}</div><nav aria-label="Footer">{nav.map(([label,href]) => <a href={href} key={label}>{label}</a>)}</nav><div><h2>Contact Us</h2><a href="tel:+923008523878">+92 300 8523878</a><a href="tel:+923055243737">+92 305 5243737</a><a href="mailto:hello@hrwala.net">hello@hrwala.net</a></div><div><h2>Stay Connected</h2>{newsletter}</div></div>{show('299:19')}</footer>
  </div>
}