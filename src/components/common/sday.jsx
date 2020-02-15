import React, { Component } from 'react';

class sday extends Component {
    render() {
        return (
            <p className="s-date">{this.props.children}</p>
        );
    }
}

export default sday;