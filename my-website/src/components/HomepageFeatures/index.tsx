import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Competition Between Departments',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Taça UA is the largest internal sports academic competition in Portugal,
        where departments compete for the championship title across multiple disciplines.
      </>
    ),
  },
  {
    title: 'Multiple Sports Modalities',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Futsal, basketball, volleyball, handball, table tennis, and much more.
        Choose your favorite sport and proudly represent your department!
      </>
    ),
  },
  {
    title: 'Academic and Sporting Spirit',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build friendships, develop teamwork, and live unforgettable experiences.
        The Taça UA unites the entire academic community in an atmosphere of fair play and camaraderie.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-vert--lg">
        <div className={styles.featureCard}>
          <div className={styles.featureIconWrapper}>
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="padding-horiz--md padding-vert--md">
            <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('text--center', 'margin-bottom--xl')}>
          <Heading as="h2" className={styles.featuresTitle}>
            Why participate in the Taça UA?
          </Heading>
          <p className={styles.featuresSubtitle}>
            Discover the reasons that make the Taça UA the most anticipated sports event of the academic year
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
