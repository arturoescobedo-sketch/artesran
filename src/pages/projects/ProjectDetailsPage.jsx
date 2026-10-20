import { Fragment, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageTitle } from '../../brand';
import ProjectSidebar from './ProjectSidebar';
import ProjectCard from './ProjectCard';
import CommentBox from './CommentBox';
import ProjectDescription from './ProjectDescription';
import { projectsUrl } from './filters';
import { formatMonth, projects, sampleDetails } from '../../data/projects';
import './projects.css';

// Keyed by the project id so the whole page starts fresh when moving between projects
// (gallery selection, open tab, comment text, Follow state). Don't add per-component keys
// inside the page for this: sibling components with the same key confuse React.
export default function ProjectDetailsPage() {
  const { id } = useParams();
  return <ProjectDetails key={id} id={id} />;
}

function ProjectDetails({ id }) {
  const project = projects.find((p) => String(p.id) === id);

  usePageTitle(project?.title);

  if (!project) return <Navigate to="/projects" replace />;

  const details = sampleDetails;
  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="row">
      <ProjectSidebar />
      <div className="col-md-9">
        <section className="panel">
          <div className="panel-body">
            <div className="row">
            <div className="col-md-6">
              <Gallery images={project.gallery} />
            </div>
            <div className="col-md-6">
              <h4 className="project-detail__title">{project.title}</h4>
              <p>{project.summary ?? details.summary}</p>
              <div className="project-meta">
                <div className="project-meta__row">
                  <strong>Categories:</strong>{' '}
                  {project.categories.map((category, i) => (
                    <Fragment key={category}>
                      <Link rel="tag" to={projectsUrl({ category })}>
                        {category}
                      </Link>
                      {i < project.categories.length - 1 ? ', ' : '.'}
                    </Fragment>
                  ))}
                </div>
                {project.status && (
                  <div className="project-meta__row">
                    <strong>Status:</strong> {project.status}
                  </div>
                )}
                {project.facts?.map(({ label, value }) => (
                  <div className="project-meta__row" key={label}>
                    <strong>{label}:</strong> {value}
                  </div>
                ))}
              </div>
              <FollowButton />
            </div>
            </div>
          </div>
        </section>

        <DetailTabs description={project.description ?? details.description} updates={project.updates ?? []} />

        <div className="row project-grid">
          {related.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <CommentBox placeholder={`Share your thoughts about ${project.title}...`} />
      </div>
    </div>
  );
}

// Follow / Following toggle. Not saved anywhere yet: it resets on reload until there's a backend
// (or a link, such as a mailing-list sign-up) for it to use.
function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <button className="btn btn-pill btn-primary" type="button" aria-pressed={following} onClick={() => setFollowing((f) => !f)}>
      <i className={`fa ${following ? 'fa-check' : 'fa-plus'}`} /> {following ? 'Following' : 'Follow'}
    </button>
  );
}

// Big image with clickable thumbnails underneath (thumbnails only when there's more than one image).
function Gallery({ images }) {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="project-gallery__main">
        <img src={images[selected].full} alt="" />
      </div>
      {images.length > 1 && <div className="project-gallery__thumbs">
        {images.map((img, i) => (
          <a
            href="#"
            key={i}
            className={i === selected ? 'is-selected' : undefined}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === selected || undefined}
            onClick={(e) => {
              e.preventDefault();
              setSelected(i);
            }}
          >
            <img src={img.thumb} alt="" />
          </a>
        ))}
      </div>}
    </>
  );
}

function DetailTabs({ description, updates }) {
  const [tab, setTab] = useState('description');
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'updates', label: `Updates (${updates.length})` },
  ];

  return (
    <section className="panel">
      <header className="panel-heading project-tabs">
        <ul className="nav nav-tabs" role="tablist">
          {tabs.map((t) => (
            <li key={t.id} className={tab === t.id ? 'active' : undefined}>
              <a
                href="#"
                role="tab"
                aria-selected={tab === t.id}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(t.id);
                }}
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <div className="panel-body">
        <div className="tab-content">
          {tab === 'description' ? (
            <div className="tab-pane active">
              {/* Real projects have a structured write-up; sample projects a list of paragraphs. */}
              {Array.isArray(description) ? (
                <>
                  <h4 className="project-description__title">Project Description</h4>
                  {description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </>
              ) : (
                <ProjectDescription {...description} />
              )}
            </div>
          ) : (
            <div className="tab-pane active">
              {updates.map((u, i) => (
                <article className="review-item" key={i}>
                  <img className="review-item__avatar" src={u.avatar} alt="" />
                  <div>
                    <span className="review-item__text">{u.text}</span>
                    <p>
                      <i className="fa fa-clock-o" /> {formatMonth(u.date)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
