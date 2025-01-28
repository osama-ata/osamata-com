import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import IntroductionSection from '../components/IntroSection';
import SEOComp from '../components/SEOComp';

import Heading from '@theme/Heading';
import styles from './index.module.css';



  // siteConfig: DocusaurusConfig;
  // siteMetadata: SiteMetadata;
  // globalData: GlobalData;
  // i18n: I18n;
  // codeTranslations: CodeTranslations;



function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1">
        Driving Contracts and Claims Success with Expertise, Leadership, and Technology
        </Heading>
        <p className="hero__subtitle">
        Transforming construction contract management and claims handling through
         leadership, technology-driven solutions, and optimized processes for sustainable results.
          </p>
      </div>
    </header>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={`${siteConfig.tagline}`}>
      <SEOComp />

      <HomepageHeader />

      <main>
        <IntroductionSection />
      </main>
    </Layout>
  );
}
