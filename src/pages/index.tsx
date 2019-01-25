import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Section from '../components/Section';
import HighlightSection from '../components/HighlightSection';
import IndexLayout from '../layouts';
import LeaderForm from '../components/forms/LeaderForm';

import * as sectionBg from '../img/bg-61.jpg';
import * as formBg from '../img/bg.jpg';
import * as dreamerImage from '../img/dreamer.jpg';
import * as finderImage from '../img/finder.jpg';

interface State {
  style: {
    opacity: number;
  }
};
const DATA = {
  en: {
    hero: {
      title: 'exo leaders',
      description: 'Launchpad helps you build a new type of organization, an ExO or Exponential Organization. An ExO is a purpose-driven venture that leverages exponential technologies and a set of common attributes to grow and transform the world.',
      btnLabel: 'Join the Community',
    },
    about: {
      features: [
        {
          title: 'Why choose our company?',
          description: () => `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.`,
        },
        {
          title: 'Why you need this?',
          description: () => `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementumNullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.`,
        }
      ]
    },
    application: {
      title: () => <>Do you want to join<br /> the community?</>,
      fields: [
        {
          label: ''
        }
      ],
      messages: {
        success: '',
        error: ''
      }
    },
    footer: {
      main: { text: 'OpenExO', url: 'https://www.exolever.com/' },
      links: [
        { text: 'Exponential Organizations', url: 'https://www.exponentialorgs.com/' },
        { text: 'Exponential Transformation', url: 'https://www.exponentialtransformationbook.com/' },
        { text: 'ExO Canvas', url: 'https://www.exocanvas.com/' },

      ],
      copyright: (year = new Date().getFullYear()) =>
        <>
          Building Exponential Organizations - OpenExO® {year} <br /> <small>Copyright &copy; {year} All rights reserved</small>
        </>
    }
  }
};
class IndexPage extends React.Component<any, State> {
  render() {
    return (

      <IndexLayout>
        <Page>
          <Hero
            title="ExO Leaders"
            subtitle={DATA.en.hero.description}
            backgroundImage={sectionBg}
            cta={{ text: 'Join the Community', target: '#' }}
          />

          <Section>
            <div className="row">
              <div className="col-lg-6 about-text">
                <h3>{DATA.en.about.features[0].title}</h3>
                <p>{DATA.en.about.features[1].description()}</p>
              </div>
              <div className="col-lg-6">
                <img src={dreamerImage} alt="" />
              </div>
            </div>
          </Section>

          <HighlightSection title={DATA.en.application.title()} tagline="" backgroundImage={formBg}>
            <LeaderForm />
          </HighlightSection>

          <Section>
            <div className="row">
              <div className="col-lg-6">
                <img src={finderImage} alt="" />
              </div>
              <div className="col-lg-6 about-text">
              <h3>{DATA.en.about.features[1].title}</h3>
                <p>{DATA.en.about.features[1].description()}</p>
              </div>
            </div>
          </Section>
          <Footer links={DATA.en.footer.links} copyright={DATA.en.footer.copyright} mainLogo={DATA.en.footer.main} />
        </Page>
        <style>
            {
              `body {
                transition: opacity ease 0.5s;
                opacity: 1;
              }`
            }
          </style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
