import useInView from '../../hooks/useInView';
import './ServicesSection.css';

// Intro block in the profile card (heading and paragraph on a textured blue background).
export default function ServicesSection({ title, intro }) {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className={`services-section${inView ? ' is-visible' : ''}`}>
      <h2 className="services-title fade-in">{title}</h2>
      <p className="services-intro fade-in" style={{ transitionDelay: '100ms' }}>
        {intro}
      </p>
    </section>
  );
}
