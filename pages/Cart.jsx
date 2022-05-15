import { useSpring, animated } from '@react-spring/web';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';

function Cart() {
  const slideUp = useSpring({
    from: {
      translateY: 1000,
    },
    to: {
      translateY: 0,
    },
    delay: 300,
    config: {
      friction: 15,
      mass: 1,
    },
  });
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
      <animated.a
        style={slideUp}
        href="/api/checkout"
        className="fixed  right-[50%] translate-x-[50%] rounded-full  shadow-[0_0_50px_10px_#645cff] hover:py-4 hover:-translate-y-3 font-bold text-lg uppercase bg-[#645cff] p-3 px-5 text-white "
      >
        checkout
      </animated.a>
    </>
  );
}

export default Cart;
