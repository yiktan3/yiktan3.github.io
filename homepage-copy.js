(() => {
  /* Keep the compact About structure; content-loader.js supplies all text. */
  const paragraphs = [...document.querySelectorAll('.about-card .info-inner > p')];
  if (paragraphs.length >= 3) paragraphs[0].remove();
})();
