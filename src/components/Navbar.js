import '../styles/componets/navbar.css';
import { useRef } from 'react';
import Scrollspy from 'react-scrollspy';


export default function Navbar() {

  const navMenu = useRef(null);
  const themeButton = useRef(null);
  function showMenu() {
    navMenu.current.classList.add('show-menu');
  }
  function hideMenu() {
    navMenu.current.classList.remove('show-menu');
  }

  function changeTheme () {
    const darkTheme = 'dark-theme',
      iconTheme = 'uil-sun';
   
    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    
    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.current.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.current.classList.toggle(iconTheme);
  }

  return (
    <nav className="nav container">
      <a href="#" className="nav_logo">Hudson Cratz</a>
      <div className="nav_menu" ref={navMenu} id="nav-menu">
        <Scrollspy 
          items={ ['home', 'about', 'skills', 'qualification', 'portfolio', 'contact'] } 
          currentClassName="active-link"
          className="nav_list grid"
        >
          <li className="nav_item">
            <a href="#home" className="nav_link" onClick={hideMenu}>
              <i className="uil uil-estate nav_icon"></i> Home
            </a>
          </li>
          <li className="nav_item">
            <a href="#about" className="nav_link" onClick={hideMenu}> 
              <i className="uil uil-user nav_icon"></i> About
            </a>
          </li>
          <li className="nav_item">
            <a href="#skills" className="nav_link" onClick={hideMenu}>
              <i className="uil uil-file-alt nav_icon"></i> Skills
            </a>
          </li>
          <li className="nav_item" onClick={hideMenu}>
            <a href="#qualification" className="nav_link">
              <i className="uil uil-briefcase-alt nav_icon"></i> Qualification
            </a>
          </li>
          <li className="nav_item" onClick={hideMenu}>
            <a href="#portfolio" className="nav_link">
              <i className="uil uil-scenery nav_icon"></i> Portfolio
            </a>
          </li>
          <li className="nav_item" onClick={hideMenu}>
            <a href="#contact" className="nav_link">
              <i className="uil uil-message nav_icon"></i> Contact Me
            </a>
          </li>
        </Scrollspy>
        <i className="uil uil-times nav_close" id="nav-close" onClick={hideMenu}></i>
      </div>

      <div className="nav_btns">
        {/* Them change button */}
        <i className="uil uil-moon change-theme" ref={themeButton} onClick={changeTheme}></i>
        <div className="nav_toggle" id="nav-toggle" onClick={showMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  );
}