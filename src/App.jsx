
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeidPage from './pages/PokeidPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
    <div className='contendor__principal'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<PokedexPage/>}/>
            <Route path='/pokedex/:id' element={<PokeidPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
