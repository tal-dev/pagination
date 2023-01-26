import { useEffect, useState } from "react"
import Pagination from "./Pagination";

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

    return <Pagination movies={movies} />
}

export default Movies