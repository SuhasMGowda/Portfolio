import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Testing & Development Intern</h4>
                <h5>Heizen</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and executed data-driven testing strategies for AI/ML
              modules, identifying 15+ critical bugs and increasing system
              reliability by 30% pre-deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Project Intern</h4>
                <h5>LRDE, DRDO</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Architecting a hybrid KFFLSTM (Kalman Filter + Fuzzy Logic + LSTM)
              model to enhance radar target tracking precision, reducing
              trajectory prediction error in noisy, non-linear environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing</h4>
                <h5>Self Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Dynamic freelancer delivering high-impact solutions through
              specialized expertise and a results-driven approach. I partner
              with clients to streamline workflows, elevate brand value, and
              ensure project success on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
