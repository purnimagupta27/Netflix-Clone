import { useEffect } from "react"
import { options } from "../utils/constants"
import Header from "./Header"

const Browse = () => {
  const listOfMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    const json = await data.json()
    console.log(json)
  }


  useEffect(() => {
    listOfMovies()
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse