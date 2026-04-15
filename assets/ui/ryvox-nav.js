(function(){
  "use strict";

  function getDepth(pathname){
    var p = (pathname || "/").replace(/\\/g, "/");
    try{ p = decodeURIComponent(p); }catch(_e){}
    p = p.replace(/\/+/g, "/");
    if (p === "/" || p === "") return 0;
    var segments = p.split("/").filter(Boolean);
    return Math.max(0, segments.length - 1);
  }

  function getBasePrefix(pathname){
    var depth = getDepth(pathname);
    return depth === 0 ? "." : Array(depth + 1).join("../").slice(0, -1);
  }

  function buildNavHtml(base){
    return '' +
      '<header class="rf-nav" data-rf-nav>' +
      '  <div class="rf-nav__inner">' +
      '    <a class="rf-brand" href="' + base + '/index.html">' +
      '      <span class="rf-brand__mark"></span>' +
      '      <span class="rf-brand__text">Core Hub</span>' +
      '    </a>' +

      '    <button class="rf-nav__burger" type="button" data-rf-burger aria-expanded="false">' +
      '      <span class="rf-burger"></span>' +
      '    </button>' +

      '    <nav class="rf-nav__tree">' +
      '      <a class="rf-item" data-rf-item data-route="home" href="' + base + '/index.html"><span class="rf-item__dot"></span>Home</a>' +
      '      <a class="rf-item" data-rf-item data-route="pvpflow" href="' + base + '/pvp/pvpflow.html"><span class="rf-item__dot"></span>PvPFlow</a>' +
      '      <a class="rf-item" data-rf-item data-route="novapixel" href="' + base + '/np/novapixel.html"><span class="rf-item__dot"></span>NovaPixel</a>' +

      // PulseEvents dropdown
      '      <div class="rf-group" data-rf-group="pulseevents">' +
      '        <button class="rf-item rf-item--toggle" type="button" data-rf-toggle="pulseevents" aria-expanded="false">' +
      '          <span class="rf-item__dot"></span>PulseEvents<span class="rf-caret"></span>' +
      '        </button>' +
      '        <div class="rf-sub" data-rf-sub="pulseevents">' +
      '          <a class="rf-sub__item" data-rf-item data-route="pulseevents-overview" href="' + base + '/PulseEvents/index.html">Overview</a>' +
      '          <a class="rf-sub__item" data-rf-item data-route="pulseevents-docs" href="' + base + '/PulseEvents/doc.html">Docs</a>' +
      '          <a class="rf-sub__item" data-rf-item data-route="pulseevents-roadmap" href="' + base + '/PulseEvents/roadmap.html">Roadmap</a>' +
      '        </div>' +
      '      </div>' +

      // ✅ VOIDSpire (NOWE)
      '      <a class="rf-item" data-rf-item data-route="voidspire" href="' + base + '/voidspire/index.html"><span class="rf-item__dot"></span>Voidspire</a>' +

      '      <a class="rf-item" data-rf-item data-route="about" href="' + base + '/about.html"><span class="rf-item__dot"></span>About</a>' +
      '    </nav>' +

      '    <div class="rf-nav__meta">' +
      '      <div class="rf-crumb">' +
      '        <span class="rf-crumb__label">Location</span>' +
      '        <span class="rf-crumb__value" data-rf-crumb-value>Home</span>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +

      // MOBILE
      '  <div class="rf-mobile" data-rf-mobile hidden>' +
      '    <nav class="rf-mobile__tree">' +
      '      <a class="rf-mitem" data-rf-item data-route="home" href="' + base + '/index.html">Home</a>' +
      '      <a class="rf-mitem" data-rf-item data-route="pvpflow" href="' + base + '/pvp/pvpflow.html">PvPFlow</a>' +
      '      <a class="rf-mitem" data-rf-item data-route="novapixel" href="' + base + '/np/novapixel.html">NovaPixel</a>' +

      '      <button class="rf-mitem rf-mitem--toggle" type="button" data-rf-toggle="pulseevents-mobile" aria-expanded="false">PulseEvents<span class="rf-caret"></span></button>' +
      '      <div class="rf-msub" data-rf-sub="pulseevents-mobile">' +
      '        <a class="rf-msub__item" data-rf-item data-route="pulseevents-overview" href="' + base + '/PulseEvents/index.html">Overview</a>' +
      '        <a class="rf-msub__item" data-rf-item data-route="pulseevents-docs" href="' + base + '/PulseEvents/doc.html">Docs</a>' +
      '        <a class="rf-msub__item" data-rf-item data-route="pulseevents-roadmap" href="' + base + '/PulseEvents/roadmap.html">Roadmap</a>' +
      '      </div>' +

      // ✅ VOIDSpire MOBILE
      '      <a class="rf-mitem" data-rf-item data-route="voidspire" href="' + base + '/voidspire/index.html">Voidspire</a>' +

      '      <a class="rf-mitem" data-rf-item data-route="about" href="' + base + '/about.html">About</a>' +
      '    </nav>' +
      '  </div>' +
      '</header>';
  }

  function normalizePathname(pathname){
    var p = (pathname || "/").replace(/\\/g, "/");
    try{ p = decodeURIComponent(p); }catch(_e){}
    p = p.toLowerCase();
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  }

  function getRoute(pathname){
    var p = normalizePathname(pathname);

    var pulsePath = p.indexOf("/pulseevents/") !== -1 || p.endsWith("/pulseevents");
    var voidspirePath = p.indexOf("/voidspire/") !== -1 || p.endsWith("/voidspire");
    var aboutPath = p.endsWith("/about") || p.endsWith("/about.html");
    var homePath = p.endsWith("/index.html") && !pulsePath && !voidspirePath && p.indexOf("/np/") === -1 && p.indexOf("/pvp/") === -1;

    if (p === "/" || p === "" || homePath) return { active: "home", crumb: "Home" };
    if (aboutPath) return { active: "about", crumb: "About" };

    if (voidspirePath){
      return { active: "voidspire", crumb: "Voidspire" };
    }

    if (pulsePath){
      if (p.endsWith("/pulseevents") || p.endsWith("/pulseevents/index.html")) return { active: "pulseevents-overview", project: "pulseevents", crumb: "PulseEvents / Overview" };
      if (p.endsWith("/doc.html")) return { active: "pulseevents-docs", project: "pulseevents", crumb: "PulseEvents / Docs" };
      if (p.endsWith("/roadmap.html")) return { active: "pulseevents-roadmap", project: "pulseevents", crumb: "PulseEvents / Roadmap" };
      return { active: "pulseevents-overview", project: "pulseevents", crumb: "PulseEvents" };
    }

    if (p.startsWith("/np/") || p.includes("novapixel")) return { active: "novapixel", crumb: "NovaPixel" };
    if (p.startsWith("/pvp/") || p.includes("pvpflow")) return { active: "pvpflow", crumb: "PvPFlow" };

    return { active: "home", crumb: "Home" };
  }

  function setActive(root, route){
    root.querySelectorAll("[data-rf-item].is-active").forEach(el => el.classList.remove("is-active"));

    var activeEl = root.querySelector('[data-route="' + route.active + '"]');
    if (activeEl) activeEl.classList.add("is-active");
  }

  function setCrumb(root, route){
    var v = root.querySelector("[data-rf-crumb-value]");
    if (v) v.textContent = route.crumb || "Home";
  }

  function wireInteractions(root){
    var burger = root.querySelector("[data-rf-burger]");
    var mobile = root.querySelector("[data-rf-mobile]");

    if (burger && mobile){
      burger.addEventListener("click", function(){
        var open = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", !open);
        mobile.hidden = open;
      });
    }
  }

  function inject(){
    var mount = document.getElementById("ryvox-nav") || document.body.prepend(document.createElement("div"));

    var route = getRoute(location.pathname);
    var base = getBasePrefix(location.pathname);

    mount.innerHTML = buildNavHtml(base);

    var root = mount.querySelector("[data-rf-nav]");
    if (!root) return;

    setActive(root, route);
    setCrumb(root, route);
    wireInteractions(root);
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();