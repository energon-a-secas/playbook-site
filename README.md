<div align="center">

# Playbook

Career advice for people in tech and people getting in

[![Live][badge-site]][url-site]
[![HTML5][badge-html]][url-html]
[![CSS3][badge-css]][url-css]
[![JavaScript][badge-js]][url-js]
[![Claude Code][badge-claude]][url-claude]
[![License][badge-license]](LICENSE)

[badge-site]:    https://img.shields.io/badge/live_site-0063e5?style=for-the-badge&logo=googlechrome&logoColor=white
[badge-html]:    https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[badge-css]:     https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[badge-js]:      https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[badge-claude]:  https://img.shields.io/badge/Claude_Code-CC785C?style=for-the-badge&logo=anthropic&logoColor=white
[badge-license]: https://img.shields.io/badge/license-MIT-404040?style=for-the-badge

[url-site]:   https://playbook.neorgon.com/
[url-html]:   #
[url-css]:    #
[url-js]:     #
[url-claude]: https://claude.ai/code

</div>

---

## Overview

Playbook publishes practical career advice for people working in tech or trying to break in. Posts cover English technical interviews, entering the job market as a new grad, and tech job roles explained with gaming analogies. All content is available in Spanish and English with a one-click language toggle.

**Live:** playbook.neorgon.com

---

## Features

- **Bilingual content** -- every post available in Spanish and English, language preference saved to localStorage
- **Card grid homepage** -- posts and series cards with banner images and a clean reading link
- **Series navigation** -- multi-part posts link to each other with prev/next controls and progress indicators
- **Markdown rendering** -- posts written in `.md` files, rendered in-browser via marked.js
- **Zero build step** -- static ES modules, no compilation required

---

## Posts

| Slug | Title | Type |
|---|---|---|
| `job-market` | Cómo salir al mundo laboral / How to Break Into Tech | Standalone |
| `tech-interviews-1` | El Meta Cambió Pt.1 / The Meta Changed Pt.1 | Series |
| `tech-interviews-2` | El Meta Cambió Pt.2 / The Meta Changed Pt.2 | Series |
| `tech-interviews-3` | El Meta Cambió Pt.3 / The Meta Changed Pt.3 | Series |
| `tech-roles` | ¿En qué trabajas? / What Do You Even Do? | Standalone |

**Adding a post:**
1. Create `docs/{slug}.es.md` and `docs/{slug}.en.md`
2. Add the card entry to `data/posts.json` under `"cards"`
3. Add the slug metadata entry to `data/posts.json` under `"slugMeta"`
4. Add a banner image to `docs/images/` and reference it in posts.json

---

## Running locally

ES modules require an HTTP server (not `file://`):

```bash
make serve
# or: python3 -m http.server 8819
```

Then open `http://localhost:8819`.

---

## Architecture

![Architecture](docs/architecture.svg)

```
playbook-site/
├── index.html              # Homepage — card grid
├── post/
│   └── index.html          # Post renderer — reads ?slug= from URL
├── css/
│   └── style.css           # All styles
├── js/
│   ├── app.js              # Homepage entry point
│   ├── post.js             # Post page logic
│   ├── state.js            # Language preference + localStorage
│   ├── render.js           # Card rendering (post + series)
│   ├── events.js           # Language toggle
│   └── utils.js            # escHtml, toast, readTime
├── data/
│   └── posts.json          # Card metadata + slug navigation map
├── docs/
│   ├── images/             # Banner images (user-provided JPGs)
│   ├── job-market.es.md
│   ├── job-market.en.md
│   ├── tech-interviews-{1,2,3}.es.md
│   ├── tech-interviews-{1,2,3}.en.md
│   ├── tech-roles.es.md
│   └── tech-roles.en.md
├── CNAME                   # playbook.neorgon.com
├── robots.txt
└── sitemap.xml
```

---

<div align="center">
<sub>Part of <a href="https://neorgon.com/">Neorgon</a></sub>
</div>
