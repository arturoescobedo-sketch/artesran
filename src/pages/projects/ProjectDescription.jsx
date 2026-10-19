import './ProjectDescription.css';

// Long project write-up for the Description tab: title, subtitle and sections that are either
// a paragraph (`text`) or a bullet list (`items`, each with a bold `label`). See data/descriptions/.
export default function ProjectDescription({ title, subtitle, sections }) {
  return (
    <div className="project-description">
      <h4 className="project-description__title">{title}</h4>
      {subtitle && <p className="project-description__subtitle">{subtitle}</p>}
      {sections.map((section) => (
        <section key={section.heading}>
          <h5>{section.heading}</h5>
          {section.text && <p>{section.text}</p>}
          {section.items && (
            <ul>
              {section.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
