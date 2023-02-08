import { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
export const ProductoContext = createContext()

export const AppProvider = ({ children }) => {
  const [newBalance, setNewBalance] = useState()
  const [balance, setBalance] = useState()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [formDataProducto, setFormData] = useState({
    nombre: '',
    producto: '',
    precio: '',
    url: '',
  })

  const addProduct = async (dataForm) => {
    const form = {
      nombre: dataForm.descripcion,
      descripcion: dataForm.monto,
      precio: dataForm.tipo,
      url: dataForm.tipo,
    }

    try {
      await clienteAxios.post(`/balance/nuevo`, form)
      setSuccess(true)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  /*
  const getBalance = async () => {
    try {
      const res = await clienteAxios.get(`/balance/obtener`)
      setBalance(res.data.balance)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBalance = async (id) => {
    const data = { id }

    try {
      await clienteAxios.delete(`/balance/borrar`, { data })
      getBalance()
    } catch (error) {
      console.log(error)
    }
  }
*/
  const data = {
    addProduct,
  }

  console.log('CONTEXTO produ', data)
  return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}
