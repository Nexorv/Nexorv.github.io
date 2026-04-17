lucide.createIcons();

/* =========================
   CACHE (FIXED)
========================= */
const CACHE_TIME = 1000 * 60 * 5;

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
   SAFE UI
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
   MODRINTH FETCH (FIXED)
========================= */
async function fetchModrinth(slug){
  const cacheKey = "mr_" + slug;

  const cached = getCache(cacheKey);
  if(cached !== null) return cached;

  try{
    const res = await fetch("https://api.modrinth.com/v2/project/" + slug);

    if(!res.ok){
      console.warn("Modrinth 404:", slug);
      return null;
    }

    const data = await res.json();

    const downloads = Number(data.downloads ?? 0);

    setCache(cacheKey, downloads);

    return downloads;

  }catch(err){
    console.warn("Modrinth error:", slug, err);
    return null;
  }
}

/* =========================
   LOAD STAT WRAPPER
========================= */
async function loadModStat(type, id, elementId){
  try{
    let value = null;

    if(type === "modrinth"){
      value = await fetchModrinth(id);
    }

    if(value === null || value === undefined){
      setText(elementId, "N/A", "offline");
      return;
    }

    setText(elementId, Number(value).toLocaleString(), "online");

  }catch(err){
    console.warn("loadModStat error:", type, id, err);
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
  if(!canvas) return;

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
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#58a6ff";

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if(p.x > canvas.width) p.x = 0;
      if(p.y > canvas.height) p.y = 0;

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
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
}

/* =========================
   INIT PROJECTS
========================= */
loadModStat("modrinth", "pvpflow", "pvp-mod");
loadModStat("modrinth", "novapixel", "nova-mod");
loadModStat("modrinth", "pulseevents", "pulse-mod");

/* =========================
   START
========================= */
refreshStatus();
setInterval(refreshStatus, 60000);

initParticles();
initReveal();