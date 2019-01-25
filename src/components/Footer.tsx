import * as React from 'react';

interface Props {
  links?: Array<{ text: string; url: string }>;
}

const Footer: React.SFC<Props> = ({ links = [] }) => (
  <footer className="footer-section">
    <div className="container">
      <ul className="footer-menu">
        {links.map(link => <li key={link.url}><a href={link.url}>{link.text}</a></li>)}
      </ul>
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()}All rights reserved
      </div>
    </div>
  </footer>
);


export default Footer;
