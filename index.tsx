
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (!container) {
  console.error("Critical Error: Root container not found in the DOM.");
} else {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React app:", error);
    container.innerHTML = `<div style="padding: 2rem; color: #ef4444; font-family: sans-serif;">
      <h1 style="font-size: 1.25rem; font-weight: 800;">Initialization Error</h1>
      <p style="font-size: 0.875rem;">The application failed to start. Please check the console for details.</p>
    </div>`;
  }
}
