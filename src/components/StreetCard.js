import React from 'react';

const StreetCard = ({ color, street, price, figurePosition, position, ownedStreets, buyStreet }) => {
    const isStreetOwned = ownedStreets.some((ownedStreet) => ownedStreet.position === position);
    const showPriceWithDollar = position !== 1;

    return (
        <div className="street-card d-flex">
            <div className="cityColor" style={{ backgroundColor: color }}></div>
            <div className="street-name d-flex flex-col text-center g10">
                <div>{street}</div>
                <div>{showPriceWithDollar ? `$${price}` : price}</div>
            </div>
            <div className="street">
                {figurePosition === position && !isStreetOwned && position !== 1 && (
                    <button onClick={() => buyStreet({ color, street, price, position })}>Buy</button>
                )}
            </div>
        </div>
    );
};

export default StreetCard;


