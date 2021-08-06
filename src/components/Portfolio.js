import '../styles/componets/portfolio.css';
import Portfolio1 from '../images/portfolio1.png';
import Portfolio2 from '../images/portfolio2.png';
import Portfolio3 from '../images/portfolio3.png';
import Portfolio4 from '../images/portfolio4.jpg';
import React, { useLayoutEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Portfolio() {

  useLayoutEffect(() => {
    let next = document.getElementsByClassName('swiper-button-next')[0];
    const arrowRight = document.createElement('i');
    arrowRight.className = 'uil uil-angle-right-b swiper-portfolio-icon';
    
    next.appendChild(arrowRight);

    let prev = document.getElementsByClassName('swiper-button-prev')[0];
    const arrowLeft = document.createElement('i');
    arrowLeft.className = 'uil uil-angle-left-b swiper-portfolio-icon';

    prev.appendChild(arrowLeft);
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most Recent Work</span>
  
      <Swiper
        cssMode={true} 
        navigation={true} 
        pagination={true} 
        mousewheel={true} 
        keyboard={true} 
        className="mySwiper portfolio_container container"
      >
        {/* PORTFOLIO 1 */}
        <SwiperSlide className="portfolio_content grid">
          <img src={Portfolio1} alt="" className="portfolio_img"/>

          <div className="portfolio_data">
            <h3 className="potfolio_title">Happy - Web Site</h3>
            <p className="portfolio_description">Website adaptable to all devices, about management and access of charity institutions.</p>
            <a href="https://github.com/hudsoncratz/orphanate-aplication-nlw" target="_blank" className="button button-flex button-small portfolio_button">
              See More
              <i className="uil uil-arrow-right button_icon"></i>
            </a>
          </div>
        </SwiperSlide>

        {/* PORTFOLIO 2 */}
        <SwiperSlide className="portfolio_content grid">
          <img src={Portfolio2} alt="" className="portfolio_img"/>

          <div className="portfolio_data">
            <h3 className="potfolio_title">Happy - Mobile</h3>
            <p className="portfolio_description">Mobile App adaptable to all devices, about management and access of charity institutions.</p>
            <a href="https://github.com/hudsoncratz/orphanage-mobile-application" target="_blank" className="button button-flex button-small portfolio_button">
              See More
              <i className="uil uil-arrow-right button_icon"></i>
            </a>
          </div>
        </SwiperSlide>

        {/* PORTFOLIO 3 */}
        <SwiperSlide className="portfolio_content grid">
          <img src={Portfolio3} alt="" className="portfolio_img"/>
  
          <div className="portfolio_data">
            <h3 className="potfolio_title">Sandro&Sanders - System</h3>
            <p className="portfolio_description">At Adapti, I joined the team in the Sandro Sanders project. Using Laravel and Bootstrap 4, we developed administrative
             system to handle Uniforms, Users, Rotes</p>
          </div>
        </SwiperSlide>

        {/* PORTFOLIO 4 */}
        <SwiperSlide className="portfolio_content grid">
          <img src={Portfolio4} alt="" className="portfolio_img"/>
  
          <div className="portfolio_data">
            <h3 className="potfolio_title">Legis - Dynamic website</h3>
            <p className="portfolio_description">At Adapti Soluções Web, I joined the team in the 
            Legis project. Using Laravel and Bootstrap 4, we developed an integrated website with an administrative system to handle Banners, Services, Portfolio, among others.</p>
            <a href="https://legisconsultoriajuridica.com/" target="_blank" className="button button-flex button-small portfolio_button">
              See More
              <i className="uil uil-arrow-right button_icon"></i>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}