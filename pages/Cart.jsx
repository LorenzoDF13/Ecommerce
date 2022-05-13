import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  if (items.length == 0) {
    return (
      <h1 className=" text-center text-lg">
        Il carrelo è vuoto , Vai a fare la spesa e poi torna qui
      </h1>
    );
  }
  return (
    <>
      <div className="flex  items-center flex-col">
        {items.map((item) => (
          <Item key={Math.random() * 99999} item={item} />
        ))}
      </div>
      <hr />
      {/*METTERE TOTALE*/}
    </>
  );
}

export default Cart;
