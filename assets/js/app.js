/* =========================================================
   Atelier IA — comportements partagés
   (en-tête, sommaire, progression, prompts, quiz, calculateur)
   ========================================================= */
(function () {
  'use strict';

  const PAGES = [
    { slug: 'accueil', file: 'index.html', num: '00', title: 'Accueil', desc: 'Le parcours et votre progression' },
    { slug: 'comprendre', file: 'comprendre.html', num: '01', title: 'Comprendre l’IA', desc: 'Ce qu’elle est, ce qu’elle sait, ses limites' },
    { slug: 'claude', file: 'claude.html', num: '02', title: 'Claude', desc: 'L’analyste et le rédacteur', ai: 'claude' },
    { slug: 'chatgpt', file: 'chatgpt.html', num: '03', title: 'ChatGPT', desc: 'Le couteau suisse', ai: 'chatgpt' },
    { slug: 'gemini', file: 'gemini.html', num: '04', title: 'Gemini', desc: 'Le natif de Google', ai: 'gemini' },
    { slug: 'comparatif', file: 'comparatif.html', num: '05', title: 'Choisir son IA', desc: 'Qui fait quoi, et mieux' },
    { slug: 'memoire', file: 'memoire.html', num: '06', title: 'Une IA qui vous connaît et agit', desc: 'Mémoire, projets, connecteurs, agents' },
    { slug: 'briefer', file: 'briefer.html', num: '07', title: 'Bien briefer', desc: 'La méthode, avec exercices' },
    { slug: 'verifier', file: 'verifier.html', num: '08', title: 'Vérifier', desc: 'Repérer les erreurs avant qu’elles coûtent' },
    { slug: 'usages', file: 'usages.html', num: '09', title: 'Les 7 familles d’usage', desc: 'Savoir quand et comment s’en servir' },
    { slug: 'metiers', file: 'metiers.html', num: '10', title: 'Cas pratiques par métier', desc: '24 situations de travail concrètes' },
    { slug: 'cadre', file: 'cadre.html', num: '11', title: 'Données et cadre légal', desc: 'Code du numérique, APDP, bons réflexes' },
    { slug: 'abonnements', file: 'abonnements.html', num: '12', title: 'S’équiper et payer', desc: 'Gratuit, payant, FCFA, paiement' },
    { slug: 'quiz', file: 'quiz.html', num: '13', title: 'Évaluation et projet final', desc: 'Prouvez que vous maîtrisez' },
  ];
  const CHAPTERS = PAGES.filter(p => p.slug !== 'accueil' && p.slug !== 'quiz');
  const STORE_KEY = 'formation-ia-progress';
  const current = document.body.dataset.page || 'accueil';

  // ---------- Stockage ----------
  function loadProgress() {
    try { return Object.assign({ read: [], quiz: {} }, JSON.parse(localStorage.getItem(STORE_KEY)) || {}); }
    catch (e) { return { read: [], quiz: {} }; }
  }
  function saveProgress(p) { try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {} }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- En-tête ----------
  function renderHeader() {
    const host = document.getElementById('site-header');
    if (!host) return;
    const page = PAGES.find(p => p.slug === current) || PAGES[0];
    const progress = loadProgress();
    host.innerHTML = `
      <div id="reading-bar"></div>
      <header class="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line">
        <div class="mx-auto max-w-7xl px-5 lg:px-10 h-16 flex items-center justify-between gap-6">
          <a href="index.html" class="flex items-baseline gap-2 shrink-0" aria-label="Atelier IA — accueil">
            <span class="font-display italic-soft text-2xl font-medium">Atelier</span>
            <span class="font-mono text-[.65rem] tracking-widest border border-ink px-1.5 py-0.5 rounded-sm">IA</span>
          </a>
          <div class="hidden md:flex items-center gap-3 min-w-0 kicker">
            ${page.slug === 'accueil' ? '<span>Formation · Édition 2026</span>' : `<span class="text-ai">${page.num}</span><span class="truncate">${esc(page.title)}</span>`}
          </div>
          <div class="flex items-center gap-2">
            <a href="quiz.html" class="hidden sm:inline-flex tab-btn ${current === 'quiz' ? 'is-active' : ''}">Quiz</a>
            <button id="theme-toggle" class="tab-btn" aria-label="Changer de thème" title="Mode clair / sombre">
              <span class="dark:hidden">Sombre</span><span class="hidden dark:inline">Clair</span>
            </button>
            <button id="menu-open" class="tab-btn !bg-ink !text-paper !border-ink" aria-expanded="false" aria-controls="menu-panel">Sommaire</button>
          </div>
        </div>
      </header>
      <div id="menu-panel" class="fixed inset-0 z-[70] bg-paper overflow-y-auto" role="dialog" aria-modal="true" aria-label="Sommaire du guide">
        <div class="mx-auto max-w-7xl px-5 lg:px-10">
          <div class="h-16 flex items-center justify-between border-b border-line">
            <span class="kicker">Sommaire — ${progress.read.length}/${CHAPTERS.length} modules validés</span>
            <button id="menu-close" class="tab-btn">Fermer ✕</button>
          </div>
          <div class="grid lg:grid-cols-[1fr_2fr] gap-10 py-10 lg:py-16">
            <div class="menu-item">
              <p class="font-display text-5xl lg:text-7xl leading-[.95]">Maîtriser l’IA<br>au <em>travail</em>.</p>
              <p class="mt-6 text-ink-soft max-w-sm">Un parcours en douze modules pour comprendre, pratiquer et maîtriser l’IA, quel que soit l’outil.</p>
            </div>
            <nav>
              <ol class="border-t border-ink">
                ${PAGES.map((p, i) => `
                  <li class="menu-item border-b border-line" style="transition-delay:${40 + i * 30}ms">
                    <a href="${p.file}" class="chapter-row group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-4 px-2 ${p.slug === current ? 'bg-paper-2' : ''}">
                      <span class="font-mono text-xs text-ink-soft">${p.num}</span>
                      <span>
                        <span class="font-display text-2xl lg:text-3xl ${p.ai ? 'text-' + p.ai : ''}">${esc(p.title)}</span>
                        <span class="block text-sm text-ink-soft mt-0.5">${esc(p.desc)}</span>
                      </span>
                      <span class="font-mono text-xs ${progress.read.includes(p.slug) ? 'text-chatgpt' : 'text-ink-soft'}">${progress.read.includes(p.slug) ? '✓ validé' : '<span class="chapter-arrow inline-block">→</span>'}</span>
                    </a>
                  </li>`).join('')}
              </ol>
            </nav>
          </div>
        </div>
      </div>`;

    const panel = document.getElementById('menu-panel');
    const openBtn = document.getElementById('menu-open');
    const toggle = open => {
      panel.classList.toggle('is-open', open);
      openBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    openBtn.addEventListener('click', () => toggle(true));
    document.getElementById('menu-close').addEventListener('click', () => toggle(false));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });

    document.getElementById('theme-toggle').addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('atelier-theme', dark ? 'dark' : 'light'); } catch (e) {}
    });
  }

  // ---------- Pied de page ----------
  function renderFooter() {
    const host = document.getElementById('site-footer');
    if (!host) return;
    host.innerHTML = `
      <footer class="mt-24 border-t-2 border-ink">
        <div class="mx-auto max-w-7xl px-5 lg:px-10 py-12 grid md:grid-cols-[2fr_1fr_1fr] gap-10">
          <div>
            <p class="font-display text-3xl"><em>Atelier</em> IA</p>
            <p class="mt-3 text-sm text-ink-soft max-w-md">Formation indépendante à l’usage professionnel de l’IA générative. Non affiliée à Anthropic, OpenAI ou Google. Tarifs et fonctionnalités vérifiés en octobre 2026, prix convertis à environ 585 FCFA pour 1 $ : ils évoluent vite, confirmez-les sur les pages officielles avant tout achat.</p>
          </div>
          <div>
            <p class="kicker mb-3">Les IA</p>
            <ul class="space-y-1.5 text-sm">
              <li><a class="hover:text-claude" href="claude.html">Claude</a></li>
              <li><a class="hover:text-chatgpt" href="chatgpt.html">ChatGPT</a></li>
              <li><a class="hover:text-gemini" href="gemini.html">Gemini</a></li>
              <li><a class="hover:text-accent" href="comparatif.html">Comparatif</a></li>
            </ul>
          </div>
          <div>
            <p class="kicker mb-3">Pratiquer</p>
            <ul class="space-y-1.5 text-sm">
              <li><a class="hover:text-accent" href="memoire.html">Mémoire et agents</a></li>
              <li><a class="hover:text-accent" href="briefer.html">Bien briefer</a></li>
              <li><a class="hover:text-accent" href="verifier.html">Vérifier</a></li>
              <li><a class="hover:text-accent" href="usages.html">Familles d’usage</a></li>
              <li><a class="hover:text-accent" href="metiers.html">Cas par métier</a></li>
              <li><a class="hover:text-accent" href="quiz.html">Évaluation</a></li>
            </ul>
          </div>
        </div>
        <div class="mx-auto max-w-7xl px-5 lg:px-10 pb-10 kicker">© 2026 Atelier IA · Formation · Édition d’octobre 2026</div>
      </footer>`;
  }

  // ---------- Barre de lecture ----------
  function initReadingBar() {
    const bar = document.getElementById('reading-bar');
    if (!bar) return;
    const update = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    };
    addEventListener('scroll', update, { passive: true });
    update();
  }

  // ---------- Sommaire de page (depuis les h2[id]) ----------
  function initToc() {
    const toc = document.getElementById('toc');
    const article = document.querySelector('article');
    if (!toc || !article) return;
    const heads = [...article.querySelectorAll('h2[id]')];
    if (!heads.length) return;
    toc.innerHTML = `<p class="kicker mb-4">Dans ce module</p><nav class="toc">${heads.map(h => {
      const label = h.dataset.toc || h.textContent.replace(h.querySelector('.num')?.textContent || '', '').trim();
      return `<a href="#${h.id}">${esc(label)}</a>`;
    }).join('')}</nav>`;
    const links = [...toc.querySelectorAll('a')];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    heads.forEach(h => obs.observe(h));
  }

  // ---------- Copie des prompts ----------
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); }
      ta.remove();
    });
  }
  function initPrompts() {
    document.querySelectorAll('.prompt-block').forEach(block => {
      const textEl = block.querySelector('.prompt-text');
      if (!textEl) return;
      const head = document.createElement('div');
      head.className = 'prompt-head';
      head.innerHTML = `<span class="prompt-label">${esc(block.dataset.label || 'Prompt')}</span><button type="button" class="copy-btn">Copier</button>`;
      block.prepend(head);
      const btn = head.querySelector('button');
      btn.addEventListener('click', () => {
        copyText(textEl.innerText.trim()).then(() => {
          btn.textContent = 'Copié ✓'; btn.classList.add('is-copied');
          setTimeout(() => { btn.textContent = 'Copier'; btn.classList.remove('is-copied'); }, 1800);
        }).catch(() => { btn.textContent = 'Sélectionnez le texte'; });
      });
    });
  }

  // ---------- Notation par points ----------
  function initRatings() {
    document.querySelectorAll('.rating[data-score]').forEach(el => {
      const s = Number(el.dataset.score);
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', `${s} sur 5`);
      el.innerHTML = Array.from({ length: 5 }, (_, i) => `<i class="${i < s ? 'on' : ''}"></i>`).join('');
    });
  }

  // ---------- Fin de chapitre : marquer comme lu + navigation ----------
  function initChapterEnd() {
    const host = document.querySelector('[data-chapter-end]');
    if (!host) return;
    const idx = PAGES.findIndex(p => p.slug === current);
    const prev = PAGES[idx - 1], next = PAGES[idx + 1];
    const progress = loadProgress();
    const isRead = progress.read.includes(current);
    host.innerHTML = `
      <div class="mt-20 border-t-2 border-ink pt-10">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p class="kicker">Fin du module ${PAGES[idx].num}</p>
            <p class="font-display text-3xl mt-2">${isRead ? 'Module validé.' : 'Module terminé ?'}</p>
          </div>
          <button id="mark-read" class="btn ${isRead ? 'btn-ghost' : 'btn-primary'}">${isRead ? '✓ Module validé' : 'Valider ce module'}</button>
        </div>
        <div class="mt-10 grid sm:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
          ${prev ? `<a href="${prev.file}" class="chapter-row bg-paper p-6 block"><span class="kicker">← Précédent · ${prev.num}</span><span class="block font-display text-2xl mt-2">${esc(prev.title)}</span></a>` : '<span class="bg-paper"></span>'}
          ${next ? `<a href="${next.file}" class="chapter-row bg-paper p-6 block sm:text-right"><span class="kicker">Suivant · ${next.num} →</span><span class="block font-display text-2xl mt-2">${esc(next.title)}</span></a>` : '<span class="bg-paper"></span>'}
        </div>
      </div>`;
    host.querySelector('#mark-read').addEventListener('click', e => {
      const p = loadProgress();
      if (!p.read.includes(current)) p.read.push(current);
      saveProgress(p);
      e.currentTarget.textContent = '✓ Module validé';
      e.currentTarget.className = 'btn btn-ghost';
      host.querySelector('.font-display').textContent = 'Module validé.';
    });
  }

  // ---------- Progression sur l'accueil ----------
  function initHomeProgress() {
    const p = loadProgress();
    const done = CHAPTERS.filter(c => p.read.includes(c.slug)).length;
    document.querySelectorAll('[data-progress-count]').forEach(el => el.textContent = `${done}/${CHAPTERS.length}`);
    document.querySelectorAll('[data-progress-bar]').forEach(el => el.style.width = (done / CHAPTERS.length * 100) + '%');
    document.querySelectorAll('[data-chapter-status]').forEach(el => {
      if (p.read.includes(el.dataset.chapterStatus)) { el.textContent = '✓ validé'; el.classList.add('text-chatgpt'); }
    });
    const quizDone = Object.keys(p.quiz || {}).length;
    document.querySelectorAll('[data-quiz-count]').forEach(el => el.textContent = quizDone);
    const exDone = Object.values(p.ex || {}).filter(Boolean).length;
    document.querySelectorAll('[data-ex-count]').forEach(el => el.textContent = exDone);
  }

  // ---------- Apparition au défilement (sobre, une seule fois) ----------
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-visible')); return; }
    const obs = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
    }), { threshold: .12 });
    els.forEach(e => obs.observe(e));
  }

  // ---------- Moteur de quiz ----------
  const MESSAGES = [
    [90, 'Niveau expert', 'Vous maîtrisez le sujet. Passez au module suivant ou à l’évaluation finale.'],
    [70, 'Très solide', 'Quelques nuances à revoir : relisez les explications des questions manquées.'],
    [50, 'En bonne voie', 'Les bases sont là. Relisez le module puis retentez le quiz.'],
    [0, 'À consolider', 'Pas d’inquiétude : relisez le module, puis revenez. C’est fait pour ça.'],
  ];

  function renderQuiz(host) {
    const id = host.dataset.quiz;
    const data = (window.ATELIER_DATA && window.ATELIER_DATA.quizzes[id]);
    if (!data) return;
    let i = 0, score = 0;
    const letters = 'ABCDEF';

    const draw = () => {
      if (i >= data.questions.length) return finish();
      const q = data.questions[i];
      host.innerHTML = `
        <div class="quiz">
          <div class="quiz-bar"><span style="width:${(i / data.questions.length) * 100}%"></span></div>
          <div class="p-6 lg:p-8">
            <div class="flex items-center justify-between gap-4">
              <span class="kicker"><b>${esc(data.title)}</b></span>
              <span class="kicker">Question ${i + 1}/${data.questions.length}</span>
            </div>
            <p class="font-display text-2xl lg:text-[1.7rem] leading-snug mt-5">${esc(q.q)}</p>
            <div class="mt-6 grid gap-2.5">
              ${q.options.map((o, k) => `<button type="button" class="quiz-option" data-k="${k}"><span class="letter">${letters[k]}</span><span>${esc(o)}</span></button>`).join('')}
            </div>
            <div class="quiz-feedback"></div>
          </div>
        </div>`;
      host.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => answer(Number(btn.dataset.k))));
    };

    const answer = k => {
      const q = data.questions[i];
      const ok = k === q.answer;
      if (ok) score++;
      host.querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
        const bk = Number(b.dataset.k);
        if (bk === q.answer) b.classList.add('is-correct');
        else if (bk === k) b.classList.add('is-wrong');
      });
      host.querySelector('.quiz-feedback').innerHTML = `
        <div class="quiz-explain mt-6">
          <p class="font-semibold ${ok ? 'text-chatgpt' : 'text-accent'}">${ok ? 'Exact.' : 'Pas tout à fait.'}</p>
          <p class="mt-1 text-ink-soft leading-relaxed">${esc(q.explain)}</p>
        </div>
        <div class="mt-6 flex justify-end">
          <button type="button" class="btn btn-primary quiz-next">${i + 1 < data.questions.length ? 'Question suivante' : 'Voir mon résultat'} <span class="arrow">→</span></button>
        </div>`;
      host.querySelector('.quiz-next').addEventListener('click', () => { i++; draw(); });
      host.querySelector('.quiz-next').focus({ preventScroll: true });
    };

    const finish = () => {
      const pct = Math.round((score / data.questions.length) * 100);
      const p = loadProgress();
      const best = Math.max(pct, (p.quiz && p.quiz[id]) || 0);
      p.quiz = Object.assign({}, p.quiz, { [id]: best });
      saveProgress(p);
      const [, title, msg] = MESSAGES.find(m => pct >= m[0]);
      host.innerHTML = `
        <div class="quiz">
          <div class="quiz-bar"><span style="width:100%"></span></div>
          <div class="p-6 lg:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div>
              <p class="kicker">Votre score</p>
              <p class="score-big text-ai">${score}<span class="text-ink-soft text-[.4em]">/${data.questions.length}</span></p>
            </div>
            <div>
              <p class="font-display text-3xl">${title}</p>
              <p class="mt-2 text-ink-soft">${msg}</p>
              <p class="mt-3 kicker">Meilleur score enregistré : ${best}%</p>
              <button type="button" class="btn btn-ghost mt-6 quiz-restart">Recommencer ↺</button>
            </div>
          </div>
        </div>`;
      host.querySelector('.quiz-restart').addEventListener('click', () => { i = 0; score = 0; draw(); });
      document.dispatchEvent(new CustomEvent('quiz:done'));
    };

    draw();
  }

  // ---------- Test « Quelle IA pour vous ? » ----------
  function renderProfiler(host) {
    const data = window.ATELIER_DATA && window.ATELIER_DATA.profiler;
    if (!data) return;
    let i = 0;
    const pts = { claude: 0, chatgpt: 0, gemini: 0 };

    const draw = () => {
      if (i >= data.questions.length) return finish();
      const q = data.questions[i];
      host.innerHTML = `
        <div class="quiz">
          <div class="quiz-bar"><span style="width:${(i / data.questions.length) * 100}%"></span></div>
          <div class="p-6 lg:p-8">
            <span class="kicker">Question ${i + 1}/${data.questions.length}</span>
            <p class="font-display text-2xl lg:text-[1.7rem] leading-snug mt-4">${esc(q.q)}</p>
            <div class="mt-6 grid gap-2.5">
              ${q.options.map((o, k) => `<button type="button" class="quiz-option" data-k="${k}"><span class="letter">${'ABCD'[k]}</span><span>${esc(o.label)}</span></button>`).join('')}
            </div>
          </div>
        </div>`;
      host.querySelectorAll('.quiz-option').forEach(b => b.addEventListener('click', () => {
        const w = q.options[Number(b.dataset.k)].w;
        Object.keys(w).forEach(key => pts[key] += w[key]);
        i++; draw();
      }));
    };

    const finish = () => {
      const total = pts.claude + pts.chatgpt + pts.gemini || 1;
      const ranking = Object.keys(pts).sort((a, b) => pts[b] - pts[a]);
      const win = data.results[ranking[0]];
      const second = data.results[ranking[1]];
      host.innerHTML = `
        <div class="quiz" style="--ai: var(--${ranking[0]})">
          <div class="quiz-bar"><span style="width:100%"></span></div>
          <div class="p-6 lg:p-10">
            <p class="kicker">Votre IA principale</p>
            <p class="font-display text-5xl lg:text-6xl mt-2 text-ai">${esc(win.name)}</p>
            <p class="mt-4 text-lg leading-relaxed max-w-2xl">${esc(win.why)}</p>
            <div class="mt-8 grid gap-3 max-w-xl">
              ${ranking.map(k => `
                <div class="grid grid-cols-[6rem_1fr_3rem] items-center gap-3 text-sm">
                  <span class="font-semibold text-${k}">${esc(data.results[k].name)}</span>
                  <span class="h-2 bg-line rounded-full overflow-hidden"><span class="block h-full bg-${k} rounded-full" style="width:${Math.round(pts[k] / total * 100)}%"></span></span>
                  <span class="font-mono text-xs text-ink-soft text-right">${Math.round(pts[k] / total * 100)}%</span>
                </div>`).join('')}
            </div>
            <div class="callout callout-tip mt-8 max-w-2xl"><span class="callout-tag">Conseil</span><div><p><strong>Abonnement suggéré :</strong> ${esc(win.plan)}</p><p>En complément, gardez la version gratuite de <strong>${esc(second.name)}</strong> : ${esc(second.complement)}</p></div></div>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="${win.file}" class="btn btn-primary">Lire le module ${esc(win.name)} <span class="arrow">→</span></a>
              <button type="button" class="btn btn-ghost profiler-restart">Refaire le test ↺</button>
            </div>
          </div>
        </div>`;
      host.querySelector('.profiler-restart').addEventListener('click', () => { i = 0; pts.claude = pts.chatgpt = pts.gemini = 0; draw(); });
    };

    draw();
  }

  // ---------- Onglets génériques ----------
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(group => {
      const btns = group.querySelectorAll('[data-tab]');
      const panels = document.querySelectorAll(`[data-tab-panel][data-group="${group.dataset.tabs}"]`);
      const show = name => {
        btns.forEach(b => b.classList.toggle('is-active', b.dataset.tab === name));
        panels.forEach(p => p.hidden = p.dataset.tabPanel !== name);
      };
      btns.forEach(b => b.addEventListener('click', () => show(b.dataset.tab)));
      if (btns[0]) show(btns[0].dataset.tab);
    });
  }

  // ---------- Sélecteur de tâche (comparatif) ----------
  function initTaskPicker() {
    const host = document.getElementById('task-picker');
    const tasks = window.ATELIER_DATA && window.ATELIER_DATA.tasks;
    if (!host || !tasks) return;
    const names = { claude: 'Claude', chatgpt: 'ChatGPT', gemini: 'Gemini' };
    host.innerHTML = `
      <div class="flex flex-wrap gap-2">${tasks.map((t, k) => `<button type="button" class="tab-btn" data-k="${k}">${esc(t.label)}</button>`).join('')}</div>
      <div class="task-result mt-6"></div>`;
    const result = host.querySelector('.task-result');
    const show = k => {
      const t = tasks[k];
      host.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('is-active', Number(b.dataset.k) === k));
      result.innerHTML = `
        <div class="grid md:grid-cols-[1.3fr_1fr] gap-px bg-line border border-line rounded-xl overflow-hidden" style="animation: rise .4s var(--ease-out)">
          <div class="bg-card p-6" style="--ai: var(--${t.best})">
            <p class="kicker">Notre choix</p>
            <p class="font-display text-4xl text-ai mt-1">${names[t.best]}</p>
            <p class="mt-3 leading-relaxed">${esc(t.why)}</p>
          </div>
          <div class="bg-card p-6" style="--ai: var(--${t.alt})">
            <p class="kicker">Alternative</p>
            <p class="font-display text-2xl text-ai mt-1">${names[t.alt]}</p>
            <p class="mt-2 text-sm text-ink-soft leading-relaxed">${esc(t.altWhy)}</p>
          </div>
        </div>`;
    };
    host.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => show(Number(b.dataset.k))));
    show(0);
  }

  // ---------- Calculateur de rentabilité ----------
  function initRoi() {
    const form = document.getElementById('roi');
    if (!form) return;
    const $ = n => form.querySelector(`[name="${n}"]`);
    const fmt = n => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n);
    const update = () => {
      const rate = Number($('rate').value), hours = Number($('hours').value), people = Number($('people').value), cost = Number($('cost').value);
      form.querySelector('[data-out="rate"]').textContent = fmt(rate) + ' FCFA';
      form.querySelector('[data-out="hours"]').textContent = hours + ' h';
      form.querySelector('[data-out="people"]').textContent = people;
      form.querySelector('[data-out="cost"]').textContent = fmt(cost) + ' FCFA';
      const gain = rate * hours * 4.33 * people;
      const spend = cost * people;
      const net = gain - spend;
      const breakeven = rate > 0 ? (cost / rate) * 60 : 0;
      form.querySelector('[data-out="gain"]').textContent = fmt(gain) + ' FCFA';
      form.querySelector('[data-out="spend"]').textContent = fmt(spend) + ' FCFA';
      form.querySelector('[data-out="net"]').textContent = (net >= 0 ? '+' : '') + fmt(net) + ' FCFA';
      form.querySelector('[data-out="ratio"]').textContent = spend > 0 ? '×' + (gain / spend).toFixed(1).replace('.', ',') : '—';
      const m = Math.ceil(breakeven);
      form.querySelector('[data-out="breakeven"]').textContent = m < 60 ? m + ' min' : Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0');
    };
    form.addEventListener('input', update);
    update();
  }

  // ---------- Constructeur de prompt (C.R.A.F.T.) ----------
  function initBuilder() {
    const form = document.getElementById('prompt-builder');
    if (!form) return;
    const out = form.querySelector('[data-builder-out]');
    const score = form.querySelector('[data-builder-score]');
    const copy = form.querySelector('[data-builder-copy]');
    const val = n => form.elements[n].value.trim();
    const update = () => {
      const lines = [];
      if (val('c')) lines.push(val('c'));
      if (val('r')) lines.push(`Agis comme ${val('r')}.`);
      if (val('a')) lines.push(val('a'));
      if (val('f')) lines.push(`Format attendu : ${val('f')}.`);
      if (val('t')) lines.push(`Ton : ${val('t')}.`);
      if (form.elements.v.checked) lines.push('Si une information te manque ou si tu n’es pas sûr, dis-le explicitement plutôt que de supposer.');
      if (form.elements.q.checked) lines.push('Avant de commencer, pose-moi les questions nécessaires si des informations importantes manquent.');
      const filled = ['c', 'r', 'a', 'f', 't'].filter(k => val(k)).length;
      out.textContent = lines.length ? lines.join('\n\n') : 'Commencez à remplir les champs à gauche…';
      out.classList.toggle('text-ink-soft', !lines.length);
      score.textContent = `${filled}/5 ingrédients`;
    };
    form.addEventListener('input', update);
    copy.addEventListener('click', () => {
      copyText(out.textContent).then(() => {
        copy.textContent = 'Copié ✓'; copy.classList.add('is-copied');
        setTimeout(() => { copy.textContent = 'Copier le prompt'; copy.classList.remove('is-copied'); }, 1800);
      });
    });
    update();
  }

  // ---------- Tableau des meilleurs scores ----------
  function initScores() {
    const host = document.querySelector('[data-quiz-scores]');
    const quizzes = window.ATELIER_DATA && window.ATELIER_DATA.quizzes;
    if (!host || !quizzes) return;
    const best = loadProgress().quiz || {};
    host.innerHTML = Object.keys(quizzes).map(id => {
      const s = best[id];
      return `<li class="flex justify-between gap-4 py-2"><span class="text-ink-soft">${esc(quizzes[id].title)}</span><span class="font-mono ${s >= 70 ? 'text-chatgpt' : s != null ? 'text-accent' : 'text-ink-soft'}">${s != null ? s + ' %' : '—'}</span></li>`;
    }).join('');
  }

  // ---------- Exercices avec auto-évaluation ----------
  function initExercises() {
    document.querySelectorAll('.exercise[data-exercise]').forEach(ex => {
      const id = ex.dataset.exercise;
      const boxes = [...ex.querySelectorAll('.exercise-check input[type="checkbox"]')];
      const out = ex.querySelector('[data-ex-feedback]');
      if (!boxes.length) return;
      const saved = (loadProgress().exState || {})[id] || [];
      boxes.forEach((b, k) => { b.checked = !!saved[k]; });
      const update = save => {
        const n = boxes.filter(b => b.checked).length, total = boxes.length;
        if (out) {
          out.textContent = n === 0 ? `0/${total} · Cochez seulement ce que votre résultat contient vraiment.`
            : n === total ? `${n}/${total} · Exercice réussi. Gardez ce prompt dans votre bibliothèque.`
            : n >= total - 1 ? `${n}/${total} · Presque : corrigez le point manquant en une relance.`
            : `${n}/${total} · Reprenez votre demande : ajoutez ce qui manque, puis relancez.`;
          out.classList.toggle('text-chatgpt', n === total);
        }
        if (save) {
          const p = loadProgress();
          p.exState = Object.assign({}, p.exState, { [id]: boxes.map(b => b.checked) });
          p.ex = Object.assign({}, p.ex, { [id]: n >= total - 1 });
          saveProgress(p);
          initHomeProgress();
        }
      };
      boxes.forEach(b => b.addEventListener('change', () => update(true)));
      update(false);
    });
  }

  // ---------- « Repérez les erreurs » ----------
  function initSpot() {
    document.querySelectorAll('[data-spot]').forEach(host => {
      const items = [...host.querySelectorAll('.spot-item')];
      const btn = host.querySelector('.spot-check');
      const out = host.querySelector('.spot-result');
      items.forEach(it => {
        it.setAttribute('role', 'button');
        it.tabIndex = 0;
        const toggle = () => { if (!host.classList.contains('is-checked')) it.classList.toggle('is-picked'); };
        it.addEventListener('click', toggle);
        it.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
      });
      btn.addEventListener('click', () => {
        if (host.classList.contains('is-checked')) {
          host.classList.remove('is-checked');
          items.forEach(it => it.classList.remove('is-picked', 'is-found', 'is-missed', 'is-false'));
          out.innerHTML = '';
          btn.textContent = 'Vérifier mes choix';
          return;
        }
        host.classList.add('is-checked');
        let found = 0, missed = 0, wrong = 0;
        const notes = [];
        items.forEach(it => {
          const bad = it.hasAttribute('data-wrong'), picked = it.classList.contains('is-picked');
          if (bad && picked) { found++; it.classList.add('is-found'); }
          else if (bad) { missed++; it.classList.add('is-missed'); }
          else if (picked) { wrong++; it.classList.add('is-false'); }
          if (bad || picked) notes.push(`<li><span class="font-mono text-xs ${bad ? 'text-accent' : 'text-chatgpt'}">${bad ? (picked ? 'Repéré ✓' : 'Manqué') : 'Correct, en fait'}</span> ${esc(it.dataset.why || '')}</li>`);
        });
        const total = found + missed;
        out.innerHTML = `
          <p class="font-display text-2xl">${found}/${total} problèmes repérés${wrong ? ` · ${wrong} fausse${wrong > 1 ? 's' : ''} alerte${wrong > 1 ? 's' : ''}` : ''}</p>
          <ul class="mt-4 space-y-3 text-sm leading-relaxed">${notes.join('')}</ul>`;
        btn.textContent = 'Recommencer ↺';
        const p = loadProgress();
        p.ex = Object.assign({}, p.ex, { [host.dataset.spot || 'spot']: found === total && !wrong });
        saveProgress(p);
      });
    });
  }

  // ---------- Plan d’action (projet final) ----------
  function initPlan() {
    const form = document.getElementById('action-plan');
    if (!form) return;
    const KEY = 'formation-ia-plan';
    let data = {};
    try { data = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
    [...form.elements].forEach(el => { if (el.name && data[el.name] != null) el.value = data[el.name]; });
    const status = form.querySelector('[data-plan-status]');
    const sync = save => {
      [...form.elements].forEach(el => { if (el.name) data[el.name] = el.value; });
      const filled = [1, 2, 3].filter(n => (data['t' + n] || '').trim() && (data['p' + n] || '').trim()).length;
      if (status) status.textContent = `${filled}/3 tâches complètes · enregistré sur cet appareil`;
      if (!save) return;
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
      const p = loadProgress();
      p.ex = Object.assign({}, p.ex, { plan: filled === 3 });
      saveProgress(p);
    };
    form.addEventListener('input', () => sync(true));
    sync(false);
    const print = form.querySelector('[data-plan-print]');
    if (print) print.addEventListener('click', () => window.print());
    const copy = form.querySelector('[data-plan-copy]');
    if (copy) copy.addEventListener('click', () => {
      const txt = [1, 2, 3].map(n => `Tâche ${n} : ${data['t' + n] || ''}\nTemps passé aujourd’hui : ${data['h' + n] || ''}\nFamille d’usage : ${data['f' + n] || ''}\nOutil : ${data['o' + n] || ''}\nPrompt :\n${data['p' + n] || ''}\nComment je vérifie : ${data['v' + n] || ''}`).join('\n\n---\n\n');
      copyText(txt).then(() => { copy.textContent = 'Copié ✓'; setTimeout(() => { copy.textContent = 'Copier mon plan'; }, 1800); });
    });
  }

  // ---------- Démarrage ----------
  renderHeader();
  renderFooter();
  initReadingBar();
  initToc();
  initPrompts();
  initRatings();
  initChapterEnd();
  initHomeProgress();
  initTabs();
  initTaskPicker();
  initRoi();
  initBuilder();
  document.querySelectorAll('[data-quiz]').forEach(renderQuiz);
  document.querySelectorAll('[data-profiler]').forEach(renderProfiler);
  initScores();
  initExercises();
  initSpot();
  initPlan();
  document.addEventListener('quiz:done', () => { initHomeProgress(); initScores(); });
  initReveal();
})();
