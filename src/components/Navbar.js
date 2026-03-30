'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

/**
 * Navbar Component
 * Navigation bar displayed on all pages
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">MAP</span>
          <span className="brand-text">Roadmap Planner</span>
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              href="/"
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/roadmap"
              className={`nav-link ${pathname === '/roadmap' ? 'active' : ''}`}
            >
              Roadmap
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
