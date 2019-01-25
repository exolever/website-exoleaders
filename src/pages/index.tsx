import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Section from '../components/Section';
import HighlightSection from '../components/HighlightSection';
import IndexLayout from '../layouts';
import LeaderForm from '../components/forms/LeaderForm';

import * as sectionIcon from '../img/section-title-icon.png';
import * as sectionBg from '../img/bg-61.png';
import * as rocket from '../img/rocket.png';
import * as formBg from '../img/bg.png';
import * as dreamerImage from '../img/dreamer.png';
import * as finderImage from '../img/finder.png';



// data
const dummyText = `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.`
const headerDescription = `Launchpad helps you build a new type of organization, an ExO or Exponential Organization.An ExO is a purpose-driven venture that leverages exponential technologies and a set of common attributes to grow and transform the world`;
interface State {
  style: {
    opacity: number;
  }
};
class IndexPage extends React.Component<any, State> {
  render() {
    return (

      <IndexLayout>
        <Page>
          <Hero
            title="ExO Leaders"
            subtitle={headerDescription}
            backgroundImage={sectionBg}
            cta={{ text: 'Join the Community', target: '#' }}
          />

          <Section>
            <div className="row">
              <div className="col-lg-6 about-text">
                <h3>Why choose our company?</h3>
                <p>{dummyText}</p>
              </div>
              <div className="col-lg-6">
                <img src={dreamerImage} alt="" />
              </div>
            </div>
          </Section>

          <HighlightSection icon={sectionIcon} title="See our features" tagline="" backgroundImage={formBg}>
            <LeaderForm />
          </HighlightSection>

          <Section>
            <div className="row">
              <div className="col-lg-6">
                <img src={finderImage} alt="" />
              </div>
              <div className="col-lg-6 about-text">
                <h3>Why choose our company?</h3>
                <p>{dummyText}</p>
              </div>
            </div>
          </Section>

          <Footer links={[{ text: 'Link A', url: '/a' }, { text: 'Link B', url: '/b' }]} />
        </Page>
        <style>
            {
              `body {
                transition: all ease 0.5s;
                opacity: 1;
              }`
            }
          </style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
