import { getYoutubeKey } from '@/helpers/movieFunction'
import React from 'react'

const HeroSection = async({movie}) => {

  const videoKey = await getYoutubeKey(movie.id)

  return (
    <div className="relative h-[50vw] mt-[80px]">
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
    

      <div className="absolute top-[30%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {movie.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
        {movie.overview}
        </p>

        
      </div>
    </div>
  )
}

export default HeroSection
