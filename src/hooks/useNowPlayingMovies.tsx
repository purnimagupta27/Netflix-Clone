import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

  const listOfMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }


  useEffect(() => {
    listOfMovies()
  }, [])
}

export default useNowPlayingMovies