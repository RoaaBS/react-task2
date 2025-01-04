import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <div className="divider-custom2">
        <div className="divider-custom-line2"></div>
        <div className="divider-custom-icon2">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line2"></div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
          <form id="contactform">
            <div className="forminput mb-3">
              <input className="form-control" id="name" type="text" required aria-label="Full name"/>
              <label htmlFor="name">Full name</label>
              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div className="forminput mb-3">
              <input className="form-control" id="email" type="email" required aria-label="Email address"/>
              <label htmlFor="email">Email address</label>
              <div className="invalid-feedback" data-sb-feedback="name:required">An email is required.</div>
            </div>
            <div className="forminput mb-3">
              <input className="form-control" id="phone" type="tel" required aria-label="Phone number"/>
              <label htmlFor="phone">Phone number</label>
              <div className="invalid-feedback" data-sb-feedback="name:required">A phone is required.</div>
            </div>
            <div className="forminput position-relative mb-3">
              <textarea className="form-control" id="message"  required aria-label="Message" ></textarea>
              <label htmlFor="message">Message</label>
              <div className="invalid-feedback" data-sb-feedback="name:required">A message is required.</div>
            </div>
            <button id="submitButton" type="submit"> Send </button>
          </form>
        </div>
      </div>
    </div>
  );
}
