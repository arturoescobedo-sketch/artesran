import { Link } from 'react-router-dom';

// One tile in the project grid; links to the details page.
export default function ProjectCard({ project }) {
  const url = `/projects/${project.id}`;
  return (
    <div className="col-md-4">
      <article className="panel project-card">
        <div className="project-card__media">
          <img src={project.image} alt="" />
          <Link to={url} className="project-card__action" aria-label={`View ${project.title}`}>
            <i className={`fa ${project.icon ?? 'fa-folder-open'}`} />
          </Link>
        </div>
        <div className="panel-body project-card__body">
          <h4 className="project-card__title">
            <Link to={url}>{project.title}</Link>
          </h4>
          {project.tagline && <p className="project-card__tagline">{project.tagline}</p>}
        </div>
      </article>
    </div>
  );
}
