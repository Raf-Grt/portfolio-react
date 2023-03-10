const servicesData = [
  {
    _id: crypto.randomUUID(),
    title: "HTML / CSS",
    icon: "bx bxl-html5",
    modal: {
      title: "Connaissances techniques",
      img: `${process.env.PUBLIC_URL}/Certifications-Dyma/c-html.pdf`,
      description: "Voir la certification obtenue avec Dyma",
      info: [
        "HTML5 & CSS3",
        "Utilisation des balises sémantiques",
        "Utilisation des Flex et des Grilles",
        "Préprocesseur SASS",
        "Création de pages responsives",
      ],
    },
  },
  {
    _id: crypto.randomUUID(),
    title: "JavaScript",
    icon: "bx bxl-javascript",
    modal: {
      title: "Connaissances techniques",
      img: `${process.env.PUBLIC_URL}/Certifications-Dyma/c-javascript.pdf`,
      description: "Voir la certification obtenue avec Dyma",
      info: [
        "JavaScript moderne: ES6 et +",
        "Utilisation de l'asynchrone et requêtes AJAX",
        "Maîtrise du DOM",
        "Maîtrise des évènements",
      ],
    },
  },
  {
    _id: crypto.randomUUID(),
    title: "ReactJS",
    icon: "bx bxl-react",
    modal: {
      title: "Connaissances techniques",
      img: `${process.env.PUBLIC_URL}/Certifications-Dyma/c-react.pdf`,
      description: "Voir la certification obtenue avec Dyma",
      info: [
        "Maîtrise du JSX",
        "Hooks: useEffect, useState, useContext...",
        "Fromulaires: React-hook-form & Yup",
        "Gestion des requêtes AJAX",
        "React-router-dom",
      ],
    },
  },
];

export default servicesData;
