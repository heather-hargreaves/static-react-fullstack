import React from 'react';
import CreditCard from './CreditCard';

const CreditCardPage = () => {
    return(
        <div className="container">
            <h1>Credit Cards</h1>
            <CreditCard 
                name={"Platinum credit card"} 
                img={"https://photos-6.dropbox.com/t/2/AACwPsJ_0-_HlwFpDoa04J_m4ftuq9nv-BPz94QfymLgmA/12/281164706/png/32x32/3/1507683600/0/2/SilverCardImage%402x.png/EP-qoMoEGPZaIAIoAg/2298qmiK7g-JFaWZpySkA8aGmaIhFOO0aSyQAULN2nM?dl=0&size=1280x960&size_mode=3"} 
                apr={"0"} />
            <CreditCard 
                name={"Gold credit card"} 
                img={"https://photos-2.dropbox.com/t/2/AABJo2tU3pccsbdI8WQJurifnPeipOgahV7afWpQiOV66A/12/281164706/png/32x32/3/1507683600/0/2/GoldCardImage%402x.png/EP-qoMoEGPZaIAIoAg/5kzMFF0AdzJXl_YtpP1fhLRX8iQ4YQj_-LS4s3y7Cc8?dl=0&size=1280x960&size_mode=3"} 
                apr={"0"} />
            <CreditCard 
                name={"Black credit card"} 
                img={"https://photos-1.dropbox.com/t/2/AAC1JMSj0wjDoP2iwajLQIEDFlac31UshK7lWB7CAdkKAg/12/281164706/png/32x32/3/1507683600/0/2/BlackCardImage%402x.png/EP-qoMoEGPZaIAIoAg/srdRHhboh8vqvz69kuPO5DsWx2ECMFQ_ICwK_zakp1U?dl=0&size=1280x960&size_mode=3"} 
                apr={"16.99-23.99"} />
        </div>
    );
};

export default CreditCardPage;