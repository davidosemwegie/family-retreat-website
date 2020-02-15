import React, { Component } from 'react';

class SE extends Component {
    render() {
        return (
            <p className="schedule-event">{this.props.time} - {this.props.title}</p>
        );
    }
}

export default SE;