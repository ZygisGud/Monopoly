import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import Dice from "../components/Dice";
import StreetCard from "../components/StreetCard";
import OwnStreets from "../components/OwnStreets";



const GameBoard = () => {

    const gameMap = [
        1,   2,  3,  4,  5,  6,  7,
        18,  0,  0,  0,  0,  0,  8,
        17,  0,  0,  0,  0,  0,  9,
        16, 15, 14, 13, 12, 11, 10,
    ];

    const cellData = [
        { color: 'white', street: 'START'},
        { color: 'brown', street: 'Kirtimų g.', price: 50 },
        { color: 'brown', street: 'Gariūnų g.', price: 60 },
        { color: 'lightblue', street: 'Vytauto g.', price: 100 },
        { color: 'lightblue', street: 'Kęstučio g.', price: 110 },
        { color: 'pink', street: 'Kauno g.', price: 110 },
        { color: 'pink', street: 'Švitrigailos g.', price: 120 },
        { color: 'pink', street: 'Dariaus ir Girėno g.', price: 130 },
        { color: 'orange', street: 'Basanavičiaus g.', price: 150 },
        { color: 'orange', street: 'Savanorių pr.', price: 160 },
        { color: 'red', street: 'Antakalnio g.', price: 200},
        { color: 'red', street: 'A. Goštauto g.', price: 220 },
        { color: 'yellow', street: 'Laisvės pr.', price: 250 },
        { color: 'yellow', street: 'Ukmergės g.', price: 280 },
        { color: 'green', street: 'Vokiečių g.', price: 300 },
        { color: 'green', street: 'Vilniaus g.', price: 320 },
        { color: 'blue', street: 'Didžioji g.', price: 350 },
        { color: 'blue', street: 'Gedimino pr.', price: 400 },



    ];
    const { selectedFigure } = useParams();
    const numRows = 4;
    const numCols = 7;
    const totalCells = numRows * numCols;


    const [figurePosition, setFigurePosition] = useState(1);
    const [playerMoney, setPlayerMoney] = useState(200);
    const [ownedStreets, setOwnedStreets] = useState([]);

    const getImageUrl = (figure) => {
        switch (figure) {
            case 'BattleShip':
                return 'https://fox8.com/wp-content/uploads/sites/12/2022/04/BattleShip-Copy.png';
            case 'Boot':
                return 'https://fox8.com/wp-content/uploads/sites/12/2022/04/Boot.png';
            case 'Iron':
                return 'https://fox8.com/wp-content/uploads/sites/12/2022/04/Iron.png';
            case 'Wheelbarrow':
                return 'https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2022/05/Wheelbarrow.png?fit=800%2C640';
            default:
                return '';
        }
    };

    const handleMove = (steps) => {
        const newPosition = (figurePosition + steps) % totalCells;

        if (newPosition < figurePosition && newPosition !== 0) {
            setPlayerMoney(playerMoney + 200);
        }
        setFigurePosition(newPosition);
    };

    const buyStreet = (streetInfo) => {
        if (
            playerMoney >= streetInfo.price &&
            figurePosition === streetInfo.position &&
            !ownedStreets.some((ownedStreet) => ownedStreet.position === streetInfo.position)
        ) {
            setPlayerMoney(playerMoney - streetInfo.price);
            setOwnedStreets((prevOwnedStreets) => [...prevOwnedStreets, streetInfo]);
        }
    };

    const sellStreet = (streetInfo) => {
        const updatedOwnedStreets = ownedStreets.filter((ownedStreet) => ownedStreet.position !== streetInfo.position);
        setOwnedStreets(updatedOwnedStreets);
        setPlayerMoney(playerMoney + streetInfo.price / 2);
    };

    return (
        <div className="d-flex j-center a-items flex-col mt50 g10">
            <div className="game-board">
                {gameMap.map((cellValue, index) => {
                    const cellInfoIndex = cellValue - 1;
                    const cellInfo = cellValue !== 0 ? cellData[cellInfoIndex] : null;

                    return (
                        <div key={index} className="cell">
                            {cellValue !== 0 && cellInfo && (
                                <div className="cell-content">
                                    <StreetCard
                                        color={cellInfo.color}
                                        street={cellInfo.street}
                                        price={cellInfo.price}
                                        position={cellValue}
                                        figurePosition={figurePosition}
                                        ownedStreets={ownedStreets}
                                        buyStreet={buyStreet}
                                    />
                                    {figurePosition === cellValue && (
                                        <img
                                            src={getImageUrl(selectedFigure)}
                                            alt={selectedFigure}
                                            className={`figure-cell ${cellInfo.color}`}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="d-flex j-btw a-items g50">
                <div className="d-flex">
                    <b>Bank: {playerMoney}$</b>
                </div>
                <div className="d-flex">
                    <Dice handleMove={handleMove} totalCells={gameMap.length} />
                </div>
                <div className="d-flex ownedCard p10">
                    <OwnStreets ownedStreets={ownedStreets} sellStreet={sellStreet} />
                </div>
            </div>

        </div>
    );
};


export default GameBoard;