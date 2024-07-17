import React, { useContext } from 'react'
import { Maincontext } from '../../../context/Mainprovider'
import "./Watchlist.scss"

function Watchlist() {
  const {Watchlist,RemoveWatchlist}=useContext(Maincontext)
  return (
    <>
    <section className='Watchlist'>
    <div className='Watchlist_container'>
      <h1>Watchlist</h1>\
      <div className='Watchlist_boxs'>
        {Watchlist.map((x)=><>
            <div className='Watchlist_box'  key={x._id}>
               <img src={x.imgUrl} alt="" />
                <div>{x.name}</div>
                <button onClick={()=>RemoveWatchlist(x)}>Remove</button>
            </div>
        </>)}
      </div>
    </div>
    </section>
    </>
  )
}

export default Watchlist