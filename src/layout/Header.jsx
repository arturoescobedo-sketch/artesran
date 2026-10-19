import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { APP_NAME } from '../brand';
import { counts, projectProgress, latestReviews } from '../data/header';
import { user } from '../data/profile';

// A dropdown row: a router link when it has somewhere to go, otherwise an inert link.
function RowLink({ to, children }) {
  if (to) return <Link to={to}>{children}</Link>;
  return (
    <a href="#" onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
}

function DropdownTitle({ children }) {
  return (
    <>
      <li className="header-dropdown__arrow" aria-hidden="true" />
      <li>
        <p className="header-dropdown__title">{children}</p>
      </li>
    </>
  );
}

export default function Header({ onToggleSidebar }) {
  return (
    <header className="app-header">
      <button type="button" className="app-header__toggle" aria-label="Toggle navigation" onClick={onToggleSidebar}>
        <i className="fa fa-bars" />
      </button>
      <Link to="/" className="app-header__brand">
        {APP_NAME}
      </Link>

      <ul className="app-header__menus">
        <Dropdown
          label="Project progress"
          toggleClassName="header-icon-btn"
          toggle={
            <>
              <i className="fa fa-tasks" />
              <span className="badge header-badge header-badge--green">{counts.activeProjects}</span>
            </>
          }
        >
          <DropdownTitle>You have {counts.activeProjects} active projects</DropdownTitle>
          {projectProgress.map((task) => (
            <li key={task.title}>
              <RowLink to={task.to}>
                <div className="progress-row">
                  <span className="progress-row__name">{task.title}</span>
                  <span className="progress-row__percent">{task.percent}%</span>
                </div>
                <div className="progress progress-striped progress-row__bar">
                  <div
                    className={`progress-bar${task.variant ? ` progress-bar-${task.variant}` : ''}`}
                    role="progressbar"
                    aria-valuenow={task.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${task.percent}%` }}
                  >
                    <span className="sr-only">{task.percent}% complete</span>
                  </div>
                </div>
              </RowLink>
            </li>
          ))}
          <li>
            <Link to="/projects">See all projects</Link>
          </li>
        </Dropdown>

        <Dropdown
          label="Latest reviews"
          toggleClassName="header-icon-btn"
          menuClassName="header-dropdown--reviews"
          toggle={
            <>
              <i className="fa fa-comments-o" />
              <span className="badge header-badge header-badge--red">{counts.reviews}</span>
            </>
          }
        >
          <DropdownTitle>You have {counts.reviews} new reviews</DropdownTitle>
          {latestReviews.map((review, i) => (
            <li key={i}>
              <RowLink to={review.to}>
                <img className="review-row__avatar" alt="" src={review.avatar} />
                <span className="review-row__head">
                  <span className="review-row__project">{review.project}</span>
                  <span className="review-row__time">{review.time}</span>
                </span>
                <span className="review-row__text">{review.text}</span>
              </RowLink>
            </li>
          ))}
          <li>
            <Link to="/projects">See all projects</Link>
          </li>
        </Dropdown>
      </ul>

      <ul className="app-header__account">
        <li className="app-header__search-box">
          <i className="fa fa-search" aria-hidden="true" />
          <input type="search" className="form-control app-header__search" placeholder="Search" aria-label="Search" />
        </li>
        <Dropdown
          toggleClassName="account-btn"
          menuClassName="header-dropdown--account"
          toggle={
            <>
              <img alt="" src={user.avatar} className="account-btn__avatar" />
              <span className="account-btn__name">{user.firstName}</span> <b className="caret" />
            </>
          }
        >
          <li>
            <Link to="/profile">
              <i className="fa fa-suitcase" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i className="fa fa-briefcase" /> Projects
            </Link>
          </li>
        </Dropdown>
      </ul>
    </header>
  );
}
