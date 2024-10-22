import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((book) => (
          <div className="cart-item" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="cart-item-details">
              <h3 style={{ color: 'black' }}>{book.title}</h3>
              <p style={{ color: 'black' }}>Author: {book.author}</p>
              <p style={{ color: 'black' }}>Price: Rs.{book.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
