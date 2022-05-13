import React, { useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/Fi';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../features/Cart/cartSlice';
function Header() {
  const dispatch = useDispatch();
  const itemsNumber = useSelector((state) => state.cart.items.length);
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('Cart'));
    if (localStorageItems) {
      dispatch(loadCart(localStorageItems));
    }
  });
  return (
    <nav className="flex sticky top-0 z-10  justify-between primary p-2 items-center">
      <a href="/">Home</a>
      <div className="relative">
        <p className="rounded-full bg-white text-black  absolute text-[12px] right-0  bottom-0 px-[5px] font-bold">
          {itemsNumber}
        </p>
        <a href="/Cart">
          <FiShoppingBag size={35} />
        </a>
      </div>
    </nav>
  );
}

export default Header;
