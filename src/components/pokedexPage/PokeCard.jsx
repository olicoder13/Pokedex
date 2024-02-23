import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css'

const PokeCard = ({url}) => {
    
    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
      getPokemon(url)
    }, [])
   

    const handleClick = () =>{
      navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <article className='poke__card' onClick={handleClick}>
        <div className={pokemon?.types[0].type.name}></div>
        <figure>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </figure>
        <h3>{pokemon?.name}</h3>
        <ul className='poke__type'>
          {
            pokemon?.types.map(type => (
              <li key={type.url} className={`slot${type.slot}`}>
                {type.type.name}</li>
            ))
          }
        </ul>
        <p>type</p>
        <hr />
        <ul className='poke__stats'>
          {
            pokemon?.stats.map(stat => (
              !stat.stat.name.includes('special') &&
              <li key={stat.stat.url}>{stat.stat.name}<span>{stat.base_stat}</span></li>
            ))
          }
        </ul>
    </article>
  )
}

export default PokeCard;