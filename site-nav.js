(() => {
  const navigation = window.PORTFOLIO_CONTENT?.navigation || {};

  document.querySelectorAll('.global-portfolio > button').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      button.parentElement.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.global-portfolio.open').forEach(menu => menu.classList.remove('open'));
  });

  document.querySelectorAll('.nav-home').forEach(back => {
    back.textContent = navigation.back || '← BACK';
    back.setAttribute('aria-label', 'Go back');
    back.addEventListener('click', event => {
      event.preventDefault();
      if (history.length > 1) history.back();
      else location.href = './index.html';
    });
  });

  document.querySelectorAll('main a').forEach(link => {
    if (/BACK HOME/i.test(link.textContent)) link.remove();
  });
})();
