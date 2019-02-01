import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  logoUrl: string;
  logoImg: string;
  logoAlt: string;
  links?: Array<{ text: string; url: string }>;
  copyright: any;
}

const Body = styled.div`
  padding: 50px 0;
  background: #5c0c68;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: center;

  a,
  a:visited,
  a:active {
    color: #fff;
    text-decoration: underline;
  }

  a:hover {
    color: #fff;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 180px;
  margin: 24px 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 10px 0;
  padding: 0 20px;

  @media (max-width: 579px) {
    display: block;
  }
`;

const Copyright = styled.div`
  line-height: 2;
  opacity: 0.25;

  small {
    display: block;
  }

  sub {
    top: -.5em;
  }
`;

const Footer: React.SFC<Props> = ({ logoUrl, logoImg, logoAlt, links = [], copyright }) =>
  <Body>
    <a href={logoUrl} target="_blank">
      <Logo alt={logoAlt} src={logoImg} />
    </a>
    <List>
      {links.map(link =>
        <ListItem key={link.url}>
          <a href={link.url} target="_blank">{link.text}</a>
        </ListItem>)}
    </List>
    <Copyright>{copyright}</Copyright>
  </Body>;

export default Footer;
