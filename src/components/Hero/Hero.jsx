import React from 'react'
import './Hero.css';
import bg from '../assets/bg.png';

const Hero = () => {
  return (
    // <div className='hero'>
    //     <div className='hero-left'>
    //         <h2></h2>
    //         <div>
    //             <div className="hand-hand-icon">
    //                 <p>new</p>
    //                 {/* <img src={} alt=""/> */}
    //             </div>
    //             <p>collections</p>
    //             <p>for everyone</p>
    //         </div>
    //         <div className="hero-lastest-btn">
    //             <div>Lastest Collection</div>
    //             {/* <img src={} alt=""/> */}
    //         </div>
    //     </div>
        <div className="hero-right">
            <img src={bg} alt="" className='home'/>
        </div>
    // </div>
  )
}

export default Hero;