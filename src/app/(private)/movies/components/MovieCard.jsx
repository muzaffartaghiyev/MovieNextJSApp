import Image from 'next/image'
import React from 'react'

const MovieCard = ({vote_average,poster_path,id}) => {
  return (
    <div>
      <Image width={160} height={240} src={"https://image.tmdb.org/t/p/w1280"+poster_path}/>
    </div>
  )
}

export default MovieCard
