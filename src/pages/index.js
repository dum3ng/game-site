import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const games = { 'One Unite': '/oneunite' }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`MNS`}
      description="mns game studio">
      <main>
        {Object.entries(games).map(([name, url]) => {
          return <a key={name} href={url}>{name}</a>
        })}
      </main>
    </Layout>
  );
}
