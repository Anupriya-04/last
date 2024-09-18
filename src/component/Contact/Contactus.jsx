import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Css_Folder/ContactForm.css';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dhohrzs', // Service ID
        'template_cmee15p', // Template ID
        form.current, // Form reference
        'srPXMCKPWGD3eJ3HD' // Public Key
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          toast.error('Failed to send message!');
        }
      );
  };

  return (
    <div className="contact-container"
    style={{ backgroundColor: '#D3EEFF', marginTop:"80px" }}>
    <div className="contact-info">
      <div className="logo-container">
        <img src="SRPMLOGO2.png" alt="Company Logo" className="company-logo" />
        <div className="company-name-container">
          <h3>Company Name</h3>
        </div>
      </div>
      <p>1234 Your Street, City, Country</p>
      <p>Email: <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sahunidhi706@gmail.com" target="_blank" rel="noopener noreferrer"> info@yourcompany.com </a></p>
      <p>Phone: +123-456-7890</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2450650757114!2d-122.08424968469256!3d37.421999779821535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5bbcd5cf4a1%3A0x785de2e89e236f89!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630518498762!5m2!1sen!2sus"
        className="map"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

      <div className="contact-form" style={{marginTop:"10px"}} >
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="to_name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="from_email" required />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input type="tel" name="mobile" required />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" value="send" className="send-button">
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contactus;

