import React from 'react';
import './Cart.css';

function Cart({ order, clearOrder }) {
  return (
    <div className="cart">
      <h2>Ваше замовлення</h2>
      <ul>
        {Object.entries(order).map(([item, quantity]) => (
          <li key={item}>
            {item}: {quantity}
          </li>
        ))}
      </ul>
      <button onClick={clearOrder}>Очистити корзину</button>
    </div>
  );
}

export default Cart;
