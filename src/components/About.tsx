import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Backend Engineer and SDE-II at Microsoft Security (ex-AWS).
          I specialize in high-throughput API development, distributed systems,
          and cloud-native architecture for auth, incident response, and secure
          workflows at scale.
        </p>
        <ul className="about-highlights">
          <li>Backend &amp; APIs · Go, Python, TypeScript</li>
          <li>Cloud · AWS, Azure · Serverless &amp; ETL</li>
          <li>Data · Analytics, warehousing, ML pipelines</li>
          <li>MS Information Systems, Georgia State</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

