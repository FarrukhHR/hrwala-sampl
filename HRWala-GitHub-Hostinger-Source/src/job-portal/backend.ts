import type { Job } from './jobs';
// The existing website's public client configuration. Environment values take priority.
const config = (import.meta as ImportMeta & { env: Record<string,string|undefined> }).env;
const url = config.VITE_SUPABASE_URL || 'https://tuoefnaaroqhguyuwson.supabase.co';
const key = config.VITE_SUPABASE_PUBLISHABLE_KEY || config.VITE_SUPABASE_ANON_KEY || 'sb_publishable_o8mNxrNvN4GtAHpSoSTrOA_X9gNe0Y_';
async function insert(table: 'newsletter_subscribers' | 'inquiries', values: Record<string,unknown>) {
  const response=await fetch(`${url.replace(/\/$/,'')}/rest/v1/${table}`,{method:'POST',headers:{apikey:key,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(values),signal:AbortSignal.timeout(15000)});
  if(!response.ok){const error=await response.json().catch(()=>({}));if(error.code==='23505')throw new Error('This email is already subscribed.');throw new Error('Unable to submit right now. Please try again.');}
}
export const subscribe=(email:string)=>insert('newsletter_subscribers',{email:email.trim().toLowerCase()});
export const sendInquiry=(form: { name:string; email:string; phone:string; message:string })=>insert('inquiries',{name:form.name.trim(),email:form.email.trim().toLowerCase(),phone:form.phone.trim()||null,inquiry:'General Inquiry',message:form.message.trim()});
// Optional live jobs endpoint: leave unset to show the exact design jobs.
// The endpoint must return Job[] or { jobs: Job[] } with only public, published jobs.
export async function loadPublishedJobs(signal: AbortSignal): Promise<Job[] | null> {
  const endpoint=config.VITE_JOB_PORTAL_JOBS_URL;
  if(!endpoint)return null;
  const response=await fetch(endpoint,{signal,headers:{Accept:'application/json'}});
  if(!response.ok)throw new Error('Unable to load current jobs. Please try again.');
  const payload=await response.json();const rows=Array.isArray(payload)?payload:payload.jobs;
  if(!Array.isArray(rows)||rows.some(j=>!j||typeof j.id!=='string'||typeof j.title!=='string'||typeof j.company!=='string'||typeof j.city!=='string'))throw new Error('Jobs response has an invalid format.');
  return rows.map(j=>({...j,featured:!!j.featured,sector:j.sector||'',role:j.role||'',type:j.type||'Full-time',experience:j.experience||''}));
}
