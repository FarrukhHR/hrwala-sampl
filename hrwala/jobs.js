document.addEventListener("DOMContentLoaded", () => {
  const jobPage = document.body.dataset.page === "jobs";

  if (!jobPage) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const readStore = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };
  const writeStore = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  };
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);

  const logo =
    '<a class="brand" href="index.html" aria-label="HR Wala.net Discover"><span class="brand-mark">hr</span><span class="brand-name">HR<b>Wala</b><small>.net</small></span></a>';

  $("#header").innerHTML = `
    <header class="site-header"><div class="wrap header-inner">${logo}<nav class="desktop-nav" id="main-nav" aria-label="Main navigation"><a href="index.html">Discover</a><a href="jobs.html" class="active" aria-current="page">Job Portal <span aria-hidden="true"> ↗</span></a></nav><button class="menu-button" aria-label="Open menu" aria-controls="main-nav" aria-expanded="false">☰</button></div></header>
  `;

  $("#footer").innerHTML = `
    <footer class="site-footer"><div class="wrap"><div class="footer-grid"><div class="footer-brand">${logo}<span class="footer-promise">PEOPLE. POSSIBILITIES. PROGRESS.</span><p>People-first HR support for stronger teams, trusted standards and connected workplaces.</p></div><div class="footer-col"><h4>Explore</h4><a href="index.html">Discover HRWala</a><a href="jobs.html">Find opportunities</a><a href="index.html#team">Meet the team</a><a href="index.html#partners">Our partners</a></div><div class="footer-col"><h4>Your Space</h4><a href="index.html#contact">Contact our team</a><a href="jobs.html">Career opportunities</a><button data-profile>Your local profile</button><button data-privacy>Privacy &amp; data</button></div><div class="footer-col"><h4>Contact</h4><a href="https://wa.me/923008523878" target="_blank" rel="noopener noreferrer">+92 300 8523878</a><a href="https://wa.me/923055243737" target="_blank" rel="noopener noreferrer">+92 305 5243737</a><a href="mailto:hello@hrwala.net">hello@hrwala.net</a></div></div><div class="footer-bottom"><span>© 2015 HRWala.net. All rights reserved.</span><span>Built around people. Designed for progress.</span><button class="plain" data-privacy>Privacy notice</button></div></div></footer>
  `;

  const toastTarget = document.getElementById("toast");
  let toastTimer;
  const toast = (message) => {
    toastTarget.textContent = message;
    toastTarget.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastTarget.classList.remove("show"), 4500);
  };

  const detail = document.getElementById("detail-dialog");
  const detailContent = document.getElementById("detail-content");
  const openDetail = (html) => {
    detailContent.innerHTML = html;
    detail.showModal();
    document.body.classList.add("modal-open");
  };

  const closeDialog = (element) => element.close();
  $$("dialog").forEach((dialog) => {
    $(".dialog-close", dialog).onclick = () => closeDialog(dialog);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        const box = dialog.getBoundingClientRect();
        const outside =
          event.clientX < box.left ||
          event.clientX > box.right ||
          event.clientY < box.top ||
          event.clientY > box.bottom;
        if (outside) closeDialog(dialog);
      }
    });
    dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  });

  const download = (name, content, type = "text/plain") => {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const privacy = () => {
    openDetail(`
      <div class="eyebrow">PREVIEW PRIVACY NOTICE</div>
      <h2>Your information stays in your hands.</h2>
      <p>This static preview has no account server, live vacancy database, analytics or payment processing. Saved jobs and your optional local profile are stored in this browser only. They do not sync between devices.</p>
      <p>With no contact endpoint configured, the enquiry form creates a text file on your device; nothing is sent. If an endpoint is configured, the form sends the fields you submit to that endpoint. The site owner must publish its approved privacy policy before accepting live enquiries.</p>
      <p>You can clear saved jobs and your profile below. Downloaded files are not deleted.</p>
      <button class="button outline" id="clear-data" type="button">Clear this site’s local data</button>
    `);

    $("#clear-data").onclick = () => {
      try {
        localStorage.removeItem("hrwala.profile");
        localStorage.removeItem("hrwala.saved");
        saved = [];
        renderJobs();
        toast("Local profile and saved jobs cleared.");
        detail.close();
      } catch {
        toast("Could not access browser storage.");
      }
    };
  };

  const profileForm = () => {
    const profile = readStore("hrwala.profile", {});
    openDetail(`
      <div class="eyebrow">YOUR PROFESSIONAL SPACE</div>
      <h2>Introduce yourself.</h2>
      <p>A local profile preview for candidates, employees and employers. This is not a registered account.</p>
      <form id="profile-form"><label>I am a<select name="role">${["Candidate", "Employee", "Employer"].map((roleItem) => `<option ${roleItem === profile.role ? "selected" : ""}>${roleItem}</option>`).join("")}</select></label><div class="two-col"><label>Full name<input name="name" value="${esc(profile.name)}" required maxlength="100" autocomplete="name"></label><label>Email<input name="email" type="email" value="${esc(profile.email)}" required autocomplete="email"></label></div><label>Professional headline<input name="headline" value="${esc(profile.headline)}" placeholder="e.g. People &amp; Culture Specialist" required maxlength="150"></label><label>Location<input name="location" value="${esc(profile.location)}" placeholder="City, country" maxlength="100"></label><label>A short introduction<textarea name="bio" rows="3" maxlength="1000">${esc(profile.bio)}</textarea></label><p class="form-note">Saved only in this browser. Avoid adding sensitive personal information to this demo.</p><button class="button primary" type="submit">Save local profile ↗</button></form>
    `);

    $("#profile-form").onsubmit = (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      if (writeStore("hrwala.profile", data)) {
        profileView();
        toast("Profile saved in this browser.");
      }
    };
  };

  const profileView = () => {
    const profile = readStore("hrwala.profile", null);
    if (!profile) {
      profileForm();
      return;
    }

    openDetail(`
      <div class="eyebrow">LOCAL PROFILE · ${esc(profile.role)}</div>
      <h2>${esc(profile.name)}</h2>
      <p>${esc(profile.headline)}</p>
      <div class="profile-summary"><p>${esc(profile.location)}</p><p>${esc(profile.email)}</p><p>${esc(profile.bio)}</p></div>
      <p class="form-note">This profile is visible only on this device. No public account has been created.</p>
      <div class="profile-actions"><button class="button primary" id="edit-profile" type="button">Edit profile</button><button class="button outline" id="export-profile" type="button">Download profile</button><button class="button outline" id="delete-profile" type="button">Delete local profile</button></div>
    `);

    $("#edit-profile").onclick = profileForm;
    $("#export-profile").onclick = () =>
      download("HRWala-Profile.json", JSON.stringify(profile, null, 2), "application/json");
    $("#delete-profile").onclick = () => {
      try {
        localStorage.removeItem("hrwala.profile");
        detail.close();
        toast("Local profile deleted.");
      } catch {
        toast("Could not delete local profile.");
      }
    };
  };

  $(".menu-button").addEventListener("click", (event) => {
    const nav = $("#main-nav");
    const open = nav.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
    event.currentTarget.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  $$("[data-profile]").forEach((button) => {
    button.onclick = profileView;
  });
  $$("[data-privacy]").forEach((button) => {
    button.onclick = privacy;
  });

  let saved = readStore("hrwala.saved", []);
  if (!Array.isArray(saved)) saved = [];

  const jobs = window.HRWALA?.jobs || [];
  const jobQuery = $("#job-query");
  const jobLocation = $("#job-location");
  const jobMode = $("#job-mode");
  const jobType = $("#job-type");
  const jobLevel = $("#job-level");
  const savedToggle = $("#saved-toggle");
  const jobList = $("#job-list");
  const jobCount = $("#job-count");
  const savedCount = $("#saved-count");
  let savedOnly = false;

  const filteredJobs = () => {
    const q = (jobQuery?.value || "").trim().toLowerCase();
    const loc = jobLocation?.value || "";
    const mode = jobMode?.value || "";
    const type = jobType?.value || "";
    const level = jobLevel?.value || "";

    return jobs.filter((job) => {
      const haystack = [job.title, job.company, job.category, ...(job.requirements || [])].join(" ").toLowerCase();
      return (
        (!q || haystack.includes(q)) &&
        (!loc || job.location === loc) &&
        (!mode || job.mode === mode) &&
        (!type || job.type === type) &&
        (!level || job.level === level) &&
        (!savedOnly || saved.includes(job.id))
      );
    });
  };

  const resetFilters = () => {
    if (jobQuery) jobQuery.value = "";
    if (jobLocation) jobLocation.value = "";
    if (jobMode) jobMode.value = "";
    if (jobType) jobType.value = "";
    if (jobLevel) jobLevel.value = "";
    savedOnly = false;
    if (savedToggle) savedToggle.setAttribute("aria-pressed", "false");
    renderJobs();
  };

  function renderJobs() {
    const matches = filteredJobs();
    jobCount.textContent = `${matches.length} ${savedOnly ? "saved " : ""}opportunit${matches.length === 1 ? "y" : "ies"}`;
    savedCount.textContent = String(saved.length);

    if (!matches.length) {
      jobList.innerHTML = `
        <div class="empty-state">
          <h3>A little room for possibility.</h3>
          <p>No listings match these filters. Try another search or reset your filters.</p>
          <button class="button outline" id="empty-reset" type="button">Reset filters</button>
        </div>
      `;
      $("#empty-reset").onclick = resetFilters;
      return;
    }

    jobList.innerHTML = matches
      .map((job) => {
        const isSaved = saved.includes(job.id);
        return `
          <article class="job-card">
            <div class="job-top">
              <div class="company-mark" aria-hidden="true">${esc(job.company.slice(-1))}</div>
              <div class="job-heading">
                <h3>${esc(job.title)}</h3>
                <p>${esc(job.company)} · ${esc(job.location)}</p>
              </div>
              <button class="save-job ${isSaved ? "saved" : ""}" data-save="${job.id}" aria-label="${isSaved ? "Unsave" : "Save"} ${esc(job.title)}" aria-pressed="${isSaved}" type="button">${isSaved ? "★" : "☆"}</button>
            </div>
            <div class="job-tags">
              <span>${esc(job.type)}</span>
              <span>${esc(job.mode)}</span>
              <span>${esc(job.level)}</span>
              <span>Sample listing</span>
            </div>
            <div class="job-bottom">
              <span>${esc(job.salary)} <small>/ month</small></span>
              <button class="text-link" data-job="${job.id}" type="button">View opportunity ↗</button>
            </div>
          </article>
        `;
      })
      .join("");

    $$("[data-save]").forEach((button) => {
      button.onclick = () => {
        const id = Number(button.dataset.save);
        const next = saved.includes(id)
          ? saved.filter((entry) => entry !== id)
          : [...saved, id];
        if (writeStore("hrwala.saved", next)) {
          saved = next;
          renderJobs();
        }
      };
    });

    $$("[data-job]").forEach((button) => {
      button.onclick = () => {
        const id = Number(button.dataset.job);
        const job = jobs.find((entry) => entry.id === id);
        if (!job) return;

        openDetail(`
          <div class="eyebrow">ILLUSTRATIVE LISTING · ${esc(job.company)}</div>
          <h2>${esc(job.title)}</h2>
          <div class="job-tags"><span>${esc(job.location)}</span><span>${esc(job.mode)}</span><span>${esc(job.type)}</span></div>
          <p>${esc(job.description)}</p>
          <h3>What this example role involves</h3>
          <ul>${(job.requirements || []).map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
          <p><strong>${esc(job.salary)} / month</strong><br><small>Illustrative compensation, not a published offer.</small></p>
          <div class="profile-summary"><p>This is a sample vacancy. Applications are not sent or stored. You can prepare a local professional profile to explore the experience.</p></div>
          <button class="button primary" id="prepare-profile" type="button">Prepare my local profile ↗</button>
        `);

        $("#prepare-profile").onclick = () => {
          detail.close();
          document.body.classList.remove("modal-open");
          profileView();
        };
      };
    });
  }

  $("#job-search").addEventListener("submit", (event) => {
    event.preventDefault();
    renderJobs();
  });

  jobQuery?.addEventListener("input", renderJobs);
  [jobLocation, jobMode, jobType, jobLevel].forEach((field) => field && field.addEventListener("change", renderJobs));
  $("#reset-filters").onclick = resetFilters;
  savedToggle.onclick = () => {
    savedOnly = !savedOnly;
    savedToggle.setAttribute("aria-pressed", String(savedOnly));
    renderJobs();
  };
  $$("[data-query]").forEach((button) => {
    button.onclick = () => {
      if (jobQuery) jobQuery.value = button.dataset.query || "";
      renderJobs();
    };
  });

  renderJobs();
});
