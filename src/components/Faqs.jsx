import React, { Component } from 'react';
import faqs from '../assets/faqs.png'

import FaqEntry from './common/FaqEntry'

class Faqs extends Component {
    render() {
        return (
            <div>
                <img src={faqs} alt="Waiver Image" className="section-title-center" />
                <div className="section-container">
                    <FaqEntry title="What does the price include?">
                        Food and snacks for the entire weekend, accommodation and access to all the games, sermons, and activities.
                </FaqEntry>
                    <FaqEntry title="Will transportation be provided?">
                        Unfortunately, with our budget we cannot afford to get a bus that will carry everyone to the camp; so everyone will need to
                        arrange thier own rides to and from the camp.
                </FaqEntry>
                    <FaqEntry title="Is the camp safe?">
                        Yes! The camp is in a highly secure area with the camp own and supervisors on group if anything at all were to come up.
                </FaqEntry>
                    <FaqEntry title="What are we going to be doing there ?">
                        We have a super fun weekend planned where you will be able to meet with new people, grow your relationship with God,
                        and engage in a little bit of friendly completion with our activities and games planned.
                </FaqEntry>
                </div>
            </div>
        );
    }
}

export default Faqs;