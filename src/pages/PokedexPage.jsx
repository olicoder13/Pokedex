import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelecType from '../components/pokedexPage/SelecType';
import './styles/pokedexPage.css'
import Pagination from '../components/pokedexPage/Pagination';



const PokedexPage = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainerName = useSelector(store => store.trainerName);
  const pokemonName = useSelector(store => store.pokemonName);
  const dispatch = useDispatch();
  const [pokemons, getPokemons, getPerType] = useFetch();

  useEffect(() => {
    if(selectValue==='allPokemons'){
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=500';
    getPokemons(url)
    }else{
      getPerType(selectValue);
    }

    
  }, [selectValue])
  
//console.log(selectValue);
  //console.log(pokemons);

  const textInput = useRef();

  const handleSubmit = (event) =>{
      event.preventDefault();
      dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
      textInput.current.value = '';
  }
  
  const cbFilter = () => {
    if(pokemonName){
      return pokemons?.results.filter(element => element.name.includes(pokemonName))
    }else{
      return pokemons?.results
    }
    
  }

  
  const quantity = 10; 
  const second = currentPage * quantity;
  const first = second - quantity;
  const pokePart = cbFilter() && cbFilter().slice(first, second);
  const totalPage = Math.floor(pokemons?.results.length / quantity) + 1;

  return (
    <div className='pokedex'>
      <section className='poke__header'>
        <h3 className='h3'><span>Bienvenido {trainerName},</span> aqui podras encontrar tu pokemon favorito</h3>
        <div>
        <form className='formulario' onSubmit={handleSubmit}>
            <input placeholder='Busca un pokemon' ref={textInput} type="text" />
            <button>Buscar</button>
        </form>
        <SelecType 
        setSelectValue={setSelectValue}
        />
        </div>
        </section>
        <section className='poke__container'>
            {
              pokePart?.map(poke => (
                <PokeCard
                  key={poke.url}
                  url={poke.url}
                />
              ))
            }

        
        </section>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
    </div>
  )
}

export default PokedexPage