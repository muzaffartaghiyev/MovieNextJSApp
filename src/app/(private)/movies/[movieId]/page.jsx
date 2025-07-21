
import { getMovieDetails, getYoutubeKey } from '@/helpers/movieFunction'
import Link from 'next/link'
import React from 'react'

const MovieDetail = async({params}) => {

    const {movieId} = params
    const detail = await getMovieDetails(movieId)
    const videoKey = await getYoutubeKey(movieId)
  return (
    <div className="md:container px-10 mx-auto py-7 mt-8">
      <h1 className="text-center text-white text-3xl"> {detail.title}</h1>
      <p className="text-center text-white text-xl">{detail.tagline}</p>

      <div className="w-10/12 lg:w-full mx-auto mt-5">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&playsinline=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            > </iframe>
        </div>
      </div>

      <div className="flex items-center mt-3 md:mt-4 gap-3">
        <Link
          className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition mt-2"
          href="/movies"
        >
          GO BACK
        </Link>
      </div>
    </div>
  )
}

export default MovieDetail
