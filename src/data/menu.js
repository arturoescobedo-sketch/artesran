// Sidebar navigation. Items with a `path` are React routes; items without one
// are pages that haven't been converted yet. An item is highlighted when the URL
// matches `match` (defaults to `path`); `end: true` requires an exact match.
export const sidebarMenu = [
  {
    label: 'Home',
    icon: 'fa-home',
    children: [{ label: 'Profile', path: '/profile' }],
  },
  {
    label: 'Projects',
    icon: 'fa-briefcase',
    badge: { text: 2, className: 'label-success' },
    children: [
      { label: 'List View', path: '/projects', end: true },
      // No project is picked from the menu, so it opens the first sample project.
      { label: 'Details View', path: '/projects/1', match: '/projects/:id' },
    ],
  },
];
