import React, { Component } from 'react';
import schedule from '../assets/schedule.png'

import SDAY from './common/sday'
import SE from './common/se'

class Schedule extends Component {
    render() {
        return (
            <div id="schedule-container">
                <img src={schedule} alt="Schedule Image" className="section-title-center" />
                <div id="schedule-inner">
                    <ul id="schedule-list">
                        <li>
                            <ul>
                                <SDAY>THUR, MAR 19</SDAY>
                                <SE time="7:00PM" title="Arrival" />
                                <SE time="8:15PM" title="Dinner" />
                                <SE time="9:00PM" title="Pre-Service Prayer" />
                                <SE time="9:30PM" title="Weekend Opener" />
                                <SE time="10:30PM" title="Games Night" />
                                <SE time="12:00AM" title="Lights Out" />
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <SDAY>FRI, MAR 20</SDAY>
                                <SE time="8:30AM" title="Breakfast" />
                                <SE time="9:30AM" title="Free Time" />
                                <SE time="10:00AM" title="Pre-Serice Activity" />
                                <SE time="10:10AM" title="Bible Study / Special Guest" />
                                <SE time="11:00AM" title="Outdoor Activities" />
                                <SE time="12:30PM" title="Lunch" />
                                <SE time="1:45PM" title="Girls + Boys Session" />
                                <SE time="3:00PM" title="Mission Impossible / Scavenger Hunt" />
                                <SE time="4:30PM" title="Free Time" />
                                <SE time="6:00PM" title="Dinner" />
                                <SE time="7:00M" title="Praise and Worship" />
                                <SE time="7:10PM" title="Session" />
                                <SE time="8:00PM" title="Flex Time" />
                                <SE time="8:40PM" title="Games Night" />
                                <SE time="10:00PM" title="Campfire" />
                                <SE time="11:20PM" title="Lights Out" />
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <SDAY>SAT, MAR 21</SDAY>
                                <SE time="8:30AM" title="Breakfast" />
                                <SE time="9:30AM" title="Free Time" />
                                {/* <SE time="9:30AM" title="Pre-Service Prayer" /> */}
                                <SE time="9:50AM" title="Pre-Service Game" />
                                <SE time="10:00AM" title="Worship" />
                                <SE time="10:15AM" title="Special Guest" />
                                <SE time="11:00AM" title="Outdoot Activity" />
                                <SE time="12:00PM" title="Lunch" />
                                <SE time="1:00PM" title="Panel Discussion" />
                                <SE time="4:00PM" title="Free Time" />
                                <SE time="7:00PM" title="Dinner Party" />
                                <SE time="12:AM" title="Lights Out" />
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <SDAY>SUN, MAR 22</SDAY>
                                <SE time="8:30AM" title="Breakfast" />
                                <SE time="9:30AM" title="Pack and Clean Up" />
                                {/* <SE time="9:45AM" title="Pre-Service Prayer" /> */}
                                <SE time="10:00AM" title="Pre-Service Game" />
                                <SE time="10:10AM" title="Worship" />
                                <SE time="10:30AM" title="Special Guest" />
                                <SE time="11:40AM" title="Group Photo" />
                                <SE time="12:00PM" title="CAMP DONE!" />
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Schedule;