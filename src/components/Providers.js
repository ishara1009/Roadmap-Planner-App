'use client';

import { RoadmapProvider } from '@/context/RoadmapContext';

/**
 * Providers Component
 * Wraps the application with necessary providers and contexts
 */
export function Providers({ children }) {
  return <RoadmapProvider>{children}</RoadmapProvider>;
}
