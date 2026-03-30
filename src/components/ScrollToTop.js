'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop Component
 * Automatically scrolls page to top when route changes
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top of page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
