import React from 'react'

const LearnJSX = () => {
    const randnum=Math.floor(Math.random()*5+1);
  return (
    <div>
      <h1>Learning JSX</h1>
    <h2>Random: {Math.floor(Math.random()*5+1)}</h2>
    <h3>Random for 10: {randnum}</h3>
    </div>
  )
}

export default LearnJSX
