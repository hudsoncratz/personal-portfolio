import '../styles/componets/footer.css';

export default function Footer() {

  return (
    <footer className="footer" id="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">Hudson</h1>
            <span className="footer_subtitle">FullStack Developer</span>
          </div>

          <ul className="footer_links">       
            <li>
              <a href="#skills" className="footer_link">Skills</a>
            </li>
            <li>
              <a href="#portfolio" className="footer_link">Portfolio</a>
            </li>
            <li>
              <a href="#qualification" className="footer_link">Qualification</a>
            </li>
          </ul>
          
          <div className="footer_socials">
            <a href="https://www.linkedin.com/in/hudson-cratz-8201661b4/" target="_blank" className="footer_social">
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/hudsoncratz" target="_blank" className="footer_social"> 
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}