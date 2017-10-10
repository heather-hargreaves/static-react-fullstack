import React, { Component } from 'react';
import '../styles/CreditCard.css';

class CreditCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="credit-card">
                <hr />
                <div className="row">
                    <h3>Community Bank {this.props.name}</h3>
                </div><br />
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.img} height="175px" width="280px"></img>
                    </div>
                    <div className="col-md-2">
                        <h4>Rewards</h4>
                        <p>{this.props.rewards}</p>
                    </div>
                    <div className="col-md-2">
                        <h4>APR</h4>
                        <p>{this.props.apr}</p>
                    </div>
                    <div className="col-md-2">
                        <h4>Annual Fee</h4>
                        <p>{this.props.fee}</p>
                    </div>
                    <div className="col-md-2">
                        <button type="button submit" class="btn btn-primary">LEARN MORE</button><br />
                        <a href="#">Pricing & Terms</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default CreditCard;