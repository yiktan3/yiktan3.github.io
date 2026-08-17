(() => {
  const inner = document.querySelector('.about-card .info-inner');
  if (!inner || inner.querySelector('.about-tools')) return;
  const copy = window.PORTFOLIO_CONTENT?.home?.about || {};
  const row = document.createElement('div');
  const heading = document.createElement('strong');
  const tools = document.createElement('span');
  row.className = 'about-tools';
  heading.textContent = copy.toolsHeading || '';
  tools.textContent = copy.tools || '';
  row.append(heading, tools);
  inner.append(row);
})();
