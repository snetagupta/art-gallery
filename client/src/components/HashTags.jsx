import React from 'react'

const HashTags = () => {
  return (
    <div className=" flex items-center gap-6 ">
        <p className="hover:text-red-500 cursor-pointer transition-all duration-300 hover:scale-105">
          <b className="text-red-500">#</b>ColorCompetition2024
        </p>
        <p className="hover:text-red-500 cursor-pointer transition-all duration-300 hover:scale-105">
          <b className="text-red-500">#</b>AiArtCompetition2023
        </p>
        <p className="hover:text-red-500 cursor-pointer transition-all duration-300 hover:scale-105">
          <b className="text-red-500">#</b>DesignHackathon2023
        </p>
        <p className="hover:text-red-500 cursor-pointer transition-all duration-300 hover:scale-105">
          <b className="text-red-500">#</b>PhotoCompetitionNov2022
        </p>
      </div>
  )
}

export default HashTags