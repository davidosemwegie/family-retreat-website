import React, { Component } from 'react';
import packing from '../assets/packing.png'

import PLI from './common/pli'

class Packing extends Component {
    render() {
        return (
            <div id="packing-container">
                <img src={packing} alt="Packing Image" className="packing-title" />
                <p className="packing-text">There is a possibility yout might get dirty so please ensure you have a coupel
                    options as replacement.
                </p>
                <p className="packing-text">There will be a special dinner on Saturday night, so make sure to pack a nice outfit for that</p>
                <p className="packing-text">As you pack, remember modesty and decency is the rule!</p>
                <ul id="main-packing-list">
                    <li>
                        <ul>
                            <PLI>Bed Sheet</PLI>
                            <PLI>Blanket</PLI>
                            <PLI>Pillow</PLI>
                            <PLI>Pillow Case</PLI>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <PLI>Change of clothes for 3 days</PLI>
                            <PLI>Pyjamas</PLI>
                            <PLI>Outfit For Special Dinner</PLI>
                            <PLI>Sweaters</PLI>
                            <PLI>Jacket</PLI>
                            <PLI>Socks</PLI>
                            <PLI>Underwear</PLI>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <PLI>Tooth Brush</PLI>
                            <PLI>Tooth Paste</PLI>
                            <PLI>Toiletries</PLI>
                            <PLI>Towel</PLI>
                            <PLI>Bathroom Slippers</PLI>
                            <PLI>Body Soap</PLI>
                            <PLI>Sponge</PLI>
                            <PLI>DEODERANT</PLI>
                            <PLI>Lotion</PLI>
                            <PLI>Sunscreen</PLI>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <PLI>Bible</PLI>
                            <PLI>Notebook and pen</PLI>
                            <PLI>Cash not Snack Shack (Optional)</PLI>
                            <PLI>Signed Waiver Form</PLI>
                        </ul>
                    </li>
                </ul>

                <a href="" id="packing-list-button">DOWNLOAD LIST</a>
            </div>
        );
    }
}

export default Packing;