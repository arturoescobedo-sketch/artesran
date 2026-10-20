// Project data for the list and details pages. Replace with API calls once they exist.
import ironValkyrieDescription from './descriptions/ironValkyrie';
import movesmithDescription from './descriptions/movesmith';

// Categories shown in the sidebar.
export const categories = [
  'CRM',
  'Python',
  'YAML',
  'CiviCRM APIv4',
  'Games & Entertainment',
  'Unity',
  'C#',
];

// Project content, keyed by project id. `title`, `categories`, `image` and `gallery` are required.
// `categories` lists the project's categories (names from the `categories` list above); `status` is shown on
// the details page (hidden when not set); `facts` adds more label/value lines under it, e.g.
// { label: 'Released', value: 'March 2027' } or { label: 'Licence', value: 'Open source' };
// `ribbon` is a short status note shown over the top of the card image (hidden when not set);
// `tagline` is the short description under the title on the project card; `summary` replaces the sample paragraph next to
// the image on the details page; `description` is the long write-up for the Description tab (see
// data/descriptions/); `icon` is the Font Awesome icon in the card's
// corner button (default fa-folder-open); `image` is the card picture and `gallery` the details-page pictures;
// `updates` is the Updates tab, newest first ({ date: 'YYYY-MM', text, avatar }); the header's
// Latest updates dropdown lists every project's updates too.
const projectData = {
  1: {
    title: 'Movesmith for CiviCRM',
    tagline: 'Spend your day on donors not data entry.',
    ribbon: 'In active development',
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
    updates: [
      { date: '2026-09', text: 'Started building Movesmith for CiviCRM.', avatar: '/img/avatars/avatar-08.jpg' },
    ],
    image: '/img/artesranCiviCRM.png',
    gallery: [{ thumb: '/img/artesranCiviCRM.png', full: '/img/artesranCiviCRM.png' }],
  },
  2: {
    title: 'Iron Valkyrie',
    tagline: 'Submitted to the App Store',
    ribbon: 'In Apple Store review',
    categories: ['Games & Entertainment', 'Unity', 'C#'],
    status: 'Submitted to the App Store',
    facts: [{ label: 'Platforms', value: 'iPhone, iPad (Apple Pencil supported)' }],
    summary:
      'Iron Valkyrie is a story-driven mech match-3 RPG. Match gems, power up your pilots\' abilities, and fight ' +
      'through two campaigns and 65 battles to uncover the truth behind a war. One purchase, no loot boxes, ' +
      'Apple Pencil supported.',
    description: ironValkyrieDescription,
    icon: 'fa-gamepad',
    updates: [
      { date: '2026-10', text: 'Submitted Iron Valkyrie to the Apple App Store.', avatar: '/img/avatars/avatar-08.jpg' },
      { date: '2026-09', text: 'Submitted for testing.', avatar: '/img/avatars/avatar-14.jpg' },
      { date: '2026-08', text: 'Original design.', avatar: '/img/avatars/avatar-03.jpg' },
    ],
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
};

export const projects = Object.entries(projectData).map(([id, project]) => ({ id: Number(id), ...project }));

// Every project's updates, newest first, for the header dropdown.
export const latestUpdates = projects
  .flatMap((p) => (p.updates ?? []).map((u) => ({ ...u, project: p.title, to: `/projects/${p.id}` })))
  .sort((a, b) => b.date.localeCompare(a.date));

// '2026-10' -> 'Oct 2026'.
export function formatMonth(date) {
  const [year, month] = date.split('-').map(Number);
  return new Date(year, month - 1).toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

// Placeholder summary/description for projects that don't set their own.
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
};

// Projects shown in the sidebar's Featured panel, in this order (by id).
export const featuredIds = [1, 2];
