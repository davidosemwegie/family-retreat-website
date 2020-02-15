import React, { Component } from 'react';

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

import BG from '../assets/90s.jpg'

// var sectionStyle = {
//     // width: '100%',
//     backgroundImage: `url(${BG})`,
//     background-repeat: 'no-repeat, repeat';

//   };


class InfoBox extends Component {
    render() {
        return (
            <section className="info-box" style={{ backgroundImage: `url(${BG})` }}>
                <div>
                    <p className="info-box-text" id="info-camp">CAMP 2020</p>
                    <p className="info-box-text" id="info-btw">#BETTERWITHYOU</p>
                    <p className="info-box-text" id="info-dt">Thu, Mar 19 - Sun. Mar 22 | Salem Acres Bible Camp</p>
                    <a target="_blank" href="https://www.showpass.com/youth-family-retreat/" className="info-box-text" id="ticket-box">Get Tickets</a>
                    <p className="info-box-text" id="info-sales">SALES CLOSE MARCH 15TH, 2019</p>
                </div>
                <div style={{ width: '100%', height: 'auto', backgroundColor: 'red' }}>
                    <ResponsiveEmbed aspectRatio="16by9">
                    <iframe src="https://player.vimeo.com/video/391702427" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                </div>
            </section>
        );
    }
}

export default InfoBox;

