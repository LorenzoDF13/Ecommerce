import { setCookies } from 'cookies-next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
function Succes(props) {
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });
  useEffect(() => {
    setWindowSize({ x: window.innerWidth, y: windowSize.innerHeigth });
    setCookies('Cart', JSON.stringify([]));
    console.log(props);
  }, []);

  return (
    <>
      <Head>
        <title>Grazie!</title>
      </Head>
      <Confetti width={windowSize.x} height={windowSize.y}></Confetti>
      <div className=" font-lg md:text-3xl text-center text-3xl font-extrabold top-[50%] fixed -translate-y-[50%] left-[50%] -translate-x-[50%]">
        GRAZIE {props.name.toUpperCase()} ORDINE EFFETTUATO ✅🚀 🚀
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  if (!ctx.query.session_id) {
    ctx.res.writeHead(303, {
      Location: '/',
    });
    ctx.res.end();
    return { props: {} };
  }
  const session = await stripe.checkout.sessions.retrieve(ctx.query.session_id);
  const cliente = await stripe.customers.retrieve(session.customer);
  return {
    props: cliente,
  };
}

export default Succes;
