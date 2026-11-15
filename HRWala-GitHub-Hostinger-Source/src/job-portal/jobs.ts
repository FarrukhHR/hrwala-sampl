export type Job = { id: string; title: string; company: string; city: string; featured: boolean; sector: string; role: string; type: string; experience: string; remote?: boolean; description?: string; apply_url?: string };
export const demoJobs: Job[] = [
  ['Sales Manager','Interloop Holdings Pvt. Ltd.','Faisalabad','Sales','Manufacturing','Management'],
  ['Audit Manager','Ansaar Management Company','Lahore','Accounting','Accounting','Management'],
  ['UK Practice Accountant','Recruit AI','Lahore','Accounting','Accounting','Mid Level'],
  ['Field Sales Officer','Recruit AI','Karachi','Sales','Services','Entry Level'],
  ['Site Supervisor','Oliotech Oilfield Services','Pakistan','Operations','Construction','Mid Level'],
  ['Director PMO','US Based IT Services','Islamabad','Project Management','Information Technology','Management'],
  ['Freelance Electronics','Recruit AI','Multiple Cities','Engineering','Electronics','Mid Level'],
  ['Senior Data Analyst','US Based IT Services','Pakistan','Data Analysis','Information Technology','Senior Level'],
  ['Marketing Executive','Horizon Digital Solutions','Lahore','Marketing','Services','Entry Level'],
  ['Frontend Developer','Nexora Technologies','Karachi','Development','Information Technology','Mid Level'],
  ['HR Officer','Prime Talent Services','Islamabad','Human Resources','Recruitment','Entry Level'],
  ['Finance Analyst','Summit Business Group','Faisalabad','Finance','Banking','Mid Level'],
  ['Graphic Designer','Pixel Craft Studio','Rawalpindi','Design','Services','Mid Level'],
  ['Operations Manager','Vertex Logistics','Multan','Operations','Services','Management'],
  ['Customer Support Officer','ConnectPlus Services','Peshawar','Customer Support','Call Center','Entry Level'],
  ['Talent Acquisition Specialist','PeopleFirst Consulting','Sialkot','Human Resources','Recruitment','Mid Level'],
].map((r,i)=>({id:`design-${i+1}`,title:r[0],company:r[1],city:r[2],role:r[3],sector:r[4],experience:r[5],featured:i>=8,type:i===6?'Freelance':'Full-time'}));
export function filterJobs(jobs: Job[], query: string, city: string, browse?: { tab: string; value: string } | null) {
  const q=query.trim().toLowerCase(), location=city.trim().toLowerCase();
  return jobs.filter(job=>{
    const text=[job.title,job.company,job.role,job.sector,job.type,job.city].join(' ').toLowerCase();
    const queryMatch=q.split(/\s+/).every(term=>text.includes(term));
    const cityMatch=!location || (location==='remote' ? job.remote===true : job.city.toLowerCase().includes(location)||['pakistan','multiple cities'].includes(job.city.toLowerCase()));
    const value=browse?.value.toLowerCase();
    const map: Record<string,string>={Role:job.role,City:job.city,Company:job.company,Sector:job.sector,'Job Type':job.type,Experience:job.experience};
    const browseMatch=!browse || (browse.tab==='Role' ? [job.role,job.sector].some(v=>v.toLowerCase()===value) : (map[browse.tab]||'').toLowerCase()===value);
    return queryMatch&&cityMatch&&browseMatch;
  });
}
