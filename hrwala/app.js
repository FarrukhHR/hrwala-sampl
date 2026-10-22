import "./content.js";
("use strict");
const C = window.HRWALA,
  $ = (q, root = document) => root.querySelector(q),
  $$ = (q, root = document) => [...root.querySelectorAll(q)];
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const isJobs = document.body.dataset.page === "jobs";
const asset = (s) => (/^(assets\/|https:\/\/)/.test(s || "") ? esc(s) : "");
const svg = {
  people:
    '<circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4M17 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v2"/>',
  shield:
    '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6z"/><path d="m8 12 3 3 5-6"/>',
  briefcase:
    '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c5 4 13 4 18 0M12 12v4"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
};
const icon = (n) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svg[n]}</svg>`;
const logo =
  '<a class="brand" href="index.html" aria-label="HR Wala.net Discover"><span class="brand-mark">hr</span><span class="brand-name">HR<b>Wala</b><small>.net</small></span></a>';
$("#header").innerHTML =
  `<header class="site-header"><div class="wrap header-inner">${logo}<nav class="desktop-nav" id="main-nav" aria-label="Main navigation"><a href="index.html" class="${!isJobs ? "active" : ""}" ${!isJobs ? 'aria-current="page"' : ""}>Discover</a><a href="jobs.html" class="${isJobs ? "active" : ""}" ${isJobs ? 'aria-current="page"' : ""}>Job Portal <span aria-hidden="true"> ↗</span></a></nav><button class="menu-button" aria-label="Open menu" aria-controls="main-nav" aria-expanded="false">☰</button></div></header>`;
$("#footer").innerHTML =
  `<footer class="site-footer"><div class="wrap"><div class="footer-grid"><div class="footer-brand">${logo}<span class="footer-promise">PEOPLE. POSSIBILITIES. PROGRESS.</span><p>People-first HR support for stronger teams, trusted standards and connected workplaces.</p></div><div class="footer-col"><h4>Explore</h4><a href="index.html">Discover HRWala</a><a href="jobs.html">Find opportunities</a><a href="index.html#team">Meet the team</a><a href="index.html#partners">Our partners</a></div><div class="footer-col"><h4>People &amp; work</h4><a href="index.html#services">HR consulting</a><a href="index.html#services">Brand standards</a><a href="index.html#certifications">Skills development</a><a href="index.html#software">HRWala Software</a></div><div class="footer-col"><h4>Your space</h4><a href="index.html#contact">Contact our team</a><a href="jobs.html">Career opportunities</a><button data-profile>Your local profile</button><button data-privacy>Privacy &amp; data</button></div></div><div class="footer-bottom"><span>© 2015 HRWala.net. All rights reserved.</span><span>Built around people. Designed for progress.</span><button class="plain" data-privacy>Privacy notice</button></div></div></footer>`;
$(".menu-button").addEventListener("click", (e) => {
  const open = $("#main-nav").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
  e.currentTarget.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
const readStore = (k, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(k)) ?? fallback;
  } catch {
    return fallback;
  }
};
const writeStore = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
    return true;
  } catch {
    toast(
      "Browser storage is unavailable. Changes cannot be saved on this device.",
    );
    return false;
  }
};
let toastTimer;
function toast(t) {
  $("#toast").textContent = t;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 4500);
}
const detail = $("#detail-dialog");
function openDetail(html) {
  $("#detail-content").innerHTML = html;
  detail.showModal();
  document.body.classList.add("modal-open");
}
function closeDialog(d) {
  d.close();
}
$$("dialog").forEach((d) => {
  $(".dialog-close", d).onclick = () => closeDialog(d);
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        closeDialog(d);
    }
  });
  d.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
});
function download(name, content, type = "text/plain") {
  const url = URL.createObjectURL(new Blob([content], { type })),
    a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function privacy() {
  openDetail(
    '<div class="eyebrow">PREVIEW PRIVACY NOTICE</div><h2>Your information stays in your hands.</h2><p>This static preview has no account server, live vacancy database, analytics or payment processing. Saved jobs and your optional local profile are stored in this browser only. They do not sync between devices.</p><p>With no contact endpoint configured, the enquiry form creates a text file on your device; nothing is sent. If an endpoint is configured, the form sends the fields you submit to that endpoint. The site owner must publish its approved privacy policy before accepting live enquiries.</p><p>You can clear saved jobs and your profile below. Downloaded files are not deleted.</p><button class="button outline" id="clear-data">Clear this site’s local data</button>',
  );
  $("#clear-data").onclick = () => {
    try {
      localStorage.removeItem("hrwala.profile");
      localStorage.removeItem("hrwala.saved");
      saved = [];
      if (isJobs) renderJobs();
      toast("Local profile and saved jobs cleared.");
      detail.close();
    } catch {
      toast("Could not access browser storage.");
    }
  };
}
$$("[data-privacy]").forEach((b) => (b.onclick = privacy));
function profileForm() {
  const p = readStore("hrwala.profile", {});
  openDetail(
    `<div class="eyebrow">YOUR PROFESSIONAL SPACE</div><h2>Introduce yourself.</h2><p>A local profile preview for candidates, employees and employers. This is not a registered account.</p><form id="profile-form"><label>I am a<select name="role">${["Candidate", "Employee", "Employer"].map((s) => `<option ${s === p.role ? "selected" : ""}>${s}</option>`).join("")}</select></label><div class="two-col"><label>Full name<input name="name" value="${esc(p.name)}" required maxlength="100" autocomplete="name"></label><label>Email<input name="email" type="email" value="${esc(p.email)}" required autocomplete="email"></label></div><label>Professional headline<input name="headline" value="${esc(p.headline)}" placeholder="e.g. People & Culture Specialist" required maxlength="150"></label><label>Location<input name="location" value="${esc(p.location)}" placeholder="City, country" maxlength="100"></label><label>A short introduction<textarea name="bio" rows="3" maxlength="1000">${esc(p.bio)}</textarea></label><p class="form-note">Saved only in this browser. Avoid adding sensitive personal information to this demo.</p><button class="button primary" type="submit">Save local profile ↗</button></form>`,
  );
  $("#profile-form").onsubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (writeStore("hrwala.profile", data)) {
      profileView();
      toast("Profile saved in this browser.");
    }
  };
}
function profileView() {
  const p = readStore("hrwala.profile", null);
  if (!p) {
    profileForm();
    return;
  }
  openDetail(
    `<div class="eyebrow">LOCAL PROFILE · ${esc(p.role)}</div><h2>${esc(p.name)}</h2><p>${esc(p.headline)}</p><div class="profile-summary"><p>${esc(p.location)}</p><p>${esc(p.email)}</p><p>${esc(p.bio)}</p></div><p class="form-note">This profile is visible only on this device. No public account has been created.</p><div class="profile-actions"><button class="button primary" id="edit-profile">Edit profile</button><button class="button outline" id="export-profile">Download profile</button><button class="button outline" id="delete-profile">Delete local profile</button></div>`,
  );
  $("#edit-profile").onclick = profileForm;
  $("#export-profile").onclick = () =>
    download(
      "HRWala-Profile.json",
      JSON.stringify(p, null, 2),
      "application/json",
    );
  $("#delete-profile").onclick = () => {
    try {
      localStorage.removeItem("hrwala.profile");
      detail.close();
      toast("Local profile deleted.");
    } catch {
      toast("Could not delete local profile.");
    }
  };
}
$$("[data-profile]").forEach((b) => (b.onclick = profileView));
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
let saved = readStore("hrwala.saved", []);
if (!Array.isArray(saved)) saved = [];
function interest(value) {
  const select = $("#contact-interest");
  if (select) select.value = value;
  detail.close();
  location.hash = "contact";
}
if (!isJobs) {
  $("#service-grid").innerHTML = C.services
    .map(
      (s, i) =>
        `<article class="service-card"><div class="service-icon">${icon(s.icon)}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${i === 2 ? '<a class="text-link" href="jobs.html">Explore opportunities ↗</a>' : i === 3 ? '<a class="text-link" href="#software">Explore the platform ↗</a>' : `<button class="text-link" data-service="${i}">Explore this solution ↗</button>`}</article>`,
    )
    .join("");
  $("#video-grid").innerHTML = C.services
    .map(
      (s, i) =>
        `<article class="video-card"><button class="video-open" type="button" data-preview="${i}" aria-label="Play ${esc(s.title)} preview"><img class="video-poster" src="${asset(s.poster)}" alt="" loading="lazy"><span class="video-wash" aria-hidden="true"></span><div class="video-overlay" aria-hidden="true"><span class="video-overline">${String(i + 1).padStart(2, "0")} / ${esc(s.tag)}</span><div class="video-caption"><span class="play-icon">&#9654;</span><h3>${esc(s.title)}</h3><small>${esc(s.tag)}</small></div></div></button><button class="sound-toggle" type="button" aria-label="Turn sound on for ${esc(s.title)} preview" aria-pressed="false">&#9835;</button></article>`,
    )
    .join("");
  $$(".video-card").forEach((card) => {
    const preview = $(".video-open", card);
    const playIcon = $(".play-icon", card);
    const sound = $(".sound-toggle", card);
    const service = C.services[Number(preview.dataset.preview)];
    let video = null;
    let muted = true;
    const updatePlayback = () => {
      preview.setAttribute(
        "aria-label",
        `${video.paused ? "Play" : "Pause"} ${service.title} preview`,
      );
      playIcon.textContent = video.paused ? "▶" : "Ⅱ";
    };
    preview.onclick = () => {
      if (!video) {
        video = document.createElement("video");
        video.className = "video-media";
        video.muted = muted;
        video.loop = true;
        video.playsInline = true;
        video.preload = "none";
        video.src = asset(service.video);
        video.setAttribute("aria-hidden", "true");
        card.insertBefore(video, preview);
        video.addEventListener("play", updatePlayback);
        video.addEventListener("pause", updatePlayback);
      }
      if (video.paused) video.play().catch(() => {});
      else video.pause();
    };
    sound.onclick = () => {
      muted = !muted;
      if (video) video.muted = muted;
      sound.setAttribute("aria-pressed", String(!muted));
      sound.setAttribute(
        "aria-label",
        `${muted ? "Turn sound on" : "Turn sound off"} for ${service.title} preview`,
      );
      sound.classList.toggle("is-on", !muted);
    };
  });
  $$("[data-service]").forEach(
    (b) =>
      (b.onclick = () => {
        const s = C.services[+b.dataset.service];
        openDetail(
          `<div class="eyebrow">${esc(s.tag)}</div><h2>${esc(s.title)}</h2><p>${esc(s.detail)}</p><button class="button primary" id="enquire-service">Start a conversation ↗</button>`,
        );
        $("#enquire-service").onclick = () => interest(s.title);
      }),
  );
  function modules(filter = "All") {
    $("#modules").innerHTML = C.modules
      .map((m, i) => ({ m, i }))
      .filter(({ m }) => filter === "All" || m[3] === filter)
      .map(
        ({ m, i }) =>
          `<button class="module-card" data-module="${i}"><span class="module-number">${String(i + 1).padStart(2, "0")} <span>↗</span></span><h4>${esc(m[0])}</h4><p>${esc(m[1])}</p></button>`,
      )
      .join("");
    $$("[data-module]").forEach(
      (b) =>
        (b.onclick = () => {
          const m = C.modules[+b.dataset.module];
          openDetail(
            `<div class="eyebrow">HRIS / ${esc(m[3])}</div><h2>${esc(m[0])}</h2><p>${esc(m[2])}</p><button class="button primary" id="enquire-module">Discuss this function ↗</button>`,
          );
          $("#enquire-module").onclick = () => interest("HR Wala Software");
        }),
    );
  }
  modules();
  $$("[data-module-filter]").forEach(
    (b) =>
      (b.onclick = () => {
        $$("[data-module-filter]").forEach((x) => {
          x.classList.toggle("selected", x === b);
          x.setAttribute("aria-pressed", x === b);
        });
        modules(b.dataset.moduleFilter);
      }),
  );
  $("#cert-list").innerHTML = C.certifications
    .map(
      (c, i) =>
        `<button class="cert-row" data-cert="${i}"><span class="number">${String(i + 1).padStart(2, "0")}</span><span class="cert-title">${esc(c)}</span><span class="arrow">↗</span></button>`,
    )
    .join("");
  $$("[data-cert]").forEach(
    (b) =>
      (b.onclick = () => {
        const title = C.certifications[+b.dataset.cert];
        openDetail(
          `<div class="eyebrow">PROFESSIONAL CERTIFICATIONS</div><h2>${esc(title)}</h2><p>Start a conversation about this professional development pathway.</p><p>Programme duration, eligibility, fees, assessment and awarding arrangements will be confirmed by HR Wala. No accreditation or enrolment availability is implied in this preview.</p><button class="button primary" id="enquire-cert">Request programme details ↗</button>`,
        );
        $("#enquire-cert").onclick = () => {
          interest("Professional Certifications");
          $("#contact-form textarea").value =
            "I would like details about " + title + ".";
        };
      }),
  );
  const silhouette =
    '<svg viewBox="0 0 200 180" aria-hidden="true"><circle cx="100" cy="56" r="38" fill="currentColor"/><path d="M14 190v-30a86 86 0 0 1 172 0v30" fill="currentColor"/></svg>';
  $("#team-grid").innerHTML = C.team
    .map(
      (t, i) =>
        `<button class="team-card" data-team="${i}" aria-label="View ${esc(t.name)} profile"><div class="team-photo">${t.image ? `<img src="${asset(t.image)}" alt="${esc(t.name)}" loading="lazy">` : silhouette + "<span>PORTRAIT PLACEHOLDER</span>"}<span class="team-plus">↗</span></div><div class="team-info"><h3>${esc(t.name)}</h3><p>${esc(t.role)}</p><small>${t.image ? "View profile ↗" : "Name & biography to be supplied"}</small></div></button>`,
    )
    .join("");
  $$("[data-team]").forEach(
    (b) =>
      (b.onclick = () => {
        const t = C.team[+b.dataset.team];
        openDetail(
          `<div class="eyebrow">OUR PEOPLE</div><h2>${esc(t.name)}</h2><p><strong>${esc(t.role)}</strong></p><p>${esc(t.bio)}</p>`,
        );
      }),
  );
  const partnerSet = C.partners
    .map(
      (p, i) =>
        `<div class="partner-logo">${p.logo ? `<img src="${asset(p.logo)}" alt="${esc(p.name)}" loading="lazy">` : `<i aria-hidden="true">${["◇", "◈", "▧", "✧"][i % 4]}</i> ${esc(p.name)}`}</div>`,
    )
    .join("");
  $("#partner-track").innerHTML =
    `<div style="display:flex;gap:24px">${partnerSet}</div><div style="display:flex;gap:24px" aria-hidden="true">${partnerSet}</div>`;
  $$("[data-interest]").forEach(
    (a) =>
      (a.onclick = () => {
        $("#contact-interest").value = a.dataset.interest;
      }),
  );
  const form = $("#contact-form");
  if (C.contactEndpoint) {
    $("#contact-note").textContent =
      "Your submitted details will be sent to the configured HR Wala enquiry service.";
    $("#contact-submit").innerHTML = "Send enquiry <span>↗</span>";
  }
  form.onsubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!C.contactEndpoint) {
      download(
        "HRWala-Enquiry.txt",
        Object.entries(data)
          .map(([k, v]) => k.toUpperCase() + ": " + v)
          .join("\n\n"),
      );
      $("#contact-status").textContent =
        "Enquiry downloaded. It has not been sent to HR Wala.";
      return;
    }
    const btn = $("#contact-submit");
    btn.disabled = true;
    $("#contact-status").textContent = "Sending your enquiry…";
    try {
      if (!C.contactEndpoint.startsWith("https://")) throw Error();
      const res = await fetch(C.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw Error();
      $("#contact-status").textContent =
        "Your enquiry was received by the configured service.";
      form.reset();
    } catch {
      $("#contact-status").textContent =
        "Could not send your enquiry. Please try again; your details remain in the form.";
    } finally {
      btn.disabled = false;
    }
  };
  const slides = [
    {
      t: "HR All-in-One",
      h: "Hire Smarter<br>Manage Better<br><em>Grow Faster</em>",
      p: "Recruitment, payroll and HR in one place.<br>Everything your people need.",
    },
    {
      t: "HRwala Software",
      h: "Simplify HR<br>Automate Payroll<br><em>Empower People</em>",
      p: "One system for every employee record.<br>Less paperwork, more progress.",
    },
    {
      t: "Brand Standards",
      h: "Service Industry<br>Serving People<br><em>One Partner</em>",
      p: "From hotels to hospitals to retail.<br>HR built around your brand standards.",
    },
    {
      t: "HR Certifications",
      h: "Get certified<br>Get Noticed<br><em>Get Ahead</em>",
      p: "Recognized credentials for working professionals.<br>Your next career step starts here.",
    },
    {
      t: "Job Portal",
      h: "Find Talent<br>Find Opportunity<br><em>Meet here</em>",
      p: "Verified jobs and qualified candidates<br>Where employers and careers connect.",
    },
    {
      t: "Your Advisor",
      h: "Expert HR Advice<br>Compliant Workplaces<br><em>Confident Leaders</em>",
      p: "Strategy, policies and labor law support.<br>Build an organization that lasts.",
    },
    {
      t: "Head Hunting",
      h: "Right people<br>Right roles<br><em>Real growth</em>",
      p: "Executive search and talent acquisition.<br>Your next great hire starts here.",
    },
    {
      t: "Hospitality Talent",
      h: "Hoteliers<br>Star Performers<br><em>Get Connected</em>",
      p: "First ever dedicated hospitality people<br>Job Portal connecting people with hoteliers",
    },
  ];
  // HERO_ROTATION_START: 3 seconds hold + 1 second fade out + 1 second fade in.
  let slide = 0,
    heroPaused = reduced.matches;
  let heroTimer;
  const rotating = $(".hero-rotating");
  function renderHeroSlide(i) {
    slide = i;
    $(".hero-tagline span").textContent = slides[i].t;
    $(".hero-copy h1").innerHTML = slides[i].h;
    $(".hero-rotating>p").innerHTML = slides[i].p;
  }
  function heroCanRun() {
    return !heroPaused && !reduced.matches && !document.hidden;
  }
  function scheduleHero() {
    clearTimeout(heroTimer);
    if (heroCanRun()) heroTimer = setTimeout(advanceHero, 3000);
  }
  function restoreHero() {
    clearTimeout(heroTimer);
    rotating.classList.remove("is-fading");
    $(".hero-tagline").classList.remove("is-fading");
    scheduleHero();
  }
  function advanceHero() {
    if (!heroCanRun()) return;
    rotating.classList.add("is-fading");
    $(".hero-tagline").classList.add("is-fading");
    heroTimer = setTimeout(() => {
      if (!heroCanRun()) return;
      renderHeroSlide((slide + 1) % slides.length);
      rotating.classList.remove("is-fading");
      heroTimer = setTimeout(scheduleHero, 1000);
    }, 1000);
  }
  function setHeroPause() {
    $(".hero-art").classList.toggle("paused", heroPaused);
    restoreHero();
  }
  document.addEventListener("visibilitychange", restoreHero);
  setHeroPause();
  // HERO_ROTATION_END
  document.addEventListener("visibilitychange", () =>
    $(".hero-art").classList.toggle(
      "paused",
      document.hidden || reduced.matches,
    ),
  );
  reduced.addEventListener("change", () => {
    if (reduced.matches) {
      heroPaused = true;
      setHeroPause();
    }
  });
}
let savedOnly = false;
function filteredJobs() {
  const q = ($("#job-query")?.value || "").trim().toLowerCase(),
    loc = $("#job-location")?.value || "",
    mode = $("#job-mode")?.value || "",
    type = $("#job-type")?.value || "",
    level = $("#job-level")?.value || "";
  return C.jobs.filter(
    (j) =>
      (!q ||
        [j.title, j.company, j.category, ...j.requirements]
          .join(" ")
          .toLowerCase()
          .includes(q)) &&
      (!loc || j.location === loc) &&
      (!mode || j.mode === mode) &&
      (!type || j.type === type) &&
      (!level || j.level === level) &&
      (!savedOnly || saved.includes(j.id)),
  );
}
function renderJobs() {
  const jobs = filteredJobs();
  $("#job-count").textContent =
    `${jobs.length} ${savedOnly ? "saved " : ""}opportunit${jobs.length === 1 ? "y" : "ies"}`;
  $("#saved-count").textContent = saved.length;
  $("#job-list").innerHTML = jobs.length
    ? jobs
        .map(
          (j) =>
            `<article class="job-card"><div class="job-top"><div class="company-mark" aria-hidden="true">${esc(j.company.slice(-1))}</div><div class="job-heading"><h3>${esc(j.title)}</h3><p>${esc(j.company)} · ${esc(j.location)}</p></div><button class="save-job ${saved.includes(j.id) ? "saved" : ""}" data-save="${j.id}" aria-label="${saved.includes(j.id) ? "Unsave" : "Save"} ${esc(j.title)}" aria-pressed="${saved.includes(j.id)}">${saved.includes(j.id) ? "★" : "☆"}</button></div><div class="job-tags"><span>${esc(j.type)}</span><span>${esc(j.mode)}</span><span>${esc(j.level)}</span><span>Sample listing</span></div><div class="job-bottom"><span>${esc(j.salary)} <small>/ month</small></span><button class="text-link" data-job="${j.id}">View opportunity ↗</button></div></article>`,
        )
        .join("")
    : '<div class="empty-state"><h3>A little room for possibility.</h3><p>No listings match these filters. Try another search or reset your filters.</p><button class="button outline" id="empty-reset">Reset filters</button></div>';
  $$("[data-save]").forEach(
    (b) =>
      (b.onclick = () => {
        const id = +b.dataset.save,
          next = saved.includes(id)
            ? saved.filter((x) => x !== id)
            : [...saved, id];
        if (writeStore("hrwala.saved", next)) {
          saved = next;
          renderJobs();
        }
      }),
  );
  $$("[data-job]").forEach(
    (b) => (b.onclick = () => jobDetail(+b.dataset.job)),
  );
  if ($("#empty-reset")) $("#empty-reset").onclick = resetFilters;
}
function resetFilters() {
  ["job-query", "job-location", "job-mode", "job-type", "job-level"].forEach(
    (id) => ($("#" + id).value = ""),
  );
  savedOnly = false;
  $("#saved-toggle").setAttribute("aria-pressed", "false");
  renderJobs();
}
function jobDetail(id) {
  const j = C.jobs.find((j) => j.id === id);
  openDetail(
    `<div class="eyebrow">ILLUSTRATIVE LISTING · ${esc(j.company)}</div><h2>${esc(j.title)}</h2><div class="job-tags"><span>${esc(j.location)}</span><span>${esc(j.mode)}</span><span>${esc(j.type)}</span></div><p>${esc(j.description)}</p><h3>What this example role involves</h3><ul>${j.requirements.map((r) => `<li>${esc(r)}</li>`).join("")}</ul><p><strong>${esc(j.salary)} / month</strong><br><small>Illustrative compensation, not a published offer.</small></p><div class="profile-summary"><p>This is a sample vacancy. Applications are not sent or stored. You can prepare a local professional profile to explore the experience.</p></div><button class="button primary" id="prepare-profile">Prepare my local profile ↗</button>`,
  );
  $("#prepare-profile").onclick = () => {
    detail.close();
    profileView();
  };
}
if (isJobs) {
  renderJobs();
  $("#job-search").onsubmit = (e) => {
    e.preventDefault();
    renderJobs();
  };
  ["job-location", "job-mode", "job-type", "job-level"].forEach(
    (id) => ($("#" + id).onchange = renderJobs),
  );
  $("#job-query").oninput = renderJobs;
  $("#reset-filters").onclick = resetFilters;
  $("#saved-toggle").onclick = (e) => {
    savedOnly = !savedOnly;
    e.currentTarget.setAttribute("aria-pressed", savedOnly);
    renderJobs();
  };
  $$("[data-query]").forEach(
    (b) =>
      (b.onclick = () => {
        $("#job-query").value = b.dataset.query;
        renderJobs();
      }),
  );
}
