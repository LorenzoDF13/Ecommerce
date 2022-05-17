import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
function Card({ thumbnail, images, title, price, id }) {
  const cardRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    cardRef.current.addEventListener('mouseover', () => {
      imageRef.current.src = images[1];
    });
    cardRef.current.addEventListener('mouseleave', () => {
      imageRef.current.src = thumbnail;
    });
  }, []);
  return (
    <Link href={`products/${id}`} passHref>
      <a>
        <div
          ref={cardRef}
          className="shadow-xl rounded transition-all hover:scale-110 duration-300  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white p-4  w-[200px] h-[300px]  my-10 ml-[20%] sm:ml-0"
        >
          <img
            ref={imageRef}
            src={thumbnail}
            className="w-[200px] h-[180px] object-contain"
            alt="immagine prodotto"
          />
          <h3 className="font-bold text-md">{title}</h3>
          <h4 className="text-slate-500">{`$${price}`}</h4>
        </div>
      </a>
    </Link>
  );
}

export default Card;
