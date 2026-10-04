import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function FooterWrapper(props) {
  const {isBlogPostPage} = useBlogPost();
  return (
    <>
      <Footer {...props} />
      {isBlogPostPage && (
        <aside className={styles.box} aria-label="About the author">
          <img
            className={styles.avatar}
            src="https://github.com/osama-ata.png"
            alt="Osama Ata"
            width="72"
            height="72"
            loading="lazy"
          />
          <div>
            <strong className={styles.name}>Osama Ata</strong>
            <p className={styles.creds}>
              Contracts Manager at Archirodon · MCIArb (Chartered Institute of Arbitrators) ·
              Member of the Saudi Council of Engineers (SCE)
            </p>
            <p className={styles.bio}>
              I write about FIDIC contracts, claims and delay analysis in Gulf construction
              projects. <Link to="/services">Services</Link> · <Link to="/cv">CV</Link> ·{' '}
              <Link to="https://www.linkedin.com/in/osamata/">LinkedIn</Link>
            </p>
          </div>
        </aside>
      )}
    </>
  );
}
