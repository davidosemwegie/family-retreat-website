import React, { Component } from 'react';
import waiver from '../assets/waiver.png'

class Waiver extends Component {
    render() {
        return (
            <div className="waiver-container">
                <img src={waiver} alt="Waiver Image" className="section-title-center" />
                <p className="waiver-text">To come to camp you need to get this waiver signed by a parents/gurdian.</p>
                <p className="waiver-text">Bring the signed waiver to camp with you as we will be asking for them upon arrival.</p>
                <p style={{marginTop: '1em', marginBottom: '1em'}} className="waiver-text">Download the form below</p>
                <a href="" id="waiver-download-button">DOWNLOAD</a>
            </div>
        );
    }
}

export default Waiver;