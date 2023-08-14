import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Listtask = () => {

const { tasks } = useSelector (state=>state)

  return (
    <div>
        {

            tasks.map(el=> <Task  key ={el.id} el ={el}/>)
        }
    </div>
  )
}

export default Listtask