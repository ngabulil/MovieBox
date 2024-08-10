import { useEffect } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import { useMovieContext } from '../../contexts/MovieContext'
import Loading from '../../components/Loading/Loading'

const HomeContainer = () => {
  const { handleGetMovies, loading } = useMovieContext()

  useEffect(() => {
    handleGetMovies()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default HomeContainer