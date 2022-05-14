import React, { useLayoutEffect } from 'react';
import { FiShoppingBag } from 'react-icons/Fi';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../features/Cart/cartSlice';
function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const itemsNumber = 0;
  items.map((item) => {
    itemsNumber += item.quantity;
  });
  useLayoutEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('Cart'));
    if (localStorageItems) {
      dispatch(loadCart(localStorageItems));
    }
  }, []);
  return (
    <nav className="flex sticky top-0 z-10  justify-between primary p-2 items-center">
      <a href="/">Home</a>
      <div>
        <a className="p-2 hidden md:inline" href="/#automotive">
          automotive
        </a>
        <a className="p-2 hidden md:inline" href="/#motorcycle">
          motorcycle
        </a>
        <a className="p-2 hidden md:inline" href="/#sunglasses">
          sunglasses
        </a>
      </div>
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
