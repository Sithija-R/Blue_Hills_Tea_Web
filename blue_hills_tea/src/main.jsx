import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Get a reference to the preloader element from the HTML
const preloader = document.getElementById('preloader');

// Function to hide the preloader
const hidePreloader = () => {
  if (preloader) {
    preloader.style.opacity = '0'; // Start the fade-out effect
    // Remove the preloader from the DOM after the transition completes
    setTimeout(() => {
      preloader.style.display = 'none';
      preloader.remove(); // Clean up the DOM
    }, 500); // This duration should match the CSS transition time (0.5s)
  }
};

// Render your React application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


hidePreloader();