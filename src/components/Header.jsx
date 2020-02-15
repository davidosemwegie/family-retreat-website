import React, { Component } from 'react';

import * as com from './common/index'


const Header = (props) => {
    return (
        <div id="Header">
            <ul>
                 <li><a href="" className="navLink">SCHEDULE</a></li>
                <li><a href="" className="navLink">PACKING LIST</a></li>
                <li><a href="" className="navLink">WAIVER</a></li>
                <li><a href="" className="navLink">FAQ</a></li>
                <li><a href="" className="navLink">GALLERY</a></li>
            </ul>
            {/* <div id = "nav">
                <ul>
                    <li><a href="" className="navLink">SCHEDULE</a></li>
                    <li><a href="" className="navLink">PACKING LIST</a></li>
                    <li><a href="" className="navLink">WAIVER</a></li>
                    <li><a href="" className="navLink">FAQ</a></li>
                    <li><a href="" className="navLink">GALLERY</a></li>
                </ul>                
            </div> */}

            {/* <div id = "nav">
                    <li><a href="" className="navLink">SCHEDULE</a></li>
                    <li><a href="" className="navLink">PACKING LIST</a></li>
                    <li><a href="" className="navLink">WAIVER</a></li>
                    <li><a href="" className="navLink">FAQ</a></li>
                    <li><a href="" className="navLink">GALLERY</a></li>            
            </div> */}
        </div>
    );
}

export default Header;