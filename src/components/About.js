import '../styles/componets/about.css';
import Resume from '../resume/Resume Hudson Cratz 2021.pdf';

export default function About() {
  
    return (
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
          <p className="about_description">23 years, I do a volunteer work in a student 's company at my
            college. I do web projects for micro and medium local entrepreneurs, just for
            experience and knowledge.
          </p>
          
          <div className="about_data">
            <div className="about_info">
              <div>
                <span className="about_info-title">02+</span>
                <span className="about_info-name">Years <br/> experience</span>
              </div>
              <div>
                <span className="about_info-title">05+</span>
                <span className="about_info-name">Completed <br/> project</span>
              </div>
              <div>
                <span className="about_info-title">02+</span>
                <span className="about_info-name">Companies <br/> worked</span>
              </div>
            </div>

            <div className="about_buttons">
              <a download="" href={Resume} className="button button-flex">
                Download CV<i className="uil uil-download-alt button_icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}