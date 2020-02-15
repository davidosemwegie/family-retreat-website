import React, { Component } from 'react';

class gi extends Component {
    render() {
        return (
            <img src={this.props.src} alt="Gallery Image" className="gallery-image" />
        );
    }
}

export default gi;