import { Link } from 'react-router-dom';
import { usePageTitle } from '../../brand';
import ProjectSidebar from './ProjectSidebar';
import ProjectCard from './ProjectCard';
import { applyFilters, PER_PAGE_OPTIONS, projectsUrl, useProjectFilters } from './filters';
import { projects } from '../../data/projects';
import './projects.css';

export default function ProjectListPage() {
  const [filters, setFilters] = useProjectFilters();
  const result = applyFilters(projects, filters);

  usePageTitle('Projects');

  return (
    <div className="row">
      <ProjectSidebar />
      <div className="col-md-9">
        <section className="panel">
          <div className="panel-body project-toolbar">
            <div className="project-toolbar__field">
              <label htmlFor="per">Show</label>
              <select id="per" className="project-toolbar__select" value={filters.per} onChange={(e) => setFilters({ per: Number(e.target.value) })}>
                {PER_PAGE_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n} Per Page
                  </option>
                ))}
              </select>
            </div>
            <Pagination filters={filters} page={result.page} totalPages={result.totalPages} />
          </div>
        </section>

        <div className="row project-grid">
          {result.items.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {result.total === 0 && (
            <div className="col-md-12">
              <section className="panel">
                <div className="panel-body text-center">
                  No projects match these filters. <Link to="/projects">Clear filters</Link>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Pagination({ filters, page, totalPages }) {
  if (totalPages <= 1) return null;
  const to = (n) => projectsUrl({ ...filters, page: n });
  return (
    <ul className="pagination pagination-sm project-toolbar__pages">
      {page > 1 && (
        <li>
          <Link to={to(page - 1)} aria-label="Previous page">«</Link>
        </li>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <li key={n} className={n === page ? 'active' : undefined}>
          <Link to={to(n)}>{n}</Link>
        </li>
      ))}
      {page < totalPages && (
        <li>
          <Link to={to(page + 1)} aria-label="Next page">»</Link>
        </li>
      )}
    </ul>
  );
}
