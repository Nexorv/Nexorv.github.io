const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const mapping = {
    "index.html": "index_pl.html",
    "contact.html": "contact_pl.html",
    "memorychain.html": "memorychain_pl.html",
    "pulseevents.html": "pulseevents_pl.html",
    "novapixel.html": "novapixel_pl.html",
    "pvpflow.html": "pvpflow_pl.html",
    "voidspire.html": "voidspire_pl.html",
    "casinocore.html": "casinocore_pl.html",
    "index_pl.html": "index.html",
    "contact_pl.html": "contact.html",
    "memorychain_pl.html": "memorychain.html",
    "pulseevents_pl.html": "pulseevents.html",
    "novapixel_pl.html": "novapixel.html",
    "pvpflow_pl.html": "pvpflow.html",
    "voidspire_pl.html": "voidspire.html",
    "casinocore_pl.html": "casinocore.html",
  };

  const isPolish = current.endsWith("_pl.html");
  langToggle.textContent = isPolish ? "EN" : "PL";
  langToggle.setAttribute(
    "aria-label",
    isPolish ? "Switch to English" : "Przełącz na polski"
  );

  langToggle.addEventListener("click", () => {
    const target = mapping[current] || "index.html";
    window.location.href = target;
  });
}
