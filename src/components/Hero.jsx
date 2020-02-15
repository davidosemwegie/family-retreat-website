import React, { Component } from 'react';
import Hero from '../assets/Hero.png'

class componentName extends Component {
    render() {
        return (
            <div class="hero-container">
                <img src={Hero} alt="Camp Image" id="HeroImage" />
                {/* <div class="hero-text-box">
                    <p className="hero-text" id="hero-text-top">YOUTH</p>
                    <p className="hero-text" id="hero-text-bottom">FAMILY RETREAT</p>
                </div> */}
            </div>
        );
    }
}

export default componentName;