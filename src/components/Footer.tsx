import * as React from 'react';

interface Props {
  links?: Array<{ text: string; url: string }>;
  copyright: Function;
  mainLogo: {
    text: string,
    url: string
  }
}

const Footer: React.SFC<Props> = ({ links = [], copyright, mainLogo }) => (
  <footer className="set-bg exo-footer">
    <a href={mainLogo.url} target="_blank"><img className="core-logo" alt={mainLogo.text} src="/social/openexo_logo_white.png" /></a>
		<div className="footer-widget">
			<ul>
        {links.map(link => <li key={link.url}><a href={link.url} target="_blank">{link.text}</a></li>)}
      </ul>
    </div>
    <div className="container">
      <div className="copyright">{copyright()}</div>
    </div>
  </footer>
);


export default Footer;