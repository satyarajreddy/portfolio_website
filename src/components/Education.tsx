import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          Education <span>&</span>
          <br /> Academic
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-school">
                <h4>Georgia State University, Robinson College of Business</h4>
                <h5 className="education-location">Atlanta, GA</h5>
              </div>
              <h3>2021 – 2022</h3>
            </div>
            <div className="education-details">
              <p className="education-degree">MS: Information Systems (Big Data Management & Analytics)</p>
              <p className="education-gpa">GPA: 3.52/4</p>
              <ul className="education-points">
                <li>Graduate Research Assistant: Text mining analysis of Fortune 100 tech-business trends [NLP & Tableau]</li>
              </ul>
            </div>
          </div>

          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-school">
                <h4>Christ University</h4>
                <h5 className="education-location">Bengaluru, India</h5>
              </div>
              <h3>2016 – 2019</h3>
            </div>
            <div className="education-details">
              <p className="education-degree">BS: Computer Applications</p>
              <p className="education-gpa">CGPA: 8.92/10</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Education;
