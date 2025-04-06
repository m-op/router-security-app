import React from 'react';


function weakconfig() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>

<h1> Weak Encryption Guide </h1>

      <ol style={{ paddingLeft: '20px', margin: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>Navigate to the Firewall Settings</strong>
          <ul>
            <li style={{ marginBottom: '4px' }}>
              On OpenWRT Go to Network &gt; Firewall
            </li>
            <li style={{ marginBottom: '4px' }}>
              On commercial routers: Go to Advanced Settings &gt; Security &gt; Firewall
            </li>
          </ul>
        </li>

        <li style={{ marginBottom: '10px' }}>
          <strong>Enable Key Firewall Protections</strong>
          <p style={{ margin: '5px 0' }}>Check or enable the following features:</p>
          <ul>
            <li>SYN-flood protection (helps block DoS attacks)</li>
            <li>Block fragmented IP packets</li>
            <li>Port scan detection</li>
            <li>IP flood detection</li>
            <li>Drop invalid packets</li>
          </ul>
          <p style={{ marginTop: '8px' }}>These help filter out suspicious or malformed traffic.</p>
        </li>

        <li style={{ marginBottom: '10px' }}>
          <strong>Apply Secure Default Policies (for OpenWRT or advanced routers)</strong>
          <p style={{ margin: '5px 0' }}>Under the Zone Settings, configure:</p>
          <ul>
            <li><strong>Input:</strong> reject — blocks unsolicited inbound traffic</li>
            <li><strong>Output:</strong> accept — allows internal devices to access the internet</li>
            <li><strong>Forward:</strong> reject — blocks forwarding between interfaces (unless needed)</li>
          </ul>
        </li>

        <li style={{ marginBottom: '10px' }}>
          <strong>Disable Unnecessary Features</strong>
          <ul>
            <li>Disable UPnP (Universal Plug and Play): This prevents devices from automatically opening ports, which could be abused by malware</li>
            <li>Disable unused services or ports (like Telnet, FTP, or HTTP) unless absolutely required</li>
          </ul>
        </li>

        <li>
          <strong>Save and Apply Changes</strong>
          <ul>
            <li>Click Save &amp; Apply or Apply Changes depending on your router model</li>
          </ul>
        </li>
      </ol>

      <img
  src="/images/encrypt1.png"
  alt="Encryption Guide Picture"
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

    </div>
  );
}

export default weakconfig;