import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './styles/pokedexIdPage.css'

const PokeidPage = () => {

    const [pokeData, getPokeData] = useFetch();
    const param = useParams();

    useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
      getPokeData(url);
      
    }, [])
    
    console.log(pokeData);

  return (
    <article className='main'>
        <div className="poke-title">
            <img className='poke-img' src={pokeData?.sprites.other['official-artwork'].front_default} alt="" />
            <div className="title">
            <h1 className='pokemon__number'>#{pokeData?.order}</h1>
            <h2>{pokeData?.name}</h2>
            </div>
          </div>
        <div className="container-info-pokemon">
          <div className='group-info'>
              <p>Weight</p>
              <span>{pokeData?.weight}</span>
          </div>
          <div className='group-info'>
              <p>height</p>
              <span>{pokeData?.height}</span>
          </div>
        </div>
        
        <div className="container-stats">
          <h1 className='estadistic'>Estadisticas</h1>
          <div className="stats">

            <div className="stat-group">
              <span>{pokeData?.stats[0].stat.name}</span>
              <div className="progress-bar"></div>
              <span className='counter-stat'>{pokeData?.stats[0].base_stat}</span>
            </div>

            <div className="stat-group">
              <span>{pokeData?.stats[1].stat.name}</span>
              <div className="progress-bar"></div>
              <span className='counter-stat'>{pokeData?.stats[1].base_stat}</span>
            </div>

            <div className="stat-group">
              <span>{pokeData?.stats[2].stat.name}</span>
              <div className="progress-bar"></div>
              <span className='counter-stat'>{pokeData?.stats[2].base_stat}</span>
            </div>

            <div className="stat-group">
              <span>{pokeData?.stats[3].stat.name}</span>
              <div className="progress-bar"></div>
              <span className='counter-stat'>{pokeData?.stats[3].base_stat}</span>
            </div>

            <div className="stat-group">
              <span>{pokeData?.stats[4].stat.name}</span>
              <div className="progress-bar"></div>
              <span className='counter-stat'>{pokeData?.stats[4].base_stat}</span>
            </div>
          </div>
        </div>
    </article>
  )
}

export default PokeidPage