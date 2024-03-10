
import './App.css';
import Movies from './components/movies/Movies';
import Navbar from './components/Navbar.jsx';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <hr/>
            <Movies />
        </div>
    );
}

export default App;