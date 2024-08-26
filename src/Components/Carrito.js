import './Carrito.css'
import Producto from './Producto';

const Carrito = ({carrito, agregarCarrito}) => (
    
    <div className='carrito'>
        <h2>Carrito</h2>
         {carrito.length}
        {carrito.length === 0 
        ? 
        <p>No hay Elementos</p> 
        : 
        carrito.map(producto => 
            <Producto
            key={producto.id}
            producto={producto}
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            />
        )
        }
    </div>
    /**/
);

export default Carrito;