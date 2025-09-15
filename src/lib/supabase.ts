import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx loaded');

console.log('Main.tsx loaded');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

console.log('Root element:', rootElement);

if (rootElement) {
  console.log('Creating React root...');
  console.log('Creating React root...');
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('React app rendered');
  console.log('React app rendered');
} else {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;"><h1>Error: Root element not found</h1><p>The React app could not initialize properly.</p></div>';
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;"><h1>Error: Root element not found</h1><p>The React app could not initialize properly.</p></div>';
}