import { useSpring, animated, useTrail } from '@react-spring/web';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import { setAuth } from '../features/Cart/Auth/AuthSlice';
import { useRouter } from 'next/router';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase';
import Head from 'next/head';
function Cart() {
  const router = useRouter();
  const items = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth);
  let total = 0;
  items.map((item) => {
    total += item.quantity * item.price;
  });
  function checkout() {
    console.log(user);
    if (!user?.uid) {
      const google = new GoogleAuthProvider();
      signInWithPopup(auth, google)
        .then((res) => {
          dispatch(setAuth(user.toJSON()));
        })
        .catch((e) => console.log(e.message));
      return;
    } else {
      router.push('api/checkout');
    }
  }
  const swipeUp = useSpring({
    from: {
      translateY: 1000,
    },
    to: {
      translateY: 0,
      translateX: '50%',
    },
    config: {
      friction: 20,
      mass: 1.5,
      tension: 400,
    },
  });
  const [trail] = useTrail(items.length, (i) => ({
    from: {
      translateX: '100vw',
    },
    to: {
      translateX: '0',
    },
    delay: (i + 1) * 700,
    config: { friction: 17, tension: 300 },
  }));
  if (items.length == 0) {
    return (
      <h1 className=" text-center text-lg">
        Il carrelo è vuoto , Vai a fare la spesa e poi torna qui
      </h1>
    );
  }
  return (
    <>
      <Head>
        <title>Carrello</title>
      </Head>
      <div className="flex  items-center flex-col">
        {items.map((item, i) => (
          <Item key={Math.random() * 99999} animation={trail[i]} item={item} />
        ))}
      </div>
      <hr className="border-t-[3px] border-slate-400 w-full max-w-[600px] m-auto" />
      <div className="w-full m-auto pt-2 px-2 flex justify-between pb-10  max-w-[600px]">
        <p className="font-bold tracking-widest ">Total</p>
        <p className="font-bold tracking-widest">{`$${total}`}</p>
      </div>

      <animated.button
        style={swipeUp}
        onClick={checkout}
        className="fixed  right-[50%] bottom-10 translate-x-[50%] rounded-full  shadow-[0_0_50px_10px_#645cff] hover:scale-125 hover:-translate-y-3 font-bold text-lg uppercase bg-[#645cff] p-3 px-5 text-white "
      >
        checkout
      </animated.button>
    </>
  );
}

export default Cart;
