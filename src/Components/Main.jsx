import React from 'react'
import './Main.css'
import'./Navigation.jsx'
import Navigation from './Navigation.jsx'
import Products from './Products.jsx'

function Main({setCartItems}) {
    const Product1 = {name : "Hoodie",source : "https://nobero.com/cdn/shop/files/11F45AAC-D3BD-4E89-AD15-098E60896A43.jpg?v=1698852939"}
    const Product2 = {name : "Shirt",source : "https://www.pngmart.com/files/23/Red-Shirt-PNG-Image.png"}
    const addToCart = (value) => {
setCartItems((prevData) => [...prevData,value])
    }
    return (
    <div>
      <div id="Main_container">
        <div id="products">
          <Navigation/>
          <Products props = {Product1} changeFunction={addToCart} />
          <br />
          <Products props = {Product2} changeFunction={addToCart}/>
          <br />
          <Products props = {Product1} changeFunction={addToCart}/>
          <br />
          <Products props = {Product2} changeFunction={addToCart}/>
          <br />
          <Products props = {Product1} changeFunction={addToCart}/>
          <br />
          <Products props = {Product2} changeFunction={addToCart}/>
          

        </div>
        <div id="main_image">
          <img src="https://static.vecteezy.com/system/resources/previews/044/846/982/non_2x/beautiful-emotional-woman-enjoying-shopping-on-isolated-transparent-background-free-png.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Main