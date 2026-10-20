// Data for the header dropdowns. The Latest updates dropdown reads each project's `updates` (data/projects.js).
export const counts = { activeProjects: 2 };

// Project progress dropdown. `to` (optional) links the row to a page.
// `variant` colours the bar: success (green), info (blue), warning (orange), danger (red).
export const projectProgress = [
  { title: 'Iron Valkyrie', percent: 100, variant: 'success', to: '/projects/2' },
  { title: 'Movesmith for CiviCRM', percent: 20, variant: 'info', to: '/projects/1' },
];
