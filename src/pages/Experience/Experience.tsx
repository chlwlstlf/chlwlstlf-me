import CertificateCard from "./card/CertificateCard";
import ExperienceCard from "./card/ExperienceCard";
import "./Experience.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience"
    >
      <h2 className="experience-title">&lt;Experience /&gt;</h2>

      <div className="experience-container">
        <ExperienceCard />
        <CertificateCard />
      </div>
    </section>
  );
};

export default Experience;
