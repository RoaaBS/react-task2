import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/cabin.png';
import img2 from '../../assets/cake.png';
import img3 from '../../assets/circus.png';
import img4 from '../../assets/game.png';
import img5 from '../../assets/safe.png';
import img6 from '../../assets/submarine.png';
import './portfolio.css';
export default function Portfolio() {
  return (
    <div className='portfolio'>
          <div className='d-flex align-items-center justify-content-center flex-column'>
          <h1 className='text-uppercase text-center '>Portfolio</h1>
          <div className="divider-custom2">
          <div className="divider-custom-line2"></div>
          <div className="divider-custom-icon2">
          <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line2"></div>
          </div>
        
             <div className='portfolio-img'>
               <img src={img1} alt='cabin'/>
               <img src={img2}  alt='cake'/>
               <img src={img3} alt='circus'/>
               <img src={img4} alt='game'/>
               <img src={img5} alt='safe'/>
               <img src={img6} alt='submarine'/>
             </div>
     
        </div>
        
      
    </div>
  )
}
