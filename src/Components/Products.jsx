import React from 'react'
import './Products.css'
function Products({props,changeFunction}) {
  return (
    <div>
        <div id='Products_Main'>
            <div id='Product_Des'>
                <h1>{props.name}</h1>
            </div>
            <div id='Product_Image'>
                <img src={props.source} alt="" />
            </div>
            <div id='Product_Select'>
                <button onClick={()=>changeFunction(props)}>Add to Cart</button>
                
            </div>
        </div>
    </div>
  )
}

export default Products