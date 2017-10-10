import React from 'react';
import CreditCard from './CreditCard';

const CreditCardPage = () => {
    return(
        <div>
            <h1>Credit Cards</h1>
            <CreditCard name={"Credit Card 1"}/>
            <CreditCard name={"Credit Card 2"}/>
            <CreditCard name={"Credit Card 3"}/>
        </div>
    );
};

export default CreditCardPage;