import MovieHeader from '../../../components/MovieHeader/MovieHeader'

const Header = ({ movie }) => {
  return (
    <section>
        <MovieHeader {...movie} hideButton withBg />
    </section>
  )
}

export default Header