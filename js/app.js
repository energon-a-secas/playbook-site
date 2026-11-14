// ── Homepage entry point ─────────────────────────────────────
// No hero: the page opens on the topic row and the posts. The header carries
// the name and the one positioning line.
import { state, loadSaved } from './state.js';
import { renderCards, renderHeroTopics } from './render.js';
import { setupLangToggle } from './events.js';

const LABELS = {
  es: { line: 'Consejos para gente en tech', topics: 'Temas', posts: 'Artículos', error: 'No se pudieron cargar los artículos.' },
  en: { line: 'Advice for people in tech', topics: 'Topics', posts: 'Posts', error: 'Could not load posts.' },
};

/** The header line and the landmark names follow the reading language. */
function labelLandmarks(lang) {
  const copy = LABELS[lang] || LABELS.es;
  const line = document.querySelector('.header-subtitle');
  if (line) line.textContent = copy.line;
  document.getElementById('topics-nav')?.setAttribute('aria-label', copy.topics);
  document.getElementById('posts-section')?.setAttribute('aria-label', copy.posts);
}

async function init() {
  loadSaved(state);
  setupLangToggle();
  labelLandmarks(state.lang);

  try {
    const res = await fetch('/data/posts.json');
    state.posts = await res.json();
    renderCards(state.posts.cards, state.lang);
    renderHeroTopics(state.posts.cards, state.lang);
  } catch {
    const grid = document.getElementById('posts-grid');
    if (grid) grid.innerHTML = `<p class="load-error">${(LABELS[state.lang] || LABELS.es).error}</p>`;
  }
}

document.addEventListener('langchange', () => {
  labelLandmarks(state.lang);
  if (state.posts?.cards) {
    renderCards(state.posts.cards, state.lang);
    renderHeroTopics(state.posts.cards, state.lang);
  }
});

init();
