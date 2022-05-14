import React from 'react';
import { useEffect } from 'react';
import Card from './Card';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import LoadingCard from './LoadingCard';
function ProductSlider({ category }) {
  const [width, setWidth] = useState(0);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', function (data) {
      setWidth(data.currentTarget.innerWidth);
    });

    const localStorageProducts = JSON.parse(localStorage.getItem(category));
    if (!localStorageProducts) {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((r) => r.json())
        .then((res) => {
          setProducts(res.products);
          localStorage.setItem(category, JSON.stringify(res.products));
        });
    } else {
      setProducts(localStorageProducts);
    }
  }, []);
  if (!products) {
    return (
      <Swiper
        navigation
        modules={[Navigation]}
        slidesPerView={parseInt(width / 200)}
        effect={'fade'}
        spaceBetween={30}
        speed={600}
        loop
      >
        {Array(parseInt(width / 200))
          .fill('')
          .map((e, i) => (
            <SwiperSlide key={Math.random() * 99999}>
              <LoadingCard key={Math.random() * 99999} />
            </SwiperSlide>
          ))}
      </Swiper>
    );
  }
  return (
    <div className="bg-gray-200  " id={category}>
      <Swiper
        navigation
        modules={[Navigation]}
        slidesPerView={parseInt(width / 200)}
        effect={'fade'}
        spaceBetween={30}
        speed={600}
        loop
      >
        {products.map((e) => (
          <SwiperSlide key={Math.random() * 9999}>
            <Card
              id={e.id}
              thumbnail={e.thumbnail}
              title={e.title}
              price={e.price}
              images={e.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
