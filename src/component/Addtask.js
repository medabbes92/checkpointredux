import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './redux/actions'

const Addtask = () => {
    const [text, setText] = useState("")
    const handleChange =(e)=> 
{
    setText(e.target.value)
}

const dispatch = useDispatch();
const handleSubmit =(e) => 
{
    e.preventDefault()
    
    dispatch (add(text))
    text.trim() === "" ? alert ("write your todo") : add (text) ;
    setText("")  ;
    
}

  return (
    <div>
        <h1> To do App Redux</h1>
        <form onSubmit={handleSubmit}>
            <input  type='text' value={text} onChange={handleChange}/>
            <button type='submit'> Add Task </button>

        </form>
    </div>
  )
}

export default Addtask