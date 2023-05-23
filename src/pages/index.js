import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secundary custom-hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title title-black">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {siteConfig.customFields.description
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg button__hero"
            to="/docs/getting-started">
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
    <HomepageHeader/>
    /*<header className={clsx('hero hero--secundary custom-hero', styles.heroBanner)}>
    <div className="container">
      <div className='title-hero'>
        <img src={siteConfig.favicon} className='img-hero' />
        <h1 className="title-black">{siteConfig.title}</h1>
      </div>
      <p>Learn how to make high quality software
      <br/>to create faster with artificial intelligence.
      <br/><b>{siteConfig.tagline}</b></p>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg btn-hero"
          to="/docs/getting-started">
          Start with the Docs
        </Link>
      </div>
    </div>
  </header>*/
  );
}
