/* Защита от встраивания во фрейм (на GitHub Pages нельзя задать X-Frame-Options) */
(function () {
  if (window.self !== window.top) {
    document.documentElement.style.display = 'none';
    try { window.top.location.href = window.self.location.href; } catch { /* другой источник: страница остаётся скрытой */ }
  }
})();
