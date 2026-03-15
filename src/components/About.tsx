import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          SDE-II at Microsoft Security (ex-AWS). I build and optimize systems for
          auth, incident response, and secure workflows at scale.
        </p>
        <ul className="about-highlights">
          <li>Backend &amp; APIs · Go, Python, TypeScript</li>
          <li>Cloud · AWS, Azure · Serverless &amp; ETL</li>
          <li>Data · Analytics, warehousing, ML pipelines</li>
          <li>MS Information Systems, Georgia State</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
