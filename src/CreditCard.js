import React, { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <hr />
                <div className="row">
                    <h3>Community Bank {this.props.name}</h3>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p>This is where the picture will go</p>
                    </div>
                    <div className="col-md-2">
                        <h4>Rewards</h4>
                        <p>This is where the rewards description will go</p>
                    </div>
                    <div className="col-md-2">
                        <h4>APR</h4>
                        <p>APR%</p>
                    </div>
                    <div className="col-md-2">
                        <h4>Annual Fee</h4>
                        <p>Annual%</p>
                    </div>
                    <div className="col-md-2">
                        <button type="button" class="btn btn-primary">LEARN MORE</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default CreditCard;