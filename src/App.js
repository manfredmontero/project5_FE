import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Historial from './Components/Historial'
import Header from './Components/Header'
import Register from './Components/Register'
import Login from './Components/Login'
import PrivateRoute from './Components/Auth/PrivateRoute'
import AgregarProducto from './Components/AgregarProducto'
import Principal from './Components/Principal'
import Productos from './Components/Productos'
import Catalogo from './Components/Catalogo'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/catalogo' element={<Catalogo />} />

        <Route element={<PrivateRoute />}>
          <Route path='/historial' element={<Historial />} />
        </Route>
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<AgregarProducto />} />
      </Routes>
    </>
  )
}

export default App
