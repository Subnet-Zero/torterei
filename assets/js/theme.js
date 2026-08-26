(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.setAttribute('data-theme', saved);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('[data-theme-set]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = btn.getAttribute('data-theme-set');
        if (val === 'system') {
          localStorage.removeItem('theme');
          document.documentElement.removeAttribute('data-theme');
        } else {
          localStorage.setItem('theme', val);
          document.documentElement.setAttribute('data-theme', val);
        }
        btns.forEach(function (b) { b.classList.remove('theme-switch__btn--aktiv'); });
        btn.classList.add('theme-switch__btn--aktiv');
      });
    });

    var current = localStorage.getItem('theme') || 'system';
    var active = document.querySelector('[data-theme-set="' + current + '"]');
    if (active) active.classList.add('theme-switch__btn--aktiv');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && location.hash.indexOf('#lb-') === 0) {
      location.hash = '!';
    }
  });
}());
