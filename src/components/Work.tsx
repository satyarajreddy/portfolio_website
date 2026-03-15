import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const structbenchPreview =
  "https://placehold.co/800x500/1a1a2e/c2a4ff?text=StructBench";
const geosignalPreview =
  "https://placehold.co/800x500/1a1a2e/c2a4ff?text=GeoSignal+Terminal";

const projects = [
  {
    number: "01",
    name: "StructBench",
    categoryLabel: "LLM Benchmarking / Next.js",
    description:
      "Benchmark LLM structured output extraction across multiple models. Features field-level F1 scoring and a live leaderboard. Bring your own JSON schema.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://structbench.vercel.app/",
    sourceUrl: "https://github.com/satyarajreddy/structbench",
    image: "/structbench.png",
    fallbackImage: structbenchPreview,
  },
  {
    number: "02",
    name: "GeoSignal Terminal",
    categoryLabel: "Market Intelligence",
    description:
      "Real-time geopolitical market intelligence platform tailored for Indian equity markets. Aggregates data and signals for trading insights.",
    skills: ["React", "Python", "Data Processing"],
    liveUrl: "https://geosignal-terminal.vercel.app/",
    sourceUrl:
      "https://github.com/satyarajreddy/geosignal-terminal/tree/main/geosignal-deploy",
    image: "/geosignal.png",
    fallbackImage: geosignalPreview,
  },
  {
    number: "03",
    name: "Graduate Admissions",
    categoryLabel: "Data Science / Analysis",
    description:
      "Analysis of graduate admissions data using Pandas, Seaborn, and statistical modeling to find relationships between variables and admission chances.",
    skills: ["Python", "Pandas", "Scikit-Learn"],
    liveUrl: undefined,
    sourceUrl: "https://github.com/satyarajreddy/Graduate-Admissions-Analysis",
    image: "/graduate_admissions.png",
  },
  {
    number: "04",
    name: "Sparkify Churn Prediction",
    categoryLabel: "Big Data / PySpark",
    description:
      "Predict user churn for a fictional music streaming service by analyzing large user activity logs and building machine learning models in PySpark.",
    skills: ["PySpark", "Machine Learning", "Big Data"],
    liveUrl: undefined,
    sourceUrl:
      "https://github.com/satyarajreddy/Sparkify-Churn-Prediction-using-PySpark",
    image: "/sparkify_churn.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-section-title">
          MY WORK<span className="work-title-dot">.</span>
        </h2>
        <div className="work-list">
          {projects.map((project, index) => (
            <div
              className={`work-row work-row-group ${index % 2 === 1 ? "work-row-reverse" : ""}`}
              key={index}
            >
              <div className="work-row-preview">
                <div className="work-preview-frame">
                  <WorkImage
                    image={project.image}
                    fallbackImage={"fallbackImage" in project ? (project as { fallbackImage: string }).fallbackImage : undefined}
                    alt={project.name}
                    link={project.liveUrl ?? project.sourceUrl}
                    fallbackTitle={project.name}
                  />
                </div>
              </div>
              <div className="work-row-content">
                <span className="work-number">{project.number}</span>
                <p className="work-category">{project.categoryLabel}</p>
                <h3 className="work-name">{project.name}</h3>
                <p className="work-description">{project.description}</p>
                <div className="work-skills-tags">
                  {project.skills.map((skill) => (
                    <span className="work-skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="work-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-demo"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-source"
                    >
                      Source Code <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
