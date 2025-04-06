import React from 'react';
import { Link } from 'react-router-dom';

function Vulnerabilities() {
  return (
    <div style={{ padding: '20px',  }}>
      <h1 style={{ marginBottom: '55px' }}>Common Vulnerabilities</h1>
    
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
         <li><Link to="/credentials" style={{marginBottom: '20px', color: 'black',}}>
          Default Credentials
        </Link></li>
        <li><Link to="/open" style={{marginBottom: '20px', color: 'black',}}>
          Open Ports & Weak Firewalls
        </Link></li>
        <li><Link to="/weak" style={{marginBottom: '20px', color: 'black',}}>
          Weak Encryption
        </Link></li>
        
   
      </ul>
    </div>



  
  );
}

export default Vulnerabilities;

