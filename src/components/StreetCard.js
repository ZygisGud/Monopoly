import React from 'react';

const Card = ({ color, street, price }) => {
    return (
        <div className="street-card">
            <div className="street-name" style={{ color }}>
                {street}
            </div>
            <div className="price">${price}</div>
        </div>
    );
};

export default Card;