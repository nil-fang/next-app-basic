import React from 'react';
import Link from 'next/link';
import styleSheet from './nav.scss';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a href="##">Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a href="##">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{styleSheet}</style>
  </nav>
);

export default Nav;
