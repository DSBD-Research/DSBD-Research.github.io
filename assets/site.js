/* DSBD – script compartilhado por todas as páginas.
   O conteúdo fica em assets/content.js; aqui só há a montagem das páginas. */
(function(){
const D=window.DSBD, T=D.T;
const page=document.body.dataset.page||"home";
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const initials=n=>n.split(/\s+/).filter(w=>/^[A-ZÁÉÍÓÚÂÊÔ]/.test(w)).slice(0,2).map(w=>w[0]).join("");
const av=(n,img,cls="avatar")=>img?`<img class="${cls}" src="${img}" alt="${esc(n)}" loading="lazy" onerror="this.outerHTML='<span class=&quot;${cls}&quot;>${initials(n)}</span>'">`:`<span class="${cls}">${initials(n)}</span>`;
const $=id=>document.getElementById(id);
const ext=u=>`href="${u}" target="_blank" rel="noopener"`;

/* ---------- language ---------- */
let lang=(()=>{const h=location.hash.slice(1);if(h==="en"||h==="pt")return h;
  try{const s=localStorage.getItem("dsbd-lang");if(s)return s}catch(e){}
  return (navigator.language||"pt").toLowerCase().startsWith("pt")?"pt":"en"})();

/* ---------- shared header & footer ---------- */
const home=page==="home"?"":"index.html";
document.body.insertAdjacentHTML("afterbegin",`
<header class="bar" id="top"><div class="wrap">
  <a class="brand" href="index.html"><img src="img/logo.webp" alt="Logo DSBD" width="38" height="41">DSBD</a>
  <button class="menu-btn" id="menuBtn" aria-expanded="false" data-i18n="menu">Menu</button>
  <nav aria-label="Principal">
    <a href="${home}#sobre" data-i18n="nav_about"></a>
    <a href="${home}#projetos" data-i18n="nav_projects"></a>
    <a href="${home}#publicacoes" data-i18n="nav_pubs"></a>
    <a href="${home}#membros" data-i18n="nav_members"></a>
    <a href="${home}#noticias" data-i18n="nav_news"></a>
    <a href="${home}#colaboracoes" data-i18n="nav_collab"></a>
    <a href="${home}#faca-parte" data-i18n="nav_join"></a>
  </nav>
  <div class="lang" role="group" aria-label="Idioma / Language">
    <button type="button" data-set-lang="pt" aria-pressed="true">PT</button>
    <button type="button" data-set-lang="en" aria-pressed="false">EN</button>
  </div>
</div></header>`);
document.body.insertAdjacentHTML("beforeend",`
<footer><div class="wrap">
  <a class="brand" href="index.html"><img src="img/logo.webp" alt="Logo DSBD" width="48" height="52">Data Science &amp; Big Data</a>
  <div class="contact">
    <span class="mail" id="mail">dsbd@ufpr.br</span>
    <button type="button" id="copyMail" data-i18n="copy"></button>
    <a class="li" ${ext("https://www.linkedin.com/company/dsbd-ufpr")}>LinkedIn ↗</a>
    <a class="li" ${ext("https://github.com/DSBD-Research")}>GitHub ↗</a>
  </div>
  <small>© ${new Date().getFullYear()} DSBD · Universidade Federal do Paraná · Curitiba, PR</small>
</div></footer>`);

/* ---------- renderers ---------- */
const projCard=(p,t)=>{const L=p[lang];return `<a class="proj" href="projeto.html?p=${p.id}"><div class="ph"><img src="${p.img}" alt="" loading="lazy" onerror="this.remove()"></div><div class="bd"><span class="status ${p.status}">${t["status_"+p.status]}</span><h3>${esc(L.title)}</h3><p>${esc(L.summary)}</p><span class="more">${t.more}</span></div></a>`};

function renderHome(t){
  $("areasList").innerHTML=D.AREAS.map((a,i)=>`<div class="area"><span class="ix">${String(i+1).padStart(2,"0")} / ${String(D.AREAS.length).padStart(2,"0")}</span><h3>${a[lang][0]}</h3><p>${a[lang][1]}</p></div>`).join("");
  const ongoing=D.PROJECTS.filter(p=>p.status!=="finished");
  const nFin=D.PROJECTS.length-ongoing.length;
  $("projList").classList.toggle("even",ongoing.length%2===0);
  $("projList").innerHTML=ongoing.map(p=>projCard(p,t)).join("")+
    `<a class="finished-cta" href="projetos-finalizados.html"><div><h3>${t.finished_cta_t} <span style="color:var(--macaw)">· ${nFin}</span></h3><p>${t.finished_cta_d}</p></div><span class="btn primary">${t.finished_cta_b}</span></a>`;
  $("pubList").innerHTML=D.PUBS.map(p=>`<li class="pub"><span class="yr">${p.y}</span><div><div class="t">${esc(p.t)}</div><div class="a">${esc(p.a)}</div><div class="v">${esc(p.v)}</div></div>${p.u?`<a class="pdf" ${ext(p.u)}>PDF ↗</a>`:"<span></span>"}</li>`).join("");
  $("panel-fac").innerHTML=D.FACULTY.map(f=>{const bio=f[lang];const long=bio.length>190;const short=long?bio.slice(0,bio.indexOf(" ",170))+"…":bio;return `<article class="fac">${av(f.n,f.img)}<div style="min-width:0"><h3>${f.n}</h3>${long?`<details><summary>${t.bio}</summary><p>${bio}</p></details><p>${short}</p>`:`<p>${bio}</p>`}</div></article>`}).join("");
  document.querySelectorAll(".fac details").forEach(d=>d.addEventListener("toggle",()=>{d.nextElementSibling.hidden=d.open}));
  $("panel-stu").innerHTML=D.STUDENTS.map(s=>`<article class="stu"><div class="top">${av(s.n,s.img)}<div><h3>${s.n}</h3><span class="chip ${s.l}">${t["lvl_"+s.l]}</span></div></div><p>${s[lang]}</p></article>`).join("");
  $("panel-past").innerHTML=D.PAST.map(p=>`<li><b>${p.n}</b><span>${p[lang]}</span></li>`).join("");
  $("newsList").innerHTML=D.NEWS.map(n=>{const f=new Date(n.d+"T12:00:00").toLocaleDateString(lang==="pt"?"pt-BR":"en-US",{day:"numeric",month:"long",year:"numeric"});return `<li><time datetime="${n.d}">${f}</time><p>${n[lang]}${n.u?` <a ${ext(n.u)}>${n.u.replace(/^https?:\/\//,"")}</a>`:""}</p></li>`}).join("");
  $("collabList").innerHTML=D.COLLAB.map(c=>`<article class="inst${c.wide?" wide":""}"><span class="where">${c.where[lang]}</span><h3>${c.name}</h3><div class="people">${c.people.map(([n,i])=>`<span class="person">${av(n,i)}${n}</span>`).join("")}</div><p>${c[lang]}</p></article>`).join("");
  $("industryList").innerHTML=`<span class="lbl">${t.industry}</span>`+D.INDUSTRY.map(([n,i])=>`<span class="co-logo"><img src="${i}" alt="${esc(n)}" title="${esc(n)}" loading="lazy"></span>`).join("");
  $("joinList").innerHTML=D.JOIN[lang].map(([h,d])=>`<div class="opt"><h3>${h}</h3><p>${d}</p></div>`).join("");
}

function renderFinished(t){
  const fin=D.PROJECTS.filter(p=>p.status==="finished");
  $("finList").innerHTML=fin.map(p=>{const L=p[lang];return `<a class="fin-item" href="projeto.html?p=${p.id}"><div class="ph"><img src="${p.img}" alt="" loading="lazy" onerror="this.remove()"></div><div class="bd"><span class="status finished">${t.status_finished}</span><h2>${esc(L.title)}</h2><p>${esc(L.summary)}</p>${p.tech?`<div class="tags">${p.tech.map(x=>`<span>${esc(x)}</span>`).join("")}</div>`:""}<span class="meta">${p.pubs.length} ${p.pubs.length===1?t.p_pub1:t.p_pubs.toLowerCase()}</span><span class="more">${t.more}</span></div></a>`}).join("");
}

function renderProject(t){
  const id=new URLSearchParams(location.search).get("p");
  const p=D.PROJECTS.find(x=>x.id===id);
  if(!p){$("pTitle").textContent=t.p_notfound;$("pBack").href="index.html#projetos";$("pBack").textContent=t.p_all;return}
  const L=p[lang];
  document.title=L.title+" · DSBD";
  $("pStatus").className="status "+p.status;$("pStatus").textContent=t["status_"+p.status];
  $("pTitle").textContent=L.title;$("pSummary").textContent=L.summary;
  $("pBack").href=p.status==="finished"?"projetos-finalizados.html":"index.html#projetos";
  $("pBack").textContent=p.status==="finished"?t.p_finished_all:t.p_all;
  $("pCover").innerHTML=`<img src="${p.img}" alt="">`;
  $("pBody").innerHTML=p.sections.map(s=>{const S=s[lang];return `<section><h2>${esc(S.h)}</h2>${S.html}${s.fig?`<figure><img src="${s.fig.src}" alt="${esc(s.fig[lang])}" loading="lazy"><figcaption>${esc(s.fig[lang])}</figcaption></figure>`:""}</section>`}).join("");
  const boxes=[];
  if(p.team&&p.team.length) boxes.push(`<div class="box"><h3>${t.p_team}</h3><div class="team">${p.team.map(([n,inst,img])=>`<div class="m">${av(n,img)}<div>${esc(n)}<small>${esc(inst)}</small></div></div>`).join("")}</div></div>`);
  if(p.pubs&&p.pubs.length) boxes.push(`<div class="box"><h3>${t.p_pubs}</h3><ul>${p.pubs.map(x=>{const ti=lang==="en"&&x.tEn?x.tEn:x.t;return `<li>${x.u?`<a ${ext(x.u)}>${esc(ti)} ↗</a>`:`<b>${esc(ti)}</b>`}<span>${esc(x.v)}</span></li>`}).join("")}</ul></div>`);
  if(p.tcc&&p.tcc.length) boxes.push(`<div class="box"><h3>${t.p_tcc}</h3><ul>${p.tcc.map(x=>`<li><a ${ext(x.u)}>${esc(x.t)} ↗</a></li>`).join("")}</ul></div>`);
  if(p.links&&p.links.length) boxes.push(`<div class="box"><h3>${t.p_links}</h3><ul>${p.links.map(x=>`<li><a ${ext(x.u)}>${esc(x[lang])} ↗</a></li>`).join("")}</ul></div>`);
  if(p.tech&&p.tech.length) boxes.push(`<div class="box"><h3>${t.p_tech}</h3><div class="tags">${p.tech.map(x=>`<span>${esc(x)}</span>`).join("")}</div></div>`);
  $("pSide").innerHTML=boxes.join("");
}

function render(){
  const t=T[lang];
  document.documentElement.lang=lang==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k]!=null)el.textContent=t[k]});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{el.innerHTML=t[el.dataset.i18nHtml]});
  document.querySelectorAll("[data-set-lang]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.setLang===lang));
  if(page==="home")renderHome(t);
  if(page==="finished")renderFinished(t);
  if(page==="project")renderProject(t);
}
render();

/* ---------- interactions ---------- */
document.querySelectorAll("[data-set-lang]").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.setLang;try{localStorage.setItem("dsbd-lang",lang)}catch(e){}render()}));
document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll("[data-tab]").forEach(x=>x.setAttribute("aria-selected",x===b));
  ["fac","stu","past"].forEach(k=>$("panel-"+k).hidden=k!==b.dataset.tab);
}));
const bar=document.querySelector(".bar"),menuBtn=$("menuBtn");
menuBtn.addEventListener("click",()=>{const o=bar.classList.toggle("open");menuBtn.setAttribute("aria-expanded",o)});
document.querySelectorAll(".bar nav a").forEach(a=>a.addEventListener("click",()=>{bar.classList.remove("open");menuBtn.setAttribute("aria-expanded",false)}));
const cm=$("copyMail");
cm.addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText("dsbd@ufpr.br");cm.textContent=T[lang].copied;setTimeout(()=>cm.textContent=T[lang].copy,1600)}
  catch(e){const r=document.createRange();r.selectNodeContents($("mail"));const s=getSelection();s.removeAllRanges();s.addRange(r)}
});

/* ---------- hero animation (home only) ---------- */
const c=$("stream");
if(c){
  const x=c.getContext("2d"),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;let W,H,P=[];
  const size=()=>{const r=c.getBoundingClientRect(),d=devicePixelRatio||1;W=r.width;H=r.height;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
    P=Array.from({length:Math.round(W*H/5200)},()=>({x:Math.random()*W,y:Math.random()*H,v:.15+Math.random()*.6,r:Math.random()<.06?2.4:1.1,k:Math.random()<.08}))};
  const draw=()=>{x.clearRect(0,0,W,H);
    for(let i=0;i<6;i++){x.beginPath();x.strokeStyle="rgba(120,160,255,.08)";for(let px=0;px<=W;px+=12){const y=H*(.15+i*.14)+Math.sin(px/140+i+(reduce?0:performance.now()/4000))*18;px?x.lineTo(px,y):x.moveTo(px,y)}x.stroke()}
    for(const p of P){x.fillStyle=p.k?"rgba(242,183,5,.85)":"rgba(160,190,255,.45)";x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();if(!reduce){p.x+=p.v;if(p.x>W+4){p.x=-4;p.y=Math.random()*H}}}
    if(!reduce)requestAnimationFrame(draw)};
  size();draw();addEventListener("resize",()=>{size();if(reduce)draw()});
}
})();
