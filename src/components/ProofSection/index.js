import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import testimonials from '@site/src/data/testimonials.json';
import styles from './styles.module.css';

function Testimonial({quote, name, credentials, role, relationship, date, url}) {
  const label = credentials ? `${name}, ${credentials}` : name;
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
      <figcaption className={styles.caption}>
        <strong className={styles.name}>
          {url ? <Link to={url}>{label}</Link> : label}
        </strong>
        <span className={styles.meta}>{role}</span>
        <span className={styles.meta}>{relationship} · {date}</span>
      </figcaption>
    </figure>
  );
}

export default function ProofSection() {
  return (
    <section className={styles.proof} aria-labelledby="proof-heading">
      <div className="container">
        <Heading as="h2" id="proof-heading" className={styles.heading}>
          What colleagues say
        </Heading>
        <p className={styles.intro}>
          Recommendations from senior contracts and claims professionals I have worked with.
        </p>
        <div className="row">
          {testimonials.map((t) => (
            <div key={t.name} className="col col--4 margin-bottom--lg">
              <Testimonial {...t} />
            </div>
          ))}
        </div>
        <p className={styles.source}>
          Excerpts from{' '}
          <Link to="https://www.linkedin.com/in/osamata/">my LinkedIn recommendations</Link>.
        </p>
      </div>
    </section>
  );
}
