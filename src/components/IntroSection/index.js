import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import "@site/src/css/custom.css";
import { ShieldCheckIcon , ArrowTrendingUpIcon , UserGroupIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

 
const FeatureList = [{
  title: 'Reduced Risks and Disputes',
  Svg: ShieldCheckIcon,
  description: (
    <>
      Proactively identify and mitigate potential contractual risks before they impact your project.
    </>
  ),
},
{
  title: 'Efficient Claims Resolution',
  Svg: ArrowTrendingUpIcon ,
  description: (
    <>
      Fast-track claims preparation and negotiation to save time and resources.
    </>
  ),
},
{
  title: 'Enhanced Team Performance',
  Svg: UserGroupIcon,
  description: (
    <>
      Upskill your team with leadership-driven coaching and collaborative problem-solving approaches.
    </>
  ),
},
{
  title: 'Optimized Workflows',
  Svg: AdjustmentsHorizontalIcon,
  description: (
    <>
      Achieve higher productivity and compliance with tailored contract management processes.
    </>
  ),
}];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6 item margin--horiz--sm')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />

      </div>
      <div className="padding-horiz--md">
        <Heading as="h3" className="text--center text--primary">{title}</Heading>
        <p className="text--justify">{description}</p>
      </div>
    </div>
  );
}




export default function IntroductionSection() {

// function IntroductionSectionOld() {
  return (   
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
