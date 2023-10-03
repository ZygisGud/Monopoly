import './App.css';
import AddUserForm from "./pages/AddUserForm";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import UserProfile from "./pages/UserProfile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const user = useSelector(state => state.user.user);

    return (
        <div className="main">
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
                    <Route path="/register" element={<AddUserForm />} />
                    <Route path="/profile" element={user ? <UserProfile /> : <Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
