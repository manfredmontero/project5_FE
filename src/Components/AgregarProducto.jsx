import React, { useContext, useState, useEffect } from 'react'
//import uniqid from "uniqid";
import axios from 'axios'
import FormInput from './FormInput'
//import { ToastContainer, toast } from "react-toastify";
import { AppContext } from '../context/globalContext'

function AgregarProducto() {
  const userCtx = useContext(AppContext)
  const {
    createBalance,
    newBalance,
    setNewBalance,
    success,
    error,
    setError,
    setSuccess,
    setNewProducto,
    newProducto,
    addProduct,
  } = useContext(AppContext)
  const [ok, setOk] = useState(false)

  // const { addProduct, formData } = userCtx

  const handleChange = (event) => {
    setNewProducto({
      ...newProducto,
      [event.target.name]: event.target.value,
    })
    //console.log(newProducto);
  }
  const handleClick = async (event) => {
    setError(false)
    setSuccess(false)
    await handleChange(event)
    setOk(true)
  }

  useEffect(() => {
    ok && addProduct(newProducto)
    setOk(false)
  }, [ok])

  return (
    <div className='container'>
      <label for='nombre'>Nombre</label>
      <input name='nombre' className='form-control' type='text' onChange={(e) => handleChange(e)} />
      <label for='descripcion'>Descripcion</label>
      <input name='descripcion' className='form-control' type='text' onChange={(e) => handleChange(e)} />
      <label for='precio'>Precio</label>
      <input name='precio' className='form-control' type='text' onChange={(e) => handleChange(e)} />
      <label for='url'>Url</label>
      <input name='url' className='form-control' type='text' onChange={(e) => handleChange(e)} />
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className=''>
            <button name='tipo' value='ingreso' className='btn btn-success mr-2' onClick={(e) => handleClick(e)}>
              Guardar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgregarProducto

/*


function AgregarProductos() {
  //hooks
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [images, setImages] = useState("");

  //esta funcion sirve para agregar un producto a la base de datos
  function agregarProducto() {
    let producto = {
      idProducto: uniqid(),
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      images:images
    };
    console.log(producto);
    axios
      .post("/api/producto/agregarProducto", producto)
      .then((res) => {
        toast.success(res.data)
      })
      .then((err) => {
        console.log(err);
      });
  }
  return (
    
  );
}

export default AgregarProductos;
*/
