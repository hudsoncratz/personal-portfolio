import '../styles/componets/contact.css';
import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_k5n4uiy', 'template_o6pjcfm', e.target, 'user_bdcxRYZbrdtvbhLtrXctL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in touch</span>

      <div className="contact_container container grid">
        <div>
          <div className="contact_information">
            <i className="uil uil-phone contact_icon"></i>
            
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">+55 (27) 99890-2192</span>
            </div>
          </div>

          <div className="contact_information">
            <i className="uil uil-envelope contact_icon"></i>
            
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">hudsoncratz@gmail.com</span>
            </div>
          </div>

          <div className="contact_information">
            <i className="uil uil-map-marker contact_icon"></i>
            
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Brazil, Vitória - ES</span>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail} method="post" className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input type="text" className="contact_input" name="name"></input>
            </div>
            <div className="contact_content">
              <label className="contact_label">Email</label>
              <input type="email" className="contact_input" name="email"></input>
            </div>
          </div>
          <div className="contact_content">
            <label className="contact_label">Subject</label>
            <input type="text" className="contact_input" name="subject"></input>
          </div>
          <div className="contact_content">
            <label className="contact_label">Message</label>
            <textarea id="" cols="0" rows="7" className="contact_input" name="message"></textarea>
          </div>
          
          <div>
            <button className="button button-flex" type="submit">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}