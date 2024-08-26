const Producto = ({ producto, carrito, agregarCarrito, productos }) => {
  const { id, nombre, precio } = producto;

  const selecionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarCarrito([...carrito, producto]);
  };

  //Eliminar
  const eliminarProducto = (id) => {
    const producto = carrito.filter((producto) => producto.id !== id);

    //Colocar los productos en el state
    agregarCarrito(producto);
  };

  return (
    //<h1>Desde Producto</h1>
    <div>
      <h2>{producto.nombre}</h2>
      <p>${producto.Precio}</p>

      {productos ? (
        <button type="button" onClick={() => selecionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
