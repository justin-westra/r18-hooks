import { Routes, Route } from "react-router-dom";
import { Search } from "components/Search";
import { ViewBox } from "components/ViewBox";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-main">
                <Routes>
                    <Route path="/deferred" element={<Search />} />
                    <Route path="/transition" element={<ViewBox />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
