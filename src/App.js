import './App.css'
// import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChoseFigure from "./pages/ChoseFigure";
import GameBoard from "./pages/GameBoard";


function App() {



return (
    <div>

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<ChoseFigure/>}/>
                <Route path="/board/:selectedFigure" element={<GameBoard />} />
            </Routes>

        </BrowserRouter>



    </div>
)
}

export default App;
