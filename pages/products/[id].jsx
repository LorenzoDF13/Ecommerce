import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/Cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductPage({ product }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);
  function addToCart() {
    if (cartItems.find((i) => i.id == product.id)) {
      toast.error('Già presente nel carello');
      return;
    }
    let item = {
      ...product,
      quantity,
    };
    dispatch(addItem(item));
    toast.success('Aggiunto con successo!');
  }
  return (
    <div className="flex flex-col md:flex-row">
      <ToastContainer theme="dark" position="bottom-center" />
      <div>
        <img src={product.thumbnail} />
      </div>
      <div className="p-5">
        <h1 className="text-2xl primary pl-3 uppercase py-3">
          {product.title}
        </h1>
        <h2 className="text-lg text-gray-700 ">{product.brand}</h2>
        <p className="text-lg font-normal">{product.description}</p>
        <p className="font-normal text-gray-500">In Stock: {product.stock}</p>
        <div className="flex-row flex py-2 items-center ">
          <h3>Quantity: </h3>
          <div className="flex ml-4  flex-row p-0 shadow-lg  w-fit items-center">
            <button
              className="p-2 primary"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(--quantity);
                  setPrice(product.price * quantity);
                }
              }}
            >
              <AiOutlineMinus color="white" />
            </button>
            <p className="px-4">{quantity}</p>
            <button
              className="p-2 primary"
              onClick={() => {
                if (quantity < product.stock) {
                  setQuantity(++quantity);
                  setPrice(product.price * quantity);
                }
              }}
            >
              <AiOutlinePlus color="white" />
            </button>
          </div>
        </div>
        <p className="font-bold text-lg p-2 text-gray-700 ">{`Price: $${price}`}</p>
        <button
          onClick={addToCart}
          className="font-bold bg-co p-2 bg-[#645cff] text-white uppercase text-lg hover:scale-110 duration-500"
        >
          Aggiungi Al carello
        </button>
        <a
          href="/"
          className="border-2 font-normal ml-10 p-3 hover:bg-gray-300 hover:border-0 duration-300 text-medium"
        >
          Torna Indietro
        </a>
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const r = await fetch(`https://dummyjson.com/products/${ctx.params.id}`);
  const res = await r.json();
  return {
    props: {
      product: res,
    },
  };
}
export default ProductPage;
