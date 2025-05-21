import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Docs', path: '/docs' },
  { name: 'GitHub', path: 'https://github.com/debabrata-pw08-429/patient-registration-system' }
];

function NavLinks({ className = '', isExternal = false }) {
  return (
    <>
      {navItems.map((item) => {
        const isExternalLink = item.path.startsWith('http');
        const LinkComponent = isExternalLink ? 'a' : Link;
        const linkProps = isExternalLink 
          ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
          : { to: item.path };

        return (
          <LinkComponent
            key={item.name}
            {...linkProps}
            className={className}
          >
            {item.name}
          </LinkComponent>
        );
      })}
    </>
  );
}

export default NavLinks; 