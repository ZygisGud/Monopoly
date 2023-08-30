import React from 'react';

const OwnStreets = ({ ownedStreets, sellStreet }) => {
    return (
        <div className="g10 owned">
            <h2>Owned Streets</h2>
            {ownedStreets.map((ownedStreet, index) => (
                <div key={index}>
                    {ownedStreet.street}
                    <button onClick={() => sellStreet(ownedStreet)}> Sell {ownedStreet.price/2}</button>
                </div>
            ))}
        </div>
    );
};

export default OwnStreets;