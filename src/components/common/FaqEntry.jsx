import React, { Component } from 'react';

class FaqEntry extends Component {
    render() {
        return (
            <div className="faq-box">
                <h1 className="faq-title">{this.props.title}</h1>
                <p className="faq-text">{this.props.children}</p>
            </div>
        );
    }
}

export default FaqEntry;