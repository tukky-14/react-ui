import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Home';
import CardGrid from './pages/CardGrid';
import DataGrid from './pages/DataGrid';
import DataGridCustom from './pages/DataGridCustom';
import Teams from './pages/Teams';
import Teams2 from './pages/Teams2';
import NotFound from './pages/NotFound';
import Content from './pages/Content';
import Gallery from './pages/Gallery';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="" element={<Home />} />
                <Route path="/card-grid" element={<CardGrid />} />
                <Route path="/content" element={<Content />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams2" element={<Teams2 />} />
                <Route path="/data-grid" element={<DataGrid />} />
                <Route path="/data-grid-custom" element={<DataGridCustom />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
