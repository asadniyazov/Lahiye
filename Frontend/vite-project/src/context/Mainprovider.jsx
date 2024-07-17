import React, { createContext, useState } from "react";
import Uselocalstorage from "../Hooks/Uselocalstorage";
export const Maincontext = createContext();
function Mainpovider({ children }) {
  const [isHiddenUl, setisHiddenUl] = useState(false);
  const [Watchlist, setWatchlist] = Uselocalstorage("watchlist", []);
  const [Wishlist, setWishlist] = Uselocalstorage("wishlist", []);

  function AddWatchlist(item) {
    const index = Watchlist.findIndex((x) => x._id === item._id);
    if (index === -1) {
      return setWatchlist([...Watchlist, { ...item }]);
    }
  }

  function RemoveWatchlist(item) {
    return setWatchlist([...Watchlist.filter((x) => x._id !== item._id)]);
  }

  function AddWishlist(item) {
    const index=Wishlist.findIndex((x)=>x._id===item._id)
    if (index===-1) {
        return setWishlist([...Wishlist,{...item}])
    }
}
function RemoveWishlist(item) {
  return setWishlist([...Wishlist.filter((x) => x._id !== item._id)]);
}
  function HiddenBtnClick() {
    setisHiddenUl(!isHiddenUl);
  }

  return (
    <Maincontext.Provider
      value={{ isHiddenUl,Wishlist,Watchlist, HiddenBtnClick, AddWatchlist, RemoveWatchlist ,RemoveWishlist,AddWishlist}}
    >
      {children}
    </Maincontext.Provider>
  );
}

export default Mainpovider;
