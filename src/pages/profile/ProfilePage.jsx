import { usePageTitle } from '../../brand';
import ProfileSidebar from './ProfileSidebar';
import ProfileOverview from './ProfileOverview';
import ProfileExperience from './ProfileExperience';
import { user, experience } from '../../data/profile';

// /profile shows the overview, /profile/experience shows the work history.
export default function ProfilePage({ view = 'overview' }) {
  usePageTitle(view === 'experience' ? 'Experience' : 'Profile');

  return (
    <div className="row">
      <ProfileSidebar user={user} experienceCount={experience.length} />
      <section className="col-lg-9">
        {view === 'experience' ? <ProfileExperience jobs={experience} /> : <ProfileOverview user={user} />}
      </section>
    </div>
  );
}
