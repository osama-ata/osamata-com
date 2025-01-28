// src/pages/landing.js
import React from 'react';
import Layout from '@theme/Layout';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <Layout title="Driving Contracts and Claims Success">
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Driving Contracts and Claims Success with Expertise, Leadership, and Technology
          </h1>
          <p className={styles.subtitle}>
            Transforming construction contract management and claims handling through leadership, technology-driven solutions, and optimized processes for sustainable results.
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Introduction</h2>
          <p><strong>Who You Are:</strong> As a seasoned Contracts and Claims Manager in the construction industry, I specialize in delivering robust contract solutions and resolving complex claims for companies across [region or industry, e.g., Saudi Arabia's construction sector]. With over [X years] of experience, I bring a strategic approach to manage risks, optimize processes, and ensure compliance.</p>
          <p><strong>What Sets You Apart:</strong> I combine technical expertise with strong people and leadership skills, empowering teams to succeed while leveraging the latest technologies for smarter, faster, and more efficient workflows.</p>
        </section>
        <section className={styles.section}>
          <h2>Key Competencies</h2>
          <ul>
            <li><strong>Leadership and People Management:</strong> Whether leading a team of professionals or coaching individuals, I ensure clear communication, effective collaboration, and a focus on results.</li>
            <li><strong>Technology-Driven Solutions:</strong> A digital-first attitude allows me to integrate modern tools, streamline contract management, and enhance claims resolution efficiency, giving your projects a competitive edge.</li>
            <li><strong>Process Optimization:</strong> I specialize in designing and implementing processes that save time, minimize risk, and improve decision-making across all stages of the project lifecycle.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Benefits to Clients/Employers</h2>
          <ul>
            <li><strong>Reduced Risks and Disputes:</strong> Proactively identify and mitigate potential contractual risks before they impact your project.</li>
            <li><strong>Efficient Claims Resolution:</strong> Fast-track claims preparation and negotiation to save time and resources.</li>
            <li><strong>Enhanced Team Performance:</strong> Upskill your team with leadership-driven coaching and collaborative problem-solving approaches.</li>
            <li><strong>Optimized Workflows:</strong> Achieve higher productivity and compliance with tailored contract management processes.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Success Metrics</h2>
          <ul>
            <li>Reduced claims turnaround time, through streamlined workflows.</li>
            <li>Led team to resolve multi-million-dollar claims.</li>
            <li>Implemented contract management systems that improved compliance.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Call-to-Action</h2>
          <p>
            Ready to elevate your construction contract and claims management? Let’s connect to discuss how I can help streamline your operations and drive results.
          </p>
          <div className={styles.buttons}>
            <a className="button button--primary" href="/contact">Get in Touch</a>
            <a className="button button--secondary" href="/book-consultation">Book a Consultation</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
