import React, { useState } from 'react';

function Parent() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 }
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div className="parent">
      <Child cartItems={cartItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

function Child({ cartItems, onRemoveItem }) {
  return (
    <div className="child">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span id="itemName">{item.name}</span>
            <span id="itemPrice">${item.price}</span>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Parent;