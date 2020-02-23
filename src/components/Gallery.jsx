import React, { Component } from 'react';
import gallery from '../assets/gallery.png'

//import Carousel from 'react-image-carousel';

import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import eleven from '../assets/11.jpg'
import twelve from '../assets/12.jpg'
import thirteen from '../assets/13.jpg'
import fourteen from '../assets/14.jpg'
import fifteen from '../assets/2.jpg'
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
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={four}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={five}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={six}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={seven}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={eight}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={nine}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ten}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={eleven}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={twelve}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={thirteen}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fourteen}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fifteen}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <a target="_blank" href="https://www.showpass.com/youth-family-retreat/" className="info-box-text" id="ticket-box-gallery">Get Tickets</a>
                </div>
                
            </div>
        );
    }
}

export default Gallery;