import React from 'react'
import Watchlist from '../Watchlist/Watchlist'
import Wishlist from '../Wishlist/Wishlist'
import Profilesection1 from './Profilesection1/Profilesection1'

function Profile() {
  return (
   <>
   <Profilesection1></Profilesection1>
   <Watchlist></Watchlist>
   <Wishlist></Wishlist>
   </>
  )
}

export default Profile