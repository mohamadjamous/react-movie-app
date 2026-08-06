import MovieCard from '/src/components/MovieCard';


function Home() {
 
    const movies = [
        {id: 1, title: "Movie Name 1", release_date: "2024"},
        {id: 2, title: "Movie Name 2", release_date: "1999"},
        {id: 3, title: "Movie Name 3", release_date: "1199"}
    ];

    return (
        <div className="home">

            <div className="movies-grid">

                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}

export default Home;