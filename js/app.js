/* =========================================================
   ALISMAJ · Lógica de la web
   (Los arreglos y el número de WhatsApp se editan en data.js)
   ========================================================= */
(() => {
  "use strict";
  const CFG = window.ALISMAJ, PRODS = window.PRODUCTOS, CATS = window.CATEGORIAS;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const money = n => `${CFG.moneda} ${Number(n).toFixed(2)}`;
  const norm = s => (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const catName = id => (CATS.find(c => c.id === id) || {}).nombre || "";
  const byId = id => PRODS.find(p => p.id === id);

  /* ---------- WhatsApp ---------- */
  const waLink = text => `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(text)}`;
  const GENERIC = {
    general:   "¡Hola Alismaj! Vi su página web y me gustaría hacer una consulta sobre sus arreglos.",
    maquillaje:"¡Hola Alismaj! Quiero regalar un ramo de maquillaje por el Día del Maquillaje (25 de octubre). ¿Tienen disponibilidad?",
    medida:    "¡Hola Alismaj! Quisiera un arreglo hecho a mi medida. Les cuento mi idea:",
  };
  $$("[data-wa]").forEach(a => a.href = waLink(GENERIC[a.dataset.wa] || GENERIC.general));
  $$(".wa-num").forEach(s => s.textContent = CFG.whatsappVisible);
  $("#year").textContent = new Date().getFullYear();

  // El mensaje cambia según el arreglo (y su categoría)
  const OPENER = {
    maquillaje: "Me encantó este ramo de maquillaje y quiero más información:",
    ramos:      "Quiero información sobre este ramo:",
    flores:     "Quiero información sobre esta flor:",
    cajas:      "Me interesa esta caja regalo:",
    el:         "Busco un detalle para él y me interesa:",
    cartas:     "Quiero pedir:",
  };
  function buildMsg(p, custom = {}) {
    const L = [`¡Hola Alismaj!`, `${p.msg || OPENER[p.cat] || "Me interesa:"} *${p.nombre}*${p.linea ? ` (${p.linea})` : ""}`];
    L.push(p.precio != null ? `Precio del catálogo: ${money(p.precio)}` : `¿Me indican el precio, por favor?`);
    L.push(`Incluye: ${p.incluye.join("; ")}`);
    if (custom.para)   L.push(`Es para: ${custom.para}`);
    if (custom.color)  L.push(`Color preferido: ${custom.color}`);
    if (custom.fecha)  L.push(`Lo necesito para: ${custom.fecha}`);
    if (custom.extras && custom.extras.length) L.push(`Quisiera cotizar extras: ${custom.extras.join(", ")}`);
    if (custom.msg)    L.push(`Dedicatoria: “${custom.msg}”`);
    L.push(`¿Tienen disponibilidad? ¡Gracias!`);
    return L.join("\n");
  }

  /* ---------- Imagen con respaldo elegante ---------- */
  const ROSE = `<svg viewBox="0 0 100 100" aria-hidden="true"><use href="#rose"/></svg>`;
  function imgEl(p) {
    const file = p.img || (window.FOTOS[p.id] ? `img/catalogo/${window.FOTOS[p.id]}` : "");
    const wrap = document.createElement("div");
    wrap.className = "img-slot";
    wrap.style.cssText = "width:100%;height:100%";
    const ph = () => { wrap.innerHTML = `<div class="ph">${ROSE}<span>${p.nombre}</span></div>`; };
    if (!file) { ph(); return wrap; }          // sin foto: no se pide nada al servidor
    const img = new Image();
    img.alt = p.nombre; img.loading = "lazy"; img.decoding = "async";
    img.onerror = ph;
    img.src = file;
    wrap.append(img);
    return wrap;
  }

  /* ---------- Tarjeta ---------- */
  function card(p) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "card"; b.dataset.id = p.id;
    b.setAttribute("aria-label", `Ver detalle de ${p.nombre}`);
    b.innerHTML = `
      <div class="card-img">${p.nuevo ? '<span class="tag-new">Nuevo</span>' : ""}</div>
      <div class="card-body">
        ${p.linea ? `<span class="card-line">${p.linea}</span>` : `<span class="card-line">${catName(p.cat)}</span>`}
        <h3>${p.nombre}</h3>
        <p class="card-desc">${p.desc || ""}</p>
        <div class="card-foot">
          <span class="price ${p.precio == null ? "ask" : ""}">${p.precio != null ? money(p.precio) : "Consultar precio"}</span>
          <span class="card-go">Ver detalle</span>
        </div>
      </div>`;
    $(".card-img", b).append(imgEl(p));
    b.addEventListener("click", () => openModal(p.id));
    return b;
  }

  /* ---------- Novedades (carrusel) ---------- */
  const rail = $("#rail");
  PRODS.filter(p => p.nuevo).forEach(p => rail.append(card(p)));
  const step = () => Math.max(260, rail.clientWidth * .8);
  $("#prev").onclick = () => rail.scrollBy({ left: -step(), behavior: "smooth" });
  $("#next").onclick = () => rail.scrollBy({ left: step(), behavior: "smooth" });

  /* ---------- Catálogo: filtros ---------- */
  const PAGE = 24;
  let shown = PAGE;
  const state = { q: "", cat: "", tag: "", nuevo: false };
  const el = { more: $("#more"), q: $("#q"), tag: $("#f-tag"), nuevo: $("#f-nuevo"), tabs: $("#tabs"), grid: $("#grid"), count: $("#count"), empty: $("#empty") };

  el.tag.innerHTML = `<option value="">Todas</option>` + window.TEMATICAS.map(t => `<option value="${t.id}">${t.nombre}</option>`).join("");

  function renderTabs() {
    const base = PRODS.filter(p => matches(p, { cat: "" }));   // conteo respetando el resto de filtros
    const tabs = [{ id: "", nombre: "Todo" }, ...CATS];
    el.tabs.innerHTML = tabs.map(c => {
      const n = c.id ? base.filter(p => p.cat === c.id).length : base.length;
      return `<button class="tab" role="tab" data-cat="${c.id}" aria-selected="${state.cat === c.id}">${c.nombre}<small>${n}</small></button>`;
    }).join("");
    $$(".tab", el.tabs).forEach(t => t.onclick = () => setState({ cat: t.dataset.cat }));
  }

  function matches(p, over = {}) {
    const s = { ...state, ...over };
    if (s.cat && p.cat !== s.cat) return false;
    if (s.tag && !(p.tags || []).includes(s.tag)) return false;
    if (s.nuevo && !p.nuevo) return false;
    if (s.q) {
      const hay = norm([p.nombre, p.desc, p.linea, catName(p.cat), (p.incluye || []).join(" "), (p.tags || []).join(" "), (p.para || []).join(" ")].join(" "));
      if (!norm(s.q).split(/\s+/).filter(Boolean).every(w => hay.includes(w))) return false;
    }
    return true;
  }

  function render() {
    renderTabs();
    let list = PRODS.filter(p => matches(p));
    el.grid.replaceChildren(...list.slice(0, shown).map(card));
    el.more.hidden = list.length <= shown;
    el.more.textContent = `Ver más arreglos (${list.length - shown} restantes)`;
    el.count.textContent = list.length ? `${list.length} arreglo${list.length === 1 ? "" : "s"}` : "";
    el.empty.hidden = list.length > 0;
    el.grid.hidden = list.length === 0;
    el.q.value = state.q; el.tag.value = state.tag; el.nuevo.checked = state.nuevo;
    markNav();
  }
  function setState(patch) { Object.assign(state, patch); shown = PAGE; render(); }
  el.more.onclick = () => { shown += PAGE; render(); };
  function goCatalog() { $("#catalogo").scrollIntoView({ behavior: "smooth" }); }

  let t;
  el.q.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { state.q = el.q.value.trim(); shown = PAGE; render(); el.q.focus(); }, 180); });
  el.tag.onchange = () => setState({ tag: el.tag.value });
  el.nuevo.onchange = () => setState({ nuevo: el.nuevo.checked });
  $("#clear").onclick = () => setState({ q: "", cat: "", tag: "", nuevo: false });

  // Enlaces del menú / botones que preseleccionan una categoría
  $$("[data-cat]").forEach(a => {
    if (a.classList.contains("tab")) return;
    a.addEventListener("click", () => {
      setState({ q: "", tag: "", nuevo: !!a.dataset.nuevo, cat: a.dataset.cat || "" });
      closeMenu();
    });
  });

  /* ---------- Menú móvil ---------- */
  const burger = $("#burger"), nav = $("#nav");
  function closeMenu() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.onclick = () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
  $$("#nav a").forEach(a => a.addEventListener("click", closeMenu));

  /* ---------- Menú: sección activa ---------- */
  let section = "inicio";
  function markNav() {
    let key = section;
    if (section === "catalogo" && (state.cat === "el" || state.cat === "cartas")) key = state.cat;
    $$("#nav a").forEach(a => a.classList.toggle("on", a.dataset.nav === key));
  }
  const secObs = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { section = e.target.id === "promo" ? section : e.target.id; markNav(); } });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["inicio", "novedades", "catalogo", "pedidos"].forEach(id => secObs.observe($("#" + id)));

  /* ---------- Modal de detalle ---------- */
  const modal = $("#modal");
  let current = null, lastFocus = null;

  function openModal(id, fromHash) {
    const p = byId(id); if (!p) return;
    current = p; lastFocus = document.activeElement;
    $("#m-img").replaceChildren(imgEl(p));
    $("#m-title").textContent = p.nombre;
    $("#m-desc").textContent = p.desc || "";
    const price = $("#m-price");
    price.className = "m-price" + (p.precio == null ? " ask" : "");
    price.textContent = p.precio != null ? money(p.precio) : "Consulta el precio por WhatsApp";
    $("#m-badges").innerHTML = [
      p.nuevo ? '<span class="chip red">Nuevo</span>' : "",
      `<span class="chip">${catName(p.cat)}</span>`,
      p.linea ? `<span class="chip">${p.linea}</span>` : ""
    ].join("");
    $("#m-list").innerHTML = p.incluye.map(i => `<li>${i}</li>`).join("");

    // Personalización
    $("#m-custom").open = false;
    ["c-para", "c-color", "c-fecha", "c-msg"].forEach(i => $("#" + i).value = "");
    $("#c-fecha").min = new Date().toISOString().slice(0, 10);
    $("#c-color-wrap").hidden = !p.colorEleg;
    const canExtras = ["ramos", "flores", "maquillaje"].includes(p.cat);
    $("#c-extras-wrap").hidden = !canExtras;
    $("#c-extras").innerHTML = canExtras ? window.EXTRAS.map(x => `<label><input type="checkbox" value="${x}"> ${x}</label>`).join("") : "";
    updateWa();

    modal.hidden = false;
    document.body.classList.add("lock");
    $(".sheet", modal).scrollTop = 0;
    $(".m-close", modal).focus();
    if (!fromHash) history.replaceState(null, "", "#p=" + p.id);
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true; document.body.classList.remove("lock");
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function customData() {
    const f = $("#c-fecha").value;
    return {
      para: $("#c-para").value.trim(),
      color: $("#c-color-wrap").hidden ? "" : $("#c-color").value.trim(),
      fecha: f ? new Date(f + "T12:00").toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long" }) : "",
      msg: $("#c-msg").value.trim(),
      extras: $$("#c-extras input:checked").map(i => i.value),
    };
  }
  function updateWa() { if (current) $("#m-wa").href = waLink(buildMsg(current, customData())); }
  $("#m-custom").addEventListener("input", updateWa);
  $("#m-custom").addEventListener("change", updateWa);

  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {           // mantener el foco dentro del modal
      const f = $$("a[href],button,input,textarea,summary", $(".sheet", modal)).filter(x => !x.closest("[hidden]") && !x.disabled);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Fecha especial: cuenta regresiva ---------- */
  (function promo() {
    const now = new Date(), { mes, dia } = CFG.fechaEspecial;
    const end = new Date(now.getFullYear(), mes - 1, dia, 23, 59, 59);
    const days = Math.ceil((end - now) / 864e5);
    if (days < 0 || days > 30) return;
    $("#promo").hidden = false;
    $("#countdown").textContent = days <= 1 ? "¡Es hoy! Pide ya tu ramo 💄" : `Faltan ${days} días · ¡aparta el tuyo hoy!`;
  })();

  /* ---------- Animaciones al hacer scroll ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }) : null;
  $$(".reveal").forEach(n => io ? io.observe(n) : n.classList.add("in"));

  /* ---------- Inicio ---------- */
  render();
  const m = location.hash.match(/^#p=(.+)$/);
  if (m) openModal(decodeURIComponent(m[1]), true);
  window.addEventListener("hashchange", () => { const h = location.hash.match(/^#p=(.+)$/); if (h) openModal(decodeURIComponent(h[1]), true); });
})();
