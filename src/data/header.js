// Data for the header dropdowns. Badge counts are set here; the lists show the items.
export const counts = { activeProjects: 2, reviews: 5 };

// Project progress dropdown. `to` (optional) links the row to a page.
// `variant` colours the bar: success (green), info (blue), warning (orange), danger (red).
export const projectProgress = [
  { title: 'Iron Valkyrie', percent: 100, variant: 'success', to: '/projects/2' },
  { title: 'Movesmith for CiviCRM', percent: 20, variant: 'info', to: '/projects/1' },
];

// Latest reviews dropdown. Sample text until real reviews/comments are stored somewhere.
export const latestReviews = [
  { project: 'Iron Valkyrie', to: '/projects/2', time: 'Just now', text: 'Sample review text.', avatar: '/img/avatars/avatar-08.jpg' },
  { project: 'Iron Valkyrie', to: '/projects/2', time: '10 mins', text: 'Sample review text.', avatar: '/img/avatars/avatar-14.jpg' },
  { project: 'Movesmith for CiviCRM', to: '/projects/1', time: '3 hrs', text: 'Sample review text.', avatar: '/img/avatars/avatar-03.jpg' },
  { project: 'Iron Valkyrie', to: '/projects/2', time: '1 day', text: 'Sample review text.', avatar: '/img/avatars/avatar-19.jpg' },
  { project: 'Movesmith for CiviCRM', to: '/projects/1', time: '2 days', text: 'Sample review text.', avatar: '/img/avatars/avatar-11.jpg' },
];
