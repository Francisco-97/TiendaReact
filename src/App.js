import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Producto from "./Components/Producto";
import Carrito from "./Components/Carrito";
import { Fragment, useState } from "react";


function App() {

  const [ productos, guardarProductos] = useState([
    { id: 1, nombre: 'PRoducto#1', Precio: 50 },
    { id: 2, nombre: 'PRoducto#2', Precio: 40 },
    { id: 3, nombre: 'PRoducto#3', Precio: 30 },
    { id: 4, nombre: 'PRoducto#4', Precio: 20 },
  ]);

  //carrito de compras
  const [ carrito, agregarCarrito ] = useState([])
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
      titulo="Tienda Virtual" />

      <h1>Lista de Productos</h1>

      { productos.map(producto =>(
        <Producto 
        key = {producto.id}
        producto = {producto}
        carrito={carrito}
        productos={productos}
        agregarCarrito={agregarCarrito}/>
      )) }

      <Carrito 
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      />

      <Footer 
      fecha={fecha}/>
    </Fragment>
      
  );
}

export default App;
