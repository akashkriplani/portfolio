import {
  IDynamicScripts,
  INavMenuItems,
  ISocialMediaLinks
} from '../interfaces';

import { Tag } from 'ng-tagcanvas';

export const ScriptStore: IDynamicScripts[] = [
  { name: 'oscillator', src: './assets/js/oscillator.js' }
];

export const NavMenuItems: INavMenuItems[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Skills', link: '/skills' },
  { title: 'Experience', link: '/experience' },
  { title: 'Blog', link: '/blog-posts' }
];

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
    profileUrl: 'https://www.instagram.com/kripstagram25',
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

export const MEDIUM_INTEGRATION_URL: string =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akashkriplani';