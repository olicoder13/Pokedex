import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import { setPokemonName } from '../../store/slices/pokemonName.slice';
import { useDispatch } from 'react-redux';
import './styles/selectType.css'

const SelecType = ({setSelectValue}) => {

const [types, getTypes] = useFetch();

const dispatch = useDispatch();

useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type';
    getTypes(url);
}, [])
//console.log(types);

const textSelect = useRef();

const handleChange = () =>{
    setSelectValue(textSelect.current.value);
    dispatch(setPokemonName(''));
}

  return (
    <select className='selection' onChange={handleChange} ref={textSelect}>
        <option value="allPokemons">AllPokemons</option>
        {
            types?.results.map(type =>(
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelecType;