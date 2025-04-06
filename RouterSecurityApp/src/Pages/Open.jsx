import React from 'react';
import { Link } from 'react-router-dom';


function Open() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Understanding the Risks of Open Ports</h1>
      <p>Your home internet connection is like a house with many doors. Some of these doors need to be open in order for you to use the internet properly, whilst others stay locked to help keep out intruders. Open ports on your home router work the same way. If they are left open when they are not being used, attackers can use then as doorways into your network. Ports are digital doorways that allow data to flow in and out of your network. They are used for services such as video calls, emailing and video streaming. Some ports are open on default, even when they are not being used. </p>
      
      <p>Hackers can quickly scan your network to find out which ports are open, letting them know the best route to get into your network. One of the biggest risks of open port attacks is Remote Access Attacks. Ports that enable remote access enables the attacker access and control of your router from anywhere around the world. This means that they can change important security configurations to enable exploitation of your home network. </p>
      
      <p>In order to protect yourself from open port attacks, it is important to check your router settings and close any ports that are unused and not needed. A lot of routers have a feature called Universal Plug and Play (UPnP) that automatically opens ports for your convenience. This makes it a lot easier for attackers to gain access to your network, turn off features like this can help bolster your security tremendously.</p>

      <p></p>
      
      <p>Please visit our Open Ports Configuration Guide to find out how to apply these settings on your device. </p>

      <Link to="/portconfig" style={{marginBottom: '20px', color: 'green',}}>
          Open Ports & Weak Firewalls Configurations Guide
        </Link>
    </div>
  );
}

export default Open;