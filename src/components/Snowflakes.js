'use client';

import { useState, useEffect } from 'react';
import styles from './Snowflakes.module.css';

export default function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState([]);

  // Create a new snowflake
  const createSnowflake = () => {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`; // Unique ID
    const size = Math.floor(Math.random() * 10) + 20; // 20-30px (larger snowflakes to show detail)
    const left = Math.floor(Math.random() * 100); // 0-100%
    const duration = Math.floor(Math.random() * 20) + 20; // 20-40s (slower falling)
    const delay = Math.random() * 5; // 0-5s
    const type = Math.floor(Math.random() * 3); // 3 different snowflake types

    return { id, size, left, duration, delay, type };
  };

  // Remove a snowflake when clicked
  const removeSnowflake = (id, e) => {
    e.stopPropagation(); // Prevent click from affecting elements below
    
    // Find the snowflake element
    const element = document.getElementById(`snowflake-${id}`);
    if (element) {
      // Add the popping animation class
      element.classList.add(styles.popping);
      // Remove after animation completes
      setTimeout(() => {
        setSnowflakes(prev => prev.filter(flake => flake.id !== id));
      }, 300);
    } else {
      setSnowflakes(prev => prev.filter(flake => flake.id !== id));
    }
  };

  // Initialize snowflakes
  useEffect(() => {
    const initialSnowflakes = [];
    for (let i = 0; i < 20; i++) {
      initialSnowflakes.push(createSnowflake());
    }
    setSnowflakes(initialSnowflakes);

    // Add new snowflakes periodically
    const interval = setInterval(() => {
      setSnowflakes(prev => {
        // Limit the number of snowflakes to prevent performance issues
        if (prev.length < 40) {
          return [...prev, createSnowflake()];
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.snowflakeContainer}>
      {snowflakes.map(flake => (
        <div
          id={`snowflake-${flake.id}`}
          key={flake.id}
          className={`${styles.snowflake} ${styles[`type${flake.type}`]}`}
          onClick={(e) => removeSnowflake(flake.id, e)}
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}%`,
            '--fall-duration': `${flake.duration}s`,
            animationDelay: `${flake.delay}s`
          }}
        />
      ))}
    </div>
  );
} 