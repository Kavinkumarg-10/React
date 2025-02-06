import React from 'react'
import './Products.css'
import { Button } from '@mui/material'
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

                <Button variant="contained" onClick={()=>changeFunction(props)} id='btn'>Add To Cart</Button>
                
            </div>
        </div>
    </div>
  )
}

export default Products