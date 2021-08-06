import '../styles/componets/qualification.css';

export default function Qualification() {
  
    return (
      <section className="qualification section" id="qualification">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal Journey</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div className="qualification_button button-flex">
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>

            <div className="qualification_button button-flex">
              <i className="uil uil-briefcase-alt qualification_icon"></i>
              Work
            </div>
          </div>

          <div className="qualification_sections">
            {/* QUALIFICATION CONTENT 1 */}
            <div className="qualification_content">
              {/* QUALIFICATION 1 */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Computer Enginner</h3>
                  <span className="qualification_subtitle">UFES - São Mateus</span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              {/* QUALIFICATION 2 */}
              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">Web Developer</h3>
                  <span className="qualification_subtitle">Adapti Soluções Web</span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    May 2020 - Present
                  </div>
                </div>
              </div>

              {/* QUALIFICATION 3 */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Comercial Assessor</h3>
                  <span className="qualification_subtitle">Energy Jr</span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    March 2020 - May 2020
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  {/* <span className="qualification_line"></span> */}
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
    );
}