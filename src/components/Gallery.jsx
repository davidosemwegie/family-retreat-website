import React, { Component } from 'react';
import gallery from '../assets/gallery.png'

//import Carousel from 'react-image-carousel';

import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/2.jpg'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import Carousel from 'react-bootstrap/Carousel'

import GI from './common/gi'

let images = [
    one,
    two,
    three
];

class Gallery extends Component {
    render() {
        return (
            <div id='gallery-section'>
                <img src={gallery} alt="Schedule Image" className="section-title-center" />
                <div id="gallery-carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={one}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={two}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={three}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Gallery;