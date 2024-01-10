import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my raect hooks</h1>
      <MovieList/>
    </>
  )
}

export default App
