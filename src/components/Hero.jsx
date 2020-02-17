import React, { Component } from 'react';
import Hero from '../assets/HeroWeb.png'

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

class componentName extends Component {
    render() {
        return (
            <div class="hero-container">
                
                <p className="hero-text" id="hero-text-top">YOUTH FAMILY RETREAT</p>
                {/* <p className="hero-text" id="hero-text-bottom"> YOUTH FAMILY RETREAT</p> */}
                <a target="_blank" href="https://www.showpass.com/youth-family-retreat/" className="info-box-text" id="ticket-box">Get Tickets</a>

                <div className="video-box">
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe src="https://player.vimeo.com/video/391702427" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                </div>
                {/* <div id="hero-inner">
                    
                </div> */}
                {/* <img id="HeroImage" /> */}
                {/* <div class="hero-text-box">
    
                </div> */}
            </div>
        );
    }
}

export default componentName;