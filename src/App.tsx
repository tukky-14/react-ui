import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Home';
import CardGrid from './pages/CardGrid';
import DataGrid from './pages/DataGrid';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="" element={<Home />} />
                <Route path="/card-grid" element={<CardGrid />} />
                <Route path="/data-grid" element={<DataGrid />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
