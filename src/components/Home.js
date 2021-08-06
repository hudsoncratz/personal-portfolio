import '../styles/componets/home.css';
import Blob from './images/Blob'

export default function Home() {
  
    return (
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a href="https://www.linkedin.com/in/hudson-cratz-8201661b4/" target="_blank" className="home_social-icon">
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a href="https://www.github.com/hudsoncratz" target="_blank" className="home_social-icon">
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
            <div className="home_img">
              <Blob/>
            </div>
            <div className="home_data">
              <h1 className="home_title">Hudson Cratz</h1>
              <h3 className="home_subtitle">FullStack Developer</h3>
              <p className="home_description">Experience in web development knowledge, producing quality work.</p>
              <a href="#contact" className="button button-flex">
                Contact Me <i className="uil uil-message button_icon"></i>
              </a>
            </div>
          </div>
          <div className="home_scroll">
            <a href="#about" className="home_scroll-button button-flex">
              <i className="uil uil-mouse-alt home_scroll-mouse"></i>
              <span className="home_scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    );
}