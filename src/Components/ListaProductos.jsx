import React from "react";
import axios from "axios";
//import { ToastContainer, toast } from "react-toastify";

function ListaProductos({ producto }) {
    //console.log(producto);
  function agregarProductoCarrito() {
    let carrito = {
      producto: producto.producto,
      nombreusuario: sessionStorage.getItem("user"),
      precio: producto.precio,
    };

    axios
      .post("/api/carrito/agregarproductocarrito", carrito)
      .then((res) => {
        //
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="m-2">
      <div className="card cardModified p-2">
        <div className="card-body card-center">
          <h4 className="card-header">{producto.nombre}</h4>
          <br />
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">Precio: ${producto.precio}</p>
          <img className="imagen-productos" src={producto.url} />
          <br />
          <br />
          <button
            className="btn btn-info"
            type="submit"
            onClick={agregarProductoCarrito}
          >
            Agregar al Carrito
          </button>
        </div>
        
      </div>
      <br />
    </div>
  );
}

export default ListaProductos;
