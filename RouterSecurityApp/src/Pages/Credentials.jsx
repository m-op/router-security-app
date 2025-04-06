import React from 'react';
import { Link } from 'react-router-dom';


function Credentials() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Understanding the Risks of Default Credentails</h1>
      <p>Default Credentials can be a massive security risk to the home network. It makes then a very easy target for threat actors to exploit. Routers and other networks are typically manufactured with pre-configured usernames and passwords. These passwords are often universally known as they are sometimes uniform to certain router models. They are often published publicly online or found in user manuals for these devices. This makes them easily accessible for attackers to exploit and take advantage of.</p>
      
      <p>Brute force attacks are automated tools that try to guess the username and password of accounts in order to gain access. The programs use a number of potential combinations that are viable from similar devices and accounts, in an attempt to get into your router. A lot of user’s neglect to change their default settings, this can make it easy for attackers to take advantage of these default settings with their program and gain entry to your network.</p>
      
      <p>Another possibility is being viable to unamortized remote access. This is when attackers get access to your network remotely through the vulnerabilities of your default configurations. A lot of routers have remote management features that are enabled by default. This allows users to access settings from outside of their home network.  </p>

      <p>One of the most effective ways to stay safe online is to change the default settings of your router to something unique and strong. Using a mix of letters, numbers and symbols makes it harder to guess. Also, turning off settings that allow remote access to your device unless needed helps to keep menacing attackers away from exploiting remote connections to your device.</p>
      
      <p>Please visit our Default Router Configuration Guide to find out how to apply these settings on your device. </p>

      <Link to="/credconfig" style={{marginBottom: '20px', color: 'green',}}>
          Default Router Configurations Guide
        </Link>

    
    </div>
  );
}

export default Credentials;