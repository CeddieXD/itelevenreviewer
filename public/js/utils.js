// utils.js
(function() {
  function $(sel, ctx = document) {
    return ctx.querySelector(sel);
  }
  function $$(sel, ctx = document) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }
  function slug(s) {
    return String(s || '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const loaded = Array.from(document.scripts).some(s => s.src && s.src.includes(src));
      if (loaded) return setTimeout(resolve, 50);
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  window.Utils = { $, $$, slug, loadScript };
})();


