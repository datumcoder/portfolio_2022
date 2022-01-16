import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Patrick O'Sullivan", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: "PATRICK O'SULLIVAN",
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I build using modern front-end technologies.',
  paragraphTwo:
    'Building projects with the clients ideas, problem solving is part of the development process',
  paragraphThree: 'Everyday is a new challenge, it is about making the important things happen.',
  CV: 'CV', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_1.jpg',
    title: 'talknative.pl',
    info: 'Language services website',
    info2: 'HTML, CSS, JS',
    url: 'https://www.talknative.pl',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_2.png',
    title: 'brochow.school',
    info: 'Language school',
    info2: 'HTML, CSS, JS, Materialize CSS',
    url: 'https://www.brochow.school',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.jpg',
    title: 'Organika',
    info: 'Beauty treatments',
    info2: 'HTML, CSS, JS, Bootstrap',
    url: 'https://organika.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'datumcoder@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/datumcoder',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/posullivan365/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/datumcoder',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnable: true, // set to false to disable the GitHub stars/fork buttons
};
