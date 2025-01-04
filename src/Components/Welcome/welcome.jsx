import React from 'react';
import './welcome.css';
import exampleImage from '../../assets/avataaars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Welcome() {
  return (
    <div className="startBootsrap d-flex align-items-center justify-content-center flex-column">
      <img src={exampleImage} alt="Avatar" />

      <h1 className="text-uppercase">Start Bootstrap</h1>

      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line"></div>
      </div>

      <p className="font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
