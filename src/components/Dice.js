import React, { useState } from 'react';

const Dice = ({ handleMove, totalCells }) => {
    const [rolledNumber, setRolledNumber] = useState(1);

    const rollDice = () => {
        const steps = Math.floor(Math.random() * 6) + 1;
        handleMove(steps);
    };
    const diceImages = {
        1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png",
        2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png",
        3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png",
        4: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png",
        5: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png",
        6: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/2048px-Dice-6-b.svg.png",
    };


    return (
        <div>
            <div className="grow5 d-flex j-center a-items g50">
                <div className="dice" onClick={rollDice}>
                    <img src={diceImages[rolledNumber]} alt={`Dice ${rolledNumber}`} />
                </div>
                <div>
                    <button onClick={rollDice}>Roll dice</button>
                </div>
            </div>
        </div>
    );
};

export default Dice;
