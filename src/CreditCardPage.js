import React from 'react';
import CreditCard from './CreditCard';

const CreditCardPage = () => {
    return(
        <div className="container">
            <h1>Credit Cards</h1>
            <CreditCard name={"Platinum credit card"}/>
            <CreditCard name={"Gold credit card"}/>
            <CreditCard name={"Black credit card"}/>
        </div>
    );
};

export default CreditCardPage;