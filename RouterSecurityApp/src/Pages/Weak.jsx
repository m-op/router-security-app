import React from 'react';
import { Link } from 'react-router-dom';

function Weak() {
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Understanding the Risks of Weak Encryption </h1>
      <p>Wifi-Encryption is similar to a lock on your front door. It helps to keep unwanted visitors out. If the lock is weak or outdates attackers can easily break inside of your house, this also applies to your home network. A weak encryption makes it easier for attackers to intercept your home network traffic, steal personal information and potentially take control of your devices  </p>
      
      <p>Encryption helps to scramble your Wi-Fi signal so that only people who have the correct password can access it. However, really old encryption methods such as WEP (Wired Equivalent Privacy), WPA (Wi-Fi Protected Access) have major security flaws that attackers can easily crack within minutes using software. This allows attacks to eavesdrop into your network.</p>
      
      <p>In order to stay safe, encryption protocols such as WPA3 and WPA2 encryption protocols are suggested. These encryption protocols are up to date, and similar to updating your firmware, having the most up to date encryption protocols means your network is susceptible to less attacks. Making sure you have a strong Wi-Fi password also makes a massive difference, this is due to encryption being effective if attackers are unable to gain access to your network in the first place.</p>

      <p>By using strong encryption methods, you are better protected against attackers. This ensuring that no unauthorized personnel has access to important information shared through your network traffic,.</p>

      <p>Please visit the Encryption Security Guide to find out how to configure firmware updates for your router.</p>

      <Link to="/weakconfig" style={{marginBottom: '20px', color: 'green',}}>
         Weak Encyption Configurations Guide
        </Link>
     
    </div>
  );
}

export default Weak;