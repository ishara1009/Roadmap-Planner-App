'use client';

import './NodeCard.css';

/**
 * NodeCard Component
 * Displays individual roadmap steps
 */
export default function NodeCard({ node, onToggle, onDelete }) {
  return (
    <div className={`node-card ${node.completed ? 'completed' : ''}`}>
      {/* Node Header */}
      <div className="node-header">
        <h3 className="node-title">{node.title}</h3>
        <button
          className="delete-btn"
          onClick={onDelete}
          aria-label="Delete step"
          title="Delete this step"
        >
          ✕
        </button>
      </div>

      {/* Node Body */}
      <div className="node-body">
        {node.description && (
          <p className="node-description">{node.description}</p>
        )}

        {node.duration && (
          <div className="node-meta">
            <span className="meta-label">Duration:</span>
            <span className="meta-value">{node.duration}</span>
          </div>
        )}
      </div>

      {/* Node Footer */}
      <div className="node-footer">
        <button
          className={`toggle-btn ${node.completed ? 'active' : ''}`}
          onClick={onToggle}
          aria-label={node.completed ? 'Mark as incomplete' : 'Mark as complete'}
          title={node.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          <span className="toggle-icon">{node.completed ? '[✓]' : '[ ]'}</span>
          <span className="toggle-text">
            {node.completed ? 'Completed' : 'Mark Complete'}
          </span>
        </button>
      </div>

      {/* Completion Badge */}
      {node.completed && (
        <div className="completion-badge">
          <span>DONE</span>
        </div>
      )}
    </div>
  );
}
