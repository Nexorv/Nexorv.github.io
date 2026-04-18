(function(){
  "use strict";

  /*
    =========================
    CONFIG (EDYTUJ TYLKO TO)
    =========================
  */
  const ROUTES = [
    { key: "home", match: (p) => p === "/" || p === "" || p === "/index.html", crumb: "Home" },

    { key: "about", match: (p) => p.endsWith("/about") || p.endsWith("/about.html"), crumb: "About" },

    { key: "links", match: (p) => p.includes("/links/") || p.endsWith("/links") || p.endsWith("/links/index.html"), crumb: "Links" },

    { key: "voidspire", match: (p) => p.includes("/voidspire/") || p.endsWith("/voidspire") || p.endsWith("/voidspire/index.html"), crumb: "Voidspire" },

    {
      key: "pulseevents-overview",
      project: "pulseevents",
      match: (p) => p.endsWith("/pulseevents") || p.endsWith("/pulseevents/index.html"),
      crumb: "PulseEvents / Overview"
    },
    {
      key: "pulseevents-docs",
      project: "pulseevents",
      match: (p) => p.endsWith("/doc.html"),
      crumb: "PulseEvents / Docs"
    },
    {
      key: "pulseevents-roadmap",
      project: "pulseevents",
      match: (p) => p.endsWith("/roadmap.html"),
      crumb: "PulseEvents / Roadmap"
    },

    { key: "novapixel", match: (p) => p.includes("/np/") || p.includes("novapixel"), crumb: "NovaPixel" },

    { key: "pvpflow", match: (p) => p.includes("/pvp/") || p.includes("pvpflow"), crumb: "PvPFlow" }
  ];


  /*
    =========================
    PATH UTILS
    =========================
  */
  function getPathname(){
    let p = location.pathname || "/";
    if (location.protocol === "file:"){
      const href = location.href.replace(/\\/g, "/");
      const idx = href.lastIndexOf("/");
      if (idx !== -1) p = href.substring(idx);
    }
    return p;
  }

  function normalize(p){
    p = (p || "/").replace(/\\/g, "/");
    try{ p = decodeURIComponent(p); }catch(e){}
    p = p.toLowerCase();
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  }

  function getDepth(p){
    if (p === "/" || p === "") return 0;
    return p.split("/").filter(Boolean).length - 1;
  }

  function getBase(p){
    const d = getDepth(p);
    return d === 0 ? "." : Array(d + 1).join("../").slice(0, -1);
  }


  /*
    =========================
    ROUTE ENGINE
    =========================
  */
  function resolveRoute(path){
    const p = normalize(path);

    for (let r of ROUTES){
      if (r.match(p)){
        return {
          active: r.key,
          crumb: r.crumb,
          project: r.project || null
        };
      }
    }

    return { active: "home", crumb: "Home" };
  }


  /*
    =========================
    NAV HTML
    =========================
  */
  function buildNav(base){
    return `
<header class="rf-nav" data-rf-nav>
  <div class="rf-nav__inner">

    <a class="rf-brand" href="${base}/index.html">
      <span class="rf-brand__mark"></span>
      <span class="rf-brand__text">Core Hub</span>
    </a>

    <button class="rf-nav__burger" type="button" data-rf-burger aria-expanded="false">
      <span class="rf-burger"></span>
    </button>

    <nav class="rf-nav__tree">
      <a class="rf-item" data-route="home" href="${base}/index.html">Home</a>
      <a class="rf-item" data-route="pvpflow" href="${base}/pvp/pvpflow.html">PvPFlow</a>
      <a class="rf-item" data-route="novapixel" href="${base}/np/novapixel.html">NovaPixel</a>

      <div class="rf-group" data-rf-group="pulseevents">
        <button class="rf-item rf-item--toggle" data-rf-toggle="pulseevents">
          <span>PulseEvents</span>
          <span class="rf-caret" aria-hidden="true"></span>
        </button>
        <div class="rf-sub">
          <a class="rf-sub__item" data-route="pulseevents-overview" href="${base}/PulseEvents/index.html">Overview</a>
          <a class="rf-sub__item" data-route="pulseevents-docs" href="${base}/PulseEvents/doc.html">Docs</a>
          <a class="rf-sub__item" data-route="pulseevents-roadmap" href="${base}/PulseEvents/roadmap.html">Roadmap</a>
        </div>
      </div>

      <a class="rf-item" data-route="voidspire" href="${base}/voidspire/index.html">Voidspire</a>
      <a class="rf-item" data-route="links" href="${base}/links/index.html">Links</a>
      <a class="rf-item" data-route="about" href="${base}/about.html">About</a>
    </nav>

    <div class="rf-crumb">
      <span data-rf-crumb>Home</span>
    </div>

  </div>
</header>`;
  }


  /*
    =========================
    UI LOGIC
    =========================
  */
  function setActive(root, route){
    root.querySelectorAll("[data-route]").forEach(el=>{
      el.classList.remove("is-active");
    });

    const active = root.querySelector(`[data-route="${route.active}"]`);
    if (active) active.classList.add("is-active");

    if (route.project === "pulseevents"){
      const g = root.querySelector('[data-rf-group="pulseevents"]');
      if (g) g.dataset.open = "true";
    }
  }

  function setCrumb(root, route){
    const el = root.querySelector("[data-rf-crumb]");
    if (el) el.textContent = route.crumb;
  }

  function bindInteractions(root){
    const burger = root.querySelector("[data-rf-burger]");
    const tree = root.querySelector(".rf-nav__tree");
    const groups = root.querySelectorAll("[data-rf-group]");
    const mobileQuery = window.matchMedia("(max-width: 860px)");

    function setMobileOpen(isOpen){
      root.dataset.mobileOpen = isOpen ? "true" : "false";
      if (burger) burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (tree) tree.setAttribute("aria-hidden", isOpen ? "false" : "true");
    }

    function syncViewportState(){
      if (!mobileQuery.matches){
        setMobileOpen(false);
      } else if (!root.dataset.mobileOpen){
        setMobileOpen(false);
      }
    }

    if (burger){
      burger.addEventListener("click", function(){
        const next = root.dataset.mobileOpen !== "true";
        setMobileOpen(next);
      });
    }

    groups.forEach(group=>{
      const toggle = group.querySelector("[data-rf-toggle]");
      if (!toggle) return;

      toggle.type = "button";
      toggle.setAttribute("aria-expanded", group.dataset.open === "true" ? "true" : "false");

      toggle.addEventListener("click", function(){
        const next = group.dataset.open !== "true";
        group.dataset.open = next ? "true" : "false";
        toggle.setAttribute("aria-expanded", next ? "true" : "false");
      });
    });

    root.querySelectorAll("a[href]").forEach(link=>{
      link.addEventListener("click", function(){
        if (mobileQuery.matches){
          setMobileOpen(false);
        }
      });
    });

    syncViewportState();
    mobileQuery.addEventListener("change", syncViewportState);
  }


  /*
    =========================
    INIT
    =========================
  */
  function init(){
    let mount = document.getElementById("ryvox-nav");

    if (!mount){
      mount = document.createElement("div");
      document.body.prepend(mount);
    }

    const path = getPathname();
    const route = resolveRoute(path);
    const base = getBase(path);

    mount.innerHTML = buildNav(base);

    const root = mount.querySelector("[data-rf-nav]");
    if (!root) return;

    document.documentElement.classList.add("rf-nav-ready");
    setActive(root, route);
    setCrumb(root, route);
    bindInteractions(root);
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
