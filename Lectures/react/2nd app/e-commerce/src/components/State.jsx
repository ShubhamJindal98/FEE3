import React from 'react'
import { useState } from 'react';

const State = () => {

  //use state returns 2 things = array containing initial value and function which executes the given task like increasing value of count in this scenerio. 
  
  //count is initialized here in array and its initial value is 0
  let [count,addCount] = useState(0);//passing initial value of count

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={() => addCount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default State;