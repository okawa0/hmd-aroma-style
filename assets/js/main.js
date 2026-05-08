  const hamburger = document.querySelector('[data-js="hamburger"]');
  const navMenu = document.querySelector('[data-js="nav-menu"]');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    navMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      document.body.style.overflow = 'hidden';
  });

  // リサイズ時にモバイルメニューの開閉状態をリセット
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      hamburger.classList.remove('is-open');
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'メニューを開く');
      document.body.style.overflow = '';
    }
  });