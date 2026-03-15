import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I&apos;m</h2>
            <h1>
              SATYARAJ
              <br />
              <span>REDDY NANDI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-tagline">
               <span className="what-title">Software Engineer</span><br />
               <span className="what-subtitle">Backend systems</span><br />
               <span className="what-subtitle">Web developer</span><br />
               <span className="what-subtitle">Cloud infra</span>
            </h2>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default Landing;
