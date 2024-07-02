import AddPost from "./views/AddPost";
import Home from "./views/Home";
import Login from "./views/Login";
import Posts from "./views/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/add" element={<AddThread />} />
                    <Route path="/thread/:id" element={<DetailThread />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
