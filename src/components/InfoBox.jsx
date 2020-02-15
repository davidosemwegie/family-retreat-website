import React, { Component } from 'react';

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
                <div id="info-inner">
                    <p className="info-box-text" id="info-camp">CAMP 2020</p>
                    <p className="info-box-text" id="info-btw">#BETTERWITHYOU</p>
                    <p className="info-box-text" id="info-dt">Thu, Mar 1 - Sun. Mar 22 | Salem Acres Bible Camp</p>
                    <a target="_blank" href="https://www.showpass.com/youth-family-retreat/" className="info-box-text" id="ticket-box">Get Tickets</a>
                    <p className="info-box-text" id="info-sales">SALES CLOSE MARCH 15TH, 2019</p>
                </div>
            </section>
        );
    }
}

export default InfoBox;

