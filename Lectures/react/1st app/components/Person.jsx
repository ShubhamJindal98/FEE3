import React from 'react'
import './Person.css'
const Person = ({name,field,age}) => {
  return (
    <div className='person'>
      <h1>Name: {name}</h1>
      <h3>Field: {field}</h3>
      <p>Age: {age}</p>
    </div>
  )
}

export default Person
