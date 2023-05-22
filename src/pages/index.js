import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secundary custom-hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title title-black">{siteConfig.title}</h1>
        <p className="hero__subtitle">Learn and understand how to make high quality software
        <br/>to create faster with artificial intelligence.
        <br/>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Go to the docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The New Generation Of Developers">
      <HomepageHeader />
    </Layout>
  );
}
