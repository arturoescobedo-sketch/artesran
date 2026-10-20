import { Link } from 'react-router-dom';
import { categories, featuredIds, projects } from '../../data/projects';
import { projectsUrl, useProjectFilters } from './filters';

const featured = featuredIds.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

// Left column shared by the list and details pages. Each panel is also exported on its own.
export default function ProjectSidebar() {
  const [filters, setFilters] = useProjectFilters();
  return (
    <div className="col-md-3">
      <SearchPanel value={filters.q} onSearch={(q) => setFilters({ q })} />
      <CategoryPanel filters={filters} />
      <FeaturedPanel items={featured} />
    </div>
  );
}

export function SearchPanel({ value, onSearch }) {
  return (
    <section className="panel">
      <div className="panel-body">
        {/* key resets the box when the search changes elsewhere (e.g. Back button) */}
        <form
          key={value}
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(new FormData(e.currentTarget).get('q').trim());
          }}
        >
          <input type="search" name="q" defaultValue={value} placeholder="Keyword Search" className="form-control" />
        </form>
      </div>
    </section>
  );
}

export function CategoryPanel({ filters }) {
  return (
    <section className="panel">
      <header className="panel-heading">
        <span className="label label-primary">Filters</span>
      </header>
      <div className="panel-body">
        <ul className="category-list">
          {categories.map((category) => {
            const selected = filters.category === category;
            return (
              <li key={category}>
                {/* Clicking the selected category again clears it. */}
                <Link
                  to={projectsUrl({ ...filters, page: 1, category: selected ? '' : category })}
                  aria-current={selected || undefined}
                >
                  <span className={`label ${selected ? 'label-primary' : 'label-success'}`}>
                    <i className="fa fa-angle-right" /> {category}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// Highlighted projects (set by `featuredIds` in data/projects.js), linking to their pages.
export function FeaturedPanel({ title = 'Featured', items }) {
  return (
    <section className="panel">
      <header className="panel-heading">{title}</header>
      <div className="panel-body">
        <div className="featured-list">
          {items.map((project) => {
            const url = `/projects/${project.id}`;
            return (
              <article className="featured-item" key={project.id}>
                <Link to={url} className="featured-item__thumb" tabIndex={-1} aria-hidden="true">
                  <img src={project.image} alt="" />
                </Link>
                <div>
                  <Link to={url} className="featured-item__title">
                    {project.title}
                  </Link>
                  {project.tagline && <p className="featured-item__text">{project.tagline}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
