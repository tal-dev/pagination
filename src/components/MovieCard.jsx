const MovieCard = ({movie}) => {
    return <div className="movie-card">
        <img src={movie.posterURL} alt="" />
        <div>{movie.title}</div>
    </div>
}

export default MovieCard