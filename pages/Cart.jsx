import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = 0;
  items.map((item) => {
    total += item.quantity * item.price;
  });
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
      <hr className="border-t-[3px] border-slate-400 w-full max-w-[600px] m-auto" />
      <div className="w-full m-auto pt-2 px-2 flex justify-between  max-w-[600px]">
        <p className="font-bold tracking-widest ">Total</p>
        <p className="font-bold tracking-widest">{`$${total}`}</p>
      </div>
    </>
  );
}

export default Cart;
