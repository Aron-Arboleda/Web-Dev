/* =========================================================
   Hoofmance — the dating app for horses
   Vanilla JS. No build step, no dependencies.
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   1. The herd
   --------------------------------------------------------- */

const HORSES = [
  {
    name: 'Pony Soprano', age: 9, breed: 'Italian Warmblood', distance: '2 paddocks away',
    verified: true, likesYou: true,
    tagline: 'I run the north pasture. You bring the oats, we got no problem.',
    bio: 'Family horse. I have three fillies, a therapist, and a standing 6am appointment with the water trough. Do not talk to me before my hay.',
    tags: ['Family-oriented', 'Hay connoisseur', 'Mildly menacing'],
    stats: { height: '16.2 hh', discipline: 'Dressage (intimidation-based)', temperament: 'Warm, then not', treat: 'Sugar cubes. No questions.' },
    firstMessage: 'You come to my paddock, on the day of my daughter’s wedding…',
    palette: { sky1: '#ffd9a0', sky2: '#ff9e6d', hill: '#79c98a', hill2: '#4fa869', coat1: '#5c4433', coat2: '#33241a', mane1: '#241a13', mane2: '#100b08', accent: '#f2f2f2' },
    marking: 'star', halter: true, flower: false, spots: false
  },
  {
    name: 'Filly Joel', age: 12, breed: 'Chestnut Thoroughbred', distance: '4 stalls away',
    verified: true, likesYou: true,
    tagline: 'Sing us a song, you’re the piano horse. I only know one song.',
    bio: 'Retired from the track, unretired for the applause. I will stand outside your barn at 9pm and hum. The regulars love it. The stable manager does not.',
    tags: ['Musical', 'Sentimental', 'Up past curfew'],
    stats: { height: '16.0 hh', discipline: 'Show jumping ballads', temperament: 'Nostalgic', treat: 'Apple slices, honestly' },
    firstMessage: 'It’s nine o’clock on a Saturday. The regular crowd shuffles in. 🎹',
    palette: { sky1: '#ffe4b8', sky2: '#f7a26b', hill: '#8fd694', hill2: '#5cb173', coat1: '#b5623a', coat2: '#7e3d21', mane1: '#f4dcae', mane2: '#d3b077', accent: '#ffffff' },
    marking: 'blaze', halter: false, flower: false, spots: false
  },
  {
    name: 'Mare-ilyn Monroe', age: 7, breed: 'Palomino', distance: '1 pasture away',
    verified: true, likesYou: true,
    tagline: 'Diamonds are nice but have you tried a really clean water bucket?',
    bio: 'Golden coat, professionally conditioned mane, absolutely will not walk through a puddle. I photograph well from every angle and I know it.',
    tags: ['Glamorous', 'Puddle-averse', 'Mane goals'],
    stats: { height: '15.3 hh', discipline: 'Western pleasure', temperament: 'Dramatic sweetheart', treat: 'Peppermints, unwrapped' },
    firstMessage: 'Careful, my mane just got done. But you may say hello. 💛',
    palette: { sky1: '#ffe9f0', sky2: '#ffb3c7', hill: '#a8dfae', hill2: '#77c489', coat1: '#f4cf82', coat2: '#d9a24e', mane1: '#fffaf0', mane2: '#e8d9bd', accent: '#ff9ec4' },
    marking: 'blaze', halter: false, flower: true, spots: false
  },
  {
    name: 'Usain Colt', age: 5, breed: 'Bay Thoroughbred', distance: '12 furlongs away',
    verified: false, likesYou: false,
    tagline: 'I will beat you to the gate. I have already beaten you to the gate.',
    bio: 'Fastest horse in three counties, and I will bring it up in every conversation. Looking for someone who can keep up, or at least clap.',
    tags: ['Competitive', 'Cardio', 'Humble (no)'],
    stats: { height: '16.3 hh', discipline: 'Sprinting to nowhere', temperament: 'Hot-blooded', treat: 'Electrolytes and glory' },
    firstMessage: 'Race you to the fence. Never mind, I won.',
    palette: { sky1: '#cfeeff', sky2: '#7fc4f0', hill: '#8ed99b', hill2: '#57b06f', coat1: '#a5632f', coat2: '#6d3b18', mane1: '#2a1c14', mane2: '#120c08', accent: '#ffd23f' },
    marking: 'none', halter: false, flower: false, spots: false
  },
  {
    name: 'Neigh-omi Campbell', age: 8, breed: 'Friesian', distance: '3 paddocks away',
    verified: true, likesYou: true,
    tagline: 'I don’t trot. I walk the runway that happens to be a pasture.',
    bio: 'Black coat, feathered feet, catalogue-level presence. I need someone who understands that arriving late is a choice, not an accident.',
    tags: ['Runway ready', 'Feathered feet', 'Fashionably late'],
    stats: { height: '16.1 hh', discipline: 'Liberty & posing', temperament: 'Regal', treat: 'Carrots, julienned' },
    firstMessage: 'You may photograph me. Left side only. 📸',
    palette: { sky1: '#e5d8ff', sky2: '#a98bd8', hill: '#8ccf9a', hill2: '#569f6d', coat1: '#3a3340', coat2: '#16131b', mane1: '#100e14', mane2: '#000000', accent: '#f7e7ff' },
    marking: 'none', halter: true, flower: false, spots: false
  },
  {
    name: 'Hoofdini', age: 6, breed: 'Connemara', distance: 'unknown — escaped again',
    verified: false, likesYou: true,
    tagline: 'Every gate is a suggestion. Every latch is a conversation.',
    bio: 'They put a lock on my stall. I put the lock in the water trough. Currently somewhere in the orchard. Come find me, it’s part of the date.',
    tags: ['Escape artist', 'Problem solver', 'Missing'],
    stats: { height: '14.2 hh', discipline: 'Applied locksmithing', temperament: 'Curious menace', treat: 'Whatever is in your pocket' },
    firstMessage: 'I’m already out. Meet me by the apple tree. 🍎',
    palette: { sky1: '#d9f0ff', sky2: '#9ec9e8', hill: '#9adca6', hill2: '#63b57a', coat1: '#c9c4bd', coat2: '#8e8880', mane1: '#f2efe9', mane2: '#c4bdb2', accent: '#5fd0b0' },
    marking: 'star', halter: false, flower: false, spots: true
  },
  {
    name: 'Stable Diffusion', age: 4, breed: 'Appaloosa', distance: '0.7 paddocks away',
    verified: true, likesYou: true,
    tagline: 'My spots are procedurally generated and no two are alike.',
    bio: 'I take a simple prompt — "carrot" — and produce something beautiful. Sometimes with too many legs. We’re iterating.',
    tags: ['Generative', 'Spotty', 'Still training'],
    stats: { height: '15.1 hh', discipline: 'Trail riding, 30 steps', temperament: 'Unpredictable but charming', treat: 'Carrot, denoised' },
    firstMessage: 'a horse, in love, highly detailed, 8k ✨',
    palette: { sky1: '#ffe6f7', sky2: '#b9a7f0', hill: '#a4e0b3', hill2: '#6cbb85', coat1: '#f0e6dc', coat2: '#c3b3a4', mane1: '#6b5a4e', mane2: '#3f3229', accent: '#8b7cf6' },
    marking: 'none', halter: false, flower: false, spots: true
  },
  {
    name: 'Al Capony', age: 11, breed: 'Shetland Pony', distance: '1 stall away',
    verified: false, likesYou: false,
    tagline: 'Small horse. Big oat racket. Ask anyone in this barn.',
    bio: '38 inches of pure business. I control the grain room schedule. The goats answer to me. Swipe right if you like a pony with connections.',
    tags: ['Short king', 'Well connected', 'Runs the barn'],
    stats: { height: '9.2 hh', discipline: 'Cart-pulling, allegedly', temperament: 'Bossy', treat: 'A cut of your grain' },
    firstMessage: 'Nice hay you got there. Be a shame if it went missing.',
    palette: { sky1: '#ffeeb8', sky2: '#f3a25c', hill: '#8ed69c', hill2: '#55a86d', coat1: '#d6a866', coat2: '#9c6d33', mane1: '#2c2118', mane2: '#141009', accent: '#ffffff' },
    marking: 'blaze', halter: true, flower: false, spots: false
  },
  {
    name: 'Winnie the Hoof', age: 10, breed: 'Haflinger', distance: '2 pastures away',
    verified: true, likesYou: true,
    tagline: 'Looking for someone to share a very long nap and some molasses.',
    bio: 'Golden, round, and deeply unbothered. My hobbies are standing in the sun, leaning on fences, and being told I’m a good horse.',
    tags: ['Cuddly', 'Sun-warmed', 'Professional napper'],
    stats: { height: '14.3 hh', discipline: 'Therapeutic leaning', temperament: 'Gentle giant energy', treat: 'Molasses, by the spoon' },
    firstMessage: 'Hello! Would you like to stand near me for a while? 🌞',
    palette: { sky1: '#fff2cf', sky2: '#ffc07a', hill: '#96d9a2', hill2: '#5fb178', coat1: '#e0a55f', coat2: '#b0762f', mane1: '#fff6e2', mane2: '#e3cfa6', accent: '#ffffff' },
    marking: 'blaze', halter: false, flower: true, spots: false
  },
  {
    name: 'Sir Trots-a-Lot', age: 14, breed: 'Hanoverian', distance: '5 paddocks away',
    verified: true, likesYou: false,
    tagline: 'I have opinions about your posting trot and I will share them.',
    bio: 'Grand Prix, three-time regional something-or-other. Yes I wear the fly bonnet indoors. No, my routine is not negotiable. Looking for a partner with impeccable timing.',
    tags: ['Perfectionist', 'Fly bonnet chic', 'Judgmental'],
    stats: { height: '17.0 hh', discipline: 'Dressage, properly', temperament: 'Exacting', treat: 'A single mint, earned' },
    firstMessage: 'Your diagonal was late. Otherwise, charmed.',
    palette: { sky1: '#e8f1ff', sky2: '#a9c2e8', hill: '#9bd8a8', hill2: '#61af77', coat1: '#e9e6e2', coat2: '#b8b2ac', mane1: '#f7f5f2', mane2: '#cfc8c1', accent: '#2f4f8f' },
    marking: 'none', halter: true, flower: false, spots: false
  },
  {
    name: 'Hay-ley Comet', age: 6, breed: 'Pinto', distance: 'somewhere over there, fast',
    verified: false, likesYou: true,
    tagline: 'Two-tone coat, one-track mind: where is the next field.',
    bio: 'Flashy, loud, allergic to standing still. I bolt at plastic bags and I’m not sorry. Best with someone who finds that endearing rather than expensive.',
    tags: ['Flashy', 'Spooky', 'High energy'],
    stats: { height: '15.2 hh', discipline: 'Barrel racing', temperament: 'Zoomies', treat: 'Anything, mid-gallop' },
    firstMessage: 'WAS THAT A PLASTIC BAG. Anyway. Hi. 💨',
    palette: { sky1: '#d7f6ff', sky2: '#79c9d8', hill: '#a2e0ae', hill2: '#69b881', coat1: '#f6efe8', coat2: '#4b3a2e', mane1: '#3a2b21', mane2: '#f4ece2', accent: '#ff6b6b' },
    marking: 'blaze', halter: false, flower: false, spots: true
  },
  {
    name: 'Clip Clop McGee', age: 16, breed: 'Quarter Horse (Dun)', distance: '3 stalls away',
    verified: false, likesYou: true,
    tagline: 'Been down every trail twice. Happy to walk one more with you.',
    bio: 'Old reliable. Nothing spooks me — not bags, not bikes, not tractors. I’ve taught nine kids to ride and I’d do it again. Slow rides, long sunsets.',
    tags: ['Bombproof', 'Patient', 'Sunset enthusiast'],
    stats: { height: '15.0 hh', discipline: 'Trail, unhurried', temperament: 'Steady as a rock', treat: 'Whatever the kids bring' },
    firstMessage: 'Evening. Fine weather for a walk, ain’t it. 🌅',
    palette: { sky1: '#ffd9b0', sky2: '#e8785f', hill: '#8bc98f', hill2: '#4f9c68', coat1: '#c9a173', coat2: '#96703f', mane1: '#3b2d20', mane2: '#1c1510', accent: '#ffffff' },
    marking: 'star', halter: true, flower: false, spots: false
  }
];

/* ---------------------------------------------------------
   2. Horse portrait generator (inline SVG, no image files)
   --------------------------------------------------------- */

const HEAD_PATH = 'M178 210 C150 215 128 255 118 295 C108 325 92 340 96 356 C100 372 122 380 140 372 C158 364 168 345 176 325 C205 310 215 250 178 210 Z';
const NECK_PATH = 'M176 214 C240 262 300 360 336 500 L246 500 C214 420 176 344 150 292 Z';
const MANE_PATH = 'M172 200 C214 232 268 320 300 470 L356 500 C332 348 262 236 196 190 Z';

let uidCounter = 0;

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function horseArt(h, options) {
  const opts = options || {};
  const p = h.palette;
  const u = 'u' + (uidCounter += 1);
  const box = opts.viewBox || '0 0 400 500';
  const cls = opts.className || 'photo-svg';

  const spots = h.spots ? `
      <g clip-path="url(#neck${u})" opacity="0.75" fill="${p.coat1}">
        <ellipse cx="230" cy="330" rx="17" ry="13"/>
        <ellipse cx="272" cy="392" rx="13" ry="10"/>
        <ellipse cx="205" cy="392" rx="10" ry="8"/>
        <ellipse cx="290" cy="452" rx="19" ry="14"/>
        <ellipse cx="240" cy="440" rx="9" ry="7"/>
      </g>` : '';

  const marking = h.marking === 'blaze' ? `
      <path clip-path="url(#head${u})" fill="#fffaf2" opacity="0.9"
            d="M154 212 C140 256 122 300 106 342 L130 350 C144 306 160 260 172 216 Z"/>`
    : h.marking === 'star' ? `
      <ellipse clip-path="url(#head${u})" cx="150" cy="238" rx="15" ry="18" fill="#fffaf2" opacity="0.9"/>` : '';

  const halter = h.halter ? `
      <g fill="none" stroke="${p.accent}" stroke-width="8" stroke-linecap="round" opacity="0.95">
        <path d="M107 320 L138 352"/>
        <path d="M133 342 C161 328 180 282 186 230"/>
      </g>
      <circle cx="136" cy="347" r="6" fill="${p.accent}"/>` : '';

  const flower = h.flower ? `
      <g transform="translate(206 196)">
        <g fill="${p.accent}">
          <circle cx="0" cy="-9" r="7"/><circle cx="9" cy="-3" r="7"/>
          <circle cx="6" cy="8" r="7"/><circle cx="-6" cy="8" r="7"/><circle cx="-9" cy="-3" r="7"/>
        </g>
        <circle r="5" fill="#ffd75e"/>
      </g>` : '';

  return `<svg class="${cls}" viewBox="${box}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrated portrait of ${esc(h.name)}, a ${esc(h.breed)}">
  <defs>
    <linearGradient id="sky${u}" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stop-color="${p.sky1}"/><stop offset="1" stop-color="${p.sky2}"/>
    </linearGradient>
    <linearGradient id="coat${u}" x1="0.1" y1="0" x2="0.95" y2="1">
      <stop offset="0" stop-color="${p.coat1}"/><stop offset="1" stop-color="${p.coat2}"/>
    </linearGradient>
    <linearGradient id="maneg${u}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.mane1}"/><stop offset="1" stop-color="${p.mane2}"/>
    </linearGradient>
    <clipPath id="head${u}"><path d="${HEAD_PATH}"/></clipPath>
    <clipPath id="neck${u}"><path d="${NECK_PATH}"/></clipPath>
  </defs>

  <!-- pasture backdrop -->
  <rect width="400" height="500" fill="url(#sky${u})"/>
  <circle cx="312" cy="96" r="42" fill="#fff6d8" opacity="0.85"/>
  <g fill="#ffffff" opacity="0.55">
    <ellipse cx="86" cy="118" rx="46" ry="20"/><ellipse cx="120" cy="106" rx="30" ry="17"/>
    <ellipse cx="286" cy="196" rx="38" ry="15"/><ellipse cx="316" cy="188" rx="24" ry="12"/>
  </g>
  <ellipse cx="60" cy="420" rx="240" ry="130" fill="${p.hill}" opacity="0.95"/>
  <ellipse cx="360" cy="450" rx="230" ry="120" fill="${p.hill2}" opacity="0.95"/>
  <g stroke="#f3e6cf" stroke-width="9" stroke-linecap="round" opacity="0.65">
    <path d="M0 356 L400 340"/><path d="M0 386 L400 370"/>
    <path d="M40 330 L40 410"/><path d="M360 316 L360 396"/>
  </g>

  <!-- the horse -->
  <g transform="translate(30 -66)">
    <!-- far ear (behind) -->
    <path d="M190 206 L200 158 L218 202 Z" fill="${p.coat2}"/>
    <path d="${NECK_PATH}" fill="url(#coat${u})"/>
    ${spots}
    <path d="${MANE_PATH}" fill="url(#maneg${u})"/>
    <path d="${HEAD_PATH}" fill="url(#coat${u})"/>
    ${marking}
    ${spots ? `<g clip-path="url(#head${u})" opacity="0.6" fill="${p.coat1}"><ellipse cx="186" cy="286" rx="12" ry="9"/></g>` : ''}
    <!-- near ear -->
    <path d="M166 214 L154 166 L194 202 Z" fill="url(#coat${u})"/>
    <path d="M168 210 L161 182 L182 202 Z" fill="${p.mane1}" opacity="0.55"/>
    <!-- forelock -->
    <path d="M176 206 C156 216 146 240 149 258 C133 240 146 204 178 200 Z" fill="url(#maneg${u})"/>
    <!-- eye -->
    <ellipse cx="151" cy="266" rx="9.5" ry="11" fill="#171016"/>
    <circle cx="147.5" cy="262" r="3.2" fill="#ffffff" opacity="0.9"/>
    <path d="M140 252 C147 247 157 249 162 255" fill="none" stroke="#171016" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    <!-- nostril + mouth -->
    <ellipse cx="112" cy="345" rx="6" ry="8.5" fill="#3d2118" opacity="0.85" transform="rotate(-24 112 345)"/>
    <path d="M99 363 C108 369 120 371 130 368" fill="none" stroke="#3d2118" stroke-width="3" stroke-linecap="round" opacity="0.55"/>
    ${halter}
    ${flower}
  </g>

  <!-- soft vignette -->
  <rect width="400" height="500" fill="none"/>
</svg>`;
}

/* ---------------------------------------------------------
   3. State
   --------------------------------------------------------- */

const els = {
  deck: document.getElementById('deck'),
  deckEmpty: document.getElementById('deckEmpty'),
  emptySummary: document.getElementById('emptySummary'),
  restartBtn: document.getElementById('restartBtn'),
  rewindBtn: document.getElementById('rewindBtn'),
  nopeBtn: document.getElementById('nopeBtn'),
  starBtn: document.getElementById('starBtn'),
  likeBtn: document.getElementById('likeBtn'),
  matchesBtn: document.getElementById('matchesBtn'),
  matchBadge: document.getElementById('matchBadge'),
  matchModal: document.getElementById('matchModal'),
  matchAvatar: document.getElementById('matchAvatar'),
  matchCopy: document.getElementById('matchCopy'),
  matchMessageBtn: document.getElementById('matchMessageBtn'),
  drawer: document.getElementById('drawer'),
  matchList: document.getElementById('matchList'),
  drawerEmpty: document.getElementById('drawerEmpty'),
  toast: document.getElementById('toast')
};

const state = {
  deck: [],        // horses in display order
  cards: [],       // card elements, same order as deck
  index: 0,        // pointer at the active card
  history: [],     // { dir, matched }
  matches: [],
  likes: 0,
  lastMatch: null
};

/* ---------------------------------------------------------
   4. Rendering
   --------------------------------------------------------- */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

function cardMarkup(h) {
  const tags = h.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join('');
  const stats = [
    ['Height', h.stats.height],
    ['Discipline', h.stats.discipline],
    ['Temperament', h.stats.temperament],
    ['Favourite treat', h.stats.treat]
  ].map(([k, v]) => `<div class="stat"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');

  return `
    <div class="photo">${horseArt(h)}</div>

    <button class="info-btn" type="button" aria-label="More about ${esc(h.name)}">i</button>

    <div class="stamp stamp-like" aria-hidden="true">Neigh</div>
    <div class="stamp stamp-nope" aria-hidden="true">Nay</div>
    <div class="stamp stamp-star" aria-hidden="true">Super Neigh</div>

    <div class="card-body">
      <h2 class="card-name">
        ${esc(h.name)} <span class="card-age">${esc(h.age)}</span>
        ${h.verified ? '<span class="verified" title="Verified hooves" aria-label="Verified">✓</span>' : ''}
      </h2>
      <p class="card-meta">${esc(h.breed)}<span class="dot">•</span>${esc(h.distance)}</p>
      <p class="card-tagline">${esc(h.tagline)}</p>
      <ul class="tags">${tags}</ul>
    </div>

    <div class="details">
      <h3>${esc(h.name)}</h3>
      <p class="details-sub">${esc(h.breed)} · ${esc(h.age)} · ${esc(h.distance)}</p>
      <h4>About me</h4>
      <p>${esc(h.bio)}</p>
      <h4>The specs</h4>
      <dl class="stat-grid">${stats}</dl>
      <button class="details-close" type="button">Back to the photo</button>
    </div>`;
}

function buildDeck() {
  state.cards.forEach((c) => c.remove());
  state.cards = [];

  state.deck.forEach((h, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = cardMarkup(h);
    card.dataset.i = String(i);
    els.deck.appendChild(card);
    state.cards.push(card);
    wireCard(card, i);
  });

  updateStack();
}

function updateStack() {
  state.cards.forEach((card, i) => {
    const depth = i - state.index;
    if (depth < 0) return;                       // already swiped away
    card.classList.remove('buried');
    card.style.transform = '';
    card.style.opacity = '';
    if (depth <= 2) {
      card.dataset.depth = String(depth);
      card.removeAttribute('aria-hidden');
    } else {
      delete card.dataset.depth;
      card.classList.add('buried');
      card.setAttribute('aria-hidden', 'true');
    }
    if (depth !== 0) card.classList.remove('flipped');
  });

  const done = state.index >= state.deck.length;
  els.deck.classList.toggle('is-empty', done);
  els.rewindBtn.disabled = state.history.length === 0;
  [els.nopeBtn, els.starBtn, els.likeBtn].forEach((b) => { b.disabled = done; });

  if (done) {
    els.emptySummary.textContent = state.matches.length
      ? `You neighed at ${state.likes} horse${state.likes === 1 ? '' : 's'} and matched with ${state.matches.length}.`
      : 'Zero matches. The horses are simply intimidated by you.';
  }
}

function activeCard() {
  return state.cards[state.index] || null;
}

/* ---------------------------------------------------------
   5. Swiping
   --------------------------------------------------------- */

const SWIPE_X = 105;   // px needed to commit a horizontal swipe
const SWIPE_Y = 130;   // px upward for a super neigh

function setStamps(card, dx, dy) {
  const like = card.querySelector('.stamp-like');
  const nope = card.querySelector('.stamp-nope');
  const star = card.querySelector('.stamp-star');
  const up = Math.max(0, -dy) / SWIPE_Y;
  const superish = up > 0.55 && Math.abs(dx) < SWIPE_X;
  like.style.opacity = superish ? 0 : Math.min(1, Math.max(0, dx) / SWIPE_X);
  nope.style.opacity = superish ? 0 : Math.min(1, Math.max(0, -dx) / SWIPE_X);
  star.style.opacity = superish ? Math.min(1, up) : 0;
}

function clearStamps(card) {
  card.querySelectorAll('.stamp').forEach((s) => { s.style.opacity = 0; });
}

function wireCard(card, i) {
  const info = card.querySelector('.info-btn');
  const close = card.querySelector('.details-close');

  info.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.add('flipped');
  });
  close.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.remove('flipped');
  });

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let dx = 0;
  let dy = 0;
  let pid = null;

  card.addEventListener('pointerdown', (e) => {
    if (i !== state.index) return;
    if (card.classList.contains('flipped')) return;
    if (e.target.closest('.info-btn, .details')) return;
    if (e.button !== undefined && e.button !== 0) return;

    dragging = true;
    pid = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    dx = 0;
    dy = 0;
    card.classList.add('dragging');
    try { card.setPointerCapture(pid); } catch (err) { /* stale pointer id */ }
  });

  card.addEventListener('pointermove', (e) => {
    if (!dragging || e.pointerId !== pid) return;
    dx = e.clientX - startX;
    dy = e.clientY - startY;
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.055}deg)`;
    setStamps(card, dx, dy);
  });

  function end(e) {
    if (!dragging || (e && e.pointerId !== pid)) return;
    dragging = false;
    card.classList.remove('dragging');
    if (pid !== null && card.hasPointerCapture && card.hasPointerCapture(pid)) {
      card.releasePointerCapture(pid);
    }
    pid = null;

    if (dy < -SWIPE_Y && Math.abs(dx) < SWIPE_X) {
      commit('up');
    } else if (Math.abs(dx) > SWIPE_X) {
      commit(dx > 0 ? 'right' : 'left');
    } else {
      card.style.transform = '';
      clearStamps(card);
    }
  }

  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', end);
}

function commit(dir) {
  const card = activeCard();
  if (!card || card.classList.contains('gone')) return;

  const horse = state.deck[state.index];
  const liked = dir === 'right' || dir === 'up';
  const matched = liked && (dir === 'up' || horse.likesYou);

  clearStamps(card);
  card.classList.add('gone');
  card.classList.remove('flipped');
  card.style.opacity = '0';
  if (dir === 'up') {
    card.style.transform = 'translate(0, -140%) rotate(-6deg)';
  } else {
    const sign = dir === 'right' ? 1 : -1;
    card.style.transform = `translate(${sign * 150}%, 40px) rotate(${sign * 22}deg)`;
  }

  if (liked) state.likes += 1;
  if (matched) {
    state.matches.push(horse);
    renderMatches();
  }
  state.history.push({ dir, matched });
  state.index += 1;
  updateStack();

  if (matched) {
    showMatch(horse);
  } else if (liked) {
    toast(`You neighed at ${horse.name}. Playing it cool. 🐴`);
  } else {
    toast(`${horse.name} was not the one.`);
  }
}

function rewind() {
  if (state.history.length === 0) return;
  const last = state.history.pop();
  state.index -= 1;

  if (last.dir === 'right' || last.dir === 'up') state.likes -= 1;
  if (last.matched) {
    state.matches.pop();
    renderMatches();
  }

  const card = state.cards[state.index];
  card.classList.remove('gone');
  card.style.opacity = '';
  card.style.transform = '';
  clearStamps(card);
  updateStack();
  toast('Second thoughts. Understandable.');
}

/* ---------------------------------------------------------
   6. Matches, modal, drawer, toast
   --------------------------------------------------------- */

function setBadge() {
  const n = state.matches.length;
  els.matchBadge.textContent = String(n);
  els.matchBadge.hidden = n === 0;
}

function renderMatches() {
  setBadge();
  els.matchList.innerHTML = state.matches.map((h) => `
    <li class="match-row">
      <div class="match-row-av">${horseArt(h, { viewBox: '94 96 212 212', className: '' })}</div>
      <div class="match-row-txt">
        <strong>${esc(h.name)}</strong>
        <span>${esc(h.firstMessage)}</span>
      </div>
    </li>`).join('');
  els.drawerEmpty.hidden = state.matches.length > 0;
}

function showMatch(horse) {
  state.lastMatch = horse;
  els.matchAvatar.innerHTML = horseArt(horse, { viewBox: '94 96 212 212', className: '' });
  els.matchCopy.textContent = `You and ${horse.name} have both said neigh.`;
  els.matchModal.hidden = false;
  els.matchMessageBtn.focus();
}

function closeMatch() {
  els.matchModal.hidden = true;
}

function openDrawer() {
  els.drawer.hidden = false;
  els.drawer.querySelector('[data-close-drawer]').focus();
}

function closeDrawer() {
  els.drawer.hidden = true;
  els.matchesBtn.focus();
}

let toastTimer = null;
function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove('show'), 1900);
}

/* ---------------------------------------------------------
   7. Wiring
   --------------------------------------------------------- */

els.nopeBtn.addEventListener('click', () => commit('left'));
els.likeBtn.addEventListener('click', () => commit('right'));
els.starBtn.addEventListener('click', () => commit('up'));
els.rewindBtn.addEventListener('click', rewind);
els.matchesBtn.addEventListener('click', openDrawer);
els.restartBtn.addEventListener('click', start);

document.querySelectorAll('[data-close-match]').forEach((b) => b.addEventListener('click', closeMatch));
document.querySelectorAll('[data-close-drawer]').forEach((b) => b.addEventListener('click', closeDrawer));

els.matchMessageBtn.addEventListener('click', () => {
  const h = state.lastMatch;
  closeMatch();
  if (h) toast(`Sent to ${h.name}: “hay there 👋”`);
});

document.addEventListener('keydown', (e) => {
  if (!els.matchModal.hidden) {
    if (e.key === 'Escape') closeMatch();
    return;
  }
  if (!els.drawer.hidden) {
    if (e.key === 'Escape') closeDrawer();
    return;
  }
  const card = activeCard();
  if (card && card.classList.contains('flipped')) {
    if (e.key === 'Escape') card.classList.remove('flipped');
    return;
  }
  if (e.key === 'ArrowLeft') { e.preventDefault(); commit('left'); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); commit('right'); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); commit('up'); }
  else if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); rewind(); }
});

function start() {
  state.deck = shuffle(HORSES);
  state.index = 0;
  state.history = [];
  state.matches = [];
  state.likes = 0;
  state.lastMatch = null;
  closeMatch();
  buildDeck();
  renderMatches();
}

start();
