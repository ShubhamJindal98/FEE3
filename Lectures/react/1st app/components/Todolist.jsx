import React from 'react'
import './Todolist.css'
const Todolist = () => {
    const todos= [
        {
            task:"go to gym",
            isCompleted: true
        },
        {
            task:"revise syllabus",
            isCompleted: true
        },
        {
            task:"go to university",
            isCompleted: true
        },
        {
            task:"Coding practice",
            isCompleted: true
        }
    ]
  return (
    <div className='todo'>
      <ul className='todolist'>
        {todos.map((todo)=>{
            return <li>{todo.task}
            <input type="checkbox" defaultChecked={todo.isCompleted} />
            </li>

        })}
      </ul>
    </div>
  )
}

export default Todolist
