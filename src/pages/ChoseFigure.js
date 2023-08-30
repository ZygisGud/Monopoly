import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChoseFigure = () => {
    const [selectedFigure, setSelectedFigure] = useState(null);
    const navigate = useNavigate();

    const selectFigure = (figure) => {
        setSelectedFigure(figure);
    }

    const startGame = () => {
        if (selectedFigure) {
            navigate(`/board/${selectedFigure}`);
        }
    }

    const figureOptions = [
        "BattleShip",
        "Boot",
        "Iron",
        "Wheelbarrow"
    ];

    return (
        <div className="d-flex j-center flex-col a-items">
            <div className="logo">
                <img src="https://i.pinimg.com/originals/2c/48/75/2c48755938d4e51ca8f76ced8b3912af.png" alt=""/>
            </div>

            <div className="card d-flex j-center a-items g10 flex-col">
                <div className="g10 d-flex">
                    {figureOptions.map((figure, index) => (
                        <div
                            key={index}
                            className={`figure ${selectedFigure === figure ? 'selected' : ''}`}
                            onClick={() => selectFigure(figure)}
                        >
                            <img
                                src={figure === 'BattleShip' ? 'https://fox8.com/wp-content/uploads/sites/12/2022/04/BattleShip-Copy.png' :
                                    figure === 'Boot' ? 'https://fox8.com/wp-content/uploads/sites/12/2022/04/Boot.png' :
                                        figure === 'Iron' ? 'https://fox8.com/wp-content/uploads/sites/12/2022/04/Iron.png' :
                                            figure === 'Wheelbarrow' ? 'https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2022/05/Wheelbarrow.png?fit=800%2C640': ""
                                }
                                alt={`Figure ${figure}`}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={startGame}>Start game</button>
            </div>
        </div>
    );
};

export default ChoseFigure;
