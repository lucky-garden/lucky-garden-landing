// 모바일 상단 네비게이션 메뉴 토글
(function () {
  var toggle = document.querySelector('.nav-mobile-menu');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.setAttribute('aria-expanded', 'false');

  function closeMenu() {
    links.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  // 메뉴 항목을 누르면 메뉴를 닫는다
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
