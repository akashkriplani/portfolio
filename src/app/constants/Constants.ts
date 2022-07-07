import {
  IDynamicScripts,
  INavMenuItems,
  ISocialMediaLinks,
} from '../interfaces';

export const ScriptStore: IDynamicScripts[] = [
  { name: 'oscillator', src: './assets/js/oscillator.js' },
];

export const NavMenuItems: INavMenuItems[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Skills', link: '/skills' },
  { title: 'Experience', link: '/experience' },
  { title: 'Blog', link: '/blog-posts' },
];

export const SocialMediaProfiles: ISocialMediaLinks[] = [
  {
    title: 'Facebook',
    profileUrl: 'https://www.facebook.com/akashkriplani25',
    iconPath: '../../../assets/images/facebook.png',
  },
  {
    title: 'Twitter',
    profileUrl: 'https://twitter.com/kriptweets',
    iconPath: '../../../assets/images/twitter.png',
  },
  {
    title: 'Instagram',
    profileUrl: 'https://www.instagram.com/kripstagram25',
    iconPath: '../../../assets/images/instagram.png',
  },
  {
    title: 'LinkedIn',
    profileUrl: 'https://www.linkedin.com/in/akashkriplani25',
    iconPath: '../../../assets/images/linkedin.png',
  },
  {
    title: 'GitHub',
    profileUrl: 'https://github.com/akashkriplani',
    iconPath: '../../../assets/images/github.png',
  },
  {
    title: 'Medium',
    profileUrl: 'https://akashkriplani.medium.com',
    iconPath: '../../../assets/images/medium.png',
  },
  {
    title: 'Stack Overflow',
    profileUrl: 'https://stackoverflow.com/users/4152622/akash-kriplani',
    iconPath: '../../../assets/images/stackoverflow.png',
  },
];

export const MEDIUM_INTEGRATION_URL: string =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akashkriplani';
