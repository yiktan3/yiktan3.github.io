/*
  ================================================================
  YIKTAN PORTFOLIO — WEBSITE TEXT
  ================================================================

  THIS IS THE ONLY FILE YOU NEED TO EDIT WHEN CHANGING WEBSITE TEXT.

  How to edit:
  1. Change only the words between quotation marks.
  2. Keep the quotation marks, commas, brackets and property names.
  3. Use \n when you want a new line inside a title or paragraph.
  4. Press Ctrl + S, then refresh the webpage.
*/

window.PORTFOLIO_CONTENT = {

  // ==============================================================
  // SHARED NAVIGATION — appears on every page
  // ==============================================================
  navigation: {
    home: "Home",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    mediaArt: "Media Art",
    graphicDesign: "Graphic Design",
    animation: "Animation",
    drawings: "Drawings",
    back: "← BACK"
  },

  // ==============================================================
  // SOCIAL LINK — appears at the bottom of every page
  // ==============================================================
  social: {
    instagramUrl: "https://www.instagram.com/qyiktandmu11/",
    instagramLabel: "Instagram — @qyiktandmu11"
  },

  // ==============================================================
  // HOME PAGE
  // ==============================================================
  home: {
    browserTitle: "Yiktan's Portfolio",
    startButton: ">START<",
    interactionBack: "← BACK",

    // ABOUT panel inside the computer screen
    about: {
      heading: "Hi,\nI'm Yiktan.",
      statement: "I make things somewhere between 3D, design and digital experiments.",
      education: "Buddhist Wong Wan Tin College (2021)\nCentral Academy of Fine Arts Art of Design (2022–2026) Media art\nKarlsruhe University of Arts and Design (04/2025–08/2025) (exchange) Communicate design",
      interests: "Big fans of Korea-Pop culture\nAn avid game enthusiast",
      toolsHeading: "Selected Tools",
      tools: "Blender · Adobe Illustrator · Photoshop · InDesign"
    },

    // CONTACT panel inside the computer screen
    contact: {
      name: "LEUNG YIKTAN",
      email: "qyiktandmu@gmail.com",
    }
  },

  // ==============================================================
  // ANIMATION PAGE
  // ==============================================================
  animationPage: {
    browserTitle: "Animation Archive",
    windowTitle: "ANIMATION ARCHIVE ",
    videoLabels: ["01", "02", "03", "04", "05", "06", "07"],
    heading: "Animation",
    subtitle: "ORIGINAL WORK · FAN-MADE WORKS · 3D ANIMATION"
  },

  // ==============================================================
  // DRAWINGS PAGE
  // ==============================================================
  drawingsPage: {
    browserTitle: "Drawings — Yiktan's Portfolio",
    heading: "DRAWINGS",
    subtitle: "ILLUSTRATIONS / 2023",
    captions: [
      "01 / DRAWING",
      "04 / DRAWING",
      "07 / DRAWING",
      "02 / DRAWING",
      "05 / DRAWING",
      "06 / DRAWING",
      "03 / DRAWING"
    ],
    closeButton: "CLOSE ×"
  },

  // ==============================================================
  // GRAPHIC DESIGN PAGE
  // ==============================================================
  graphicDesignPage: {
    browserTitle: "Graphic Design Archive",
    heading: "GRAPHIC\nDESIGN",
    categoryLine: "PRINTED MATTER / VISUAL SYSTEMS",
    selectedWorksLine: "SELECTED WORKS · 2023—2026",

    project01: {
      number: "01",
      title: "KV Visuals\n& Social Media",
      categoryYear: "VISUAL KV · 2026",
      viewButton: "VIEW PROJECT →",
      closeButton: "CLOSE ×"
    },

    project02: {
      number: "02",
      title: "Typography Poetics",
      categoryYear: "Typography EXHIBITION · 2023",
      viewButton: "VIEW PROJECT →",
      closeButton: "CLOSE ×"
    },

    project03: {
      number: "03",
      title: "To Record My First Time Solo Trip",
      category: "BOOK DESIGN · EDITORIAL DESIGN",
      openButton: "OPEN BOOK →",
      previousButton: "← PREVIOUS",
      nextButton: "NEXT →",
      frontCover: "FRONT COVER",
      backCover: "BACK COVER",
      innerCover: "INNER COVER"
    }
  },

  // ==============================================================
  // MEDIA ART PAGE — PROJECT 01
  // ==============================================================
  mediaArtPage: {
    browserTitle: "Media Art Archive — Yiktan",
    project01: {
      archiveLabel: "ARCHIVE / 01 — MEDIA ART",
      title: "Surface-Level\nEating",
      categoryYear: "Interactive Installation · 2026",
      description: "People value their appearance most when out in public; it's key to forming a first impression. Food is a common consumable in life, and I drew an analogy, proposing the concept that ‘faces can also be consumed,’ thus overlaying images of faces onto the food's surface.",
      renderCaption: "Birthday scene ",
      lightingCaption: "Fine dining",
      exhibitionCaption: "Exhibition 00",
      boothCaption: "Exhibition 01",
      processPreview: "Process preview",
      wechatPreview: "Promotion and distribution",
      birthdayCaption: "Animation 01",
      videoCaption01: "motion 02",
      videoCaption02: "motion 00",
      videoCaption03: "motion 01",
      scene02Caption: "Animation 02"
    },

    // MEDIA ART PAGE — PROJECT 02
    project02: {
      archiveLabel: "02 / MEDIA ART",
      title: "I WANT TO\nBACK HOME",
      category: "RPG / INTERACTIVE GAME",
      introduction: "A playable RPG about searching for a way home through an unfamiliar world, where exploration and small encounters gradually reveal the path forward.",
      playHeading: "PLAY THE GAME",
      controlsHeading: "CONTROLS",
      controls: "Arrow Keys — Move\nEnter",
      conceptHeading: "CONCEPT",
      conceptParagraphs: [
        "During a stressful period in my studies and personal life, I found myself missing home more than usual. Since my home is far away from school, I only had the chance to return twice a year.",
        "I Want to Back Home was created from this feeling of homesickness. Through the game, I imagined an alternative way of returning home — even if I could not physically be there, I could rebuild and revisit it within a virtual space.",
        "The game explores memory, distance, and the emotional meaning of home."
      ],
      processHeading: "PROCESS",
      processParagraphs: [
        "I created four main spaces within the game: a bedroom, hallway, living room, and bathroom. These familiar domestic spaces form the basic structure of the home and gradually become part of the protagonist's fragmented memories.",
        "The overall visual style uses muted grey tones to reflect the protagonist's loneliness and emotional state.",
        "As the player moves through the house, they discover and collect fragments of memory hidden within different spaces. With each fragment collected, the protagonist gradually begins to recover their memories.",
        "This change is also represented visually: as more memories are restored, the character slowly begins to glow, symbolising a gradual return of warmth, connection, and a sense of home."
      ]
    },

    // MEDIA ART PAGE — PROJECT 03
    project03: {
      archiveLabel: "03 / MEDIA ART",
      title: "IG FILTERS",
      category: "AR FILTER / INTERACTIVE MEDIA",
      introductionTitle: "IG filter Virtual Jewelry",
      introduction: "is a series of four AR face filters exploring jewelry beyond physical materials. Inspired by metallic accessories and futuristic fashion, I designed digital ornaments that transform the face into a space for wearable, virtual objects.",
      filterLabels: ["virtual butterfly", "virtual head wings", "virtual flower", " virtual mask"]
    }
  },

  // ==============================================================
  // STANDALONE TRAVEL BOOK PAGE
  // ==============================================================
  travelBookPage: {
    browserTitle: "To Record My First Time Solo Trip",
    archiveLabel: "03 / GRAPHIC DESIGN - BOOK DESIGN",
    title: "TO RECORD MY FIRST TIME SOLO TRIP",
    category: "EDITORIAL DESIGN · TRAVEL BOOK",
    instruction: "CLICK THE LOWER PAGE CORNERS TO TURN",
    frontCover: "FRONT COVER",
    backCover: "BACK COVER",
    innerCover: "INNER COVER"
  }
};
