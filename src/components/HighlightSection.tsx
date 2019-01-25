import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactNode;
  title?: string;
  tagline?: string;
  icon?: string;
  backgroundImage?: string;
}

const HighlightSection: React.SFC<Props> = ({ title, tagline, icon, backgroundImage, children }) => {

  const BackgroundImage = styled.section`
    background: url(${backgroundImage});
  `;

  return (
    <BackgroundImage className="domain-search-section sc-about-page">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">{title}</h2>
          {tagline ? <p className="text-white">{tagline}</p> : null}
        </div>
        {children}
      </div>
    </BackgroundImage>
  )
};

export default HighlightSection;
