import { Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <Link to="/card-grid" className="text-xl text-blue-600 hover:underline">
                CardGrid
            </Link>
        </div>
    );
}

export default Home;
