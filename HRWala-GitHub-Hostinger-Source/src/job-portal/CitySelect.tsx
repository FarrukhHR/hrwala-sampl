import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { pakistanCities } from './pakistanCities';
export default function CitySelect({value,onChange}:{value:string;onChange:(value:string)=>void}) {
  const [open,setOpen]=useState(false),[term,setTerm]=useState(''),[active,setActive]=useState(0);
  const root=useRef<HTMLDivElement>(null),input=useRef<HTMLInputElement>(null),id=useId();
  const cities=useMemo(()=>pakistanCities.filter(c=>c.toLowerCase().includes(term.toLowerCase())),[term]);
  const options=['',...cities,'Remote'];
  useEffect(()=>{function outside(e:PointerEvent){if(!root.current?.contains(e.target as Node))setOpen(false)}document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside)},[]);
  useEffect(()=>{if(open){setTerm('');setActive(0);input.current?.focus()}},[open]);
  useEffect(()=>{root.current?.querySelector(`[data-option-index="${active}"]`)?.scrollIntoView({block:'nearest'})},[active]);
  function select(city:string){onChange(city);setOpen(false);root.current?.querySelector<HTMLButtonElement>('.jp-city-trigger')?.focus()}
  return <div className="jp-city" ref={root} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setOpen(false)}}>
    <button type="button" className="jp-city-trigger" aria-haspopup="listbox" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)}><img src="/hrwala-job-portal/assets/imgGroup.svg" alt="" width="18" height="22"/><span>{value||'City or Remote'}</span><span aria-hidden="true">⌄</span></button>
    {open&&<div className="jp-city-menu"><input ref={input} value={term} onChange={e=>{setTerm(e.target.value);setActive(0)}} placeholder="Search cities…" aria-label="Search Pakistan cities" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-controls={id} aria-activedescendant={`${id}-${active}`} onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();setOpen(false)}else if(e.key==='ArrowDown'){e.preventDefault();setActive(a=>Math.min(a+1,options.length-1))}else if(e.key==='ArrowUp'){e.preventDefault();setActive(a=>Math.max(a-1,0))}else if(e.key==='Enter'){e.preventDefault();select(options[active]||'')}}}/>
      <div role="listbox" id={id} aria-label="Pakistan cities" className="jp-city-listbox"><div className="jp-city-scroll">
        <div role="option" id={`${id}-0`} aria-selected={!value} data-option-index="0" className={active===0?'active':''} onMouseDown={e=>e.preventDefault()} onClick={()=>select('')}>All cities</div>
        {cities.map((city,i)=><div key={city} id={`${id}-${i+1}`} role="option" aria-selected={value===city} data-option-index={i+1} className={active===i+1?'active':''} onMouseDown={e=>e.preventDefault()} onClick={()=>select(city)}>{city}{value===city&&<span aria-hidden="true">✓</span>}</div>)}
        {!cities.length&&<p className="jp-city-empty">No matching cities</p>}
      </div><div role="option" id={`${id}-${options.length-1}`} aria-selected={value==='Remote'} data-option-index={options.length-1} className={`jp-remote ${active===options.length-1?'active':''}`} onMouseDown={e=>e.preventDefault()} onClick={()=>select('Remote')}>Remote <span aria-hidden="true">⌁</span></div></div>
    </div>}
  </div>;
}
