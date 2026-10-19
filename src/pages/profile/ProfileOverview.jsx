import ServicesSection from './ServicesSection';
import { APP_NAME } from '../../brand';

// Right column of the "Profile" tab: summary card and details.
export default function ProfileOverview({ user }) {
  // Rows without a value in the profile data are left out.
  const detailRows = [
    ['First Name', user.firstName],
    ['Last Name', user.lastName],
    ['Country', user.country],
    ['Birthday', user.birthday],
    ['Occupation', user.designation],
    ['Email', user.email],
    ['Mobile', user.mobile],
  ].filter(([, value]) => value);

  return (
    <>
      <section className="panel">
        <div className="panel-body profile-summary">
          <h1 className="profile-summary__name">{user.name}</h1>
          <p className="profile-summary__role">{user.designation}</p>
          <ServicesSection {...user.services} />
          <div className="profile-summary__actions">
            <ContactButton email={user.email} />
            <ul className="social-links">
              {user.social
                .filter((link) => !link.hidden)
                .map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      title={link.name}
                      aria-label={link.name}
                      // Real profile URLs open in a new tab; '#' placeholders do nothing.
                      {...(link.url === '#'
                        ? { onClick: (e) => e.preventDefault() }
                        : { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.icon === 'x' ? <XLogo /> : <i className={`fa ${link.icon}`} />}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-body profile-details">
          <h2 className="profile-details__title">Profile</h2>
          <dl className="profile-details__grid">
            {detailRows.map(([label, value]) => (
              <div className="profile-details__row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

// X (formerly Twitter) logo; Font Awesome 4 predates it. Uses the link's text colour.
function XLogo() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true" style={{ verticalAlign: '-2px' }}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

// Opens the visitor's email program with a new message to the profile's address.
function ContactButton({ email }) {
  const subject = encodeURIComponent(`Contact from the ${APP_NAME} website`);
  return (
    <a className="btn contact-btn" href={`mailto:${email}?subject=${subject}`}>
      <i className="fa fa-envelope" /> Contact me
    </a>
  );
}
