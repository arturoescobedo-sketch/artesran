import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ProfilePage from './pages/profile/ProfilePage';
import ProjectListPage from './pages/projects/ProjectListPage';
import ProjectDetailsPage from './pages/projects/ProjectDetailsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* No dashboard yet, so the profile page is the landing page. */}
        <Route index element={<Navigate to="/profile" replace />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/experience" element={<ProfilePage view="experience" />} />
        <Route path="projects" element={<ProjectListPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Route>
    </Routes>
  );
}
