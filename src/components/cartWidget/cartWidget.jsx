import React, { useContext } from 'react';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link to="/carrito">
        <Badge count={1}>
          <ShoppingCartOutlined />
        </Badge>
      </Link>
    </div>
  )
};

export default CartWidget

