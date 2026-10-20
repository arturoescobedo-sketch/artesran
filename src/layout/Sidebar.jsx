import { useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { sidebarMenu } from '../data/menu';

// True when this item, or anything under it, matches the current route.
function containsPath(item, pathname) {
  if (item.path && matchPath({ path: item.match ?? item.path, end: item.end ?? false }, pathname)) return true;
  return item.children?.some((child) => containsPath(child, pathname)) ?? false;
}

// One menu entry. Groups open one branch per level; the current route's branch is open on load.
function MenuItem({ item, isOpen, onToggle, onNavigate, topLevel }) {
  const { pathname } = useLocation();
  const [openChild, setOpenChild] = useState(
    () => item.children?.findIndex((c) => containsPath(c, pathname)) ?? -1,
  );

  if (!item.children) {
    const active = containsPath(item, pathname);
    const linkClass = `side-menu__link${active ? ' is-active' : ''}`;
    const content = (
      <>
        {item.icon && <i className={`fa ${item.icon}`} />}
        <span>{item.label}</span>
      </>
    );
    return (
      <li className={`side-menu__item${topLevel ? '' : ' side-menu__item--child'}`}>
        {item.path ? (
          <Link to={item.path} className={linkClass} onClick={onNavigate} aria-current={active ? 'page' : undefined}>
            {content}
          </Link>
        ) : (
          <a href="#" className={linkClass} title="Coming soon" onClick={(e) => e.preventDefault()}>
            {content}
          </a>
        )}
      </li>
    );
  }

  return (
    <li className={`side-menu__item side-menu__item--group${isOpen ? ' is-open' : ''}`}>
      <a
        href="#"
        className={`side-menu__link${isOpen ? ' is-active' : ''}`}
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        {item.icon && <i className={`fa ${item.icon}`} />}
        <span>{item.label}</span>
        {item.badge && <span className={`badge ${item.badge.className} side-menu__badge`}>{item.badge.text}</span>}
        <i className={`fa ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} side-menu__chevron`} aria-hidden="true" />
      </a>
      {isOpen && (
        <ul className="side-menu__sub">
          {item.children.map((child, i) => (
            <MenuItem
              key={child.label + i}
              item={child}
              isOpen={openChild === i}
              onToggle={() => setOpenChild((cur) => (cur === i ? -1 : i))}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Sidebar({ onNavigate }) {
  const { pathname } = useLocation();
  const branchFor = (path) => sidebarMenu.findIndex((item) => item.children && containsPath(item, path));
  const [openIndex, setOpenIndex] = useState(() => branchFor(pathname));

  // When navigating by other means (cards, header links), open the branch for the new page.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    const branch = branchFor(pathname);
    if (branch !== -1) setOpenIndex(branch);
  }

  return (
    <nav className="app-sidebar" aria-label="Main">
      <ul className="side-menu">
        {sidebarMenu.map((item, i) => (
          <MenuItem
            key={item.label}
            item={item}
            topLevel
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
}
