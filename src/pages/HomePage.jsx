import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css'

const HomePage = () => {

    const dispatch = useDispatch();
    const trainerName = useSelector((store) => store.trainerName);

    const navigate = useNavigate();
    const textInput = useRef();


    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(setTrainerName(textInput.current.value.trim()));
        navigate('/pokedex')
    }
    
  return (
    <div className='contenedor__home'>
        <h1 className='titulo__principal'>Pok<span>edex</span></h1>
        <h2 className='saludo'>!Hola Entrenador¡</h2>
        <h3 className='peticion__nombre'>Para poder comenzar, dame tu nombre</h3>
        <form className='formulario' onSubmit={handleSubmit}>
            <input className='input' placeholder='Tu nombre......' ref={textInput} type="text" />
            <button className='btn'>Comenzar</button>
        </form>
    </div>
  )
}

export default HomePage