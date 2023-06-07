import { Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-2">
            <Link to="/card-grid" className="text-xl text-blue-600 hover:underline">
                CardGrid
            </Link>
            <Link to="/data-grid" className="text-xl text-blue-600 hover:underline">
                DataGrid
            </Link>
        </div>
    );
}

export default Home;
