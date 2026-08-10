import '/src/css/App.css'
import MovieCard from '/src/components/MovieCard'
import Home from '/src/pages/Home';
import Favorties from './pages/Favorites';
import Navbar from '/src/components/Navbar';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorties/>}/>
      </Routes>
    </main>    
    </div>
  );
}

export default App;
