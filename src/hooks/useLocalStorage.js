'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for managing state with localStorage persistence
 * @param {string} key - localStorage key
 * @param {*} initialValue - initial value if no localStorage data exists
 * @returns {[*, function]} - [state, setState]
 */
export function useLocalStorage(key, initialValue) {
  // State to store the value
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function to have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      // Save to localStorage only in browser
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error saving to localStorage for key "${key}":`, error);
    }
  };

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      }
      setIsMounted(true);
    } catch (error) {
      console.warn(`Error reading from localStorage for key "${key}":`, error);
      setIsMounted(true);
    }
  }, [key]);

  return [storedValue, setValue];
}
