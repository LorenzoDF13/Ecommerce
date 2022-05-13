import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductSlider from '../components/ProductSlider';

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
      <Image src={'/Home.png'} width="375" height={'216'} layout="responsive" />
      {categories ? (
        categories.map((category) => (
          <>
            <h1
              key={Math.random() * 9999}
              className="text-[30px] uppercase primary  font-bold p-7 text-center"
            >
              {category}
            </h1>
            <ProductSlider key={Math.random() * 9999} category={category} />
          </>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
