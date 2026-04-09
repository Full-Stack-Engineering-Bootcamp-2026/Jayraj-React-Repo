import React from 'react'
import { useSelector } from 'react-redux'


function MovieList() {
  const movies = useSelector((state) => state.movies.movies)
  return (
    <>
       <h1>Movie List</h1>
        {movies.map((movie) => (
          <div key={movie.id}> {movie.name}</div>
        ))}
    </>
  )
}

export default MovieList
