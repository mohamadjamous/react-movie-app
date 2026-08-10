import MovieCard from '/src/components/MovieCard';
import {useState} from 'react';
import "../css/Home.css";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
 
    const movies = [
        {id: 1, title: "Movie Name 1", release_date: "2024"},
        {id: 2, title: "Movie Name 2", release_date: "1999"},
        {id: 3, title: "Movie Name 3", release_date: "1199"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <div className="home">

            <form
            onSubmit={handleSearch}
            className="search-form">
                <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">

                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}

export default Home;