import { Link } from "react-router-dom"

const Item = ({producto}) => {
 return (
    <div className="prodcuto">
      <img src = {producto.iamgen}/>
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: $ {producto.precio}</p>
        <p>Categoria {producto.categoria}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Mas</Link>
      </div>
    </div>
  )
}

export default Item
