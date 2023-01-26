import { useEffect, useState } from "react"

const api = "https://api.sampleapis.com/movies/family"

const Movies = () => {
    const [movies, setMovies] = useState([])

    const fetchdata = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data)
    }

    useEffect(() => {
        fetchdata(api)
    }, [])

    return movies.map(item => {
        return <div className="movie-card">
            <img src={item.posterURL} alt="" />
            <div>{item.title}</div>
        </div>
    })

}

export default Movies