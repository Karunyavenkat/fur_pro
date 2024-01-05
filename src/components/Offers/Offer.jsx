import React from 'react'
import './Offers.css';
import offer from '../assets/offer.png';

const Offer = () => {
  return (
    <div className='offers'>
        <img src={offer} alt="" className='exclusive'/>
        {/* <div className='offer-btn'>
            <button>Check Now</button>
        </div> */}
    </div>
    
  )
}

export default Offer