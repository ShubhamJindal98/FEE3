//ternary operator: (condition)? (statement 1): (statement 2)

import React from 'react'

const Ternary = () => {
    let randnum=Math.floor(Math.random()*5+1);
    let luckynum=3;
  return (
    <div>
    <h1>Number is : {randnum}</h1>
    {randnum === luckynum?
        <img src="#" alt="" />
        : <h1>Ooh!You have a bad luck..</h1>
    }
     </div>
  )
}

export default Ternary
