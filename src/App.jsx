import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Favourites from "./pages/Favorites";

import NavBar from "./components/NavBar";
import { MediaProvider } from "./contexts/MediaContext";

function App() {
    return (
        <MediaProvider>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </main>
        </MediaProvider>
    );
}

export default App;
