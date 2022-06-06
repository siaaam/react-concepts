import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <Card.Footer
      className="text-muted text-center"
      style={{
        backgroundColor: '#09efff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      Made With 💟
    </Card.Footer>
  );
};

export default Footer;
