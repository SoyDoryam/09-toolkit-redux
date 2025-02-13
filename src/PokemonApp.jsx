import { useEffect } from 'react'
import { getPokemons } from './store/slices/pokemon/thunks'
import { useDispatch, useSelector } from 'react-redux'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { isLoading, pokemons = [], page } = useSelector((state) => state.pokemons);

  useEffect(() => { 
    dispatch( getPokemons() );
  }, [])

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: {isLoading ? 'true': 'false' }</span>
        <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>

        <button
          disabled={isLoading}
          onClick={() =>  dispatch(getPokemons(page)) }
        >
          next
        </button>
    </>
  )
}

export default PokemonApp