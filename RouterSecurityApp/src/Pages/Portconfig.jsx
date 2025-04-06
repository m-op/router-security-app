import React from 'react';




function portconfig() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '16px' }}>
      <h1> Open Ports & Weak Firewalls Configurations Guide </h1>

      <p>Click one of the common router links below to open your router’s configuration page:</p>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a href="http://192.168.0.1" target="_blank" rel="noopener noreferrer">
            http://192.168.0.1
          </a>
        </li>
        <li>
          <a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer">
            http://192.168.1.1
          </a>
        </li>
        <li>
          <a href="http://routerlogin.net" target="_blank" rel="noopener noreferrer">
            http://routerlogin.net
          </a>
        </li>
      </ul>

    <ol>
      <li>
        <strong>Navigate to the Firewall Settings</strong>
        <ul>
          <li>
            On OpenWRT Go to Network &gt; Firewall
          </li>
          <li>
            On commercial routers: Go to Advanced Settings &gt; Security &gt; Firewall
          </li>
        </ul>
      </li>

      <li style={{ marginTop: '15px' }}>
        <strong>Enable Key Firewall Protections</strong>
        <p>Check or enable the following features:</p>
        <ul>
          <li>SYN-flood protection (helps block DoS attacks)</li>
          <li>Block fragmented IP packets</li>
          <li>Port scan detection</li>
          <li>IP flood detection</li>
          <li>Drop invalid packets</li>
        </ul>
        <p>These help filter out suspicious or malformed traffic.</p>
      </li>

      <li style={{ marginTop: '15px' }}>
        <strong>Apply Secure Default Policies (for OpenWRT or advanced routers)</strong>
        <p>Under the Zone Settings, configure:</p>
        <ul>
          <li><strong>Input</strong>: reject — blocks unsolicited inbound traffic</li>
          <li><strong>Output</strong>: accept — allows internal devices to access the internet</li>
          <li><strong>Forward</strong>: reject — blocks forwarding between interfaces (unless needed)</li>
        </ul>
      </li>

      <li style={{ marginTop: '15px' }}>
        <strong>Disable Unnecessary Features</strong>
        <ul>
          <li>
            Disable UPnP (Universal Plug and Play): This prevents devices from automatically
            opening ports, which could be abused by malware
          </li>
          <li>
            Disable unused services or ports (like Telnet, FTP, or HTTP) unless absolutely required
          </li>
        </ul>
      </li>

      <li style={{ marginTop: '15px' }}>
        <strong>Save and Apply Changes</strong>
        <ul>
          <li>Click Save &amp; Apply or Apply Changes depending on your router model</li>
        </ul>
      </li>
    </ol>
     
    <img
  src="/images/firewall1.png"
  alt="Firewall Guide Picture 1"
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
  src="/images/firewall2.png"
  alt="Firewall Guide Picture 2"
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

export default portconfig;