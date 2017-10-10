import React, { Component } from 'react';

class CreditCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Community Bank {this.props.name}</h3>
                <p>Credit Card description</p>
            </div>
        );
    }
};

export default CreditCard;