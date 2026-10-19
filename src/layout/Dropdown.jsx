import { useEffect, useRef, useState } from 'react';

// Header dropdown: a toggle button and a panel that closes on outside click or Escape.
// Uses Bootstrap's `.dropdown` / `.open` / `.dropdown-menu` for positioning.
export default function Dropdown({ toggle, toggleClassName = '', menuClassName = '', label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <li ref={ref} className={`dropdown${open ? ' open' : ''}`}>
      <a
        href="#"
        className={`dropdown-toggle ${toggleClassName}`}
        aria-expanded={open}
        aria-label={label}
        onClick={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
      >
        {toggle}
      </a>
      <ul className={`dropdown-menu header-dropdown ${menuClassName}`} onClick={() => setOpen(false)}>
        {children}
      </ul>
    </li>
  );
}
