import React from 'react'
import HeroSection from './components/HeroSection'
import MovieSection from './components/MovieSection'
import { getMovies } from '@/helpers/movieFunction'


const Movies = async() => {

  const movies = await getMovies("now_playing")
  
  return (
    <div>
      <HeroSection movies={movies[0]}/>
      <MovieSection type="now_playing"/>
      <MovieSection type="popular"/>
      <MovieSection type="top_rated"/>
      <MovieSection type="upcoming"/>
    </div>
  )
}

export default Movies
