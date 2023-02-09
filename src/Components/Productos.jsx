import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
//import ProductoIndividual from "./ProductoIndividual";
import clienteAxios from '../config/axios'
import { AppContext } from '../context/globalContext'
import ListaProductos from './ListaProductos'
import BootstrapTable from 'react-bootstrap-table-next'
import { Link } from 'react-router-dom'

function Productos() {
  //const [dataProductos, setProductos] = useState([])
  const { getProductos, productos, balance, deleteProducto } = useContext(AppContext)

  useEffect(() => {
    getProductos()
    //console.log(testing)
    //setProductos(productos)
  }, [])

  //const data = productos
  // console.log("esto es " + data)

  const data = () => {
    return productos.map((item) => {
      return {
        nombre: item.nombre,
        descripcion: item.descripcion,
        precio: `$ ${item.precio}`,
        delete: <i onClick={() => deleteProducto(item._id)} className='bi bi-trash3-fill' />,
      }
    })
  }

  const columns = [
    {
      dataField: 'nombre',
      text: 'Nombre',
    },
    {
      dataField: 'descripcion',
      text: 'Nombre',
    },
    {
      dataField: 'precio',
      text: 'Precio',
    },
    {
      dataField: 'delete',
      text: 'X',
    },
  ]

  return (
    <>
      <BootstrapTable
        keyField='id'
        data={productos ? data() : []}
        columns={columns}
        noDataIndication='Sin Datos'
        hover
      />
      <Link to='/' className='btn btn-secondary d-flex justify-content-center'>
        Volver
      </Link>
    </>
  )
}

export default Productos
