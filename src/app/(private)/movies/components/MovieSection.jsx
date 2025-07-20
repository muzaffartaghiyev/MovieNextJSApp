import React from 'react'
import { getMovies } from '@/helpers/movieFunction'

const MovieSection = async({type}) => {
  const movies = await getMovies(type)

  return (
     <div className="mb-4">
      <p className="text-red-main text-md md:text-xl lg:text-2xl font-semibold mb-4 ">
        {type.toUpperCase().replace("_"," ")}
   
      </p>

      <div className="grid grid-flow-col gap-2 overflow-scroll">
        {movies.map((movie)=>(
          <h2>{movie.title}</h2>
        ))}
      </div>
    </div>
  )
}

export default MovieSection
