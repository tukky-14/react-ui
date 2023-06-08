import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Home';
import CardGrid from './pages/CardGrid';
import DataGrid from './pages/DataGrid';
import DataGridCustom from './pages/DataGridCustom';
import Teams from './pages/Teams';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="" element={<Home />} />
                <Route path="/card-grid" element={<CardGrid />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/data-grid" element={<DataGrid />} />
                <Route path="/data-grid-custom" element={<DataGridCustom />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
