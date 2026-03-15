import { IconType } from "react-icons";
import { FaMicrosoft, FaAws } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import "./styles/Career.css";

type CareerEntry = {
  role: string;
  company: string;
  period: string;
  CompanyIcon?: IconType;
  companyIconUrl?: string;
  points: string[];
};

const careers: CareerEntry[] = [
  {
    role: "Software Development Engineer II",
    company: "Microsoft",
    period: "Sep 2025 – Dec 2025",
    companyIconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    points: [
      "Secure Future Initiative (SFI) controls across Entra (AAD) Reporting for SQL, Cosmos DB, Storage, Key Vault; zero production regressions.",
      "Multi-region infrastructure (Blu, Germany, Singapore); zero Sev2+ incidents.",
      "Azure AD authentication microservices and enterprise security workflows.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Amazon Web Services",
    period: "Dec 2022 – June 2025",
    companyIconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    points: [
      "High-performance RESTful Go API with IAM & DynamoDB; sub-100ms at 300K req/min.",
      "CloudWatch dashboards & alarms for 15+ microservices; ~40% faster incident detection.",
      "IaC migration with AWS CDK; ~80% faster provisioning across 500 accounts.",
      "On-call automation with Slack + Bedrock/Claude for GenAI incident summarization.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "ValueMomentum",
    period: "Jul 2019 – Jul 2021",
    companyIconUrl: "/images/valuemomentum.png",
    points: [
      "Distributed ETL with PySpark & Hadoop; 3B+ insurance records for analytical models.",
      "RESTful APIs in Python for financial data; 40% lower data access latency.",
      "Predictive modeling APIs (loan default risk) for Fortune 500 clients; containerized microservices.",
    ],
  },
  {
    role: "Founder",
    company: "Offergasm",
    period: "Aug 2016 – Jul 2019",
    CompanyIcon: FaRocket,
    points: [
      "Aggregator bidding platform for travel agents (flights & hotels).",
      "Data analytics for parameter allocation; 40%+ customer retention.",
    ],
  },
];

const Career = () => {
  return (
    <section className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careers.map((job, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5 className="career-company">
                    {job.companyIconUrl ? (
                      <span className="career-company-icon career-company-icon-img" aria-hidden>
                        <img src={job.companyIconUrl} alt={`${job.company} logo`} />
                      </span>
                    ) : job.CompanyIcon ? (
                      <span className="career-company-icon" aria-hidden>
                        <job.CompanyIcon />
                      </span>
                    ) : null}
                    {job.company}
                  </h5>
                </div>
                <h3>{job.period}</h3>
              </div>
              <ul className="career-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
