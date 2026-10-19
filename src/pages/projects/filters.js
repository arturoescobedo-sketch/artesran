import { useNavigate, useSearchParams } from 'react-router-dom';

export const PER_PAGE_OPTIONS = [3, 6, 9, 12, 15];

const DEFAULTS = { q: '', category: '', per: 9, page: 1 };

const toNumber = (value, fallback) => {
  const n = Number(value);
  return value != null && Number.isFinite(n) ? n : fallback;
};

// Filters live in the list page's query string (/projects?category=Unity&page=2), so links,
// Back/Forward and refresh keep them. Changing a filter from any page goes to the list.
export function useProjectFilters() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const filters = {
    q: params.get('q') ?? DEFAULTS.q,
    category: params.get('category') ?? DEFAULTS.category,
    per: toNumber(params.get('per'), DEFAULTS.per),
    page: toNumber(params.get('page'), DEFAULTS.page),
  };

  // Any change other than the page number starts again from page 1.
  const setFilters = (changes) => navigate(projectsUrl({ ...filters, page: 1, ...changes }));

  return [filters, setFilters];
}

export function projectsUrl(filters) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    if (value !== DEFAULTS[key] && value !== '') params.set(key, value);
  }
  const search = params.toString();
  return `/projects${search ? `?${search}` : ''}`;
}

export function applyFilters(projects, { q, category, per, page }) {
  const keyword = q.trim().toLowerCase();
  const items = projects.filter(
    (p) => (!keyword || p.title.toLowerCase().includes(keyword)) && (!category || p.categories.includes(category)),
  );

  const totalPages = Math.max(1, Math.ceil(items.length / per));
  const current = Math.min(Math.max(1, page), totalPages);
  return {
    total: items.length,
    totalPages,
    page: current,
    items: items.slice((current - 1) * per, current * per),
  };
}
