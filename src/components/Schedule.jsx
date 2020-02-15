import React, { Component } from 'react';
import schedule from '../assets/schedule.png'

import SDAY from './common/sday'
import SE from './common/se'

class Schedule extends Component {
    render() {
        return (
            <div id="schedule-container"> 
                <img src={schedule} alt="Schedule Image" className="section-title-center" />
                <ul id="schedule-list">
                    <li>
                        <ul>
                            <SDAY>THUR, MAR 19</SDAY>
                            <SE time="7:00PM" title="Arrival" />
                            <SE time="8:15PM" title="Dinner" />
                            <SE time="9:30PM" title="Opening Rally" />
                            <SE time="12:00AM" title="Lights Out" />
                        </ul>
                    </li>
                    <li>
                    <ul>
                            <SDAY>FRI, MAR 20</SDAY>
                            <SE time="8:30AM" title="Breakfast" />
                            <SE time="10:00AM" title="Bible Study" />
                            <SE time="10:45AM" title="Activity" />
                            <SE time="12:30PM" title="Lunch" />
                            <SE time="1:45PM" title="Session" />
                            <SE time="3:00PM" title="Activity" />
                            <SE time="6:00PM" title="Dinner" />
                            <SE time="7:10PM" title="Session" />
                            <SE time="8:40PM" title="Games" />
                            <SE time="10:00PM" title="Campfire" />
                            <SE time="11:20PM" title="Lights Out" />
                        </ul>
                    </li>
                    <li>
                    <ul>
                            <SDAY>SAT, MAR 21</SDAY>
                            <SE time="8:30AM" title="Breakfast" />
                            <SE time="11:00AM" title="Breakout Session" />
                            <SE time="1:00PM" title="Lunch" />
                            <SE time="2:00PM" title="Panel" />
                            <SE time="4:00PM" title="Talent Show Prep" />
                            <SE time="7:00PM" title="Dinner Party Starts" />
                            <SE time="12:30PM" title="Lights Out" />
                        </ul>
                    </li>
                    <li>
                    <ul>
                            <SDAY>SUN, MAR 22</SDAY>
                            <SE time="8:30AM" title="Breakfast" />
                            <SE time="9:30AM" title="Clean Up" />
                            <SE time="10:00AM" title="Sermon" />
                            <SE time="2:30PM" title="Leave Camp" />
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Schedule;