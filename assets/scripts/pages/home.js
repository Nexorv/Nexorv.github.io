lucide.createIcons();

/* =========================
   CACHE CONFIG
========================= */
const CACHE_TIME = 1000 * 60 * 5; // 5 min

function getCache(key){
  try{
    const raw = localStorage.getItem(key);
    if(!raw) return null;

    const data = JSON.parse(raw);
    if(Date.now() - data.time > CACHE_TIME) return null;

    return data.value;
  }catch{
    return null;
  }
}

function setCache(key, value){
  try{
    localStorage.setItem(key, JSON.stringify({
      time: Date.now(),
      value
    }));
  }catch{}
}

/* =========================
   SAFE UI UPDATE
========================= */
function setText(id, text, className){
  const el = document.getElementById(id);
  if(!el) return;

  el.textContent = text;

  if(className){
    el.className = className;
  }
}

/* =========================
   MODRINTH
========================= */
async function fetchModrinth(slug){
  const cacheKey = "mr_" + slug;

  const cached = getCache(cacheKey);
  if(cached) return cached;

  const res = await fetch("https://api.modrinth.com/v2/project/" + slug);
  if(!res.ok) throw new Error("Modrinth failed");

  const data = await res.json();

  const downloads = data.downloads ?? data.download_count ?? 0;

  setCache(cacheKey, downloads);

  return downloads;
}

/* =========================
   CURSEFORGE (API v1 public)
   NOTE: czasem wymaga slug numeric ID
========================= */
async function fetchCurseForge(projectId){
  const cacheKey = "cf_" + projectId;

  const cached = getCache(cacheKey);
  if(cached) return cached;

  const res = await fetch(
    "https://api.curseforge.com/v1/mods/" + projectId,
    {
      headers: {
        // public endpoint czasem działa bez key, ale jak padnie → fallback N/A
      }
    }
  );

  if(!res.ok) throw new Error("CurseForge failed");

  const data = await res.json();
  const downloads = data?.data?.downloadCount ?? 0;

  setCache(cacheKey, downloads);

  return downloads;
}

/* =========================
   SPIGOT (SCRAPE fallback via API mirror)
   Spigot nie ma oficjalnego public API downloads
========================= */
async function fetchSpigot(slug){
  const cacheKey = "sp_" + slug;

  const cached = getCache(cacheKey);
  if(cached) return cached;

  try{
    const res = await fetch("https://api.spiget.org/v2/resources/" + slug);
    if(!res.ok) throw new Error();

    const data = await res.json();
    const downloads = data.downloads ?? 0;

    setCache(cacheKey, downloads);
    return downloads;
  }catch{
    return null;
  }
}

/* =========================
   WRAPPER
========================= */
async function loadModStat(type, id, elementId){
  try{
    let value = 0;

    if(type === "modrinth"){
      value = await fetchModrinth(id);
    }

    if(type === "curseforge"){
      value = await fetchCurseForge(id);
    }

    if(type === "spigot"){
      value = await fetchSpigot(id);
    }

    if(value === null || value === undefined){
      setText(elementId, "N/A", "offline");
      return;
    }

    setText(elementId, Number(value).toLocaleString(), "online");

  }catch{
    setText(elementId, "N/A", "offline");
  }
}

/* =========================
   STATUS CHECK
========================= */
async function refreshStatus(){

  const check = async (id, url) => {
    try{
      const res = await fetch(url);
      const ok = res.ok;

      setText(id, ok ? "Online" : "Offline", ok ? "online" : "offline");
    }catch{
      setText(id, "Offline", "offline");
    }
  };

  check("status-site", location.href);
  check("status-github", "https://api.github.com");
  check("status-modrinth", "https://api.modrinth.com");
}

/* =========================
   PARTICLES
========================= */
function initParticles(){
  const canvas = document.getElementById("bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];

  function resize(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }

  resize();
  addEventListener("resize", resize);

  for(let i = 0; i < 80; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 0.5,
      vy: Math.random() * 0.5
    });
  }

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if(p.x > canvas.width) p.x = 0;
      if(p.y > canvas.height) p.y = 0;

      ctx.fillStyle = "#58a6ff";
      ctx.fillRect(p.x, p.y, 2, 2);
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* =========================
   REVEAL
========================= */
function initReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add("active");
    });
  });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* =========================
   INIT LOADS
========================= */
loadModStat("modrinth", "pulseevents", "pulse-mod");

// jeśli masz ID CurseForge → podmień
loadModStat("curseforge", "XXXXX", "cf-mod");

// spigot resource ID
loadModStat("spigot", "XXXXX", "spigot-mod");

refreshStatus();
setInterval(refreshStatus, 60000);

initParticles();
initReveal();