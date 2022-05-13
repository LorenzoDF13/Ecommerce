import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {
  decreseQuantity,
  increaseQuantity,
  removeItem,
} from '../features/Cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Item({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="flex w-full max-w-[600px] mb-3">
      <img
        src={item.thumbnail}
        className=" w-[150px] md:w-[200px] object-contain"
      ></img>
      <div className=" w-full md:p-3">
        <h2 className="text-lg  font-bold">{item.title}</h2>
        <h4 className="text-slate-600">{`$${item.price * item.quantity}`}</h4>
        <button
          onClick={() => {
            dispatch(removeItem(item.id));
          }}
          className="text-[#645cff] tracking-widest py-3 hover:-translate-y-1 duration-500"
        >
          remove
        </button>
      </div>
      <div className="flex-col flex  items-center justify-center ">
        <button
          onClick={() => {
            if (item.quantity < item.stock) dispatch(increaseQuantity(item.id));
          }}
        >
          <BsChevronUp size={30} color="#645cff" />
        </button>
        <p className="text-md my-4">{item.quantity}</p>
        <button
          onClick={() => {
            if (item.quantity > 1) dispatch(decreseQuantity(item.id));
          }}
        >
          <BsChevronDown size={30} color="#645cff" />
        </button>
      </div>
    </article>
  );
}

export default Item;
