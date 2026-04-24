import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import IntroductionSection from '../components/IntroSection';
import SEOComp from '../components/SEOComp';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          Driving Contracts and Claims Success with Expertise, Leadership, and Technology
        </Heading>
        <p className={styles.heroSubtitle}>
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
