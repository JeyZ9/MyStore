import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';

const BasketPage = () => {
  const { cartItems } = useShoppingCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Your Shopping Basket</h1>
      {cartItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.price} USD</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Add checkout button and other functionalities as needed */}
        </>
      )}
    </div>
  );
};

export default BasketPage;
