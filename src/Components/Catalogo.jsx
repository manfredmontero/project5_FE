//import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import ListaProductos from './ListaProductos'
//import clienteAxios from '../config/axios'
import { AppContext } from '../context/globalContext'
//import ListaProductos from './ListaProductos'
////import BootstrapTable from 'react-bootstrap-table-next'
//import { Link } from 'react-router-dom'

function Catalogo() {
  //const [dataProductos, setProductos] = useState([])
  const { getProductos, productos, balance, deleteProducto } = useContext(AppContext)

  useEffect(() => {
    getProductos()
  }, [])

  //console.log(productos);
  const listaprod = productos.map((item) => {
      console.log(item)
      return (
        <div>
          <ListaProductos producto={item} />
        </div>
    );
});


  return (
    <div className=' container d-flex flex-wrap align-items-center'>
      <h2 className=''>Catalogo de productos disponibles</h2>
      <div className=' container d-flex flex-wrap align-items-center '>{listaprod}</div>

    </div>
  )
}

export default Catalogo
