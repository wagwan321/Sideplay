/* SidePlay storefront: catalog rendering, filtering, product sheet, WhatsApp ordering. */
(() => {
  const WA = "96171904725";
  const PHONE_DISPLAY = "71 904 725";
  const DEPTS = window.SP_DEPTS || [];
  const PRODUCTS = window.SP_PRODUCTS || [];
  const deptById = Object.fromEntries(DEPTS.map((d) => [d.id, d]));
  const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
  const deptNo = Object.fromEntries(DEPTS.map((d, i) => [d.id, String(i + 1).padStart(2, "0")]));

  const ICON_WA = `<svg aria-hidden="true"><use href="#i-msg"/></svg>`;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (p) => (p == null ? null : "$" + p.toLocaleString("en-US"));

  const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  const orderText = (p, colour, qty = 1) => {
    const lines = [`Hi SidePlay! I'd like to order:`, `${p.n} (item ${p.id})`];
    if (colour) lines.push(`Colour: ${colour}`);
    lines.push(`Quantity: ${qty}`);
    lines.push(p.p != null ? `Listed price: ${money(p.p)}` : `Please send me the price.`);
    return lines.join("\n");
  };

  const colourList = (p) => (p.c ? p.c.split(/,\s*/).filter(Boolean) : []);

  /* ---------- swing physics ---------- */
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const swing = (el, amp = 5) => {
    if (!el || REDUCED) return;
    el._t = performance.now();
    el.style.setProperty("--amp", amp.toFixed(2) + "deg");
    el.classList.remove("swinging"); void el.offsetWidth; el.classList.add("swinging");
  };
  document.addEventListener("animationend", (e) => { if (e.animationName === "swing") { e.target.classList.remove("swinging"); e.target.classList.add("settled"); } });
  /* items settle with a small swing as they come into view */
  const io = "IntersectionObserver" in window && !REDUCED ? new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { io.unobserve(en.target); setTimeout(() => swing(en.target.querySelector(".swing") || en.target, 3 + Math.random() * 3), Math.random() * 260); }
  }), { threshold: .4 }) : null;
  const observeSwing = () => io && $$(".item:not([data-seen]), .poster:not([data-seen]), .step:not([data-seen])").forEach((el) => { el.dataset.seen = 1; io.observe(el); });

  /* ---------- product card: the item hung on its own piece of wall ---------- */
  const card = (p) => {
    const price = money(p.p);
    const specs = p.s.slice(0, 2).map(([k, v]) => `<li>${esc(k)}: <b>${esc(v)}</b></li>`).join("");
    return `<article class="item" data-id="${esc(p.id)}">
      <a class="item-hit" href="#p/${encodeURIComponent(p.id)}" aria-label="${esc(p.n)}${price ? ", " + price : ", price on WhatsApp"}"></a>
      <div class="item-wall peg">
        <svg class="hook" aria-hidden="true"><use href="#i-hook"/></svg>
        <span class="swing"><img src="${esc(p.img)}" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async"><span class="tag${price ? "" : " ask"}">${price || "Price on WhatsApp"}</span></span>
      </div>
      <div class="item-body">
        <h3 class="item-name">${esc(p.n)}</h3>
        <p class="item-brand">${p.b ? esc(p.b) + " · " : ""}<span class="item-code">${esc(p.id)}</span></p>
        ${specs ? `<ul class="item-specs">${specs}</ul>` : ""}
        <div class="item-foot">
          <span class="item-price${price ? "" : " ask"}">${price || "Ask price"}</span>
          <a class="item-order" href="${waLink(orderText(p, colourList(p)[0]))}" target="_blank" rel="noopener" aria-label="Order ${esc(p.n)} on WhatsApp">${ICON_WA}<span>Order<span class="ow"> on WhatsApp</span></span></a>
        </div>
      </div>
    </article>`;
  };

  /* ---------- catalog state ---------- */
  const state = { dept: "all", q: "", sort: "featured", limit: 24 };
  const grid = $("#grid");
  const countEl = $("#count");
  const moreBtn = $("#more");

  const filtered = () => {
    const q = state.q.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => (state.dept === "all" || p.d === state.dept) &&
      (!q || [p.n, p.id, p.b, p.c, p.t, deptById[p.d]?.name, ...p.s.flat()].join(" ").toLowerCase().includes(q)));
    if (state.sort === "low") list = [...list].sort((a, b) => (a.p ?? 1e9) - (b.p ?? 1e9));
    if (state.sort === "high") list = [...list].sort((a, b) => (b.p ?? -1) - (a.p ?? -1));
    return list;
  };

  const render = () => {
    if (!grid) return;
    const list = filtered();
    const shown = list.slice(0, state.limit);
    grid.innerHTML = shown.map(card).join("") ||
      `<div class="empty"><p class="empty-t">Nothing on the shelf matches “${esc(state.q)}”.</p>
       <p>Try another word, or <a href="${waLink(`Hi SidePlay! Do you have: ${state.q}?`)}" target="_blank" rel="noopener">ask us on WhatsApp</a>; we may have it in stock.</p>
       <button class="btn btn-outline" type="button" data-clear>Clear search</button></div>`;
    const deptName = state.dept === "all" ? "all departments" : deptById[state.dept].name;
    countEl && (countEl.textContent = `item${list.length === 1 ? "" : "s"} · ${deptName}`);
    const cn = $("#count-n");
    if (cn && cn.textContent !== String(list.length)) { cn.textContent = list.length; cn.classList.remove("flip"); void cn.offsetWidth; cn.classList.add("flip"); }
    observeSwing();
    if (moreBtn) {
      moreBtn.hidden = list.length <= state.limit;
      moreBtn.textContent = `Show ${Math.min(24, list.length - state.limit)} more`;
    }
    $$("[data-dept]").forEach((b) => {
      const on = b.dataset.dept === state.dept;
      if (b.tagName === "BUTTON") b.setAttribute("aria-pressed", String(on));
      else if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
  };

  const setDept = (id, scroll) => {
    state.dept = id; state.limit = 24; render();
    if (scroll) $("#shop")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  /* ---------- product sheet ---------- */
  const sheet = $("#sheet");
  let lastFocus = null;
  const openSheet = (id) => {
    const p = byId[id];
    if (!p || !sheet) return;
    const cols = colourList(p);
    const d = deptById[p.d];
    const views = cols.length > 1 ? `<fieldset class="views"><legend>Colour</legend>${cols.map((c, i) =>
      `<label><input type="radio" name="col" value="${esc(c)}" ${i ? "" : "checked"}><span>${esc(c)}</span></label>`).join("")}</fieldset>`
      : cols.length ? `<div class="rd"><span>Colour</span><b>${esc(cols[0])}</b></div>` : "";
    $("#sheet-body").innerHTML = `
      <div class="sh-wall peg" style="--nw:${Math.round(p.w * 1.6)}px"><svg class="hook" aria-hidden="true"><use href="#i-hook"/></svg><span class="swing"><img src="${esc(p.img)}" alt="${esc(p.n)}" width="${p.w}" height="${p.h}"><span class="tag${p.p == null ? " ask" : ""}">${money(p.p) || "Price on WhatsApp"}</span></span></div>
      <div class="sh-info">
                <h2 id="sheet-title">${esc(p.n)}</h2>
        ${p.b ? `<p class="sh-brand">${esc(p.b)}${p.t ? " · " + esc(p.t) : ""}</p>` : p.t ? `<p class="sh-brand">${esc(p.t)}</p>` : ""}
        <dl class="sh-specs"><div><dt>Price</dt><dd>${money(p.p) || "Ask on WhatsApp"}</dd></div><div><dt>Item code</dt><dd class="code">${esc(p.id)}</dd></div><div><dt>Department</dt><dd>${esc(d.name)}</dd></div>${p.s.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        ${views}
        <div class="qty"><label for="qty">Quantity</label><div class="qty-c"><button type="button" data-q="-1" aria-label="One less"><svg aria-hidden="true"><use href="#i-minus"/></svg></button><input id="qty" inputmode="numeric" value="1" aria-live="polite"><button type="button" data-q="1" aria-label="One more"><svg aria-hidden="true"><use href="#i-plus"/></svg></button></div></div>
        <div class="msg">
          <p class="msg-h"><span>Your WhatsApp message</span><span>To 71 904 725</span></p>
          <pre class="msg-t" aria-live="polite"></pre>
        </div>
        <a class="btn btn-red btn-lg sh-order" target="_blank" rel="noopener" href="#">${ICON_WA}<span>Send order on WhatsApp</span></a>
        <p class="sh-note">We confirm availability, how you get it, and payment in the chat.</p>
      </div>`;
    const msgEl = $(".msg-t", sheet);
    const slipEl = $(".msg", sheet);
    const sync = (reprint) => {
      const col = $("input[name=col]:checked", sheet)?.value || cols[0];
      const qtyIn = $("#qty", sheet);
      let q = parseInt(qtyIn.value, 10); if (!(q >= 1)) q = 1; if (q > 99) q = 99;
      const text = orderText(p, col, q);
      $(".sh-order", sheet).href = waLink(text);
      msgEl.textContent = text;
      if (reprint === true) { slipEl.classList.remove("feed"); void slipEl.offsetWidth; slipEl.classList.add("feed"); }
    };
    sheet.oninput = () => sync(true);
    sheet.onclick = (e) => {
      const b = e.target.closest("[data-q]");
      if (b) { const qi = $("#qty", sheet); qi.value = Math.max(1, Math.min(99, (parseInt(qi.value, 10) || 1) + +b.dataset.q)); sync(true); }
      if (e.target === sheet || e.target.closest("[data-close]")) closeSheet();
    };
    sync();
    lastFocus = document.activeElement;
    if (!sheet.open) sheet.showModal();
    swing($(".sh-wall .swing", sheet), 7);
    $("#sheet-title", sheet)?.focus({ preventScroll: true });
    document.title = `${p.n} · SidePlay`;
  };
  const closeSheet = () => {
    if (sheet?.open) sheet.close();
  };
  sheet?.addEventListener("close", () => {
    document.title = BASE_TITLE;
    if (location.hash.startsWith("#p/")) history.replaceState(null, "", location.pathname + location.search + "#shop");
    lastFocus?.focus?.({ preventScroll: true });
  });

  const route = () => {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith("p/")) openSheet(h.slice(2));
    else if (h.startsWith("d/") && deptById[h.slice(2)]) { closeSheet(); setDept(h.slice(2), true); }
  };

  /* ---------- wiring ---------- */
  const BASE_TITLE = document.title;
  document.addEventListener("click", (e) => {
    const d = e.target.closest("[data-dept]");
    if (d) { e.preventDefault(); setDept(d.dataset.dept, d.hasAttribute("data-scroll")); history.replaceState(null, "", d.dataset.dept === "all" ? "#shop" : "#d/" + d.dataset.dept); }
    if (e.target.closest("[data-clear]")) { state.q = ""; const s = $("#q"); if (s) s.value = ""; render(); }
  });
  $("#q")?.addEventListener("input", (e) => { state.q = e.target.value; state.limit = 24; render(); });
  $("#sort")?.addEventListener("change", (e) => { state.sort = e.target.value; render(); });
  moreBtn?.addEventListener("click", () => { state.limit += 24; render(); });
  $$("[data-wa]").forEach((a) => { a.href = waLink(a.dataset.wa || "Hi SidePlay! I have a question."); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-phone]").forEach((el) => (el.textContent = PHONE_DISPLAY));
  $$("[data-dept-count]").forEach((el) => { const n = PRODUCTS.filter((p) => p.d === el.dataset.deptCount).length; el.textContent = n; });
  $$("[data-dept-from]").forEach((el) => {
    const prices = PRODUCTS.filter((p) => p.d === el.dataset.deptFrom && p.p != null).map((p) => p.p);
    el.textContent = "$" + Math.min(...prices);
  });
  $("[data-total]") && ($("[data-total]").textContent = PRODUCTS.length);
  $$("[data-priced]").forEach((el) => (el.textContent = PRODUCTS.filter((p) => p.p != null).length));
  $("#yr") && ($("#yr").textContent = new Date().getFullYear());
  $("#finder")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = $("#finder-q").value.trim();
    state.q = v; state.dept = "all"; state.limit = 24;
    const s = $("#q"); if (s) s.value = v;
    render();
    history.replaceState(null, "", "#shop");
    $("#shop").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  });
  /* phone tab bar + departments sheet + header search */
  const aisleSheet = $("#aisle-sheet");
  const goSearch = () => {
    $("#shop").scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
    setTimeout(() => $("#q")?.focus({ preventScroll: true }), REDUCED ? 0 : 450);
  };
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    const act = t.dataset.act;
    if (act === "search") { e.preventDefault(); aisleSheet?.open && aisleSheet.close(); goSearch(); }
    if (act === "aisles") { e.preventDefault(); aisleSheet?.showModal(); }
    if (act === "close-aisles") { e.preventDefault(); aisleSheet?.close(); }
  });
  aisleSheet?.addEventListener("click", (e) => {
    const d = e.target.closest("[data-dept]");
    if (d) {
      e.preventDefault(); e.stopPropagation();
      aisleSheet.close();
      setTimeout(() => { setDept(d.dataset.dept, true); history.replaceState(null, "", "#d/" + d.dataset.dept); }, 60);
    } else if (e.target === aisleSheet) aisleSheet.close();
  });
  const tabs = $$(".tabbar [data-tab]");
  const markTab = () => {
    const shopTop = $("#shop")?.getBoundingClientRect().top ?? 1e9;
    const on = shopTop < innerHeight * 0.5 ? "shop" : "home";
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === on));
  };
  addEventListener("scroll", markTab, { passive: true }); markTab();

  const fab = $(".fab"), finder = $(".sign");
  if (fab && finder && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => e.isIntersecting || e.boundingClientRect.top > 0 ? fab.setAttribute("data-hide", "") : fab.removeAttribute("data-hide")).observe(finder);
  }
  /* brushing the pointer across a hanging item swings it that way */
  let lastX = 0;
  document.addEventListener("pointermove", (e) => {
    const dx = e.clientX - lastX; lastX = e.clientX;
    if (REDUCED || e.pointerType === "touch") return;
    const el = e.target.closest?.(".ph-item, .hang, .item, .poster, .step, .sh-wall");
    if (!el) return;
    const s = el.querySelector(".swing") || el;
    if (s._t && performance.now() - s._t < 900) return;
    if (Math.abs(dx) < 2) return;
    swing(s, Math.max(-9, Math.min(9, dx * 0.7)));
  }, { passive: true });
  window.addEventListener("hashchange", route);
  render();
  route();
  window.SP = { openSheet, setDept, waLink, orderText, byId };
})();
