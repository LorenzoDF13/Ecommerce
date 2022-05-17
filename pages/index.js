import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ProductSlider from '../components/ProductSlider';
import Head from 'next/head';
export default function Home() {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const localStorageCategories = JSON.parse(
      localStorage.getItem('categories')
    );
    if (!localStorageCategories) {
      fetch('https://dummyjson.com/products/categories')
        .then((r) => r.json())
        .then((res) => {
          setCategories(res);
          localStorage.setItem('categories', JSON.stringify(res));
        });
    } else {
      setCategories(localStorageCategories);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Benvenuto!</title>
      </Head>
      <Image src={'/Home.png'} width="375" height={'216'} layout="responsive" />
      {categories ? (
        categories.map((category) => (
          <React.Fragment key={Math.random() * 99999}>
            <h1 className="text-[30px] uppercase primary  font-bold p-7 text-center">
              {category}
            </h1>
            <ProductSlider category={category} />
          </React.Fragment>
        ))
      ) : (
        <div>
          <Skeleton />
        </div>
      )}
    </>
  );
}
