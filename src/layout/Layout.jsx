import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { APP_NAME } from '../brand';
import './layout.css';

const mobileQuery = window.matchMedia('(max-width: 768px)');
const YEAR = new Date().getFullYear();

// Page shell shared by every page: header, sidebar, content area and footer.
export default function Layout() {
  const [isMobile, setIsMobile] = useState(mobileQuery.matches);
  const [sidebarOpen, setSidebarOpen] = useState(!mobileQuery.matches);

  // Crossing the mobile breakpoint resets the sidebar: open on desktop, closed on mobile.
  useEffect(() => {
    const onChange = (e) => {
      setIsMobile(e.matches);
      setSidebarOpen(!e.matches);
    };
    mobileQuery.addEventListener('change', onChange);
    return () => mobileQuery.removeEventListener('change', onChange);
  }, []);

  const appClass = ['app', isMobile && 'app--mobile', sidebarOpen && 'app--sidebar-open'].filter(Boolean).join(' ');

  return (
    <div className={appClass}>
      <Header onToggleSidebar={() => setSidebarOpen((o) => !o)} />
      {/* On mobile the sidebar covers the page, so close it after picking a page. */}
      <Sidebar onNavigate={() => isMobile && setSidebarOpen(false)} />
      <main className="app-main">
        <div className="app-content">
          <Outlet />
        </div>
      </main>
      <footer className="app-footer">
        {YEAR} &copy; {APP_NAME}
        <a
          href="#"
          className="app-footer__top"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <i className="fa fa-angle-up" />
        </a>
      </footer>
    </div>
  );
}
