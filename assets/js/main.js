/* ====== EDIT THESE ====== */
const WHATSAPP = '910000000000';           // your WhatsApp number with country code, no +
/* ======================== */
const wa = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
document.getElementById('ctaWa').href = wa('Hi Zone Out Trip! I want to plan a trip.');

/* ---------- Rotating hero word ---------- */
const words = ['mountains','beaches','forests','old forts','tea hills'];
let wi = 0; const rw = document.getElementById('rotWord');
setInterval(() => {
  rw.classList.add('out');
  setTimeout(() => { wi = (wi+1)%words.length; rw.textContent = words[wi]; rw.classList.remove('out'); rw.classList.add('pre'); requestAnimationFrame(()=>requestAnimationFrame(()=>rw.classList.remove('pre'))); }, 450);
}, 2600);

/* ---------- Parallax scene ---------- */
const scene = document.getElementById('scene');
const layers = scene.querySelectorAll('[data-depth]');
scene.addEventListener('mousemove', e => {
  const r = scene.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
  layers.forEach(l => { const d = +l.dataset.depth; l.style.transform = `translate(${-x*d}px, ${-y*d*.5}px)`; l.style.transition='transform .3s ease-out'; });
});
scene.addEventListener('mouseleave', () => layers.forEach(l => l.style.transform = ''));


/* ---------- Hero photo slideshow ---------- */
const hs=[...document.querySelectorAll('.hslide')], hPlace=document.getElementById('hPlace'); let hc=0;
setInterval(()=>{ hs[hc].classList.remove('on'); hc=(hc+1)%hs.length; hs[hc].classList.add('on'); hPlace.textContent=hs[hc].dataset.place; hPlace.parentElement.animate([{transform:'translate(-50%,8px)',opacity:0},{transform:'translate(-50%,0)',opacity:1}],{duration:500}); },4200);
const ctaImg=document.getElementById('ctaImg');
addEventListener('scroll',()=>{ const r=ctaImg.parentElement.getBoundingClientRect(); ctaImg.style.transform=`scale(1.15) translateY(${(r.top-innerHeight/2)*-0.06}px)`; },{passive:true});

/* ---------- Mood postcards ---------- */
const moods = {
  hills: [
    ['Kodaikanal','KOD','Misty lake mornings & pine walks','Sep – Jun','3N','from-peri-300 to-mint-300','🌲','kodaikanal'],
    ['Munnar','MUN','Endless tea slopes & winding drives','Sep – Mar','3N','from-mint-300 to-mint-500','🍃','munnar'],
    ['Ooty','OOT','Toy trains, gardens & cool evenings','Oct – Jun','2N','from-rose-300 to-peri-300','🚂','ooty-toy-train'],
    ['Coorg','COO','Coffee estates under monsoon clouds','Oct – Mar','2N','from-butter-300 to-mint-300','☕','coorg']
  ],
  beach: [
    ['Goa','GOI','Sunset shacks & lazy Sundays','Nov – Feb','4N','from-butter-300 to-tang-300','🌅','goa'],
    ['Gokarna','GOK','Quiet coves & cliff-top trails','Oct – Mar','3N','from-mint-300 to-peri-300','🏝','gokarna'],
    ['Pondicherry','PNY','French lanes & seaside cycling','Oct – Mar','2N','from-tang-300 to-rose-300','🚲','pondicherry'],
    ['Varkala','VAR','Red cliffs above a turquoise sea','Nov – Mar','3N','from-peri-300 to-mint-500','🌊','varkala']
  ],
  heritage: [
    ['Jaipur','JAI','Pink walls, palaces & bazaars','Oct – Mar','3N','from-rose-300 to-tang-300','🏰','jaipur'],
    ['Hampi','HMP','Boulders, ruins & river sunsets','Oct – Feb','2N','from-butter-300 to-tang-300','🪨','hampi'],
    ['Udaipur','UDR','Lake palaces lit up at night','Sep – Mar','3N','from-peri-300 to-rose-300','🛶','udaipur'],
    ['Mysuru','MYS','Royal halls & sandalwood streets','Oct – Feb','2N','from-butter-300 to-rose-300','👑','mysuru']
  ],
  wild: [
    ['Wayanad','WAY','Waterfalls, caves & treehouses','Oct – May','3N','from-mint-300 to-mint-500','🌿','wayanad-road'],
    ['Thekkady','TEK','Spice trails & lake safaris','Sep – Apr','2N','from-butter-300 to-mint-300','🐘','thekkady'],
    ['Kabini','KAB','Riverside jungle & big-cat spotting','Oct – Jun','2N','from-tang-300 to-butter-300','🐆','kabini'],
    ['Corbett','JCB','Dense forests & morning jeep rides','Nov – Jun','3N','from-mint-300 to-peri-300','🦌','corbett']
  ]
};
const cardsEl = document.getElementById('cards');
const tilts = [-3, 2, -2, 3];
function renderMood(m) {
  cardsEl.innerHTML = moods[m].map(([n,c,t,s,nt,g,e,ph],i) => `
    <article class="postcard group animate-rise bg-white p-3 shadow-[0_20px_40px_-20px_rgba(45,42,74,.3)] rounded-md ring-1 ring-plum/5" style="transform:rotate(${tilts[i]}deg);animation-delay:${i*90}ms">
      <div class="relative h-60 bg-gradient-to-br ${g} overflow-hidden rounded-sm outline outline-2 outline-dashed outline-white/70 -outline-offset-8">
        <img src="assets/images/${ph}.jpg" alt="${n} – ${t}" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition duration-[1.2s] group-hover:scale-110" onerror="this.remove()">
        <div class="absolute inset-0 bg-gradient-to-t from-plum/40 to-transparent"></div>
        <span class="absolute bottom-3 left-3 w-11 h-11 rounded-full bg-white/90 grid place-items-center text-2xl shadow animate-bob" style="animation-delay:${-i}s">${e}</span>
        <span class="absolute top-3 right-3 w-14 h-14 rounded-full border-2 border-dashed border-plum/40 grid place-items-center text-[10px] font-extrabold text-plum/70 rotate-12 bg-white/40">${c}</span>
      </div>
      <div class="px-3 pt-4 pb-3">
        <div class="flex items-baseline justify-between"><h3 class="font-display font-extrabold text-2xl">${n}</h3><span class="text-xs font-bold text-tang-500">${nt} ideal</span></div>
        <p class="mt-1 text-sm text-plum-soft">${t}</p>
        <div class="mt-4 flex items-center justify-between text-xs">
          <span class="rounded-full bg-shell px-3 py-1.5 font-bold">🗓 ${s}</span>
          <button class="planThis font-bold text-tang-600 hover:underline" data-dest="${n}">Plan this →</button>
        </div>
      </div>
    </article>`).join('');
  cardsEl.querySelectorAll('.planThis').forEach(b => b.onclick = () => { bDest.value = b.dataset.dest; update(); document.getElementById('builder').scrollIntoView({behavior:'smooth'}); });
}
document.querySelectorAll('.chip').forEach(ch => ch.onclick = () => {
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed','false'));
  ch.setAttribute('aria-pressed','true'); renderMood(ch.dataset.mood);
});
renderMood('hills');

/* ---------- Trip builder ---------- */
const all = Object.values(moods).flat();
const bDest = document.getElementById('bDest'), bN = document.getElementById('bNights'), bDate = document.getElementById('bDate');
bDest.innerHTML = all.map(d => `<option>${d[0]}</option>`).join('') + '<option>Somewhere else</option>';
bDate.min = new Date().toISOString().split('T')[0];
let travellers = 2;
const bc = document.getElementById('barcode');
function barcode(seed){ bc.innerHTML=''; for(let i=0;i<26;i++){ const w=((seed*(i+3))%3)+1, h=60+((seed*(i+7))%40); bc.insertAdjacentHTML('beforeend',`<span class="bg-plum rounded-sm" style="width:${w}px;height:${h}%"></span>`);} }
function pulse(el){ el.animate([{transform:'scale(1.25)',color:'#FF7A59'},{transform:'scale(1)'}],{duration:400,easing:'ease-out'}); }
function update(){
  const d = all.find(x => x[0]===bDest.value);
  const code = d ? d[1] : 'ANY';
  const tc = document.getElementById('tCode'); if (tc.textContent!==code){ tc.textContent = code; pulse(tc); }
  document.getElementById('tName').textContent = bDest.value;
  const n = bN.value; document.getElementById('nVal').textContent = n; bN.style.setProperty('--p', ((n-1)/9*100)+'%');
  const pN = document.getElementById('pN'); if (pN.textContent!=n){ pN.textContent=n; pulse(pN); }
  const pT = document.getElementById('pT'); if (pT.textContent!=travellers){ pT.textContent=travellers; pulse(pT); }
  document.getElementById('tVal').textContent = travellers;
  document.getElementById('pD').textContent = bDate.value ? new Date(bDate.value).toLocaleDateString('en-IN',{day:'numeric',month:'short'}) : 'Flexible';
  const vibe = [...document.querySelectorAll('.vibe[aria-pressed="true"]')].map(v=>v.textContent.trim());
  const adds = [...document.querySelectorAll('#addons input:checked')].map(i=>i.value);
  document.getElementById('pTags').innerHTML = [...vibe.map(v=>`<span class="rounded-full bg-tang-100 px-3 py-1 text-xs font-bold">${v}</span>`), ...adds.map(a=>`<span class="rounded-full bg-mint-100 px-3 py-1 text-xs font-bold">+ ${a}</span>`)].join('');
  document.getElementById('plane').style.left = `calc(${(n-1)/9*100}% - ${(n-1)/9*24}px)`;
  barcode(bDest.selectedIndex+ +n + travellers);
  document.getElementById('sendBtn').href = wa(`Hi Zone Out Trip! I'd like to plan a trip:\n📍 ${bDest.value}\n🌙 ${n} nights\n👥 ${travellers} travellers\n📅 ${bDate.value || 'Flexible dates'}\n✨ Vibe: ${vibe.join(', ') || 'Open'}\n➕ Add: ${adds.join(', ') || 'Stay only'}`);
}
[bDest,bN,bDate].forEach(el => el.addEventListener('input', update));
document.querySelectorAll('.tr').forEach(b => b.onclick = () => { travellers = Math.min(30, Math.max(1, travellers + +b.dataset.step)); update(); });
document.querySelectorAll('.vibe').forEach(v => v.onclick = () => { v.setAttribute('aria-pressed', v.getAttribute('aria-pressed')==='true'?'false':'true'); update(); });
document.querySelectorAll('#addons input').forEach(i => i.onchange = update);
update();

/* ---------- Road: car follows the path on scroll ---------- */
const path = document.getElementById('roadPath'), car = document.getElementById('car'), wrap = document.getElementById('roadWrap');
function moveCar(){
  if (getComputedStyle(car).display==='none') return;
  const r = wrap.getBoundingClientRect(), vh = innerHeight;
  const p = Math.min(1, Math.max(0, (vh*.6 - r.top) / r.height));
  const len = path.getTotalLength(), pt = path.getPointAtLength(p*len), pt2 = path.getPointAtLength(Math.min(len, p*len+2));
  const svg = path.ownerSVGElement.getBoundingClientRect();
  const x = (pt.x/160)*svg.width + (svg.left - r.left), y = (pt.y/1000)*svg.height;
  const ang = Math.atan2((pt2.y-pt.y)/1000*svg.height, (pt2.x-pt.x)/160*svg.width)*180/Math.PI - 90;
  car.style.left = x+'px'; car.style.top = y+'px'; car.style.transform = `translate(-50%,-50%) rotate(${ang*.4}deg)`;
}
addEventListener('scroll', moveCar, {passive:true}); addEventListener('resize', moveCar); moveCar();

/* ---------- Chat FAQ ---------- */
const faqs = [
  ['Can you customise my whole trip?','Absolutely. Share your dates, group size, pickup city, stay style and budget — we build the package around you, not the other way round. 🙌'],
  ['Can I pick my own stay?','Yes! We send a shortlist and you choose. Want a pool, a fireplace or a view? Just say so and we will swap options until it feels right.'],
  ['How do I get a quote?','Use the trip builder or tap "Chat with a planner". We will ask a couple of quick questions and send an itemised quote — every inclusion listed.'],
  ['Is my payment safe?','Payments go through a secure gateway and you get a confirmation with all your booking details. We never ask for card details over chat. 🔒'],
  ['Do you plan trips abroad too?','We do — domestic getaways and international holidays. Tell us the country and we will take it from there. 🌏']
];
const chat = document.getElementById('chat'), qChips = document.getElementById('qChips');
let busy = false;
faqs.forEach(([q,a]) => {
  const b = document.createElement('button');
  b.className = 'rounded-2xl rounded-bl-md border-2 border-peri-100 bg-peri-100/50 px-5 py-3 text-left font-semibold hover:bg-peri-300 hover:border-peri-300 hover:translate-x-2 transition';
  b.textContent = q;
  b.onclick = () => {
    if (busy) return; busy = true;
    chat.insertAdjacentHTML('beforeend', `<div class="animate-rise ml-auto max-w-[80%] w-fit rounded-3xl rounded-tr-md bg-tang-500 text-white px-5 py-3">${q}</div>`);
    const typing = document.createElement('div');
    typing.className = 'animate-rise w-fit rounded-3xl rounded-tl-md bg-white px-5 py-4 shadow flex gap-1.5';
    typing.innerHTML = '<span class="w-2 h-2 rounded-full bg-plum-soft animate-blink"></span><span class="w-2 h-2 rounded-full bg-plum-soft animate-blink" style="animation-delay:.2s"></span><span class="w-2 h-2 rounded-full bg-plum-soft animate-blink" style="animation-delay:.4s"></span>';
    chat.appendChild(typing); chat.scrollTop = chat.scrollHeight;
    setTimeout(() => { typing.remove(); chat.insertAdjacentHTML('beforeend', `<div class="animate-rise max-w-[80%] rounded-3xl rounded-tl-md bg-white px-5 py-3 shadow">${a}</div>`); chat.scrollTop = chat.scrollHeight; busy = false; }, 1100);
  };
  qChips.appendChild(b);
});

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target);} }), {threshold:.12});
document.querySelectorAll('.in').forEach(el => io.observe(el));

/* ---------- Nav shrink ---------- */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('lg:max-w-[58rem]', scrollY > 80), {passive:true});

/* ---------- Cursor dot ---------- */
const dot = document.getElementById('dot');
addEventListener('mousemove', e => { dot.style.left = e.clientX+'px'; dot.style.top = e.clientY+'px'; });
document.querySelectorAll('a,button,label,select,input').forEach(el => {
  el.addEventListener('mouseenter', () => { dot.style.width = dot.style.height = '42px'; dot.style.background = '#FFE699'; });
  el.addEventListener('mouseleave', () => { dot.style.width = dot.style.height = '14px'; dot.style.background = '#FF7A59'; });
});

/* ---------- Newsletter ---------- */
document.getElementById('news').onsubmit = e => { e.preventDefault(); e.target.reset(); document.getElementById('newsMsg').classList.remove('hidden'); };
