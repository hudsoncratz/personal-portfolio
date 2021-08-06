import '../styles/componets/skills.css';

export default function Skills() {
  const skillsContent = document.getElementsByClassName('skills_content');

  function toggleSkills(id) {

    for(let i=0; i< skillsContent.length; i++) {
      if(skillsContent[id] === skillsContent[i] 
      && skillsContent[id].className === 'skills_content skills_close') 
        skillsContent[id].className = 'skills_content skills_open';
      else skillsContent[i].className = 'skills_content skills_close'; 
    }
  }
    return (
      <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <div className="skills_container container grid">
          

            {/* SKILLS 1 */}

            <div className="skills_content skills_open">
              <div className="skills_header" onClick={() => toggleSkills(0)}>
                <i className="uil uil-brackets-curly skills_icon"></i>
                <div>
                  <h1 className="skills_title">Frontend Developer</h1>
                  <span className="skills_subtitle">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skills_arrow"></i>
              </div>

              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_html"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills_number">80%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_css"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_js"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">React</h3>
                    <span className="skills_number">55%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_react"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Bootstrap</h3>
                    <span className="skills_number">70%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_bootstrap"></span>
                  </div>
                </div>
              </div>
              
            </div>
            

            {/* SKILLS 2 */}

            <div className="skills_content skills_close">
              <div className="skills_header" onClick={() => toggleSkills(1)}>
                <i className="uil uil-server-network skills_icon"></i>
                <div>
                  <h1 className="skills_title">Backend Developer</h1>
                  <span className="skills_subtitle">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skills_arrow"></i>
              </div>

              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">PHP</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_php"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Node Js</h3>
                    <span className="skills_number">40%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_node"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills_number">70%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_mysql"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Laravel</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_laravel"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Git</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_git"></span>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </section>
    );
}