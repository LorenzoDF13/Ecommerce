import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function LoadingCard() {
  return (
    <div className="shadow-xl rounded w-[200px] h-[300px] my-10 ml-[20%] sm:ml-0">
      <p className="w-[200px] h-[180px] p-4">{<Skeleton height={150} />}</p>
      <p className="font-bold text-md p-2">{<Skeleton />}</p>
      <p className="p-2">{<Skeleton />}</p>
    </div>
  );
}

export default LoadingCard;
