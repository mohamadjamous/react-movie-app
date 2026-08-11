import '/src/css/App.css'
import MovieCard from '/src/components/MovieCard'
import Home from '/src/pages/Home';
import Favorties from './pages/Favorites';
import Navbar from '/src/components/Navbar';
import {Routes, Route} from "react-router-dom";
import {MovieProvider} from "./context/MovieContext"

function App() {
  return (
    <MovieProvider>
      <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorties/>}/>
      </Routes>
    </main>    
    </MovieProvider>
  );
}

export default App;
