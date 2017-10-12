import React, { Component } from 'react';
import '../styles/CardApplication.css';

class CardApplication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardType: null
        };
    }

    componentWillMount() {
        const param = window.location.search.substring(window.location.search.indexOf('?') + 6);
        const cardNameArray = param.split("%20");
        const cardNameString = cardNameArray.join(" ");

        this.setState({
            cardType: cardNameString
        });
    }
    
    render() {
        return(
            <div className="container">
                <div className="row title">
                    <h1>Apply For the { this.state.cardType }</h1>
                </div><hr />
                <form>
                    <div className="form-group">
                        <label for="firstNameInput">First Name</label>
                        <input type="text" className="form-control" id="firstNameInput" placeholder="Enter First Name" />
                    </div>
                    <div className="form-group">
                        <label for="lastNameInput">Last Name</label>
                        <input type="text" className="form-control" id="lastNameInput" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group">
                        <label for="ssnInput">Social Security Number</label>
                        <input type="text" className="form-control" id="ssnNameInput" placeholder="XXX-XX-XXXX" />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div class="col-md-6">
                                <label for="streetInput">Street Address</label>
                                <input type="text" class="form-control" placeholder="Enter Street Address" />
                            </div>
                            <div className="col-md-6">
                                <label for="cityInput">City</label>
                                <input type="text" className="form-control" placeholder="Enter City" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div class="col-md-6">
                                <label for="stateInput">State</label>
                                <input type="text" className="form-control" placeholder="Enter State" />
                            </div>
                            <div className="col-md-6">
                                <label for="zipInput">Zip Code</label>
                                <input type="text" className="form-control" placeholder="Enter Zip Code" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group submit-div">
                        <button type="submit" id="submit" className="btn btn-primary">SUBMIT</button><br />
                    </div>
                </form>
            </div>
        )
    }
};

export default CardApplication;