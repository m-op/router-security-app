import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      background: '#333',
      padding: '10px',
      color: 'white',
      position: 'fixed',   // Fix the navbar at the top
      top: '0',            // Position it at the very top
      left: '0',           // Align to the left
      width: '100%',       // Make it full-width
      zIndex: '1000'       // Ensure it stays on top
    }}>
      <ul style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        listStyle: 'none', 
        margin: '0', 
        padding: '0' 
      }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/vulnerabilities" style={{ color: 'white', textDecoration: 'none' }}>Common Vulnerabilities</Link></li>
        <li><Link to="/security-guide" style={{ color: 'white', textDecoration: 'none' }}>Security Guide</Link></li>
        <li><Link to="/checklist" style={{ color: 'white', textDecoration: 'none' }}>Checklist</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
