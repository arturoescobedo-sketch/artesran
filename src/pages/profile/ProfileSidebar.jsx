import { Link, useMatch } from 'react-router-dom';
import './profile.css';

function NavLink({ to, icon, children }) {
  const active = useMatch(to);
  return (
    <li>
      <Link to={to} className={`profile-card__link${active ? ' is-active' : ''}`} aria-current={active ? 'page' : undefined}>
        <i className={`fa ${icon}`} /> {children}
      </Link>
    </li>
  );
}

// Left column: avatar card with the Profile / Experience menu, plus the facts list.
export default function ProfileSidebar({ user, experienceCount }) {
  return (
    <aside className="col-lg-3">
      <section className="panel profile-card">
        <div className="profile-card__header">
          <span className="profile-card__avatar">
            <img src={user.avatar} alt="" />
          </span>
          <h1 className="profile-card__name">{user.name}</h1>
          <p className="profile-card__email">{user.email}</p>
        </div>
        <ul className="profile-card__nav">
          <NavLink to="/profile" icon="fa-user">
            Profile
          </NavLink>
          <NavLink to="/profile/experience" icon="fa-briefcase">
            Experience
            <span className="label label-primary profile-card__count">{experienceCount}</span>
          </NavLink>
        </ul>
      </section>
      <section className="panel">
        <div className="panel-body">
          <dl className="profile-facts">
            {user.info.map((row) => (
              <div className="profile-facts__row" key={row.title}>
                <dt>{row.title}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </aside>
  );
}
