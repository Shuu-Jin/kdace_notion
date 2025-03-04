import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e6af23b71093474fb40e1b18607dd86d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'KD/Ace',
  domain: 'kdace',
  author: 'Jin',

  // open graph metadata (optional)
  description: 'For Esports Enthusiasts and Passionate Gamers',

  // social usernames (optional)
  twitter: 'ene_0911',
  github: 'shuu-jin',
  linkedin: 'nbbtran2002',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
  {
      title: 'League of Legends',
      pageId: '3014f79a768d47868cc5193b8d6f04ee'
  },
    {
      title: 'Valorant',
      pageId: '47105ff9208c4b008e7622768ae1f489'
  },
  {
      title: 'Genshin Impact',
      pageId: '21106f6a61d847e9a7520541d7c9d85c'
  },
  {
      title: 'Honkai: Star Rail',
      pageId: '187097f4885f4ecd967972345365ac5f'
  },
  {
      title: 'About',
      pageId: 'f15ade45507e44548decbfc2d0a8b51a'
  },
  {
       title: 'Contact',
       pageId: '7e3ef891f43b4090bf2eb9abeda27947'
     }
  ]
})
