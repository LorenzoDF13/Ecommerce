import React, { useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/Fi';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../features/Cart/cartSlice';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { auth } from '../Firebase';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { setAuth } from '../features/Cart/Auth/AuthSlice';
import { TailSpin } from 'react-loader-spinner';
function Header({ children }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth);
  const itemsNumber = 0;
  items.map((item) => {
    itemsNumber += item.quantity;
  });
  function login() {
    const google = new GoogleAuthProvider();
    signInWithPopup(auth, google)
      .then((res) => {
        dispatch(setAuth(res.user.toJSON()));
      })
      .catch((e) => console.log(e.message));
  }
  useEffect(() => {
    //signOut(auth);
    const cookiesItems = JSON.parse(getCookie('Cart') || null);
    if (cookiesItems) {
      dispatch(loadCart(cookiesItems));
    }
    onAuthStateChanged(auth, (u) => {
      if (u) {
        dispatch(setAuth(u.toJSON()));
      } else {
        dispatch(setAuth(null));
      }
    });
  }, []);
  return (
    <>
      <nav className="flex sticky top-0 z-10  justify-between primary p-2 items-center">
        <Link href="/" passHref scroll={false}>
          <a>Home</a>
        </Link>
        <div>
          <a href="/#automotive" className="p-2 hidden md:inline">
            automotive
          </a>
          <a href="/#motorcycle" className="p-2 hidden md:inline">
            motorcycle
          </a>
          <a href="#sunglasses" className="p-2 hidden md:inline">
            sunglasses
          </a>
        </div>
        <div className="relative flex flex-row">
          {user?.isLoading ? (
            <div className="mx-4 mt-1">
              <TailSpin color="white" height={30} width={30} />
            </div>
          ) : user ? (
            <img
              className="w-[35px] h-[35px] rounded-full mx-3"
              src={user.photoURL}
            />
          ) : (
            <button
              onClick={login}
              className="border-2 px-3 mx-3 rounded-lg hover:bg-white hover:text-black"
            >
              Entra
            </button>
          )}
          <p className="rounded-full bg-white text-black  absolute text-[12px] right-0  bottom-0 px-[5px] font-bold">
            {itemsNumber}
          </p>
          <Link href="/Cart" passHref>
            <a>
              <FiShoppingBag size={35} />
            </a>
          </Link>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}

export default Header;
