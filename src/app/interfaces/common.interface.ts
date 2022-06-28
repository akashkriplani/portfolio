export interface INavMenuItems {
  title: string;
  link: string;
}

export interface ISocialMediaLinks {
  title: string;
  profileUrl: string;
  iconPath: string;
}

export interface IMediumBlogPostsResponse {
  items: IPostItems[];
}

export interface IPostItems {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}
