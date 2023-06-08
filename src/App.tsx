import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Home';
import CardGrid from './pages/CardGrid';
import DataGrid from './pages/DataGrid';
import DataGridCustom from './pages/DataGridCustom';
import Teams from './pages/Teams';
import NotFound from './pages/NotFound';
import Content1 from './pages/Content1';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="" element={<Home />} />
                <Route path="/card-grid" element={<CardGrid />} />
                <Route path="/content1" element={<Content1 />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/data-grid" element={<DataGrid />} />
                <Route path="/data-grid-custom" element={<DataGridCustom />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
