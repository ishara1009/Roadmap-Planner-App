'use client';

import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const RoadmapContext = createContext();

/**
 * RoadmapProvider Component
 * Manages global state for roadmap data using Context API and localStorage
 */
export function RoadmapProvider({ children }) {
  const [roadmapData, setRoadmapData] = useLocalStorage('roadmapData', []);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize on mount
  useEffect(() => {
    setIsLoading(false);
  }, []);

  /**
   * Generate unique ID for nodes
   */
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  /**
   * Add a new node to the roadmap
   */
  const addNode = (nodeData) => {
    const newNode = {
      id: generateId(),
      title: nodeData.title,
      description: nodeData.description || '',
      duration: nodeData.duration || '',
      completed: nodeData.completed || false,
      createdAt: new Date().toISOString(),
    };

    const updatedData = [...roadmapData, newNode];
    setRoadmapData(updatedData);
  };

  /**
   * Update an existing node
   */
  const updateNode = (nodeId, updatedData) => {
    const updatedRoadmap = roadmapData.map((node) =>
      node.id === nodeId ? { ...node, ...updatedData } : node
    );
    setRoadmapData(updatedRoadmap);
  };

  /**
   * Delete a node from the roadmap
   */
  const deleteNode = (nodeId) => {
    const filteredRoadmap = roadmapData.filter((node) => node.id !== nodeId);
    setRoadmapData(filteredRoadmap);
  };

  /**
   * Clear all nodes
   */
  const clearRoadmap = () => {
    setRoadmapData([]);
  };

  /**
   * Get statistics about the roadmap
   */
  const getStats = () => {
    const total = roadmapData.length;
    const completed = roadmapData.filter((node) => node.completed).length;
    return {
      total,
      completed,
      pending: total - completed,
      progressPercentage: total === 0 ? 0 : Math.round((completed / total) * 100),
    };
  };

  const value = {
    roadmapData,
    isLoading,
    addNode,
    updateNode,
    deleteNode,
    clearRoadmap,
    getStats,
  };

  return (
    <RoadmapContext.Provider value={value}>{children}</RoadmapContext.Provider>
  );
}
