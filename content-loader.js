/* Applies content.js values to the existing website without changing layout. */
(() => {
  const C = window.PORTFOLIO_CONTENT;
  if (!C) return;

  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];
  const text = (selector, value, root = document) => {
    const element = one(selector, root);
    if (element && value !== undefined) element.textContent = value;
    return element;
  };
  const texts = (selector, values, root = document) => {
    all(selector, root).forEach((element, index) => {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  };
  const lines = (selector, value, root = document) => {
    const element = one(selector, root);
    if (!element || value === undefined) return element;
    const parts = String(value).split('\n');
    element.replaceChildren();
    parts.forEach((part, index) => {
      if (index) element.append(document.createElement('br'));
      element.append(document.createTextNode(part));
    });
    return element;
  };
  const setTitle = value => {
    if (value !== undefined) document.title = value;
  };

  function applyNavigation() {
    const N = C.navigation;
    text('.screen-nav .home', N.home);
    text('.screen-nav .portfolio', N.portfolio);
    text('.screen-nav .about', N.about);
    text('.screen-nav .contact', N.contact);
    texts('.screen .menu a', [N.mediaArt, N.graphicDesign, N.animation, N.drawings]);

    all('.global-nav').forEach(nav => {
      text('.nav-home', N.back, nav);
      text('.global-portfolio > button', N.portfolio, nav);
      texts('.global-menu a', [N.mediaArt, N.graphicDesign, N.animation, N.drawings], nav);
      const directLinks = all(':scope > a:not(.nav-home)', nav);
      if (directLinks[0]) directLinks[0].textContent = N.about;
      if (directLinks[1]) directLinks[1].textContent = N.contact;
    });
  }

  function applyHome() {
    const H = C.home;
    setTitle(H.browserTitle);
    const barSpans = all('.window-bar > span');
    if (barSpans[1]) barSpans[1].textContent = H.desktopLabel;
    if (barSpans[2]) barSpans[2].textContent = H.desktopSize;
    text('.start', H.startButton);
    text('.screen-title', H.screenTitle);
    text('.drag-hint', H.editHint);
    texts('.card-back', [C.navigation.back, C.navigation.back]);

    lines('.about-card h2', H.about.heading);
    text('.about-card h3', H.about.statement);
    const aboutParagraphs = all('.about-card .info-inner > p');
    if (aboutParagraphs[0]) linesElement(aboutParagraphs[0], H.about.education);
    if (aboutParagraphs[1]) linesElement(aboutParagraphs[1], H.about.interests);
    const tools = one('.about-tools');
    if (tools) {
      tools.replaceChildren();
      const heading = document.createElement('strong');
      const list = document.createElement('span');
      heading.textContent = H.about.toolsHeading;
      list.textContent = H.about.tools;
      tools.append(heading, list);
    }

    text('.contact-card h2', H.contact.name);
    const contact = one('.contact-card p');
    if (contact) linesElement(contact, [H.contact.phone, H.contact.email, H.contact.whatsapp].join('\n'));
    text('.mini-back', H.interactionBack);
  }

  function linesElement(element, value) {
    const parts = String(value).split('\n');
    element.replaceChildren();
    parts.forEach((part, index) => {
      if (index) element.append(document.createElement('br'));
      element.append(document.createTextNode(part));
    });
  }

  function applyAnimation() {
    const A = C.animationPage;
    setTitle(A.browserTitle);
    text('.edit', A.editButton);
    text('.panel b', A.editHeading);
    all('.panel label').forEach((label, index) => {
      if (A.videoLabels[index] === undefined) return;
      const input = label.querySelector('input');
      label.replaceChildren(document.createTextNode(A.videoLabels[index]));
      if (input) label.append(input);
    });
    text('.bar-title', A.windowTitle);
    texts('.grid .num', A.videoLabels);
    text('.window .caption', A.caption);
    text('.below h1', A.heading);
    text('.below p', A.subtitle);
  }

  function applyDrawings() {
    const D = C.drawingsPage;
    setTitle(D.browserTitle);
    text('.top h1', D.heading);
    text('.top p', D.subtitle);
    texts('.gallery .art span', D.captions);
    text('.lightbox .close', D.closeButton);
  }

  function applyGraphicDesign() {
    const G = C.graphicDesignPage;
    setTitle(G.browserTitle);
    lines('.head h1', G.heading);
    const headCopy = one('.head p');
    if (headCopy) linesElement(headCopy, G.categoryLine + '\n' + G.selectedWorksLine);

    const project01 = one('.project.p1');
    if (project01) {
      text('.meta small', G.project01.number, project01);
      lines('.meta h2', G.project01.title, project01);
      text('.meta p', G.project01.categoryYear, project01);
      text('.view', G.project01.viewButton, project01);
      text('.collapse', G.project01.closeButton, project01);
    }
    const project02 = one('.project.p2');
    if (project02) {
      text('.meta small', G.project02.number, project02);
      lines('.meta h2', G.project02.title, project02);
      text('.meta p', G.project02.categoryYear, project02);
      text('.view', G.project02.viewButton, project02);
      text('.collapse', G.project02.closeButton, project02);
    }
    const project03 = one('.book-project');
    if (project03) {
      text('.book-meta small', G.project03.number, project03);
      text('.book-meta h2', G.project03.title, project03);
      text('.book-meta p', G.project03.category, project03);
      text('.journal-open', G.project03.openButton, project03);
      text('.journal-previous', G.project03.previousButton, project03);
      text('.journal-next', G.project03.nextButton, project03);
    }
  }

  function applyMediaArt() {
    const M = C.mediaArtPage;
    setTitle(M.browserTitle);

    const P1 = M.project01;
    text('.archive-one > .eyebrow', P1.archiveLabel);
    lines('.archive-one .hero-title', P1.title);
    text('.archive-one .sub', P1.categoryYear);
    texts('.archive-one .process-strip figcaption', [P1.renderCaption, P1.lightingCaption, P1.exhibitionCaption, P1.boothCaption]);
    text('.preview.one .label', P1.processPreview);
    text('.preview.two .label', P1.wechatPreview);
    text('.archive-extra figcaption', P1.birthdayCaption);
    texts('.archive-trio figcaption', [P1.videoCaption01, P1.videoCaption02, P1.videoCaption03]);
    text('.scene-two figcaption', P1.scene02Caption);
    text('.archive-one .desc', P1.description);

    const P2 = M.project02;
    text('.archive-two > .eyebrow', P2.archiveLabel);
    lines('.archive-two .section-title', P2.title);
    text('.archive-two .game-head .eyebrow', P2.category);
    text('.archive-two .intro', P2.introduction);
    text('.archive-two .game-wrap > .label', P2.playHeading);
    const controls = one('.archive-two .controls');
    if (controls) {
      controls.replaceChildren();
      const strong = document.createElement('strong');
      strong.textContent = P2.controlsHeading;
      controls.append(strong, document.createElement('br'));
      P2.controls.split('\n').forEach((line, index) => {
        if (index) controls.append(document.createElement('br'));
        controls.append(document.createTextNode(line));
      });
    }
    const concept = one('.archive-two .concept-above');
    if (concept) rebuildTextSection(concept, P2.conceptHeading, P2.conceptParagraphs);
    const process = one('.archive-two .game-notes section');
    if (process) rebuildTextSection(process, P2.processHeading, P2.processParagraphs);

    const P3 = M.project03;
    text('.archive-three > .eyebrow', P3.archiveLabel);
    text('.archive-three .section-title', P3.title);
    const thirdEyebrows = all('.archive-three > .eyebrow');
    if (thirdEyebrows[1]) thirdEyebrows[1].textContent = P3.category;
    const intro = one('.archive-three .filter-intro');
    if (intro) {
      const strong = document.createElement('strong');
      strong.textContent = P3.introductionTitle;
      intro.replaceChildren(strong, document.createTextNode(' ' + P3.introduction));
    }
    texts('.archive-three .phone-card figcaption', P3.filterLabels);

    const E = M.editor;
    text('.edit-toggle', E.openButton);
    text('.editor strong', E.heading);
    const labels = [E.titleLabel, E.subtitleLabel, E.descriptionLabel, E.mainVideoLabel, E.preview01Label, E.preview02Label, ...E.filterLabels];
    texts('.editor label', labels);
    text('.editor #apply', E.applyButton);
  }

  function applyTravelBook() {
    const T = C.travelBookPage;
    setTitle(T.browserTitle);
    text('.intro .kicker', T.archiveLabel);
    text('.intro h1', T.title);
    text('.intro p', T.category);
    text('.reader .hint', T.instruction);
  }

  function rebuildTextSection(section, headingText, paragraphs) {
    section.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = headingText;
    section.append(heading);
    paragraphs.forEach(paragraphText => {
      const paragraph = document.createElement('p');
      paragraph.textContent = paragraphText;
      section.append(paragraph);
    });
  }

  applyNavigation();
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page === 'index.html' || page === 'home.html') applyHome();
  if (page === 'animation.html') applyAnimation();
  if (page === 'drawings.html') applyDrawings();
  if (page === 'graphic-design.html') applyGraphicDesign();
  if (page === 'media-art-surface-level.html') applyMediaArt();
  if (page === 'travel-book.html') applyTravelBook();
})();
