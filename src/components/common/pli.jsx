import React, { Component } from 'react';

class pli extends Component {
    render() {
        return (
        <p className="packing-list-element">X {this.props.children}</p>
        );
    }
}

export default pli;