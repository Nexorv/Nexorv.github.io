(() => {
  const STORAGE_KEY = "plugglab-language";
  const SUPPORTED_LANGUAGES = ["en", "pl"];
  const page = window.location.pathname.split("/").pop() || "index.html";

  const detectLanguage = () => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }

    const browserLanguage = (navigator.language || "en").toLowerCase();
    return browserLanguage.startsWith("pl") ? "pl" : "en";
  };

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && typeof value === "string") {
      node.textContent = value;
    }
  };

  const setHTML = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && typeof value === "string") {
      node.innerHTML = value;
    }
  };

  const setAttr = (selector, attribute, value) => {
    const node = document.querySelector(selector);
    if (node && typeof value === "string") {
      node.setAttribute(attribute, value);
    }
  };

  const setManyText = (selector, values) => {
    const nodes = document.querySelectorAll(selector);
    values.forEach((value, index) => {
      if (nodes[index] && typeof value === "string") {
        nodes[index].textContent = value;
      }
    });
  };

  const setManyHTML = (selector, values) => {
    const nodes = document.querySelectorAll(selector);
    values.forEach((value, index) => {
      if (nodes[index] && typeof value === "string") {
        nodes[index].innerHTML = value;
      }
    });
  };

  const translations = {
    en: {
      common: {
        navStatusLong: "Innovation lab for Minecraft plugins & experiences",
        navStatusShort: "Project hub for plugins, packs, and experiments",
        navStatusCompact: "Plugins, systems & experiments hub",
        navHome: "Home",
        navFeatured: "Featured",
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        navToggle: "Toggle navigation"
      },
      pages: {
        "index.html": {
          title: "PluggLAB | Innovation Hub",
          metaDescription: "PluggLAB - Innovative Minecraft plugin development lab featuring MemoryChain, PulseEvents, PvP texture packs, and cutting-edge gaming solutions.",
          ogTitle: "PluggLAB | Minecraft Innovation Hub",
          ogDescription: "Discover advanced Minecraft plugins and gaming experiences from PluggLAB. MemoryChain, PulseEvents, and more.",
          apply() {
            setText(".nav-status", "Innovation lab for Minecraft plugins & experiences");
            setManyText(".nav-links a", ["Home", "Featured", "Projects", "About", "Contact"]);
            setText(".hero-kicker", "Minecraft Development Hub");
            setHTML(".hero-subtitle", "An innovative development lab crafting advanced Minecraft plugins and gaming experiences, centered around MemoryChain with competitive PvP packs and upcoming Casino Core features.");
            setManyText(".hero-actions a", ["Open MemoryChain", "Casino Core", "Discord"]);
            setText("#featured .section-label", "Main Focus");
            setText("#featured h2", "MemoryChain");
            setText("#featured .section-copy", "The core project of PluggLAB. Everything revolves around this system.");
            setText(".featured-main .project-tag", "Premium Plugin");
            setHTML(".featured-main p", "Main system currently in early-stage development. <strong>Premium plugin with lifetime updates.</strong>");
            setText(".featured-main .progress-note", "Core systems in progress.");
            setManyText(".featured-main .price-details span", ["One-time purchase", "Lifetime updates", "Priority support"]);
            setText("#projects .section-label", "Projects");
            setText("#projects h2", "All Systems");
            setText("#projects .section-copy", "Active PluggLAB ecosystem projects.");
            setManyHTML(".project-card p", [
              "Main plugin system and core architecture. <strong>Premium plugin.</strong>",
              "Dynamic event system for Minecraft servers.",
              "Competitive PvP texture pack (modern style).",
              "Modular casino engine with reward systems and slot mechanics. <strong>Premium plugin.</strong>",
              "1.8 PvP focused visual enhancement pack.",
              "... <strong>In Development</strong>",
              ".... <strong>In Development</strong>"
            ]);
            setManyText(".project-card .btn", ["Open", "Learn More", "Learn More", "Open", "Learn More", "Status", "Status"]);
            setManyText(".status-badge", ["Coming Soon", "Coming Soon"]);
            setText("#about .section-label", "About");
            setText("#about h2", "What is PluggLAB");
            setText("#about .section-copy", "PluggLAB is a focused development hub built around high-quality Minecraft projects. From core plugins to competitive texture packs, everything here is designed with purpose.");
            setManyText(".feature-card h3", ["Quality First", "Active Development", "Long-term Vision", "Community Driven"]);
            setManyText(".feature-card p", [
              "Every project is built with attention to detail, performance, and user experience. No rushed releases.",
              "Regular updates, community feedback integration, and continuous improvement across all projects.",
              "Projects are designed to evolve and scale. MemoryChain drives the core direction of the entire ecosystem.",
              "Join Discord for updates, support, and direct feedback. Your input shapes future development."
            ]);
            setText(".creator-section .section-label", "Behind PluggLAB");
            setText(".creator-section h2", "About the Creator");
            setText(".creator-section .section-copy", "Meet the developer building the PluggLAB ecosystem.");
            setText(".creator-role", "Full-Stack Minecraft Developer");
            setManyText(".creator-bio p", [
              "Wilczek is a passionate Minecraft developer with years of experience in plugin development, server optimization, and community management. Specializing in scalable plugin architecture and modular systems design.",
              "Founded PluggLAB to create a focused hub for high-quality Minecraft projects that set new standards for the community. Every project is built with attention to detail, performance, and user experience."
            ]);
            setManyText(".detail-label", ["Specialization", "Experience"]);
            setManyText(".detail-list li", [
              "Plugin Development",
              "Server Architecture",
              "API Design",
              "Performance Optimization",
              "4+ years Minecraft dev",
              "1 released plugin",
              "Active community member",
              "Continuous learner"
            ]);
            setText(".creator-cta p", "Interested in collaborating or learning more?");
            setManyText(".cta-buttons a", ["Join Discord", "Get in Touch"]);
            setText(".footer-brand p", "Centralized development hub and community.");
            setManyText(".footer-links a", ["MemoryChain", "PulseEvents", "NovaPixel", "Casino Core", "PvPFlow", "Contact"]);
          }
        },
        "contact.html": {
          title: "PluggLAB | Contact",
          metaDescription: "Contact PluggLAB through email, Discord, and Google Forms.",
          ogTitle: "PluggLAB | Contact",
          ogDescription: "Reach PluggLAB via email, Discord, or structured form.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Projects", "Featured", "Contact"]);
            setText(".page-hero-contact .section-label", "Direct Channel");
            setText(".page-hero-contact h1", "Contact PluggLAB");
            setText(".page-hero-contact .section-copy", "Choose the fastest way to reach out depending on your needs.");
            setText(".cta-note", "Quick message? Use email. Community or support? Join Discord. Complex request? Use the form.");
            setText(".pricing-section .section-label", "Premium Plugins");
            setText(".pricing-section h2", "Pricing & Licensing");
            setText(".pricing-section .section-copy", "PluggLAB offers premium Minecraft plugins with lifetime updates and priority support.");
            setManyText(".pricing-card .project-tag", ["Core System", "Casino Engine"]);
            setManyText(".price-period", ["one-time", "one-time"]);
            setManyText(".pricing-features li", [
              "Lifetime updates",
              "Priority Discord support",
              "Server analytics dashboard",
              "Player tracking system",
              "Custom event triggers",
              "API integration ready",
              "Lifetime updates",
              "Priority Discord support",
              "Slot machine systems",
              "Roulette tables",
              "Reward shop integration",
              "Anti-cheat protection"
            ]);
            setManyText(".pricing-card .btn", ["Learn More", "Learn More"]);
            setHTML(".pricing-note p", "<strong>All purchases include:</strong> Lifetime updates, priority support, and access to future features. Payment via PayPal or crypto. Contact for custom licensing options.");
            setManyText(".contact-card .project-tag", ["Email", "Discord", "Google Form"]);
            setText(".contact-card.featured-card p", "Best for direct communication and collaboration requests.");
            setText(".contact-meta", "Average response time: 12-24h");
            setText(".contact-card.featured-card .btn", "Send Email");
            setText(".contact-grid .contact-card:nth-child(2) h2", "Join Community");
            setText(".contact-grid .contact-card:nth-child(2) p", "Best for quick help, discussions, and community interaction.");
            setText(".contact-grid .contact-card:nth-child(2) .btn", "Join Discord");
            setText(".contact-grid .contact-card:nth-child(3) h2", "Structured Inquiry");
            setText(".contact-grid .contact-card:nth-child(3) p", "Use this for detailed requests, commissions, or structured ideas.");
            setText(".contact-grid .contact-card:nth-child(3) .btn", "Open Form");
            setText(".footer-brand p", "Contact routes stay open for all project inquiries.");
            setManyText(".footer-links a", ["Home", "MemoryChain", "PulseEvents", "NovaPixel", "PvPFlow"]);
          }
        },
        "memorychain.html": {
          title: "PluggLAB | MemoryChain",
          metaDescription: "MemoryChain - main featured Minecraft plugin developed within PluggLAB.",
          ogTitle: "MemoryChain | PluggLAB",
          ogDescription: "The main plugin project driving the PluggLAB hub.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Featured", "Projects", "Contact"]);
            setText(".page-hero .section-label", "Featured Plugin");
            setHTML(".page-hero .section-copy", "The core system behind PluggLAB. MemoryChain is designed as a scalable plugin concept that will define the direction of the entire project hub. <strong>Premium plugin with comprehensive server management features.</strong>");
            setManyText(".hero-actions a", ["Follow Development", "Download", "Pricing Info"]);
            setManyText(".spotlight-card h4", ["Server Management", "Ecosystem Core", "Premium Support"]);
            setManyText(".spotlight-card p", [
              "Advanced player tracking, data persistence, and server analytics.",
              "Foundation for all PluggLAB plugins and future integrations.",
              "Lifetime updates, priority Discord support, and custom features."
            ]);
            setHTML(".hero-extra", 'MemoryChain serves as the backbone of the PluggLAB ecosystem. <strong>Starting at $39.99 one-time purchase.</strong>');
            setText(".status-card h2", "Development State");
            setText(".status-card p", "MemoryChain is currently in early-stage development. Core systems and structure are being defined before moving into full implementation.");
            setText(".progress-note", "Early-stage build - core systems in progress.");
            setManyText(".pricing-info .price-details span", ["One-time purchase", "Lifetime updates", "Priority support"]);
            setText(".meta-card h3", "Project Snapshot");
            setManyText(".meta-grid dt", ["Status", "Role", "Type", "Stage", "Release Type", "Priority", "Pricing", "Support"]);
            setManyText(".meta-grid dd", ["Active development", "Main featured plugin", "Minecraft plugin", "Concept -> Core systems", "Premium Plugin", "Highest", "$39.99 one-time", "Lifetime updates"]);
            setManyText(".feature-card h4", ["Player Tracking", "Ecosystem Integration", "Server Analytics", "Admin Dashboard", "Custom Events", "API Integration"]);
            setManyText(".feature-card p", [
              "Advanced player data persistence and analytics. Track gameplay patterns and server activity.",
              "Central hub for all PluggLAB plugins. Unified data management and cross-plugin features.",
              "Comprehensive server monitoring and performance metrics. Real-time data visualization.",
              "Powerful web-based admin interface. Manage players, view statistics, and configure settings.",
              "Create and manage custom server events. Automated triggers and reward systems.",
              "RESTful API for external integrations. Connect with web services and third-party tools."
            ]);
            setManyText(".notes-card h3", ["Core Direction", "Next Phase"]);
            setManyHTML(".feature-list li", [
              "Acts as the central system of the PluggLAB ecosystem",
              "Defines the long-term direction of plugin development",
              "Built with scalability and modularity in mind",
              "Designed for Paper/Spigot 1.21+ servers",
              "Will expand with future systems and integrations",
              "Modern Java-based architecture with clean API design"
            ]);
            setManyHTML(".status-list li", [
              "Finalize plugin identity and architecture",
              "Define first gameplay / system loop",
              "Prepare initial showcase and demo server",
              "Release pricing and licensing details",
              "Expand documentation and roadmap"
            ]);
            setText(".footer-brand p", "MemoryChain drives the direction of the entire project network.");
            setManyText(".footer-links a", ["Home", "PulseEvents", "NovaPixel", "PvPFlow"]);
          }
        },
        "casinocore.html": {
          title: "PluggLAB | Casino Core",
          metaDescription: "Casino Core - modular casino plugin for Minecraft server economies.",
          ogTitle: "Casino Core | PluggLAB",
          ogDescription: "Modular casino engine and reward system built for Minecraft servers.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Featured", "Projects", "Contact"]);
            setText(".page-hero .section-label", "New Plugin");
            setHTML(".page-hero .section-copy", "A modular casino engine for Minecraft servers. Add slots, roulette, reward shops, and economy-backed mini-games. <strong>Premium plugin with lifetime updates and priority support.</strong>");
            setManyText(".hero-actions a", ["Join Discord", "Download", "Pricing Info"]);
            setManyText(".spotlight-card h4", ["Ready Modules", "Secure Economy", "Premium Support"]);
            setManyText(".spotlight-card p", [
              "Rapidly deploy slot systems, roulette tables, and reward shops.",
              "Balanced payouts with vault-safe reward handling.",
              "Lifetime updates, priority Discord support, and custom integrations."
            ]);
            setHTML(".hero-extra", 'Casino Core links server economy and gameplay with a polished casino experience. <strong>Starting at $29.99 one-time purchase.</strong>');
            setText(".status-card h2", "Current Status");
            setText(".status-card p", "Casino Core is in active prototype development. Its modular architecture is ready to accept custom games, reward currency, and server-side configuration.");
            setText(".progress-note", "Alpha prototype - casino features coming online.");
            setManyText(".pricing-info .price-details span", ["One-time purchase", "Lifetime updates", "Priority support"]);
            setText(".meta-card h3", "Project Snapshot");
            setManyText(".meta-grid dt", ["Status", "Role", "Type", "Stage", "Release Type", "Priority", "Pricing", "Support"]);
            setManyText(".meta-grid dd", ["Alpha preview", "Casino engine", "Minecraft plugin", "Modular integration", "Premium Plugin", "High", "$29.99 one-time", "Lifetime updates"]);
            setManyText(".feature-card h4", ["Slot Machines", "Reward Economy", "Admin Control", "MemoryChain Ready", "Custom Games", "Anti-Cheat"]);
            setManyText(".feature-card p", [
              "Multiple casino games with adjustable odds and rewards. Customizable payout tables.",
              "Integrated funds, tokens, and bonus distribution. Vault economy support.",
              "Clean admin interface with permission support. Real-time monitoring.",
              "Designed to integrate with the PluggLAB ecosystem and reward systems.",
              "Build your own casino games with the modular API. Easy to extend.",
              "Built-in protection against exploitation. Secure random number generation."
            ]);
            setManyText(".notes-card h3", ["Core Features", "Next Steps"]);
            setManyHTML(".feature-list li", [
              "Slot machines and roulette tables with configurable odds",
              "Reward tokens, economy balances, and vault integration",
              "Admin-configurable game rooms and permissions",
              "Built to connect with MemoryChain and server-based reward systems",
              "Player shops, prize crates, and bonus streak mechanics"
            ]);
            setManyHTML(".status-list li", [
              "Finish server-side game engine and payout logic",
              "Create admin controls and casino configuration UI",
              "Integrate reward economy with MemoryChain wallet systems",
              "Publish early access downloads and documentation",
              "Test with live communities in demo hubs"
            ]);
            setText(".footer-brand p", "Casino Core expands the PluggLAB ecosystem into economy-driven mini-games.");
            setManyText(".footer-links a", ["Home", "MemoryChain", "PulseEvents", "NovaPixel", "PvPFlow"]);
          }
        },
        "novapixel.html": {
          title: "PluggLAB | NovaPixel",
          metaDescription: "NovaPixel - modern high-contrast PvP texture pack for Minecraft.",
          ogTitle: "NovaPixel | PvP Texture Pack",
          ogDescription: "High-contrast PvP pack focused on clarity, speed, and clean visuals.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Projects", "Featured", "Contact"]);
            setText(".page-hero .section-label", "PvP Texture Pack");
            setText(".section-copy", "A high-contrast PvP texture pack designed for maximum visibility, fast reaction time, and a clean modern aesthetic.");
            setManyText(".hero-actions a", ["Download Pack", "Join Discord"]);
            setManyText(".hero-highlights .signal-pill", ["Live Release", "v0.3 Stable", "Competitive Ready"]);
            setText(".micro-note", "Last updated: March 2026");
            setText(".preview-section .section-label", "Preview");
            setText(".preview-section h2", "In-Game Look");
            setManyText(".preview-card", ["Screenshot Placeholder", "PvP Scene", "Items & UI"]);
            setText(".status-card .project-tag", "Live Pack");
            setText(".status-card h2", "Available Now");
            setText(".status-card p", "NovaPixel is publicly available and actively used as a lightweight PvP pack focused on clarity and performance.");
            setManyText(".action-row a", ["Open CurseForge", "Latest Version"]);
            setText(".meta-card h3", "Details");
            setManyText(".meta-grid dt", ["Status", "Platform", "Release", "Version", "Updated", "License"]);
            setManyText(".meta-grid dd", ["Live", "CurseForge", "v0.3 Stable", "1.21+", "March 2026", "GPLv3"]);
            setManyText(".notes-card h3", ["Why NovaPixel", "Recent Changes"]);
            setManyHTML(".feature-list li", [
              "Improves target visibility in PvP fights",
              "Reduces visual noise for faster reaction time",
              "Clean neon aesthetic without clutter",
              "Lightweight 16x resolution (minimal FPS impact)",
              "Custom low-fire texture for clear sightlines",
              "Enhanced sword and tool designs",
              "Optimized for BedWars, SkyWars, and duels",
              "Minecraft 1.21+ (latest version recommended)",
              "Works with Optifine and Sodium",
              "Compatible with most PvP clients (Lunar, Badlion, Feather)",
              "16x resolution - minimal performance impact"
            ]);
            setManyHTML(".status-list li", [
              "Added custom diamond and netherite sword designs",
              "Improved armor visibility and texture clarity",
              "Enhanced enchantment glint effects",
              "Redesigned bow and crossbow textures",
              "Refined block textures for competitive play",
              "Optimized particle effects for better visibility"
            ]);
            setText(".guide-section .section-label", "Installation");
            setText(".guide-section h2", "How to Install");
            setText(".guide-section .section-copy", "Apply NovaPixel to your Minecraft client in seconds.");
            setManyText(".step-card h3", ["Download Pack", "Open Resource Packs", "Move Pack", "Activate"]);
            setManyText(".step-card p", [
              "Download the latest .zip file from CurseForge.",
              "In Minecraft, go to Options -> Resource Packs.",
              'Drag NovaPixel.zip into the resource packs folder or use "Open Pack Folder".',
              'Select NovaPixel from the list and click "Done". Enjoy!'
            ]);
            setText(".guide-note h4", "Compatibility");
            setText(".footer-brand p", "NovaPixel is live and actively available.");
            setManyText(".footer-links a", ["Home", "Contact"]);
          }
        },
        "pulseevents.html": {
          title: "PluggLAB | PulseEvents",
          metaDescription: "PulseEvents - modular Minecraft event plugin for SMP, arcade, and minigame servers.",
          ogTitle: "PulseEvents | Minecraft Event Plugin",
          ogDescription: "Automated event system for Minecraft servers with modular design and live announcements.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Projects", "Featured", "Contact"]);
            setText(".page-hero .section-label", "Minecraft Plugin");
            setText(".section-copy", "A modular event system designed to automate and enhance gameplay on SMP, arcade, and minigame servers.");
            setManyText(".hero-actions a", ["Download Plugin", "Join Discord", "Custom Events Docs"]);
            setManyText(".hero-highlights .signal-pill", ["Live Release", "Modular Core", "Active Development"]);
            setText(".micro-note", "Last updated: May 2026");
            setText(".preview-section .section-label", "Preview");
            setText(".preview-section h2", "In-Game System");
            setManyText(".preview-card", ["BossBar Countdown", "Event Announcement", "Live UI"]);
            setText(".status-card .project-tag", "Live Plugin");
            setText(".status-card h2", "Stable Core - Expanding");
            setText(".status-card p", "PulseEvents is publicly available and already usable, with ongoing development focused on expanding features and improving usability.");
            setText(".progress-note", "Core system ready - expansion in progress.");
            setManyText(".action-row a", ["Spigot", "Modrinth"]);
            setText(".meta-card h3", "Details");
            setManyText(".meta-grid dt", ["Status", "Version", "MC Support", "Type", "Release", "Language"]);
            setManyText(".meta-grid dd", ["Live + evolving", "1.0.0", "1.20.x - 1.21.x", "Server plugin", "May 2026", "PL / EN (planned)"]);
            setManyText(".notes-card h3", ["Why PulseEvents", "Planned Features"]);
            setManyHTML(".feature-list li", [
              "Automates server events without manual setup",
              "Improves player engagement on SMP and arcade servers",
              "Modular system allows easy expansion",
              "Lightweight and easy to configure via YAML",
              "Built-in BossBar countdown and announcements",
              "Supports custom event types and durations",
              "Permission-based admin controls",
              "Custom event system with data-driven events defined in <code>config.yml</code> under <code>custom-events</code>",
              "13 configurable action types: <code>message</code>, <code>sound</code>, <code>potion</code>, <code>teleport</code>, <code>spawn-mob</code>, <code>strike-lightning</code>, <code>spawn-tnt</code>, <code>velocity</code>, <code>ignite</code>, <code>economy-reward</code>, <code>title</code>, <code>console-command</code>, <code>player-command</code>",
              "9 configurable event metadata fields: <code>name</code>, <code>chance</code>, <code>duration</code>, <code>icon</code>, <code>min-players</code>, <code>allowed-worlds</code>, <code>start-message</code>, <code>end-message</code>, <code>bossbar-title</code>",
              "6 new action fields: <code>target-count</code>, <code>chance</code>, <code>fade-in-ticks</code>, <code>stay-ticks</code>, <code>fade-out-ticks</code>, <code>command</code>",
              "5 preset events included: <code>meteor-shower</code>, <code>gravity-well</code>, <code>hot-potato</code>, <code>jackpot-rush</code>, <code>blink-surge</code>",
              "Startup and reload validation for custom events",
              "<code>CUSTOM_EVENTS.md</code> reference documentation",
              "GUI now shows event duration and minimum player requirements",
              "Minecraft 1.20.x - 1.21.x",
              "Paper, Spigot, or compatible server software",
              "Java 17 or higher",
              "Permissions plugin (optional, for role-based access)"
            ]);
            setManyHTML(".status-list li", [
              "Advanced GUI event manager for in-game configuration",
              "More event types (PvP arenas, parkour, mining challenges)",
              "Player stats tracking and global leaderboards",
              "MySQL/SQLite database support",
              "Vault economy integration and rewards system",
              "PlaceholderAPI support for custom variables",
              "Event registration now reloads built-in and custom events together",
              "Event icons now resolve through the shared event contract, so built-in and custom events use the same UI flow",
              "Queue, announcements, bossbar, placeholders, and GUI chance editing now work with custom events",
              "GUI queue now supports middle-click, <code>Q</code>, and <code>Ctrl+Q</code> shortcuts",
              "Config presets now include examples covering all new features"
            ]);
            setText(".release-section .section-label", "Changelog");
            setText(".release-section h2", "Latest Release");
            setText(".release-section .section-copy", "Release notes for the newest PulseEvents update, listed above older versions.");
            setText(".release-header h3", "Version 1.0.0");
            setText(".release-meta", "Released 2026-05-03 - Major version bump from 0.0.4 to 1.0.0");
            setText(".release-header .signal-pill", "Latest");
            setManyText(".release-grid h4", ["Added", "Changed"]);
            setText(".guide-section .section-label", "Quick Start");
            setText(".guide-section h2", "Installation Guide");
            setText(".guide-section .section-copy", "Get PulseEvents running on your server in minutes.");
            setManyText(".step-card h3", ["Download Plugin", "Install to Server", "Restart Server", "Configure Events"]);
            setManyHTML(".step-card p", [
              "Download the latest .jar file from Spigot or Modrinth.",
              "Place the .jar file in your server's <code>plugins/</code> folder.",
              "Restart your server to load PulseEvents and generate config files.",
              "Edit <code>config.yml</code> to customize event types, durations, and messages."
            ]);
            setText(".guide-note h4", "Requirements");
            setText(".footer-brand p", "PulseEvents is live and actively evolving.");
            setManyText(".footer-links a", ["Home", "Contact"]);
          }
        },
        "pvpflow.html": {
          title: "PluggLAB | PvPFlow",
          metaDescription: "PvPFlow - competitive Minecraft PvP texture pack for 1.8.9 with clean visuals and cosmic style.",
          ogTitle: "PvPFlow | PvP Texture Pack",
          ogDescription: "Clean, competitive PvP pack with improved readability and cosmic visuals.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Projects", "Featured", "Contact"]);
            setText(".page-hero .section-label", "PvP Texture Pack");
            setText(".section-copy", "A competitive 1.8 PvP pack designed for fast reactions, clean visuals, and improved combat clarity.");
            setManyText(".hero-actions a", ["Download Pack", "Join Discord"]);
            setManyText(".hero-highlights .signal-pill", ["1.8.9", "16x Competitive", "Animated"]);
            setText(".micro-note", "Last updated: April 2026");
            setText(".preview-section .section-label", "Preview");
            setText(".preview-section h2", "In-Game Look");
            setManyText(".preview-card", ["PvP Fight Scene", "Custom Skybox", "Weapons & Items"]);
            setText(".status-card .project-tag", "Live Pack");
            setText(".status-card h2", "Ready for Combat");
            setText(".status-card p", "PvPFlow is designed for competitive gameplay with improved readability, reduced clutter, and a strong visual identity.");
            setManyText(".action-row a", ["Open CurseForge", "Latest Version"]);
            setText(".meta-card h3", "Details");
            setManyText(".meta-grid dt", ["Status", "Version", "MC Version", "Type", "Updated", "Style"]);
            setManyText(".meta-grid dd", ["Live", "v0.2", "1.8.9", "16x PvP Pack", "April 2026", "Cosmic / Competitive"]);
            setManyText(".notes-card h3", ["Why PvPFlow", "Focus"]);
            setManyHTML(".feature-list li", [
              "Cleaner visuals for faster combat decisions",
              "Improved weapon and armor recognition",
              "Reduced UI and environmental clutter",
              "Custom cosmic-themed skybox for immersive atmosphere",
              "16x resolution for smooth performance",
              "Animated textures for visual feedback",
              "Low-fire overlay for unobstructed view",
              "Designed specifically for Minecraft 1.8.9 combat",
              "Works with Optifine for animations and custom skybox",
              "Compatible with Lunar Client, Badlion, and Feather",
              "Optimized for BedWars, SkyWars, and duels"
            ]);
            setManyHTML(".status-list li", [
              "Optimized for BedWars, SkyWars, and practice servers",
              "Designed specifically for 1.8.9 PvP mechanics",
              "Regular updates with community feedback",
              "Performance-friendly with minimal resource usage",
              "Compatible with Lunar Client and Badlion",
              "Custom animations for swords and tools"
            ]);
            setText(".guide-section .section-label", "Installation");
            setText(".guide-section h2", "How to Install");
            setText(".guide-section .section-copy", "Get PvPFlow running on 1.8.9 in just a few steps.");
            setManyText(".step-card h3", ["Download Pack", "Open Resource Packs", "Add to Folder", "Enable Pack"]);
            setManyText(".step-card p", [
              "Download the latest .zip from CurseForge (1.8.9 version).",
              "Launch Minecraft 1.8.9 -> Options -> Resource Packs.",
              'Click "Open Pack Folder" and move PvPFlow.zip into it.',
              "Select PvPFlow from available packs and activate it."
            ]);
            setText(".guide-note h4", "Best Experience");
            setText(".footer-brand p", "PvPFlow is live and ready for competitive gameplay.");
            setManyText(".footer-links a", ["Home", "Contact"]);
          }
        },
        "download-pending.html": {
          title: "Plugin Status | PluggLAB",
          metaDescription: "Plugin status - PluggLAB pipeline processing.",
          ogTitle: "Plugin Status | PluggLAB",
          ogDescription: "Live plugin development and moderation status.",
          apply() {
            setText(".nav-status", "Plugins, systems & experiments hub");
            setManyText(".nav-links a", ["Home", "Projects", "Contact"]);
            setText(".page-hero .section-label", "System Status");
            setText(".project-title", "Plugin Pipeline");
            setText(".section-copy", "Live development and moderation status for this plugin inside the PluggLAB pipeline.");
            setText(".status-panel h2", "Current State");
            setText(".status-panel p", "This plugin is currently moving through the PluggLAB development pipeline. Status is updated as it progresses through testing and moderation.");
            setText(".status-badge", "IN DEVELOPMENT");
            setManyText(".detail-label", ["State", "Pipeline Stage", "Next Step"]);
            setManyText(".detail-value", ["In Development", "Internal Testing", "Moderation Review"]);
            setManyText(".action-buttons a", ["Back to Projects", "Join Discord", "Contact"]);
            setText(".info-panel h3", "Pipeline Stages");
            setManyHTML(".pending-reasons li", [
              "<strong>Development:</strong> Feature implementation and core logic creation",
              "<strong>Internal Testing:</strong> Stability and functionality verification",
              "<strong>Moderation Review:</strong> Security and quality validation",
              "<strong>Release Ready:</strong> Approved for public download"
            ]);
            setText(".info-text", "PluggLAB ensures every plugin passes a structured pipeline to maintain quality, stability, and security across all releases.");
            setText(".footer-brand p", "High-quality Minecraft plugin ecosystem.");
            setManyText(".footer-links a", ["Home", "Projects", "Contact", "Discord"]);
          }
        },
        "events.html": {
          title: "PluggLAB | PulseEvents Custom Events",
          metaDescription: "PulseEvents 1.0.0 custom events reference for configuring event definitions, action types, validation, and runtime behavior.",
          ogTitle: "PulseEvents Custom Events | PluggLAB",
          ogDescription: "Developer reference for PulseEvents custom event configuration in version 1.0.0.",
          apply() {
            setText(".nav-status", "Project hub for plugins, packs, and experiments");
            setManyText(".nav-links a", ["Home", "Projects", "Contact"]);
            setText(".page-hero .section-label", "Reference");
            setText(".project-title", "Custom Events");
            setText(".section-copy", "Technical reference for PulseEvents 1.0.0 custom event configuration, action execution, validation, and runtime behavior.");
            setManyText(".hero-highlights .signal-pill", ["PulseEvents 1.0.0", "Config-Driven", "Developer Docs"]);
            setManyText(".hero-actions a", ["Back to PulseEvents", "Download Plugin"]);
            setManyText(".docs-layout .section-label", ["Overview", "Example", "Validation", "Runtime"]);
            setManyText(".docs-layout h2", ["Runtime Integration", "Minimal YAML", "Events Are Skipped If", "Operational Notes"]);
            setManyText(".docs-section .section-label", ["Reference", "Reference", "Action Types"]);
            setManyText(".docs-section h2", ["Top-Level Event Fields", "Common Action Fields", "Supported Actions"]);
            setManyText(".footer-links a", ["PulseEvents", "Home", "Contact"]);
            setText(".footer-brand p", "PulseEvents custom event reference for version 1.0.0.");
          }
        }
      }
    },
    pl: {
      common: {
        navStatusLong: "Laboratorium pluginow i doswiadczen Minecraft",
        navStatusShort: "Centrum projektow pluginow, paczek i eksperymentow",
        navStatusCompact: "Centrum pluginow, systemow i eksperymentow",
        navHome: "Start",
        navFeatured: "Wyroznione",
        navProjects: "Projekty",
        navAbout: "O nas",
        navContact: "Kontakt",
        navToggle: "Przelacz nawigacje"
      },
      pages: {
        "index.html": {
          title: "PluggLAB | Centrum Innowacji",
          metaDescription: "PluggLAB - laboratorium rozwoju pluginow Minecraft z projektami MemoryChain, PulseEvents, paczkami PvP i nowymi rozwiazaniami dla graczy.",
          ogTitle: "PluggLAB | Centrum Innowacji Minecraft",
          ogDescription: "Poznaj zaawansowane pluginy Minecraft i projekty gamingowe tworzone w PluggLAB.",
          apply() {
            setText(".nav-status", "Laboratorium pluginow i doswiadczen Minecraft");
            setManyText(".nav-links a", ["Start", "Wyroznione", "Projekty", "O nas", "Kontakt"]);
            setText(".hero-kicker", "Hub Tworzenia Minecraft");
            setHTML(".hero-subtitle", "Nowoczesne laboratorium rozwoju pluginow i projektow gamingowych do Minecrafta, skupione wokol MemoryChain, konkurencyjnych paczek PvP oraz nadchodzacych funkcji Casino Core.");
            setManyText(".hero-actions a", ["Otworz MemoryChain", "Casino Core", "Discord"]);
            setText("#featured .section-label", "Glowny Kierunek");
            setText("#featured h2", "MemoryChain");
            setText("#featured .section-copy", "Najwazniejszy projekt PluggLAB. Wokol niego budowany jest caly ekosystem.");
            setText(".featured-main .project-tag", "Plugin Premium");
            setHTML(".featured-main p", "Glowny system jest obecnie we wczesnej fazie rozwoju. <strong>Plugin premium z dozywotnimi aktualizacjami.</strong>");
            setText(".featured-main .progress-note", "Trwaja prace nad systemami bazowymi.");
            setManyText(".featured-main .price-details span", ["Jednorazowy zakup", "Dozywotnie aktualizacje", "Priorytetowe wsparcie"]);
            setText("#projects .section-label", "Projekty");
            setText("#projects h2", "Wszystkie Systemy");
            setText("#projects .section-copy", "Aktywne projekty ekosystemu PluggLAB.");
            setManyHTML(".project-card p", [
              "Glowny system pluginow i podstawowa architektura. <strong>Plugin premium.</strong>",
              "Dynamiczny system eventow dla serwerow Minecraft.",
              "Konkurencyjna paczka tekstur PvP w nowoczesnym stylu.",
              "Modulowy silnik kasyna z systemami nagrod i mechanikami slotow. <strong>Plugin premium.</strong>",
              "Paczka ulepszen wizualnych pod PvP 1.8.",
              "... <strong>W trakcie tworzenia</strong>",
              ".... <strong>W trakcie tworzenia</strong>"
            ]);
            setManyText(".project-card .btn", ["Otworz", "Dowiedz sie wiecej", "Dowiedz sie wiecej", "Otworz", "Dowiedz sie wiecej", "Status", "Status"]);
            setManyText(".status-badge", ["Wkrotce", "Wkrotce"]);
            setText("#about .section-label", "O nas");
            setText("#about h2", "Czym jest PluggLAB");
            setText("#about .section-copy", "PluggLAB to skupione centrum rozwoju zbudowane wokol wysokiej jakosci projektow Minecraft. Od pluginow bazowych po konkurencyjne paczki tekstur - wszystko jest tu tworzone z konkretnym celem.");
            setManyText(".feature-card h3", ["Jakosc na pierwszym miejscu", "Aktywny rozwoj", "Perspektywa dlugoterminowa", "Spolecznosc ma glos"]);
            setManyText(".feature-card p", [
              "Kazdy projekt powstaje z dbaloscia o detale, wydajnosc i doswiadczenie uzytkownika. Bez pospiesznych premier.",
              "Regularne aktualizacje, uwzglednianie opinii spolecznosci i stale usprawnienia wszystkich projektow.",
              "Projekty sa budowane tak, aby rozwijaly sie i skalowaly. MemoryChain wyznacza kierunek calego ekosystemu.",
              "Dolacz do Discorda po aktualizacje, wsparcie i bezposredni feedback. Twoj glos wplywa na kolejne etapy rozwoju."
            ]);
            setText(".creator-section .section-label", "Za PluggLAB");
            setText(".creator-section h2", "O tworcy");
            setText(".creator-section .section-copy", "Poznaj osobe budujaca ekosystem PluggLAB.");
            setText(".creator-role", "Full-stack developer Minecraft");
            setManyText(".creator-bio p", [
              "Wilczek to pasjonat Minecrafta z wieloletnim doswiadczeniem w tworzeniu pluginow, optymalizacji serwerow i prowadzeniu spolecznosci. Specjalizuje sie w skalowalnej architekturze pluginow i projektowaniu systemow modularnych.",
              "Zalozyl PluggLAB, aby stworzyc dopracowane centrum wysokiej jakosci projektow Minecraft, ktore podnosza standardy w spolecznosci. Kazdy projekt tworzony jest z naciskiem na detale, wydajnosc i wygode uzytkownika."
            ]);
            setManyText(".detail-label", ["Specjalizacja", "Doswiadczenie"]);
            setManyText(".detail-list li", [
              "Tworzenie pluginow",
              "Architektura serwerow",
              "Projektowanie API",
              "Optymalizacja wydajnosci",
              "4+ lata dev Minecraft",
              "1 wydany plugin",
              "Aktywny czlonek spolecznosci",
              "Caly czas sie rozwija"
            ]);
            setText(".creator-cta p", "Chcesz wspolpracy albo wiecej informacji?");
            setManyText(".cta-buttons a", ["Dolacz na Discord", "Skontaktuj sie"]);
            setText(".footer-brand p", "Scentralizowane centrum rozwoju i spolecznosci.");
            setManyText(".footer-links a", ["MemoryChain", "PulseEvents", "NovaPixel", "Casino Core", "PvPFlow", "Kontakt"]);
          }
        },
        "contact.html": {
          title: "PluggLAB | Kontakt",
          metaDescription: "Skontaktuj sie z PluggLAB przez email, Discord i formularz Google.",
          ogTitle: "PluggLAB | Kontakt",
          ogDescription: "Napisz do PluggLAB przez email, Discord lub formularz kontaktowy.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Projekty", "Wyroznione", "Kontakt"]);
            setText(".page-hero-contact .section-label", "Bezposredni Kontakt");
            setText(".page-hero-contact h1", "Kontakt z PluggLAB");
            setText(".page-hero-contact .section-copy", "Wybierz najszybszy sposob kontaktu w zaleznosci od tego, czego potrzebujesz.");
            setText(".cta-note", "Szybka wiadomosc? Email. Spolecznosc lub wsparcie? Discord. Bardziej zlozona sprawa? Formularz.");
            setText(".pricing-section .section-label", "Pluginy Premium");
            setText(".pricing-section h2", "Cennik i licencje");
            setText(".pricing-section .section-copy", "PluggLAB oferuje premium pluginy Minecraft z dozywotnimi aktualizacjami i priorytetowym wsparciem.");
            setManyText(".pricing-card .project-tag", ["System glowny", "Silnik kasyna"]);
            setManyText(".price-period", ["jednorazowo", "jednorazowo"]);
            setManyText(".pricing-features li", [
              "Dozywotnie aktualizacje",
              "Priorytetowe wsparcie na Discordzie",
              "Panel analityczny serwera",
              "System sledzenia graczy",
              "Wlasne triggery eventow",
              "Gotowosc do integracji API",
              "Dozywotnie aktualizacje",
              "Priorytetowe wsparcie na Discordzie",
              "Systemy slotow",
              "Stoly ruletki",
              "Integracja sklepu nagrod",
              "Ochrona przed oszustwami"
            ]);
            setManyText(".pricing-card .btn", ["Dowiedz sie wiecej", "Dowiedz sie wiecej"]);
            setHTML(".pricing-note p", "<strong>Kazdy zakup zawiera:</strong> dozywotnie aktualizacje, priorytetowe wsparcie i dostep do przyszlych funkcji. Platnosc przez PayPal lub krypto. Napisz po niestandardowe opcje licencyjne.");
            setManyText(".contact-card .project-tag", ["Email", "Discord", "Formularz Google"]);
            setText(".contact-card.featured-card p", "Najlepszy kanal do bezposredniego kontaktu i propozycji wspolpracy.");
            setText(".contact-meta", "Sredni czas odpowiedzi: 12-24h");
            setText(".contact-card.featured-card .btn", "Wyslij email");
            setText(".contact-grid .contact-card:nth-child(2) h2", "Dolacz do spolecznosci");
            setText(".contact-grid .contact-card:nth-child(2) p", "Najlepsze miejsce na szybka pomoc, dyskusje i kontakt ze spolecznoscia.");
            setText(".contact-grid .contact-card:nth-child(2) .btn", "Dolacz na Discord");
            setText(".contact-grid .contact-card:nth-child(3) h2", "Zapytanie uporzadkowane");
            setText(".contact-grid .contact-card:nth-child(3) p", "Uzyj tego przy bardziej szczegolowych zgloszeniach, zleceniach albo pomyslach.");
            setText(".contact-grid .contact-card:nth-child(3) .btn", "Otworz formularz");
            setText(".footer-brand p", "Kanaly kontaktowe sa otwarte dla wszystkich zapytan projektowych.");
            setManyText(".footer-links a", ["Start", "MemoryChain", "PulseEvents", "NovaPixel", "PvPFlow"]);
          }
        },
        "memorychain.html": {
          title: "PluggLAB | MemoryChain",
          metaDescription: "MemoryChain - glowny plugin Minecraft rozwijany w PluggLAB.",
          ogTitle: "MemoryChain | PluggLAB",
          ogDescription: "Najwazniejszy projekt pluginowy napedzajacy rozwoj PluggLAB.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Wyroznione", "Projekty", "Kontakt"]);
            setText(".page-hero .section-label", "Wyrozniony plugin");
            setHTML(".page-hero .section-copy", "System bazowy stojacy za PluggLAB. MemoryChain jest projektowany jako skalowalny koncept pluginu, ktory wyznaczy kierunek calego centrum projektowego. <strong>Plugin premium z rozbudowanymi funkcjami zarzadzania serwerem.</strong>");
            setManyText(".hero-actions a", ["Sledz rozwoj", "Pobierz", "Informacje o cenie"]);
            setManyText(".spotlight-card h4", ["Zarzadzanie serwerem", "Rdzen ekosystemu", "Wsparcie premium"]);
            setManyText(".spotlight-card p", [
              "Zaawansowane sledzenie graczy, persystencja danych i analityka serwera.",
              "Fundament dla wszystkich pluginow PluggLAB i przyszlych integracji.",
              "Dozywotnie aktualizacje, priorytetowe wsparcie na Discordzie i funkcje niestandardowe."
            ]);
            setHTML(".hero-extra", 'MemoryChain jest szkieletem calego ekosystemu PluggLAB. <strong>Cena startowa: $39.99 jednorazowo.</strong>');
            setText(".status-card h2", "Stan rozwoju");
            setText(".status-card p", "MemoryChain jest obecnie we wczesnej fazie rozwoju. Definiowane sa kluczowe systemy i struktura przed przejsciem do pelnej implementacji.");
            setText(".progress-note", "Wczesny etap - rdzen systemu w budowie.");
            setManyText(".pricing-info .price-details span", ["Jednorazowy zakup", "Dozywotnie aktualizacje", "Priorytetowe wsparcie"]);
            setText(".meta-card h3", "Szybki przeglad projektu");
            setManyText(".meta-grid dt", ["Status", "Rola", "Typ", "Etap", "Typ wydania", "Priorytet", "Cena", "Wsparcie"]);
            setManyText(".meta-grid dd", ["Aktywny rozwoj", "Glowny plugin", "Plugin Minecraft", "Koncept -> systemy bazowe", "Plugin premium", "Najwyzszy", "$39.99 jednorazowo", "Dozywotnie aktualizacje"]);
            setManyText(".feature-card h4", ["Sledzenie graczy", "Integracja ekosystemu", "Analityka serwera", "Panel administratora", "Wlasne eventy", "Integracja API"]);
            setManyText(".feature-card p", [
              "Zaawansowana persystencja danych graczy i analityka. Sledzenie zachowan i aktywnosci na serwerze.",
              "Centralny punkt dla wszystkich pluginow PluggLAB. Wspolne dane i funkcje miedzy pluginami.",
              "Kompleksowy monitoring serwera i metryki wydajnosci. Wizualizacja danych w czasie rzeczywistym.",
              "Mocny panel administracyjny w przegladarce. Zarzadzanie graczami, statystykami i konfiguracja.",
              "Tworzenie i zarzadzanie niestandardowymi eventami serwera. Automatyczne triggery i systemy nagrod.",
              "REST API do integracji z uslugami zewnetrznymi i narzedziami third-party."
            ]);
            setManyText(".notes-card h3", ["Glowny kierunek", "Nastepny etap"]);
            setManyHTML(".feature-list li", [
              "Pelni role centralnego systemu ekosystemu PluggLAB",
              "Wyznacza dlugofalowy kierunek rozwoju pluginow",
              "Projektowany z mysla o skalowalnosci i modularnosci",
              "Tworzony dla serwerow Paper/Spigot 1.21+",
              "Bedzie rozwijany o kolejne systemy i integracje",
              "Nowoczesna architektura oparta o Jave z czystym API"
            ]);
            setManyHTML(".status-list li", [
              "Dopracowanie tozsamosci pluginu i architektury",
              "Zdefiniowanie pierwszej petli gameplay / systemu",
              "Przygotowanie pierwszego pokazu i serwera demo",
              "Publikacja szczegolow cenowych i licencyjnych",
              "Rozszerzenie dokumentacji i roadmapy"
            ]);
            setText(".footer-brand p", "MemoryChain nadaje kierunek calej sieci projektow.");
            setManyText(".footer-links a", ["Start", "PulseEvents", "NovaPixel", "PvPFlow"]);
          }
        },
        "casinocore.html": {
          title: "PluggLAB | Casino Core",
          metaDescription: "Casino Core - modulowy plugin kasyna dla gospodarki serwerow Minecraft.",
          ogTitle: "Casino Core | PluggLAB",
          ogDescription: "Modulowy silnik kasyna i system nagrod dla serwerow Minecraft.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Wyroznione", "Projekty", "Kontakt"]);
            setText(".page-hero .section-label", "Nowy plugin");
            setHTML(".page-hero .section-copy", "Modulowy silnik kasyna dla serwerow Minecraft. Dodawaj sloty, ruletke, sklepy nagrod i minigry oparte o ekonomie serwera. <strong>Plugin premium z dozywotnimi aktualizacjami i priorytetowym wsparciem.</strong>");
            setManyText(".hero-actions a", ["Dolacz na Discord", "Pobierz", "Informacje o cenie"]);
            setManyText(".spotlight-card h4", ["Gotowe moduly", "Bezpieczna ekonomia", "Wsparcie premium"]);
            setManyText(".spotlight-card p", [
              "Szybkie wdrazanie systemow slotow, stolow ruletki i sklepow nagrod.",
              "Zbalansowane wyplaty i bezpieczna obsluga nagrod zgodna z Vault.",
              "Dozywotnie aktualizacje, priorytetowe wsparcie na Discordzie i integracje niestandardowe."
            ]);
            setHTML(".hero-extra", 'Casino Core laczy ekonomie serwera i gameplay w dopracowane doswiadczenie kasyna. <strong>Cena startowa: $29.99 jednorazowo.</strong>');
            setText(".status-card h2", "Aktualny status");
            setText(".status-card p", "Casino Core jest w aktywnym etapie prototypowania. Modulowa architektura jest gotowa na niestandardowe gry, waluty nagrod i konfiguracje po stronie serwera.");
            setText(".progress-note", "Prototyp alfa - funkcje kasyna sa stopniowo uruchamiane.");
            setManyText(".pricing-info .price-details span", ["Jednorazowy zakup", "Dozywotnie aktualizacje", "Priorytetowe wsparcie"]);
            setText(".meta-card h3", "Szybki przeglad projektu");
            setManyText(".meta-grid dt", ["Status", "Rola", "Typ", "Etap", "Typ wydania", "Priorytet", "Cena", "Wsparcie"]);
            setManyText(".meta-grid dd", ["Podglad alfa", "Silnik kasyna", "Plugin Minecraft", "Integracja modularna", "Plugin premium", "Wysoki", "$29.99 jednorazowo", "Dozywotnie aktualizacje"]);
            setManyText(".feature-card h4", ["Automaty slotowe", "Ekonomia nagrod", "Panel administracyjny", "Gotowy pod MemoryChain", "Wlasne gry", "Anti-cheat"]);
            setManyText(".feature-card p", [
              "Wiele gier kasynowych z regulowanymi szansami i nagrodami. Konfigurowalne tabele wyplat.",
              "Zintegrowane fundusze, tokeny i bonusy. Wsparcie ekonomii Vault.",
              "Przejrzysty panel administracyjny z uprawnieniami i monitoringiem na zywo.",
              "Zaprojektowany do integracji z ekosystemem PluggLAB i systemami nagrod.",
              "Mozliwosc tworzenia wlasnych gier kasynowych poprzez modularne API.",
              "Wbudowana ochrona przed exploitami i bezpieczne generowanie losowosci."
            ]);
            setManyText(".notes-card h3", ["Glowne funkcje", "Nastepne kroki"]);
            setManyHTML(".feature-list li", [
              "Sloty i ruletki z konfigurowalnymi szansami",
              "Tokeny nagrod, salda ekonomii i integracja z Vault",
              "Pokoje gier i uprawnienia konfigurowane przez administratora",
              "Budowany pod integracje z MemoryChain i systemami nagrod serwerowych",
              "Sklepy graczy, skrzynki z nagrodami i mechaniki bonusowych serii"
            ]);
            setManyHTML(".status-list li", [
              "Dopiac silnik gier po stronie serwera i logike wyplat",
              "Stworzyc panel administracyjny i UI konfiguracji kasyna",
              "Zintegrowac ekonomie nagrod z portfelami MemoryChain",
              "Opublikowac wczesny dostep i dokumentacje",
              "Przetestowac plugin z realnymi spolecznosciami na hubach demo"
            ]);
            setText(".footer-brand p", "Casino Core rozszerza ekosystem PluggLAB o minigry oparte na ekonomii.");
            setManyText(".footer-links a", ["Start", "MemoryChain", "PulseEvents", "NovaPixel", "PvPFlow"]);
          }
        },
        "novapixel.html": {
          title: "PluggLAB | NovaPixel",
          metaDescription: "NovaPixel - nowoczesna paczka tekstur PvP o wysokim kontrascie do Minecrafta.",
          ogTitle: "NovaPixel | Paczka tekstur PvP",
          ogDescription: "Paczka PvP o wysokim kontrascie, skupiona na czytelnosci, szybkosci i czystej oprawie.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Projekty", "Wyroznione", "Kontakt"]);
            setText(".page-hero .section-label", "Paczka tekstur PvP");
            setText(".section-copy", "Paczka tekstur PvP o wysokim kontrascie, zaprojektowana pod maksymalna widocznosc, szybka reakcje i czysta nowoczesna estetyke.");
            setManyText(".hero-actions a", ["Pobierz paczke", "Dolacz na Discord"]);
            setManyText(".hero-highlights .signal-pill", ["Wydanie live", "v0.3 Stable", "Gotowe pod competitive"]);
            setText(".micro-note", "Ostatnia aktualizacja: marzec 2026");
            setText(".preview-section .section-label", "Podglad");
            setText(".preview-section h2", "Wyglad w grze");
            setManyText(".preview-card", ["Placeholder zrzutu", "Scena PvP", "Itemy i UI"]);
            setText(".status-card .project-tag", "Paczka live");
            setText(".status-card h2", "Dostepna teraz");
            setText(".status-card p", "NovaPixel jest publicznie dostepna i aktywnie uzywana jako lekka paczka PvP nastawiona na czytelnosc i wydajnosc.");
            setManyText(".action-row a", ["Otworz CurseForge", "Najnowsza wersja"]);
            setText(".meta-card h3", "Szczegoly");
            setManyText(".meta-grid dt", ["Status", "Platforma", "Wydanie", "Wersja", "Aktualizacja", "Licencja"]);
            setManyText(".meta-grid dd", ["Live", "CurseForge", "v0.3 Stable", "1.21+", "Marzec 2026", "GPLv3"]);
            setManyText(".notes-card h3", ["Dlaczego NovaPixel", "Ostatnie zmiany"]);
            setManyHTML(".feature-list li", [
              "Poprawia widocznosc celu podczas walk PvP",
              "Zmniejsza szum wizualny, co pomaga szybciej reagowac",
              "Czysta neonowa estetyka bez zbednego balastu",
              "Lekka rozdzielczosc 16x (minimalny wplyw na FPS)",
              "Wlasna tekstura low-fire dla lepszej widocznosci",
              "Ulepszone modele mieczy i narzedzi",
              "Zoptymalizowana pod BedWars, SkyWars i duels",
              "Minecraft 1.21+ (zalecana najnowsza wersja)",
              "Dziala z Optifine i Sodium",
              "Kompatybilna z wiekszoscia klientow PvP (Lunar, Badlion, Feather)",
              "Rozdzielczosc 16x - minimalny wplyw na wydajnosc"
            ]);
            setManyHTML(".status-list li", [
              "Dodano niestandardowe projekty mieczy diamond i netherite",
              "Poprawiono widocznosc zbroi i czytelnosc tekstur",
              "Ulepszono efekty enchant glint",
              "Przeprojektowano tekstury luku i kuszy",
              "Dopracowano tekstury blokow pod gre competitive",
              "Zoptymalizowano efekty czasteczek dla lepszej widocznosci"
            ]);
            setText(".guide-section .section-label", "Instalacja");
            setText(".guide-section h2", "Jak zainstalowac");
            setText(".guide-section .section-copy", "Wlacz NovaPixel w kliencie Minecraft w kilka sekund.");
            setManyText(".step-card h3", ["Pobierz paczke", "Otworz Resource Packs", "Przenies paczke", "Aktywuj"]);
            setManyText(".step-card p", [
              "Pobierz najnowszy plik .zip z CurseForge.",
              "W Minecraft przejdz do Options -> Resource Packs.",
              'Przeciagnij NovaPixel.zip do folderu resource packs albo uzyj "Open Pack Folder".',
              'Wybierz NovaPixel z listy i kliknij "Done".'
            ]);
            setText(".guide-note h4", "Kompatybilnosc");
            setText(".footer-brand p", "NovaPixel jest live i stale dostepna.");
            setManyText(".footer-links a", ["Start", "Kontakt"]);
          }
        },
        "pulseevents.html": {
          title: "PluggLAB | PulseEvents",
          metaDescription: "PulseEvents - modulowy plugin eventowy Minecraft dla serwerow SMP, arcade i minigame.",
          ogTitle: "PulseEvents | Plugin eventowy Minecraft",
          ogDescription: "Zautomatyzowany system eventow dla serwerow Minecraft z modularna architektura i ogloszeniami na zywo.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Projekty", "Wyroznione", "Kontakt"]);
            setText(".page-hero .section-label", "Plugin Minecraft");
            setText(".section-copy", "Modulowy system eventow zaprojektowany do automatyzacji i wzmacniania gameplayu na serwerach SMP, arcade i minigame.");
            setManyText(".hero-actions a", ["Pobierz plugin", "Dolacz na Discord", "Dokumentacja custom events"]);
            setManyText(".hero-highlights .signal-pill", ["Wydanie live", "Modularny rdzen", "Aktywny rozwoj"]);
            setText(".micro-note", "Ostatnia aktualizacja: maj 2026");
            setText(".preview-section .section-label", "Podglad");
            setText(".preview-section h2", "System w grze");
            setManyText(".preview-card", ["Odliczanie BossBar", "Ogloszenie eventu", "UI na zywo"]);
            setText(".status-card .project-tag", "Plugin live");
            setText(".status-card h2", "Stabilny rdzen - dalsza rozbudowa");
            setText(".status-card p", "PulseEvents jest publicznie dostepny i juz nadaje sie do uzycia, a dalszy rozwoj skupia sie na rozbudowie funkcji i wygodzie obslugi.");
            setText(".progress-note", "Rdzen gotowy - trwaja kolejne rozszerzenia.");
            setManyText(".action-row a", ["Spigot", "Modrinth"]);
            setText(".meta-card h3", "Szczegoly");
            setManyText(".meta-grid dt", ["Status", "Wersja", "Wsparcie MC", "Typ", "Release", "Jezyk"]);
            setManyText(".meta-grid dd", ["Live + rozwijany", "1.0.0", "1.20.x - 1.21.x", "Plugin serwerowy", "Maj 2026", "PL / EN (planowane)"]);
            setManyText(".notes-card h3", ["Dlaczego PulseEvents", "Planowane funkcje"]);
            setManyHTML(".feature-list li", [
              "Automatyzuje eventy serwerowe bez recznej obslugi",
              "Zwiksza zaangazowanie graczy na serwerach SMP i arcade",
              "Modulowy system pozwala latwo dodawac kolejne funkcje",
              "Lekki i prosty do konfiguracji w YAML",
              "Wbudowane odliczanie BossBar i ogloszenia",
              "Wsparcie dla niestandardowych typow eventow i czasow trwania",
              "Administracja oparta o permisje",
              "System custom events oparty o dane zdefiniowane w <code>config.yml</code> pod <code>custom-events</code>",
              "13 konfigurowalnych typow akcji: <code>message</code>, <code>sound</code>, <code>potion</code>, <code>teleport</code>, <code>spawn-mob</code>, <code>strike-lightning</code>, <code>spawn-tnt</code>, <code>velocity</code>, <code>ignite</code>, <code>economy-reward</code>, <code>title</code>, <code>console-command</code>, <code>player-command</code>",
              "9 pol metadanych eventu: <code>name</code>, <code>chance</code>, <code>duration</code>, <code>icon</code>, <code>min-players</code>, <code>allowed-worlds</code>, <code>start-message</code>, <code>end-message</code>, <code>bossbar-title</code>",
              "6 nowych pol akcji: <code>target-count</code>, <code>chance</code>, <code>fade-in-ticks</code>, <code>stay-ticks</code>, <code>fade-out-ticks</code>, <code>command</code>",
              "5 gotowych eventow: <code>meteor-shower</code>, <code>gravity-well</code>, <code>hot-potato</code>, <code>jackpot-rush</code>, <code>blink-surge</code>",
              "Walidacja custom events przy starcie i reloadzie",
              "Dokumentacja referencyjna <code>CUSTOM_EVENTS.md</code>",
              "GUI pokazuje teraz czas eventu i minimalna liczbe graczy",
              "Minecraft 1.20.x - 1.21.x",
              "Paper, Spigot lub kompatybilne oprogramowanie serwerowe",
              "Java 17 lub nowsza",
              "Plugin z permisjami (opcjonalnie, dla dostepu opartego o role)"
            ]);
            setManyHTML(".status-list li", [
              "Zaawansowany GUI manager eventow do konfiguracji w grze",
              "Wiecej typow eventow (areny PvP, parkour, wyzwania gornicze)",
              "Sledzenie statystyk graczy i globalne leaderboardy",
              "Wsparcie dla baz MySQL/SQLite",
              "Integracja ekonomii Vault i system nagrod",
              "Wsparcie PlaceholderAPI dla niestandardowych zmiennych",
              "Rejestracja eventow przeladowuje teraz wspolnie eventy wbudowane i custom",
              "Ikony eventow przechodza przez wspolny kontrakt eventu, wiec wbudowane i custom uzywaja tego samego flow UI",
              "Kolejka, ogloszenia, bossbar, placeholdery i edycja chance w GUI dzialaja teraz z custom events",
              "GUI queue wspiera teraz middle-click, <code>Q</code> i <code>Ctrl+Q</code>",
              "Presety w configu zawieraja teraz przyklady obejmujace nowe funkcje"
            ]);
            setText(".release-section .section-label", "Changelog");
            setText(".release-section h2", "Najnowsze wydanie");
            setText(".release-section .section-copy", "Notatki do najnowszej aktualizacji PulseEvents, pokazane nad starszymi wersjami.");
            setText(".release-header h3", "Wersja 1.0.0");
            setText(".release-meta", "Wydano 2026-05-03 - duzy skok wersji z 0.0.4 do 1.0.0");
            setText(".release-header .signal-pill", "Najnowsza");
            setManyText(".release-grid h4", ["Dodano", "Zmieniono"]);
            setText(".guide-section .section-label", "Szybki start");
            setText(".guide-section h2", "Instrukcja instalacji");
            setText(".guide-section .section-copy", "Uruchom PulseEvents na swoim serwerze w kilka minut.");
            setManyText(".step-card h3", ["Pobierz plugin", "Wgraj na serwer", "Zrestartuj serwer", "Skonfiguruj eventy"]);
            setManyHTML(".step-card p", [
              "Pobierz najnowszy plik .jar ze Spigota albo Modrinth.",
              "Umiesc plik .jar w folderze <code>plugins/</code> swojego serwera.",
              "Zrestartuj serwer, aby zaladowac PulseEvents i wygenerowac pliki konfiguracyjne.",
              "Edytuj <code>config.yml</code>, aby dopasowac typy eventow, czasy trwania i wiadomosci."
            ]);
            setText(".guide-note h4", "Wymagania");
            setText(".footer-brand p", "PulseEvents jest live i nadal aktywnie rozwijany.");
            setManyText(".footer-links a", ["Start", "Kontakt"]);
          }
        },
        "pvpflow.html": {
          title: "PluggLAB | PvPFlow",
          metaDescription: "PvPFlow - konkurencyjna paczka PvP Minecraft 1.8.9 z czysta oprawa i kosmicznym stylem.",
          ogTitle: "PvPFlow | Paczka tekstur PvP",
          ogDescription: "Czysta konkurencyjna paczka PvP z lepsza czytelnoscia i kosmiczna stylistyka.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Projekty", "Wyroznione", "Kontakt"]);
            setText(".page-hero .section-label", "Paczka tekstur PvP");
            setText(".section-copy", "Konkurencyjna paczka PvP 1.8 zaprojektowana pod szybkie reakcje, czysta oprawe i lepsza czytelnosc walki.");
            setManyText(".hero-actions a", ["Pobierz paczke", "Dolacz na Discord"]);
            setManyText(".hero-highlights .signal-pill", ["1.8.9", "16x Competitive", "Animowana"]);
            setText(".micro-note", "Ostatnia aktualizacja: kwiecien 2026");
            setText(".preview-section .section-label", "Podglad");
            setText(".preview-section h2", "Wyglad w grze");
            setManyText(".preview-card", ["Scena walki PvP", "Wlasny skybox", "Bronie i itemy"]);
            setText(".status-card .project-tag", "Paczka live");
            setText(".status-card h2", "Gotowa do walki");
            setText(".status-card p", "PvPFlow jest projektowana pod rozgrywke competitive z lepsza czytelnoscia, mniejszym balastem wizualnym i mocna identyfikacja stylu.");
            setManyText(".action-row a", ["Otworz CurseForge", "Najnowsza wersja"]);
            setText(".meta-card h3", "Szczegoly");
            setManyText(".meta-grid dt", ["Status", "Wersja", "Wersja MC", "Typ", "Aktualizacja", "Styl"]);
            setManyText(".meta-grid dd", ["Live", "v0.2", "1.8.9", "Paczka PvP 16x", "Kwiecien 2026", "Kosmiczny / Competitive"]);
            setManyText(".notes-card h3", ["Dlaczego PvPFlow", "Glowny fokus"]);
            setManyHTML(".feature-list li", [
              "Czystsza oprawa dla szybszych decyzji w walce",
              "Lepsze rozpoznawanie broni i zbroi",
              "Mniej balastu w UI i otoczeniu",
              "Wlasny kosmiczny skybox dla mocniejszego klimatu",
              "Rozdzielczosc 16x dla plynnej wydajnosci",
              "Animowane tekstury dla lepszego feedbacku wizualnego",
              "Nakladka low-fire dla nieprzeslonietego widoku",
              "Projektowana specjalnie pod walke Minecraft 1.8.9",
              "Dziala z Optifine dla animacji i custom skyboxa",
              "Kompatybilna z Lunar Client, Badlion i Feather",
              "Zoptymalizowana pod BedWars, SkyWars i duels"
            ]);
            setManyHTML(".status-list li", [
              "Zoptymalizowana pod BedWars, SkyWars i serwery practice",
              "Projektowana specjalnie pod mechanike PvP 1.8.9",
              "Regularne aktualizacje oparte o feedback spolecznosci",
              "Lekka dla wydajnosci i oszczedna w zasobach",
              "Kompatybilna z Lunar Client i Badlion",
              "Wlasne animacje mieczy i narzedzi"
            ]);
            setText(".guide-section .section-label", "Instalacja");
            setText(".guide-section h2", "Jak zainstalowac");
            setText(".guide-section .section-copy", "Uruchom PvPFlow na 1.8.9 w kilku prostych krokach.");
            setManyText(".step-card h3", ["Pobierz paczke", "Otworz Resource Packs", "Dodaj do folderu", "Wlacz paczke"]);
            setManyText(".step-card p", [
              "Pobierz najnowszy plik .zip z CurseForge (wersja 1.8.9).",
              "Uruchom Minecraft 1.8.9 -> Options -> Resource Packs.",
              'Kliknij "Open Pack Folder" i przenies tam PvPFlow.zip.',
              "Wybierz PvPFlow z dostepnych paczek i aktywuj go."
            ]);
            setText(".guide-note h4", "Najlepsze doswiadczenie");
            setText(".footer-brand p", "PvPFlow jest live i gotowy do konkurencyjnej rozgrywki.");
            setManyText(".footer-links a", ["Start", "Kontakt"]);
          }
        },
        "download-pending.html": {
          title: "Status pluginu | PluggLAB",
          metaDescription: "Status pluginu - przetwarzanie w pipeline PluggLAB.",
          ogTitle: "Status pluginu | PluggLAB",
          ogDescription: "Biezacy status rozwoju i moderacji pluginu.",
          apply() {
            setText(".nav-status", "Centrum pluginow, systemow i eksperymentow");
            setManyText(".nav-links a", ["Start", "Projekty", "Kontakt"]);
            setText(".page-hero .section-label", "Status systemu");
            setText(".project-title", "Pipeline pluginu");
            setText(".section-copy", "Biezacy status rozwoju i moderacji tego pluginu w pipeline PluggLAB.");
            setText(".status-panel h2", "Aktualny stan");
            setText(".status-panel p", "Ten plugin przechodzi obecnie przez pipeline rozwojowy PluggLAB. Status jest aktualizowany wraz z postepem testow i moderacji.");
            setText(".status-badge", "W ROZWOJU");
            setManyText(".detail-label", ["Stan", "Etap pipeline", "Nastepny krok"]);
            setManyText(".detail-value", ["W rozwoju", "Testy wewnetrzne", "Przeglad moderacyjny"]);
            setManyText(".action-buttons a", ["Wroc do projektow", "Dolacz na Discord", "Kontakt"]);
            setText(".info-panel h3", "Etapy pipeline");
            setManyHTML(".pending-reasons li", [
              "<strong>Development:</strong> implementacja funkcji i logiki bazowej",
              "<strong>Internal Testing:</strong> weryfikacja stabilnosci i funkcjonalnosci",
              "<strong>Moderation Review:</strong> walidacja bezpieczenstwa i jakosci",
              "<strong>Release Ready:</strong> zatwierdzony do publicznego pobrania"
            ]);
            setText(".info-text", "PluggLAB pilnuje, aby kazdy plugin przeszedl uporzadkowany pipeline utrzymujacy jakosc, stabilnosc i bezpieczenstwo wszystkich wydan.");
            setText(".footer-brand p", "Ekosystem wysokiej jakosci pluginow Minecraft.");
            setManyText(".footer-links a", ["Start", "Projekty", "Kontakt", "Discord"]);
          }
        },
        "events.html": {
          title: "PluggLAB | Custom Events PulseEvents",
          metaDescription: "Referencja custom events dla PulseEvents 1.0.0: definicje eventow, typy akcji, walidacja i zachowanie runtime.",
          ogTitle: "PulseEvents Custom Events | PluggLAB",
          ogDescription: "Dokumentacja developerska konfiguracji custom events dla PulseEvents 1.0.0.",
          apply() {
            setText(".nav-status", "Centrum projektow pluginow, paczek i eksperymentow");
            setManyText(".nav-links a", ["Start", "Projekty", "Kontakt"]);
            setText(".page-hero .section-label", "Referencja");
            setText(".project-title", "Custom Events");
            setText(".section-copy", "Techniczna referencja konfiguracji custom events w PulseEvents 1.0.0, wykonywania akcji, walidacji i zachowania runtime.");
            setManyText(".hero-highlights .signal-pill", ["PulseEvents 1.0.0", "Config-driven", "Dokumentacja dev"]);
            setManyText(".hero-actions a", ["Wroc do PulseEvents", "Pobierz plugin"]);
            setManyText(".docs-layout .section-label", ["Przeglad", "Przyklad", "Walidacja", "Runtime"]);
            setManyText(".docs-layout h2", ["Integracja runtime", "Minimalny YAML", "Event jest pomijany, gdy", "Uwagi operacyjne"]);
            setManyText(".docs-section .section-label", ["Referencja", "Referencja", "Typy akcji"]);
            setManyText(".docs-section h2", ["Pola eventu najwyzszego poziomu", "Wspolne pola akcji", "Obslugiwane akcje"]);
            setManyText(".footer-links a", ["PulseEvents", "Start", "Kontakt"]);
            setText(".footer-brand p", "Referencja custom events PulseEvents dla wersji 1.0.0.");
          }
        }
      }
    }
  };

  const insertLanguageSwitcher = (language) => {
    const navMenuRow = document.querySelector(".nav-menu-row");
    if (!navMenuRow || navMenuRow.querySelector(".lang-switcher")) {
      return;
    }

    const switcher = document.createElement("div");
    switcher.className = "lang-switcher";
    switcher.setAttribute("aria-label", "Language switcher");

    SUPPORTED_LANGUAGES.forEach((code) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lang-button";
      button.dataset.lang = code;
      button.textContent = code.toUpperCase();

      if (code === language) {
        button.setAttribute("aria-pressed", "true");
      } else {
        button.setAttribute("aria-pressed", "false");
      }

      button.addEventListener("click", () => {
        window.localStorage.setItem(STORAGE_KEY, code);
        applyLanguage(code);
      });

      switcher.appendChild(button);
    });

    const navToggle = navMenuRow.querySelector(".nav-toggle");
    navMenuRow.insertBefore(switcher, navToggle || null);
  };

  const updateLanguageButtons = (language) => {
    document.querySelectorAll(".lang-button").forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const updateMeta = (config) => {
    document.title = config.title;
    setAttr('meta[name="description"]', "content", config.metaDescription);
    setAttr('meta[property="og:title"]', "content", config.ogTitle);
    setAttr('meta[property="og:description"]', "content", config.ogDescription);
  };

  function applyLanguage(language) {
    const locale = translations[language] || translations.en;
    const config = locale.pages[page];

    document.documentElement.lang = language;
    updateLanguageButtons(language);

    if (!config) {
      return;
    }

    updateMeta(config);
    config.apply();
  }

  const initialLanguage = detectLanguage();
  insertLanguageSwitcher(initialLanguage);
  applyLanguage(initialLanguage);
})();

