'use client';

import './ProgressBar.css';

/**
 * ProgressBar Component
 * Displays progress with a visual bar
 */
export default function ProgressBar({ percentage = 0 }) {
  // Ensure percentage is between 0 and 100
  const validPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-wrapper">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${validPercentage}%` }}
          >
            <div className="progress-bar-shine"></div>
          </div>
        </div>
      </div>
      <div className="progress-percentage">
        <span className="percentage-text">{Math.round(validPercentage)}%</span>
      </div>
    </div>
  );
}
