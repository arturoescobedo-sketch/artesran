import './ProfileExperience.css';

// Right column of the "Experience" tab: work history, most recent first.
export default function ProfileExperience({ jobs }) {
  return (
    <section className="panel">
      <header className="panel-heading">Experience</header>
      <div className="panel-body">
        <ul className="media-list experience-list">
          {jobs.map((job) => (
            <li className="media experience-item" key={`${job.company}-${job.start}`}>
              <span className="pull-left experience-logo" aria-hidden="true">
                {job.logo ? <img src={job.logo} alt="" /> : <i className="fa fa-briefcase" />}
              </span>
              <div className="media-body">
                <h4 className="media-heading">{job.role}</h4>
                <p className="experience-company">
                  <strong>{job.company}</strong>
                  {job.location && <span className="text-muted"> · {job.location}</span>}
                </p>
                <p className="experience-dates text-muted">
                  <i className="fa fa-calendar" /> {job.start} – {job.end}
                </p>
                {job.summary && <p className="experience-summary">{job.summary}</p>}
                {job.highlights?.length > 0 && (
                  <ul className="experience-highlights">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
