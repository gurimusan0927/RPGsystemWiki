/* 全ページをローカルで読めるよう、検索データは通信せず同梱します。 */
(() => {
  'use strict';
  const input = document.getElementById('wiki-search');
  const results = document.getElementById('search-results');
  const sidebar = document.getElementById('sidebar');
  const mask = document.getElementById('mobile-mask');
  const menu = document.getElementById('menu-toggle');
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase('ja').replace(/[\s\u3000]+/g, ' ').trim();
  const records = (window.RPG_SEARCH || []).map(record => ({...record, normalized: normalize(record.title + ' ' + record.page + ' ' + record.text)}));
  // 一覧ごとに検索語と分類を掛け合わせて絞り込み、表示件数を知らせます。
  document.querySelectorAll('[data-filter-root]').forEach(root => {
    const query = root.querySelector('[data-filter-query]');
    const category = root.querySelector('[data-filter-category]');
    const effect = root.querySelector('[data-filter-effect]');
    const special = root.querySelector('[data-filter-special]');
    const cards = [...root.querySelectorAll('[data-filter-card]')];
    const update = () => {
      const words = normalize(query.value).split(' ').filter(Boolean);
      let count = 0;
      cards.forEach(card => {
        // 食材の効果は種別とIDで照合し、特殊効果も含めて全条件を満たす項目を表示します。
        const effectMatches = !effect || effect.value === 'all' || (card.dataset.effects || '').split(' ').includes(effect.value);
        const specialMatches = !special || special.value === 'all' || card.dataset.special === special.value;
        const matches = effectMatches && specialMatches && (category.value === 'all' || category.value === card.dataset.category) && words.every(word => normalize(card.dataset.filterText).includes(word));
        card.hidden = !matches; if(matches) count++;
      });
      root.querySelectorAll('[data-filter-group]').forEach(group => { group.hidden = ![...group.querySelectorAll('[data-filter-card]')].some(card => !card.hidden); });
      root.querySelector('[data-filter-count]').textContent = `${count} / ${cards.length}件を表示`;
      root.querySelector('[data-filter-empty]').hidden = count > 0;
    };
    query.addEventListener('input',update); category.addEventListener('change',update);
    effect?.addEventListener('change',update); special?.addEventListener('change',update);
    root.querySelector('[data-filter-reset]').addEventListener('click',() => { query.value = ''; category.value = 'all'; if(effect) effect.value = 'all'; if(special) special.value = 'all'; update(); });
    update();
  });
  function closeSearch() { results.hidden = true; input.setAttribute('aria-expanded', 'false'); }
  function renderSearch() {
    const query = normalize(input.value);
    results.replaceChildren();
    if (!query) { closeSearch(); return; }
    const words = query.split(' ');
    const found = records.filter(record => words.every(word => record.normalized.includes(word)))
      .sort((a,b) => Number(normalize(b.title).includes(query)) - Number(normalize(a.title).includes(query)));
    const status = document.createElement('div');
    status.className = 'search-status';
    status.textContent = found.length ? `${found.length}件の項目${found.length > 20 ? '（上位20件を表示）' : ''}` : '該当する項目がありません。別の言葉で検索してください。';
    results.append(status);
    for (const record of found.slice(0,20)) {
      const link = document.createElement('a');
      link.className = 'search-result'; link.href = record.url;
      const title = document.createElement('strong'); title.textContent = record.title;
      const detail = document.createElement('small'); detail.textContent = record.page + ' · ' + record.text.slice(0,105);
      link.append(title, detail); results.append(link);
    }
    results.hidden = false; input.setAttribute('aria-expanded','true');
  }
  input.addEventListener('input',renderSearch);
  input.addEventListener('focus',() => { if(input.value) renderSearch(); });
  input.addEventListener('keydown',event => {
    if(event.key === 'ArrowDown') { event.preventDefault(); results.querySelector('a')?.focus(); }
    if(event.key === 'Enter') { const first = results.querySelector('a'); if(first) { event.preventDefault(); first.click(); } }
  });
  results.addEventListener('keydown',event => {
    const links = [...results.querySelectorAll('a')]; const position = links.indexOf(document.activeElement);
    if(event.key === 'ArrowDown') { event.preventDefault(); links[Math.min(position+1,links.length-1)]?.focus(); }
    if(event.key === 'ArrowUp') { event.preventDefault(); if(position <= 0) input.focus(); else links[position-1].focus(); }
  });
  document.addEventListener('click',event => { if(!event.target.closest('.searchbox')) closeSearch(); });
  function closeMenu() { sidebar.classList.remove('open'); mask.classList.remove('show'); menu.setAttribute('aria-expanded','false'); }
  menu.addEventListener('click',() => {
    const open = sidebar.classList.toggle('open'); mask.classList.toggle('show',open); menu.setAttribute('aria-expanded',String(open));
  });
  mask.addEventListener('click',closeMenu);
  document.addEventListener('keydown',event => {
    if(event.key === 'Escape') { closeSearch(); closeMenu(); input.blur(); }
    if(event.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) { event.preventDefault(); input.focus(); }
  });
  // 検索で折りたたみ項目へ移動した場合は、その項目を自動で開きます。
  function revealHash() {
    if(!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if(!target) return;
    const filter = target.closest('[data-filter-root]');
    if(filter) { filter.querySelector('[data-filter-reset]')?.click(); }
    if(target.matches('details')) target.open = true;
    let parent = target.parentElement;
    while(parent) { if(parent.matches('details')) parent.open = true; parent = parent.parentElement; }
    requestAnimationFrame(() => target.scrollIntoView({block:'start'}));
  }
  window.addEventListener('hashchange',revealHash); revealHash();
  const headings = [...document.querySelectorAll('.article-body h2[id]')];
  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for(const entry of entries) if(entry.isIntersecting) {
        document.querySelectorAll('.toc a').forEach(link => link.classList.toggle('current',link.hash === '#' + entry.target.id));
      }
    },{rootMargin:'-90px 0px -65% 0px'});
    headings.forEach(heading => observer.observe(heading));
  }
})();
