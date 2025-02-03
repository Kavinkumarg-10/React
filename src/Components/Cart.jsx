import React from 'react'
import './Cart.css'
function Cart({myCart}) {
  return (
    <>
    <div id='Cart_Main'>
    <div id='Cart_Main1'>
     <h1> This is my Cart</h1>
     </div>
     <div id='Cart_Main2'>
      {myCart.length === 0? (<div><h5>Your Cart is Empty now </h5></div>):
      (<div>{myCart.map((items) => (
          <div>
          <h3>Products : {items.name}</h3>
          <img src={items.source} alt=""id='cart_img' />
        </div>
      ))} </div>)  
      }
     </div>
     <div id='Cart_Main3'>
      <img src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png" alt="" />
     </div>
    </div>
    </>
  )
}

export default Cart