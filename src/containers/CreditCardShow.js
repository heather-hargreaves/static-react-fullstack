import React, { Component } from 'react';

class CreditCardShow extends Component {
    render() {
        return(
            <h1>{this.props.params}!</h1>
        );
    }
};

export default CreditCardShow;