// Sample project data, adapted from the theme's product pages. Replace with API calls
// (and real artwork) once they exist.
import ironValkyrieDescription from './descriptions/ironValkyrie';
import movesmithDescription from './descriptions/movesmith';

// Categories shown in the sidebar. Sample projects get one each, in turn.
export const categories = [
  'CRM',
  'Python',
  'YAML',
  'CiviCRM APIv4',
  'Games & Entertainment',
  'Unity',
  'C#',
  'Technology',
];

// Number of projects in the grid (real ones first; the rest are samples).
const PROJECT_COUNT = 8;

// A project that so far only has its own image (card and details page); add more fields with
// e.g. `{ ...withImage('/img/x.jpg'), title: 'My project' }`.
function withImage(src) {
  return { image: src, gallery: [{ thumb: src, full: src }] };
}

// Real project content, keyed by project id; anything not set here keeps its sample value.
// `categories` lists the project's categories (names from the `categories` list above); `status` is shown on
// the details page (hidden when not set); `facts` adds more label/value lines under it, e.g.
// { label: 'Released', value: 'March 2027' } or { label: 'Licence', value: 'Open source' };
// `tagline` is the short description under the title on the project card; `summary` replaces the sample paragraph next to
// the image on the details page; `description` is the long write-up for the Description tab (see
// data/descriptions/); `icon` is the Font Awesome icon in the card's
// corner button (default fa-folder-open); `image` (card) and `gallery` (details page) are required
// for every project; withImage() sets both from one picture.
const realProjects = {
  1: {
    title: 'Movesmith for CiviCRM',
    tagline: 'Spend your day on donors not data entry.',
    categories: ['CRM', 'Python', 'YAML', 'CiviCRM APIv4'],
    status: 'Under development',
    facts: [{ label: 'Works with', value: 'CiviCRM (APIv4)' }],
    summary:
      'Movesmith lets fundraising teams work their donor database by asking. Find records, build segments, ' +
      "see what's outstanding, get the history of a relationship summarised, check totals by campaign — and make " +
      'the updates that follow, with your approval before anything is written. It knows how fundraising data ' +
      'actually fits together rather than treating it as generic rows, and it runs on the CRM you already have.',
    description: movesmithDescription,
    icon: 'fa-address-card',
    image: '/img/artesranCiviCRM.png',
    gallery: [{ thumb: '/img/artesranCiviCRM.png', full: '/img/artesranCiviCRM.png' }],
  },
  2: {
    title: 'Iron Valkyrie',
    tagline: 'Available on the App Store',
    categories: ['Games & Entertainment', 'Unity', 'C#'],
    status: 'Submitted to the App Store',
    facts: [{ label: 'Platforms', value: 'iPhone, iPad (Apple Pencil supported)' }],
    summary:
      'Iron Valkyrie is a story-driven mech match-3 RPG. Match gems, power up your pilots\' abilities, and fight ' +
      'through two campaigns and 65 battles to uncover the truth behind a war. One purchase, no loot boxes, ' +
      'Apple Pencil supported.',
    description: ironValkyrieDescription,
    icon: 'fa-gamepad',
    image: '/img/kira_volkov.png',
    gallery: [
      { thumb: '/img/kira_volkov.png', full: '/img/kira_volkov.png' },
      { thumb: '/img/iron-valkyrie-screen-3.png', full: '/img/iron-valkyrie-screen-3.png' },
      { thumb: '/img/iron-valkyrie-screen-1.png', full: '/img/iron-valkyrie-screen-1.png' },
      { thumb: '/img/iron-valkyrie-screen-2.png', full: '/img/iron-valkyrie-screen-2.png' },
      { thumb: '/img/iron-valkyrie-screen-4.png', full: '/img/iron-valkyrie-screen-4.png' },
      { thumb: '/img/iron-valkyrie-screen-5.png', full: '/img/iron-valkyrie-screen-5.png' },
      { thumb: '/img/splash_intro.png', full: '/img/splash_intro.png' },
    ],
  },
  3: withImage('/img/techImage.jpg'),
  4: withImage('/img/product4.jpg'),
  5: withImage('/img/product5.jpg'),
  6: withImage('/img/product6.jpg'),
  7: withImage('/img/product7.webp'),
  8: withImage('/img/javier.webp'),
};

export const projects = Array.from({ length: PROJECT_COUNT }, (_, i) => ({
  id: i + 1,
  title: `Sample Project ${i + 1}`,
  categories: [categories[i % categories.length]],
  tagline: 'Short description of the project.',
  ...realProjects[i + 1],
}));

// Details shared by every sample project until real data exists.
export const sampleDetails = {
  summary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
    'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ' +
    'a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ' +
    'remaining essentially unchanged.',
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nisi purus. Aliquam eget suscipit ligula. ' +
      'Donec convallis vestibulum egestas. Morbi molestie dapibus lorem et congue. Morbi rhoncus euismod tortor, ac ' +
      'ullamcorper mauris sagittis vitae. Pellentesque et nibh sed nunc sagittis euismod. In hac habitasse platea dictumst.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nisi purus. Aliquam eget suscipit ligula. ' +
      'Donec convallis vestibulum egestas. Morbi molestie dapibus lorem et congue. In hac habitasse platea dictumst.',
  ],
  reviews: [
    { avatar: '/img/avatars/avatar-08.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', when: '1 hours ago' },
    { avatar: '/img/avatars/avatar-14.jpg', text: 'Nulla vel metus scelerisque ante sollicitudin commodo', when: '23 mins ago' },
    { avatar: '/img/avatars/avatar-03.jpg', text: 'Donec lacinia congue felis in faucibus.', when: '15 mins ago' },
  ],
};

// Projects shown in the sidebar's Featured panel, in this order (by id).
export const featuredIds = [1, 2];
