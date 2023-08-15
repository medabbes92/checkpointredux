import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Listtask = () => {

const { tasks , filter } = useSelector (state=>state)

  return (
    <div>
        { filter ? tasks.filter((el)=> el.isDone === false)
        .map ((el)=> <Task  key ={el.id} el ={el}/>)

            :tasks.map(el=> <Task  key ={el.id} el ={el}/>)
        }
    </div>
  )
}

export default Listtask