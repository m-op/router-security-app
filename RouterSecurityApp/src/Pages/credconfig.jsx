import React from 'react';


function credconfig() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Default Credentails Guide</h1>
      
      <p>Here is a basic set of instructions to mitigate Default Login Credentials Vulnerability on your router. This short guide will be supported by screenshots to help you navigate your router and change the configurations of your default login credentials of your router. </p>
      
      <h3>Steps to Change Your Router Password</h3>
  <ol style={{paddingLeft: '20px', lineHeight: '1.8', fontSize: '16px'}}>
    <li>Find your Navigation Menu and open the <strong>“Administration/Admin”</strong> page</li>
    <li>Scroll down to the Password Section</li>
    <li>Enter your new password in the: <strong>Password field</strong> & <strong>Confirmation Field</strong></li>
    <li>Save and apply your changes</li>
  </ol>

  <img
  src="/images/default1.png"
  alt="Router Password Settings Screenshot"
  style={{
    width: '100%',          // Fill the width of the container
    maxWidth: '900px',      // Limit maximum width for large screens
    height: 'auto',         // Maintain aspect ratio
    marginTop: '30px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'  // Optional: nice visual effect

    
  }}
/>

<img
  src="/images/default2.png"
  alt="Router Settings Screenshot 2"
  style={{
    width: '100%',
    maxWidth: '900px',
    height: 'auto',
    marginTop: '30px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
  }}
/>
      
    </div>
    
  );
}

export default credconfig;