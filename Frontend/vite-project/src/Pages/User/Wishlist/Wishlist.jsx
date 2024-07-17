import React, { useContext } from 'react'
import { Maincontext } from '../../../context/Mainprovider'
import "../Watchlist/Watchlist.scss"

function Wishlist() {
  const {Wishlist,RemoveWishlist}=useContext(Maincontext)
  return (
    <>
    <section className='Watchlist'>
    <div className='Watchlist_container'>
      <h1>Wishlist</h1>
      <div className='Watchlist_boxs'>
        {Wishlist.map((x)=><>
            <div className='Watchlist_box'  key={x._id}>
               <img src={x.imgUrl} alt="" />
                <div>{x.name}</div>
                <button onClick={()=>RemoveWishlist(x)}>Remove</button>
            </div>
        </>)}
      </div>
    </div>
    </section>
    </>
  )
}

export default Wishlist