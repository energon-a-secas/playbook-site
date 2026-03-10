// ── Render ────────────────────────────────────────────────────
import { escHtml } from './utils.js';

/** Render all cards into #posts-grid. */
export function renderCards(cards, lang) {
  const grid = document.getElementById('posts-grid');
  if (!grid) return;
  grid.innerHTML = cards.map(card =>
    card.type === 'series' ? renderSeriesCard(card, lang) : renderPostCard(card, lang)
  ).join('');
}

function renderPostCard(card, lang) {
  const title = escHtml(card.title[lang] || card.title.es);
  const subtitle = escHtml(card.subtitle[lang] || card.subtitle.es);
  const excerpt = card.excerpt ? escHtml(card.excerpt[lang] || card.excerpt.es) : '';
  const url = `/post/?slug=${card.slug}`;
  return `
    <article class="post-card" aria-label="${title}">
      <div class="post-card-banner">
        <img src="${escHtml(card.banner)}" alt="${title}" loading="lazy"
             onerror="this.closest('.post-card-banner').classList.add('no-image')">
        <div class="post-card-banner-overlay"></div>
      </div>
      <div class="post-card-body">
        <p class="post-card-date">${escHtml(card.date)}</p>
        <h2 class="post-card-title">
          <a href="${url}" class="post-card-title-link">${title}</a>
        </h2>
        <p class="post-card-subtitle">${subtitle}</p>
        ${excerpt ? `<p class="post-card-excerpt">${excerpt}</p>` : ''}
        <span class="btn-read" aria-hidden="true">
          ${lang === 'es' ? 'Leer' : 'Read'} →
        </span>
      </div>
    </article>`;
}

function renderSeriesCard(card, lang) {
  const title = escHtml(card.title[lang] || card.title.es);
  const subtitle = escHtml(card.subtitle[lang] || card.subtitle.es);
  const excerpt = card.excerpt ? escHtml(card.excerpt[lang] || card.excerpt.es) : '';
  const firstUrl = `/post/?slug=${card.parts[0].slug}`;
  const isEs = lang === 'es';

  const partLinks = card.parts.map((p, i) => {
    const label = escHtml(p.label[lang] || p.label.es);
    // Strip "Parte N: " / "Part N: " prefix — just show the topic
    const topic = label.replace(/^(Parte|Part)\s+\d+[:\s–—]+/i, '');
    return `<a href="/post/?slug=${p.slug}" class="part-link">
      <span class="part-num">${i + 1}</span>
      <span class="part-label">${topic}</span>
    </a>`;
  }).join('');

  return `
    <article class="post-card post-card--series" aria-label="${title}">
      <div class="post-card-banner">
        <img src="${escHtml(card.banner)}" alt="${title}" loading="lazy"
             onerror="this.closest('.post-card-banner').classList.add('no-image')">
        <div class="post-card-banner-overlay"></div>
      </div>
      <div class="post-card-body">
        <p class="post-card-date">${escHtml(card.date)}</p>
        <h2 class="post-card-title">
          <a href="${firstUrl}" class="post-card-title-link">${title}</a>
        </h2>
        <p class="post-card-subtitle">${subtitle}</p>
        ${excerpt ? `<p class="post-card-excerpt">${excerpt}</p>` : ''}
        <nav class="parts-list" aria-label="${isEs ? 'Partes de la serie' : 'Series parts'}">${partLinks}</nav>
        <span class="btn-read" aria-hidden="true">${isEs ? 'Leer serie' : 'Read series'} →</span>
      </div>
    </article>`;
}
