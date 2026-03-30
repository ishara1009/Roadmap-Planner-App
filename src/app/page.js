'use client';

import Link from 'next/link';
import './page.css';

export default function HomePage() {
  return (
    <main className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">Roadmap Planner</h1>
          <p className="hero-subtitle">
            Organize your goals and track your progress with an interactive
            roadmap
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">LIST</div>
            <h3>Create Roadmaps</h3>
            <p>Build visual roadmaps with multiple steps and milestones</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">DONE</div>
            <h3>Track Progress</h3>
            <p>Monitor your progress with real-time completion tracking</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">CHART</div>
            <h3>Visual Timeline</h3>
            <p>See your journey with beautiful visual timelines</p>
          </div>
        </div>

        <div className="cta-section">
          <Link href="/roadmap" className="cta-button">
            Start Planning Your Roadmap
          </Link>
        </div>

        <div className="hero-footer">
          <p>
            Plan, organize, and achieve your goals step by step
          </p>
        </div>
      </div>
    </main>
  );
}
