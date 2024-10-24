import React, { useState } from 'react'
import './Product.css'

function Products(props) {
  let [price,change] = useState(props.price);
  return (
    <figure className = "product">
      <img src={props.imgUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <h2 onClick={() => {
        change(price = 10);
      }}>Rs : {price}</h2>
    </figure>
  )
}

export default Products
