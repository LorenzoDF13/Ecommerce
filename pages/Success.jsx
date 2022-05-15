import { setCookies } from 'cookies-next';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
function Succes() {
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });
  useEffect(() => {
    setWindowSize({ x: window.innerWidth, y: windowSize.innerHeigth });
    setCookies('Cart', JSON.stringify([]));
  }, []);
  //TODO PROTEGGERE QUESTA PAGINA
  return (
    <>
      <Confetti width={windowSize.x} height={windowSize.y}></Confetti>
      <div className=" font-lg md:text-3xl text-center text-3xl font-extrabold top-[50%] fixed -translate-y-[50%] left-[50%] -translate-x-[50%]">
        ORDINE EFFETTUATO ✅🚀 🚀
      </div>
    </>
  );
}

export default Succes;
