'use client';

import { useContext, useState } from 'react';
import { RoadmapContext } from '@/context/RoadmapContext';
import NodeCard from '@/components/NodeCard';
import ProgressBar from '@/components/ProgressBar';
import './roadmap.css';

export default function RoadmapPage() {
  const { roadmapData, addNode, updateNode, deleteNode } =
    useContext(RoadmapContext);
  const [newNodeTitle, setNewNodeTitle] = useState('');
  const [newNodeDescription, setNewNodeDescription] = useState('');
  const [newNodeDuration, setNewNodeDuration] = useState('');

  const handleAddNode = (e) => {
    e.preventDefault();

    if (!newNodeTitle.trim()) {
      alert('Please enter a step title');
      return;
    }

    addNode({
      title: newNodeTitle,
      description: newNodeDescription,
      duration: newNodeDuration,
      completed: false,
    });

    setNewNodeTitle('');
    setNewNodeDescription('');
    setNewNodeDuration('');
  };

  const handleToggleNode = (nodeId) => {
    const node = roadmapData.find((n) => n.id === nodeId);
    if (node) {
      updateNode(nodeId, { ...node, completed: !node.completed });
    }
  };

  const handleDeleteNode = (nodeId) => {
    if (confirm('Are you sure you want to delete this step?')) {
      deleteNode(nodeId);
    }
  };

  const completedCount = roadmapData.filter((node) => node.completed).length;
  const totalCount = roadmapData.length;
  const progressPercentage = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <main className="roadmap-container">
      <div className="roadmap-wrapper">
        {/* Header Section */}
        <section className="roadmap-header">
          <div className="header-content">
            <h1>My Roadmap</h1>
            <p>Organize your journey with structured steps and milestones</p>
          </div>
        </section>

        {/* Progress Section */}
        <section className="progress-section">
          <ProgressBar percentage={progressPercentage} />
          <div className="progress-stats">
            <span className="stat">
              {completedCount} of {totalCount} completed
            </span>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="roadmap-content">
          {/* Nodes Display Section */}
          <section className="nodes-section">
            <h2>Your Steps</h2>
            {roadmapData.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">NO STEPS</div>
                <p>No steps yet. Add your first step to get started!</p>
              </div>
            ) : (
              <div className="nodes-grid">
                {roadmapData.map((node) => (
                  <NodeCard
                    key={node.id}
                    node={node}
                    onToggle={() => handleToggleNode(node.id)}
                    onDelete={() => handleDeleteNode(node.id)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Add Node Form Section */}
          <aside className="form-section">
            <div className="form-card">
              <h2>Add New Step</h2>
              <form onSubmit={handleAddNode} className="add-node-form">
                <div className="form-group">
                  <label htmlFor="title">Step Title</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="e.g., Learn React"
                    value={newNodeTitle}
                    onChange={(e) => setNewNodeTitle(e.target.value)}
                    maxLength="50"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    placeholder="Add details about this step..."
                    value={newNodeDescription}
                    onChange={(e) => setNewNodeDescription(e.target.value)}
                    maxLength="200"
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Duration</label>
                  <input
                    id="duration"
                    type="text"
                    placeholder="e.g., 2 weeks"
                    value={newNodeDuration}
                    onChange={(e) => setNewNodeDuration(e.target.value)}
                    maxLength="30"
                  />
                </div>

                <button type="submit" className="submit-button">
                  Add Step
                </button>
              </form>
            </div>

            <div className="info-card">
              <h3>Total Steps</h3>
              <div className="total-count">{totalCount}</div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
