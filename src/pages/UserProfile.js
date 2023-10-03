import React, {useEffect, useRef, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../features/user";

const images = [
    "https://www.worldnumerology.com/numerology-life-path/images/life-path-7.png",
    "https://casinoguru.lt/app/uploads/2021/04/joker-logo.png",
    "https://sjmuruguay.org/web2021/wp-content/uploads/2021/02/organic_product9.png",
    "https://freshunlimited.in/cdn/shop/products/Lemon_500x.png?v=1609402749",
    "https://ww1.freelogovectors.net/wp-content/uploads/2023/04/coca-cola-logo5-freelogovectors.net_.png",
    "https://robots-trading.fr/assets/img/goldenway-invest-gold-mlm-crypto-golden-way.png"


]
const UserProfile = () => {
    const imageRef = useRef()
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const [selectedBid, setSelectedBid] = useState(1)
    const [money, setMoney] = useState(200)
    const [symbols, setSymbols] = useState([0,1,2])
    const [showBoard, setShowBoard] = useState(false)
    const [users, setUsers] = useState([])

    async function spin() {

        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            },
        }

        const res = await fetch("http://localhost:8000/spin/"+selectedBid, options)
        const data = await res.json()
        console.log(data)

        if (data.error) return console.log("ERROR")
        setMoney(data.data.money)
        setSymbols(data.data.result.result)

        dispatch(setUser(data.data))
    }

    useEffect(() => {

        fetch("http://localhost:8000/stats")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data.data)
            })
    }, [showBoard]);

    return (
        <div className="d-flex casinoWindow">

            {showBoard &&

            <div className="leaderBoard">

                <div className="d-flex space-btw">
                    <div></div>
                    <button onClick={()=> setShowBoard(false)}>CLOSE</button>
                </div>



                <h1 className="text-center">LEADERS BOARD</h1>
                <div className="d-flex space-btw">
                    <div>Name</div>
                    <div>Spins</div>
                    <div>Money</div>
                    <div>Lost</div>
                </div>

                <div>
                    {users.map(x => <div className="d-flex space-btw p-2" key={x._id}>
                        <div>{x.username}</div>
                        <div>{x.spins}</div>
                        <div>{x.money}</div>
                        <div>{x.lostAmount}</div>
                    </div>)}

                </div>
            </div>
            }

            <button onClick={()=> setShowBoard(true)}>Leader board</button>

            <h1>Money: {money}</h1>

            <div className="spinCells">
                <div style={{backgroundImage: `url("${images[symbols[0]]}")`}}></div>
                <div style={{backgroundImage: `url("${images[symbols[1]]}")`}}></div>
                <div style={{backgroundImage: `url("${images[symbols[2]]}")`}}></div>
            </div>

            <div className="bids d-flex">
                <div className={selectedBid === 1 ? "selected": ""} onClick={()=> setSelectedBid(1)}>1</div>
                <div className={selectedBid === 5 ? "selected": ""} onClick={()=> setSelectedBid(5)}>5</div>
                <div className={selectedBid === 10? "selected": ""} onClick={()=> setSelectedBid(10)}>10</div>
            </div>

            <div className="btn" onClick={spin}>SPIN</div>


        </div>
    );
};

export default UserProfile;