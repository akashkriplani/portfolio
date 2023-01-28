import {
  IDynamicScripts,
  INavMenuItems,
  ISocialMediaLinks,
  ISkills,
  IExperience,
  INewExperience
} from '../interfaces';

import { Tag } from 'ng-tagcanvas';

export const ScriptStore: IDynamicScripts[] = [
  { name: 'oscillator', src: './assets/js/oscillator.js' },
  { name: 'jquery', src: './assets/js/jquery.js' },
  { name: 'skills', src: './assets/js/skills.js' }
];

export const NavMenuItems: INavMenuItems[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Skills', link: '/skills' },
  { title: 'Experience', link: '/experience' },
  { title: 'Blog', link: '/blog-posts' }
];

export const SKILLS: ISkills = {
  techSkills: [
    'HTML',
    'CSS / SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'NgRx',
    'GraphQL',
    'Git',
    'Bitbucket'
  ],
  mgmtSkills: [
    'Understanding UX',
    'Strategic Planning',
    'Developing front-end architecture',
    'Innovative Approach',
    'Code Reviewing',
    'Critical Thinking',
    'Mentoring',
    'Teamwork and Delegation',
    'Coordinating'
  ],
  softSkills: [
    'Leadership',
    'Teamwork',
    'Work Ethic',
    'Problem Solving',
    'Public Speaking',
    'Professional Writing',
    'Punctuality',
    'Digital Literacy',
    'Intercultural Fluency'
  ]
};

export const SocialMediaProfiles: ISocialMediaLinks[] = [
  {
    title: 'Facebook',
    profileUrl: 'https://www.facebook.com/akashkriplani25',
    iconPath: '../../../assets/images/facebook.png'
  },
  {
    title: 'Twitter',
    profileUrl: 'https://twitter.com/kriptweets',
    iconPath: '../../../assets/images/twitter.png'
  },
  {
    title: 'Instagram',
    profileUrl: 'https://www.instagram.com/kripstagram',
    iconPath: '../../../assets/images/instagram.png'
  },
  {
    title: 'LinkedIn',
    profileUrl: 'https://www.linkedin.com/in/akashkriplani25',
    iconPath: '../../../assets/images/linkedin.png'
  },
  {
    title: 'GitHub',
    profileUrl: 'https://github.com/akashkriplani',
    iconPath: '../../../assets/images/github.png'
  },
  {
    title: 'Medium',
    profileUrl: 'https://akashkriplani.medium.com',
    iconPath: '../../../assets/images/medium.png'
  },
  {
    title: 'Stack Overflow',
    profileUrl: 'https://stackoverflow.com/users/4152622/akash-kriplani',
    iconPath: '../../../assets/images/stackoverflow.png'
  }
];

export const TAGS: Tag[] = [
  { weight: 22, text: 'Git' },
  { weight: 24, text: 'JavaScript' },
  { weight: 24, text: 'NgRx' },
  { weight: 20, text: 'Bootstrap' },
  { weight: 32, text: 'Angular' },
  { weight: 30, text: 'TypeScript' },
  { weight: 18, text: 'npm' },
  { weight: 20, text: 'CSS3' },
  { weight: 16, text: 'GraphQL' },
  { weight: 30, text: 'HTML5' },
  { weight: 24, text: 'JSON' },
  { weight: 28, text: 'Bitbucket' },
  { weight: 24, text: 'SCSS' },
  { weight: 20, text: 'TFS' },
  { weight: 16, text: 'Angular.js' },
  { weight: 20, text: 'SQL' }
];

export const TAG_CANVAS_OPTIONS: TagCanvasOptions = {
  clickToFront: 500,
  textColour: '#FFF',
  outlineThickness: 0.5,
  outlineColour: 'transparent',
  maxSpeed: 0.05,
  freezeActive: true,
  shuffleTags: true,
  shape: 'sphere',
  zoom: 1,
  wheelZoom: false,
  noSelect: false,
  freezeDecel: true,
  fadeIn: 3000,
  initial: [0.3, -0.1],
  depth: 1.1,
  weight: true,
  reverse: true
};

export const NEW_EXPERIENCES: INewExperience[] = [
  {
    accentColor: '#41516c',
    date: '2022',
    title: 'Staff Engineer, Nagarro',
    description: `Working as a senior front end Angular developer for a South African Bank`
  },
  {
    accentColor: '#fbca3e',
    date: '2021',
    title: 'Tech Lead, Fiserv',
    description: `Worked as an Angular developer on a in-house banking product`
  },
  {
    accentColor: '#e24a68',
    date: '2019',
    title: 'Senior Associate L1, Publicis Sapient',
    description: `Worked as an Angular developer for a US telecommunications client`
  },
  {
    accentColor: '#1b5f8c',
    date: '2018',
    title: 'Senior Associate, Nagarro',
    description: `Worked as an Angular developer for a South African Bank which is responsible for Wealth Management of its rich and wealthy customers`
  },
  {
    accentColor: '#4cadad',
    date: '2014',
    title: 'Programmer Analyst, Cognizant',
    description: `Worked as a UI developer for in-house retailmate solutions team`
  }
];

export const EXPERIENCES: IExperience[] = [
  {
    company: 'Nagarro',
    designation: 'Staff Engineer',
    yearRange: '2022 - Present',
    role: 'Working as a senior front end Angular developer'
  },
  {
    company: 'Fiserv',
    designation: 'Tech Lead',
    yearRange: '2021 - 2022',
    role: 'Worked as a senior front end Angular developer'
  },
  {
    company: 'Publicis Sapient',
    designation: 'Senior Associate L1',
    yearRange: '2019 - 2021',
    role: 'Worked as a senior front end Angular developer'
  },
  {
    company: 'Nagarro',
    designation: 'Senior Associate',
    yearRange: '2018 - 2019',
    role: 'Worked as a front end Angular developer'
  },
  {
    company: 'Cognizant',
    designation: 'Programmer Analyst',
    yearRange: '2014 - 2017',
    role: 'Worked as a front end Angular developer'
  }
];

export const MEDIUM_INTEGRATION_URL: string =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akashkriplani';
