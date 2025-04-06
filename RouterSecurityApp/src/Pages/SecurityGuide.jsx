import React from 'react';
import { Link } from 'react-router-dom';

function SecurityGuide() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Best Security Practices</h2>
      <ul>
      <li><Link to="/credconfig" style={{marginBottom: '20px', color: 'black',}}>
          Change Default Credentials
        </Link></li>
        <li><Link to="/portconfig" style={{marginBottom: '20px', color: 'black',}}>
          Ports & Firewall Configuration
        </Link></li>
        <li><Link to="/weakconfig" style={{marginBottom: '20px', color: 'black',}}>
          Applying Suitable Encryption
        </Link></li>
      </ul>
    </div>
  );
}

export default SecurityGuide;
