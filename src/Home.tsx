import { Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-2">
            <Link to="/card-grid" className="text-xl text-blue-600 hover:underline">
                CardGrid
            </Link>
            <Link to="/content" className="text-xl text-blue-600 hover:underline">
                Content
            </Link>
            <Link to="/data-grid" className="text-xl text-blue-600 hover:underline">
                DataGrid
            </Link>
            <Link to="/data-grid-custom" className="text-xl text-blue-600 hover:underline">
                DataGrid Custom
            </Link>
            <Link to="/dashboard" className="text-xl text-blue-600 hover:underline">
                Dashboard
            </Link>
            <Link to="/faq" className="text-xl text-blue-600 hover:underline">
                FAQ
            </Link>
            <Link to="/gallery" className="text-xl text-blue-600 hover:underline">
                Gallery
            </Link>
            <Link to="/kbd" className="text-xl text-blue-600 hover:underline">
                KBD
            </Link>
            <Link to="/pricing" className="text-xl text-blue-600 hover:underline">
                Pricing
            </Link>
            <Link to="/teams" className="text-xl text-blue-600 hover:underline">
                Teams
            </Link>
            <Link to="/teams2" className="text-xl text-blue-600 hover:underline">
                Teams2
            </Link>
        </div>
    );
}

export default Home;
